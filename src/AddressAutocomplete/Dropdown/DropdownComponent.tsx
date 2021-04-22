import { Address, AddressItem, DropdownContainer, PinIcon } from './DropdownStyledComponents';
import { AddressAutoComplete } from '../../@types/generated-gql-typed-hooks';
import _reverse from 'lodash/reverse';
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import useOnClickOutside from '../../hooks/useOnClickOutside';

type Props = {
    predictedAddresses: { [key: string]: string }[];
    boundsReference: React.MutableRefObject<Element | null>;
    onSelect: (place: AddressAutoComplete) => void;
    onClickOutside?: () => void;
    pinIcon?: React.ReactNode;
};

const DropdownComponent: React.FC<Props> = ({ predictedAddresses = [], boundsReference, onSelect, onClickOutside: handleClickOutside, pinIcon }) => {
    const domRect = boundsReference.current?.getBoundingClientRect();
    const dropDownDivRef = useRef<HTMLDivElement | null>(null);

    useOnClickOutside(handleClickOutside, [dropDownDivRef]);

    let [xPosition, yPosition] = [0, 0]; // X & Y coordinates in which to position the dropdown

    let refWidth = 0,
        refHeight = 0,
        showAtBottom = true,
        addresses = predictedAddresses;

    if (domRect) {
        const { x, y, width, height } = domRect;
        const dropdownInitialHeight = 200;

        xPosition = x;
        yPosition = y;
        refWidth = width;
        refHeight = height;

        // Check how close the component bounds are from the bottom of the page,
        // to determine the direction in which the dropdown should render, and order of matched addresses
        showAtBottom = window.innerHeight - (yPosition + height) >= dropdownInitialHeight;
        addresses = !showAtBottom ? _reverse([...addresses]) : addresses;
    }

    return ReactDOM.createPortal(
        <DropdownContainer
            // Adding styles inline here only because values are received as props
            style={{
                ...(showAtBottom ? { top: `${yPosition + refHeight}px` } : { bottom: `${window.innerHeight - yPosition}px` }),
                left: `${xPosition}px`,
                maxWidth: `${refWidth}px`,
            }}
            ref={dropDownDivRef}
        >
            {addresses.map((item: any, index) => {
                return (
                    <AddressItem key={index}>
                        <PinIcon>{pinIcon}</PinIcon>
                        <Address onClick={() => onSelect(item)}>{item.matchedAddress}</Address>
                        <hr />
                    </AddressItem>
                );
            })}
        </DropdownContainer>,
        // @ts-ignore
        document.getElementById('root')
    );
};

export default DropdownComponent;