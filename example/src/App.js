import React from 'react'

import ReactGoogleAddressAutocomplete from 'react-google-address-autocomplete'
import 'react-google-address-autocomplete/dist/index.css'
import styles from './App.module.css'

const fetchPredictions = () => {
  return [
    { matchedAddress: '123 Main Street, Anytown, CO, USA' },
    { matchedAddress: '456 Back Alley, Anothertown, UT, USA' },
    { matchedAddress: '789 Route 66, Outtahere, OK, USA' }
  ]
}

const onClickSubmitButton = () => {
  console.log('Submit button clicked')
}

const App = () => {
  return (
    <div className={styles.addressAutocomplete}>
      <ReactGoogleAddressAutocomplete
        fetchPredictions={fetchPredictions}
        onClickSubmitButton={onClickSubmitButton}
        displayDefaultSubmitButton={true}
        useDefaultToggleIcon={true}
      />
    </div>
  )
}

export default App
