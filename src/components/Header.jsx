import React, { useState } from 'react';
const Header = () => {
  const [num, setNum] = useState(0)
  
    const Increment = () => {
      setNum(num + 10)
    }
  
    // const Decrement = () => {
    //   setNum(num - 9)
    //   if (num < 0){
    //     return 0;
    //   }
      
    // }
    const Decrement = () => {
      // Use the state updater function to get the previous state value
      setNum(prevNum => {
        const nextNum = prevNum - 9; // Calculate the next value
    
        // Check the calculated next value
        if (nextNum < 0) {
          return 0; // If it's less than 0, set the state to 0
        }
    
        return nextNum; // Otherwise, set the state to the calculated value
      });
    }
   const [username, setUsername] = useState("")
  
    const submitHandler = (e) => {
      e.preventDefault();
      console.log(username);
      setUsername("")
    }
  return (
    <>
    <div className='sections'>
     <h3 className="text-3xl font-bold " >Number is: {num}</h3>
     <button className='active:scale-90'onClick={Increment}>Increment</button>
     <button className='active:scale-90'onClick={Decrement}>Decrement</button>
     <div>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
      <input value={username} 
        onChange={(e)=>{
        setUsername(e.target.value)
        }}
          className="px-8 py-8 rounded text-xl m-5" 
          type="text" placeholder='Enter The Text' />
          <button className='active:scale-90'>Submit</button>
        </form>
     </div>
    </div>
    <div>
    </div>
    </>
  )
}

export default Header
