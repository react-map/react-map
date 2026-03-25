import { useEffect, useState } from 'react';

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const abortController = new AbortController();

    window.addEventListener(
      'mousemove',
      (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
      },
      {
        signal: abortController.signal
      }
    );

    return () => abortController.abort();
  }, []);

  return position;
}
