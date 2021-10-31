import React from 'react'

const isWithinRef = (refs, event) => {
  if (
    !refs ||
    !refs.length ||
    refs.some((ref) => ref?.current?.contains(event.target))
  ) {
    return false
  }

  return true
}

const useOnClickOutside = (handler, refs) => {
  const refNodes = React.useRef(refs)

  React.useEffect(() => {
    const listener = handler
      ? (event) => {
          if (isWithinRef(refNodes.current, event)) {
            handler(event)
          }
        }
      : undefined

    if (listener) {
      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)
    }

    return () => {
      if (listener) {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    }
  }, [refNodes, handler])
}

export default useOnClickOutside
