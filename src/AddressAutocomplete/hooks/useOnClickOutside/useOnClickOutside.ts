import React from 'react';

type PossibleEvent = MouseEvent | TouchEvent;
type Handler = (event: PossibleEvent) => void;
type Ref = React.RefObject<HTMLElement> | null;

const isWithinRef = (refs: Ref[], event: PossibleEvent) => {
    if (!refs || !refs.length || refs.some((ref) => ref?.current?.contains(event.target as Node))) {
        return false;
    }

    return true;
};

const useOnClickOutside = (handler: Handler | undefined, refs: Ref[]) => {
    const refNodes = React.useRef<Ref[]>(refs);

    React.useEffect(() => {
        const listener = handler
            ? (event: PossibleEvent) => {
                  if (isWithinRef(refNodes.current, event)) {
                      handler(event);
                  }
              }
            : undefined;

        if (listener) {
            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);
        }

        return () => {
            if (listener) {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            }
        };
    }, [refNodes, handler]);
};

export default useOnClickOutside;
