import React, { useState } from 'react'

import GoogleAddressAutocompleteReact from 'google-address-autocomplete-react'
import 'google-address-autocomplete-react/dist/index.css'

const App = () => {
  const [selectedAddress, setSelectedAddress] = useState()

  const onAddressSelected = (address) => {
    setSelectedAddress(address)
  }

  const onClickSubmitButton = () => {
    console.log(`Address submitted: ${selectedAddress}`)
  }

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

  const userAddress = '1 Main St., My Town, USA (address provided by user)'

  return (
    <React.Fragment>
      <h1 style={{ textAlign: 'center' }}>
        React Google Address Autocomplete Examples
      </h1>
      <h3 style={{ fontSize: '15px', textAlign: 'center' }}>
        For these examples, clicking "Submit" will console.log the selected
        address
      </h3>

      <h2
        style={{
          fontSize: '1.2rem',
          textAlign: 'center',
          marginTop: '18vh'
        }}
      >
        Example using default input, toggle, and submit button, with default
        styles:
      </h2>

      <div
        style={{
          width: '100%',
          maxWidth: '600px',
          margin: '10vh auto'
        }}
      >
        <GoogleAddressAutocompleteReact
          fetchPredictions={fetchPredictions}
          onAddressSelected={onAddressSelected}
          useDefaultToggleIcon={true}
          inputPlaceholder='Search by address, zipcode, city or state'
        />
        <button onSubmit={onClickSubmitButton}>Submit</button>
      </div>
      <h2
        style={{
          fontSize: '1.2rem',
          textAlign: 'center',
          marginTop: '18vh'
        }}
      >
        Example using default input, toggle, and submit button, passing in
        custom style options:
      </h2>
      <div
        style={{
          width: '100%',
          maxWidth: '600px',
          margin: 'auto',
          marginTop: '10vh'
        }}
      >
        <GoogleAddressAutocompleteReact
          submitButtonStyles={{
            background: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontFamily: 'Baskerville',
            fontSize: '1.2rem'
          }}
          inputStyles={{
            fontFamily: 'Baskerville',
            fontSize: '1rem'
          }}
          addressDropdownStyles={{
            fontFamily: 'Baskerville'
          }}
          addressDropdownOnHoverStyles={{
            backgroundColor: 'grey',
            fontWeight: 'bold'
          }}
          fetchPredictions={fetchPredictions}
          useDefaultToggleIcon={true}
          initialAddress={userAddress}
          inputPlaceholder='Search by address, zipcode, city or state'
        />
      </div>
    </React.Fragment>
  )
}

export default App
