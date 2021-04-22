import React from 'react'
import { ApolloProvider } from '@apollo/client';
import AddressAutocompleteComponent from './AddressAutocompleteComponent';
import { InputProps } from './Input/types';
import { AddressAutoComplete } from '../@types/generated-gql-typed-hooks';

type BaseProps = Pick<InputProps, 'styleType' | 'className' | 'placeholder'> & {
    name?: string;
    label?: string;
    required?: boolean;
    description?: string;
    selectedAddress?: string;
    toggle?: boolean;
    apolloClient?: any;
    editIcon?: React.ReactNode;
    pinIcon?: React.ReactNode;
};

export interface ConnectedComponentProps extends BaseProps {
    isConnected: boolean;
    onPlaceSelected?: never;
}
export interface UnconnectedComponentProps extends BaseProps {
    isConnected?: never;
    onPlaceSelected: (place: AddressAutoComplete) => void;
}


const AddressAutocomplete: React.FC<ConnectedComponentProps | UnconnectedComponentProps>  = ({apolloClient, ...rest}) => (
            <ApolloProvider client={apolloClient}>
                <AddressAutocompleteComponent {...rest}/>
            </ApolloProvider>
);

export default AddressAutocomplete;
