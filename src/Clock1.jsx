import React, { useState, useEffect } from "react";

export default function Clock1() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);

    return () => {
      console.log('do tomorrow');
      clearInterval(key);
    };
  }, [])


  return (
    <p>{counter} seconds have passed.</p>
  );
}