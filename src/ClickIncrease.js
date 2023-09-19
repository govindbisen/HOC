import React, { useState } from 'react';
import withCounter from "./withCounter.js"


function ClickIncrease(props) {
    const { counter, incrementCounter } = props;
    return (
      <div>
          <button onClick={() => incrementCounter()}>Increment counter</button> 
          <p> Value of 'counter' in HoverIncrease/ClickIncrease: {counter}</p>
      </div>
    );
  }
  export default withCounter(ClickIncrease);