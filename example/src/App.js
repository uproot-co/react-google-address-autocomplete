import React from 'react'

import ReactGoogleAddressAutocomplete from 'google-address-autocomplete-react'

const App = () => {
  var selectedAddress;

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
        google-address-autocomplete-react Examples
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
        Example with default styles and default toggle:
      </h2>
      <div style={{
          width: '100%',
          maxWidth: '600px',
          margin: '10vh auto',
          minHeight: '30px',
          display: 'flex'}}>
        <div style={{width: '80%', paddingRight: '5px'}}>
        <ReactGoogleAddressAutocomplete
          fetchPredictions={fetchPredictions}
          useDefaultToggleIcon={true}
          inputPlaceholder='Search by address, zipcode, city or state'
          onAddressSelected={(address) => selectedAddress=address}
        />
      </div>
      <button onClick={onClickSubmitButton} style={{display: 'inline', width: '20%', justifyContent: 'center', alignContent: 'center'}}>Submit</button>
      </div>

      
      <h2
        style={{
          fontSize: '1.2rem',
          textAlign: 'center',
          marginTop: '18vh'
        }}
      >
        Example passing in custom styles, an initial selectedAddress and custom toggleIcon:
      </h2>
      
      <div style={{
          width: '100%',
          maxWidth: '600px',
          margin: '10vh auto',
          display: 'flex',
          minHeight: '30px'}}>
        <div style={{width: '80%', paddingRight: '5px'}}>
        <ReactGoogleAddressAutocomplete
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
          toggleIcon="X"
          selectedAddress={userAddress}
          inputPlaceholder='Search by address, zipcode, city or state'
          onAddressSelected={(address) => selectedAddress=address}

        />
        </div>
        <button onClick={onClickSubmitButton} style={{width: '20%'}}>Submit</button>
      </div>
    </React.Fragment>
  )
}

export default App
