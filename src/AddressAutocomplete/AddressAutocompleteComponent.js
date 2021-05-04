import React from 'react'

import Input from './Input/Input'
import AddressDropdown from './AddressDropdown/AddressDropdown'
import SubmitButton from './SubmitButton'

const AddressAutocomplete = ({ customInput, customSubmitButton }) => {
  return (
    <form>
      {customInput || <Input />}
      {customSubmitButton || <SubmitButton />}
      <AddressDropdown />
    </form>
  )
}

export default AddressAutocomplete
