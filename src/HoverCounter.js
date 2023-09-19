import { useState } from "react";

function HoverCounter(props) {
    const [count, setCount] = useState(0);
    return (
      <div>
        {/*If the user hovers over this button, then increment 'count'*/}
        <button onMouseOver={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <p>
          Clicked: {count}
        </p>
      </div>
    );
  }
  export default HoverCounter;