import React, { useEffect, useRef, useState } from 'react';

type TimerReturnProps = {
  paused: boolean;
  counter: number;
  setPaused: React.Dispatch<React.SetStateAction<boolean>>;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

/**
 * The `useTimer` custom hook in TypeScript implements a countdown timer functionality with pause and
 * resume capabilities.
 * @returns The `useTimer` custom hook is returning an object with the following properties:
 * - `paused`: a boolean value indicating whether the timer is paused or not.
 * - `counter`: a number representing the current count of the timer in milliseconds.
 * - `setPaused`: a function that can be used to update the `paused` state.
 * - `setCounter`: a function that can be used to reset the counter or set the counter`
 */
const useTimer = (): TimerReturnProps => {
  const [counter, setCounter] = useState(0);
  const [paused, setPaused] = useState<boolean>(true);
  const timer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (!paused) {
      timer.current = setInterval(() => {
        setCounter((prev) => prev - 100);
      }, 100);
    } else {
      clearInterval(timer.current);
    }

    return () => clearInterval(timer.current);
  }, [paused]);

  return { paused, counter, setPaused, setCounter };
};

export default useTimer;
