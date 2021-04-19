import styled from 'styled-components';

const dropdownBackgroundColor = '#fefefe'; //--ion-color-dark-contrast
const dropdownBackgroundOnHover = '#84aea9'; //--ion-color-primary-low-opacity
const dropdownTextColor = '#383a3e'; //--ion-color-dark-tint
const dropdownTextOnHover = 'rgb: 255, 255, 255'; //--ion-color-primary-contrast
const dropdownBorderColor = '#e6e6e6'; //--ion-color-light-tint

const Address = styled.span`
    position: relative;
    white-space: nowrap;
    flex-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: calc(100% - 30px);
`;

const AddressItem = styled.div`
    border-bottom: 1px solid ${dropdownBorderColor};
    color: ${dropdownTextColor};
    padding: 8px 5px;
    font-size: 0.88rem;
    display: inline-flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    cursor: pointer;

    &:hover {
        background-color: ${dropdownBackgroundOnHover};
        color: ${dropdownTextOnHover};
    }
`;

const DropdownContainer = styled.div`
    position: absolute;
    background-color: ${dropdownBackgroundColor};
    border: 1px solid ${dropdownBorderColor};
    border-radius: 0 0 3px 3px;
    width: 100%;
    min-width: 250px;
`;

const PinIcon = styled.div`
    margin-right: 5px;
    font-size: 1.4rem;
`;

export { Address, AddressItem, DropdownContainer, PinIcon };
