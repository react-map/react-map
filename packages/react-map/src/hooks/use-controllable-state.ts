import { useCallback, useEffect, useRef, useState } from 'react';

interface UseControllableStateProps<T> {
  value?: T | undefined;
  onChange?: ((value: T) => void) | undefined;
  defaultValue: T;
}

export function useControllableState<T>({
  value: externalValue,
  onChange,
  defaultValue
}: UseControllableStateProps<T>) {
  const lastIsControlled = useRef<boolean>(externalValue !== undefined);
  const [value, setValue] = useState(externalValue ?? defaultValue);

  const handleChange = useCallback(
    (value: T) => {
      setValue(value);
      onChange?.(value);
    },
    [onChange]
  );

  useEffect(() => {
    const isControlled = externalValue !== undefined;
    if (lastIsControlled.current !== isControlled) {
      console.warn(`[@gurgelio/react-map]: state changed from controlled to uncontrolled or vice versa.
        This will cause the state to be inconsistent. Use null instead of undefined to represent an empty state`);
      lastIsControlled.current = isControlled;
    }

    if (isControlled) setValue(externalValue);
  }, [externalValue]);

  return [value, handleChange] as const;
}
