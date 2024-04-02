import {useEffect} from 'react';

export const useKeyboardShortcut = (checkShortcut: (e: KeyboardEvent) => boolean, callback: () => void) => {
  const handler = (e: KeyboardEvent) => {
    if (checkShortcut(e)) {
      e.preventDefault();
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handler);
    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, [callback])
};