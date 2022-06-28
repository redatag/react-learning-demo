import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ["Reda", "Malek", "Talia"];
        const int = Math.floor(Math.random() * 3);
        return names[int];
      }
      const handleClick = () => {
          console.log('clicked');
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
            <p onDoubleClick = {handleClick}> Hello {handleNameChange()}</p>
            <button onClick={handleClick}>Click Me </button>
            <button onClick={() => {handleClick2('Reda')}}>Click Me </button>
            <button onClick={(e) => handleClick3(e)}>Click Me </button>
        </main>
    )
}

export default Content
