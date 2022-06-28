import React from 'react'
import {useState} from 'react'

const Content = () => {
    //Array desstruction
    //first value 'name' is the current state  and 2nd element is the setting the state
    //useState() contain the default or original state when the component load
    const [name, setName] = useState('Reda');
    const [count, setCount] = useState(0);
    //we use const to never reassign the name directly 
    //, we never need to directly modify the state of the component
    // but we use setName to change the state 
    const handleNameChange = () => {
        const names = ["Reda", "Malek", "Talia"];
        const int = Math.floor(Math.random() * 3);
        // return names[int];
        setName(names[int]);
      }
      const handleClick = () => {
          setCount(count + 1);
          console.log(`button clicked ${count} times`);
      }
      
      const handleClick2 = (name) => {
          console.log(`${name} was clicked`);
      }
      
      const handleClick3 = (e) => {
        //   console.log(e);
          console.log(e.target.innerText);
      }

//Alt + Shift + arrow Down == Copy and past
    return (
        <main>
            {/* <p onDoubleClick = {handleClick}> Hello {handleNameChange()}</p> */}
            <p onDoubleClick = {handleClick}> Hello {name}</p>
            <button onClick={handleNameChange}>Change Name </button>
            {/* <button onClick={() => {handleClick2('Reda')}}>Click Me </button> */}
            <button onClick={handleClick}>Click Me </button>
            <button onClick={(e) => handleClick3(e)}>Click Me </button>
        </main>
    )
}

export default Content
