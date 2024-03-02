import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Image from './image';

const CountdownApp = () => {
  const [count, setCount] = useState(100);
  const [counting, setcounting] = useState(true);

  useEffect(() => {

    if (counting) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
  
      return () => clearInterval(intervalId);}
  }, [counting]);
  

  const StopCountdown = () => {
    setcounting(false);
  };

  const StartCountdown = () => {
    setcounting(true);
  };

  return (
    <div>
      <h1 className='text-[60px]'	>{count}</h1>
      <button onClick={StopCountdown}>Stop Countdown</button>
      <button onClick={StartCountdown}>Start Countdown</button>

    </div>

  );
};

export default CountdownApp;