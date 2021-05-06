import React from 'react'

// required props:  handleOnChange, handleOnSubmit(?)
// optional props: placeholder, autoFocus, disabled, error(?)
// to style --

const Input = ({
  placeholder,
  value = '',
  autoFocus = true,
  handleOnChange,
  error
}) => {
  return (
    <input
      type='text'
      value={value}
      autoFocus={autoFocus || true}
      // disabled={isLoading}
      placeholder='Search officials by address (street, city, state)'
      name='search_address'
      error={error}
      onChange={(e) => handleOnChange(e.target.value)}
    />
  )
}

export default Input

// const Input = ({
//   placeholder,
//   value = '',
//   autoFocus = true,
//   handleOnChange,
//   handleOnSubmit,
//   error
// }) => {
//   const onChange = (e) => handleOnChange(e)

//   return (
//     <React.Fragment>
//       <input
//         type='text'
//         name='search_address'
//         autoComplete='off'
//         value={value}
//         placeholder={placeholder}
//         autoFocus={autoFocus}
//         onChange={onChange}
//         onSubmit={handleOnSubmit}
//         error={error}
//       />
//     </React.Fragment>
//   )
// }
