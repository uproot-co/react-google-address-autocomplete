import { Address, AddressAutocompleteWrapper, AddressContainer, EditButton, Icon } from './AddressStyledComponents';
import { AddressAutoComplete, useAutoCompleteLazyQuery } from '../@types/generated-gql-typed-hooks';
import { InputProps } from '../Input/types';
import { useFormContext } from 'react-hook-form';
import Dropdown from './Dropdown';
import get from 'lodash/get';
import Input, { ConnectedInput, InputTypes } from '../Input';
import React, { useEffect, useRef, useState } from 'react';

type BaseProps = Pick<InputProps, 'styleType' | 'className' | 'placeholder'> & {
    name?: string;
    label?: string;
    required?: boolean;
    description?: string;
    selectedAddress?: string;
    toggle?: boolean;
};
interface ConnectedComponentProps extends BaseProps {
    isConnected: boolean;
    onPlaceSelected?: never;
    editIcon?: React.ReactNode;
    pinIcon?: React.ReactNode;
}
interface UnconnectedComponentProps extends BaseProps {
    isConnected?: never;
    onPlaceSelected: (place: AddressAutoComplete) => void;
    editIcon?: React.ReactNode;
    pinIcon?: React.ReactNode;
}

/**
 * AddressAutoComplete component is either 'connected' or 'not connected
 * - meaning within context of an existing React-Hook-Form component or outside.
 *
 * If it's NOT within context of a Form, an optional 'onPlaceSelected'
 * callback function prop is exposed. Otherwise, set the 'isConnected' prop to true
 *
 * See:
 *
 * - [Form](https://gitlab.com/emilg/uproot-ui/-/blob/master/src/components/shared/Form/Form.tsx#L25)
 * - [ConnectedInput](https://gitlab.com/emilg/uproot-ui/-/blob/master/src/components/shared/Input/ConnectedInput/ConnectedInput.tsx)
 *
 */
const AddressAutocompleteComponent: React.FC<ConnectedComponentProps | UnconnectedComponentProps> = ({
    name = 'auto_complete',
    label,
    isConnected,
    required = false,
    onPlaceSelected,
    selectedAddress,
    toggle = false,
    className,
    styleType,
    placeholder,
    description,
    editIcon = <div>&#x24E7;</div>,
    pinIcon,
}) => {
    const formContext = useFormContext();
    const [fetchAddresses, data] = useAutoCompleteLazyQuery();
    const [inputValue, setInputValue] = useState<string>('');
    const [addressPredictions, setAddressPredictions] = useState([]);
    const [isDropDownOpen, toggleDropDown] = useState<boolean>(false);
    const inputContainerRef = useRef<HTMLDivElement | null>(null);
    const connectedFieldValue = isConnected ? formContext.watch(name) : '';
    const [address, setAddress] = useState<string | undefined>(selectedAddress);

    const toggleEdit = (): any => {
        setAddress('');
        setInputValue('');
        isConnected && formContext.setValue(name, '');
    };

    //need to fix typescript
    const handleOnchange = (event: React.ChangeEvent<HTMLInputElement> | null, stringValue: string | null) => {
        if (event?.target) setInputValue((event?.target as HTMLInputElement).value);
        else if (stringValue) setInputValue(stringValue);

        Boolean(addressPredictions.length) && toggleDropDown(true);
    };

    const handleSelectAddress = (addressItem: AddressAutoComplete) => {
        const selectedAddress = addressItem.matchedAddress;
        setInputValue(selectedAddress);
        isConnected && formContext.setValue(name, selectedAddress);
        onPlaceSelected && onPlaceSelected(addressItem);
        setAddressPredictions([]);
        toggleDropDown(false);
        !isConnected && toggle && toggleEdit();
    };

    useEffect(() => {
        Boolean(inputValue) && fetchAddresses({ variables: { query: inputValue } });
    }, [inputValue, fetchAddresses]);

    useEffect(() => {
        const predictions = get(data, 'data.fetchAutoCompleteAddresses', []);
        Boolean(predictions.length) && setAddressPredictions(predictions);
    }, [data]);

    useEffect(() => {
        handleOnchange(null, connectedFieldValue);
        // eslint-disable-next-line
    }, [connectedFieldValue]);

    useEffect(() => {
        setAddress(selectedAddress);
    }, [selectedAddress]);

    return address ? (
        <AddressContainer>
            <Address>{selectedAddress}</Address>
            <EditButton onClick={() => toggleEdit()}>
                <Icon>{editIcon}</Icon>
            </EditButton>
        </AddressContainer>
    ) : (
        <AddressAutocompleteWrapper ref={inputContainerRef}>
            {isConnected ? (
                <ConnectedInput
                    className={className}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    styleType={styleType}
                    type={InputTypes.Search}
                    required={required}
                    description={description}
                />
            ) : (
                <Input
                    name={name}
                    className={className}
                    styleType={styleType}
                    label={label}
                    placeholder={placeholder}
                    handleChange={(e) => handleOnchange(e, null)}
                    value={inputValue}
                    required={required}
                    description={description}
                />
            )}
            {isDropDownOpen ? (
                <Dropdown
                    predictedAddresses={addressPredictions}
                    boundsReference={inputContainerRef}
                    onSelect={handleSelectAddress}
                    onClickOutside={() => toggleDropDown(false)}
                    pinIcon={pinIcon}
                />
            ) : null}
        </AddressAutocompleteWrapper>
    );
};

export default AddressAutocompleteComponent;
