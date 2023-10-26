import { MutableRefObject, useEffect, useRef } from 'react';

export const useOutsideClick = (callback: () => void) => {
  const ref: MutableRefObject<HTMLElement | undefined> = useRef();

  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref]);

  return ref;
};
