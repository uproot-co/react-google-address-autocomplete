import styled from 'styled-components';

const addressTextColor = '#0c6055'; //--ion-color-primary
const editButtonColor = '#fff'; //--ion-color-tertiary
const iconColor = '#929292;';

const Address = styled.p`
    font-weight: bold;
    text-transform: capitalize;
    font-size: 0.875rem;
    padding-top: 0.125rem;
    margin-right: 0.3125rem;
    height: 1.875rem;
    line-height: 2em;
    white-space: nowrap;

    @media only screen and (max-width: $mobile-breakpoint) {
        font-size: 0.8125rem;
    }

    &-mobile {
        font-size: 0.8125rem;
    }
`;

const AddressAutocompleteWrapper = styled.div`
    width: 100%;
`;
const AddressContainer = styled.div`
    display: inline-flex;
    color: ${(props) => props.addressTextColor || addressTextColor};
`;

const EditButton = styled.button`
    background: ${(props) => props.editButtonColor || editButtonColor};
`;

const Icon = styled.div`
    color: ${(props) => props.iconColor || iconColor};
    font-size: 0.9rem;
    font-weight: bold;
`;

export { Address, AddressAutocompleteWrapper, AddressContainer, EditButton, Icon };
