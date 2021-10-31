import styled from 'styled-components'

const Address = styled.div`
  white-space: nowrap;
  flex-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(100% - 30px);
`

const AddressAutocompleteWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`

const AddressDropdownContainer = styled.div`
  position: absolute;
  width: 100%;
  background-color: #fefefe;
  border: 1px solid #e6e6e6;
  border-radius: 0 0 3px 3px;
  min-width: 250px;
`

const AddressDropdownDiv = styled.div((props) => ({
  borderBottom: '1px solid #e6e6e6',
  color: '#383a3e',
  padding: '8px 5px',
  fontSize: '0.88rem',
  display: 'inline-flex',
  justifyContent: 'left',
  alignItems: 'center',
  width: '100%',
  cursor: 'pointer',
  ':hover': {
    background: '#84aea9',
    color: '#fff',
    ...props.userDefinedOnHoverStyles
  }
}))

const Button = styled.button`
  font-size: 1.3rem;
  padding: 0.5rem 3rem;
  height: auto;
  margin-left: 5px;
  opacity: ${(props) => (props.isDisabled ? 0.8 : 1)};
`

const DefaultInputDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const DefaultInputFieldWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  border: none;
  padding: 0;
  bottom: 0;
`

const Icon = styled.div`
  margin-right: 5px;
  font-size: 1.4rem;
`

const InputFieldWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: ${(props) =>
    props.usingCustomInput ? 'none' : '1px solid black'};
`

const InputWrapper = styled.div`
  width: ${(props) =>
    props.toggleIcon || props.useDefaultToggleIcon ? '90%' : '100%'};
`

const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding-start: 0.5rem;
  padding-top: 0.65rem;
  padding-bottom: 0.5rem;
  position: absolute;
  bottom: 0;
`

const ToggleButton = styled.button`
  font-size: 1.3rem;
  border: none;
  background: none;
`

const ToggleIconDiv = styled.div`
  position: relative;
  height: 100%;
  margin-top: 50%;
  transform: translate(-50%);
  text-align: center;
  z-index: 1000;
  cursor: pointer;
`

export {
  Address,
  AddressAutocompleteWrapper,
  AddressDropdownContainer,
  AddressDropdownDiv,
  Button,
  DefaultInputDiv,
  DefaultInputFieldWrapper,
  Icon,
  InputFieldWrapper,
  InputWrapper,
  StyledInput,
  ToggleButton,
  ToggleIconDiv
}
