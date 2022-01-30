# google-address-autocomplete-react

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-google-address-autocomplete.svg)](https://www.npmjs.com/package/react-google-address-autocomplete) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install google-address-autocomplete-react
```

## Usage

```tsx
import React from 'react'
import GoogleAddressAutocompleteReact from 'google-address-autocomplete-react/dist';

const Example = () => {

  const fetchPredictions = () => {
    return [
      { matchedAddress: '123 Main Street, Anytown, CO, USA' },
      { matchedAddress: '456 Back Alley, Anothertown, UT, USA' },
      { matchedAddress: '789 Route 66, Outtahere, OK, USA' },
    ]
  }

  const onAddressSelected = (address) => console.log(address)

  return (
    <GoogleAddressAutocompleteReact
          fetchPredictions={fetchPredictions}
          onAddressSelected={onAddressSelected}
        />
  )
  }

Required Props:

  fetchPredictions:  (function) Function that accepts a string and returns an array of objects, each with a "matchedAddress" property
  onAddressSelected: (function) -- Function that accepts the selected address (string)


Optional Props:

  CustomInput
  customInputProps (object)
  onChangeName (string) -- Use to specify a custom input's onChange function only if that function is called something other than onChange (for example, an Ionic input's onChangeName is "onIonChange")
  userOnInputChange (function) -- Any additional functionality that an input change needs to trigger
  inputPlaceholder (string)
  inputAutoFocus (boolean) -- Default value is "true"
  toggleIcon
  userOnToggle (function) -- Any additional functionality that should be triggered when the toggle icon is clicked
  useDefaultToggleIcon (boolean) -- Default value is "false"
  initialAddress(string) -- Can be used to initiate the component with an address.
  pinIcon,
  inputStyles (object)
  addressDropdownStyles (object)
  addressDropdownOnHoverStyles  (object)
  inputErrorMessage (string) -- Defaults value is 'Please enter an address'
```

## License

MIT © [Uproot](https://github.com/uproot-co)
