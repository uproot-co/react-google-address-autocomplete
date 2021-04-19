import styled from 'styled-components';

const Address = styled.span`
  white-space: nowrap;
  flex-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(100% - 30px);
`;

const AddressItem = styled.div`
  border-bottom: 1px solid var(--ion-color-light-tint);
  color: var(--ion-color-dark-tint);
  padding: 8px 5px;
  font-size: 0.88rem;
  display: inline-flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: var(--ion-color-primary-low-opacity);
    color: var(--ion-color-primary-contrast);
  }
`;

const DropdownContainer = styled.div`
  position: absolute;
  background-color: var(--ion-color-dark-contrast);
  border: 1px solid var(--ion-color-light-tint);
  border-radius: 0 0 3px 3px;
  width: 100%;
  min-width: 250px;
`;

const PinIcon = styled.div`
  margin-right: 5px;
  font-size: 1.4rem;
`;

export { Address, AddressItem, DropdownContainer, PinIcon };
