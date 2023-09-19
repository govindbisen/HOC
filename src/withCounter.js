import React, { useState } from 'react'

const UpdatedComponent  = (OriginalComponent)=>{
    const [counter, setCounter] = useState(10);
    function NewComponent(props){
        return <OriginalComponent  counter={counter} 
        incrementCounter={() => setCounter((counter) => counter + 1)}/>
    }
    return NewComponent;
};

export default UpdatedComponent;