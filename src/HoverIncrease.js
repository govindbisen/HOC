import { useState } from "react";
import withCounter from "./withCounter.js"

function HoverIncrease(props) {
    const { counter, incrementCounter } = props;
    return (
      <div>
        <button onMouseOver={() => incrementCounter((counter) => counter + 1)}>
          Increase on hover
        </button>
        <p style={{ counter }}>
          Size of font in onMouseOver function: {counter}
        </p>
      </div>
    );
  }
  export default withCounter(HoverIncrease);

