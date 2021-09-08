import React from 'react'

import ReactGoogleAddressAutocomplete from 'react-google-address-autocomplete'
import 'react-google-address-autocomplete/dist/index.css'
import styled from 'styled-components'

const fetchPredictions = () => {
  return [
    { matchedAddress: '123 Main Street, Anytown, CO, USA' },
    { matchedAddress: '456 Back Alley, Anothertown, UT, USA' },
    { matchedAddress: '789 Route 66, Outtahere, OK, USA' },
    { matchedAddress: 'Somewhere Over the Rainbow' },
    { matchedAddress: '157 Riverside Avenue, Champaign, IL' },
    { matchedAddress: '2120 South Michigan Avenue, London, UK' },
    { matchedAddress: '57th Street, Longbranch, NJ' }
  ]
}

const onClickSubmitButton = (address) => {
  console.log(`Address submitted: ${address}`)
}

const AddressAutocompleteComponent = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
  margin-top: 30vh;
`

const userAddress = '1 Main St., My Town, USA (address provided by user)'

const App = () => {
  return (
    <AddressAutocompleteComponent>
      <ReactGoogleAddressAutocomplete
        fetchPredictions={fetchPredictions}
        onClickSubmitButton={onClickSubmitButton}
        displayDefaultSubmitButton={true}
        useDefaultToggleIcon={true}
        selectedAddress={userAddress}
        inputPlaceholder='Search by address, zipcode, city or state'
      />
    </AddressAutocompleteComponent>
  )
}

export default App
