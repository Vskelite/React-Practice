import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
 //syntax:

  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  
  // VARIATION : 1

  // useEffect(() => {
  //   alert("This will execute on each render");
  // })
  
  function handleClick(){
    setCount(count + 1);
  }

  function handleClick2(){
    setCount2(count2 + 1);
  }

  // VARIATION : 2

  // useEffect(() => {
  //   alert("This will execute only on first render")
  // }, [])
  
  // VARIATION : 3

  // useEffect(() => {
  //  alert("This will execute each time when count increments")
  // }, [count])

  //VARIATION : 4
  //  useEffect(() => {
  //    alert("This will execute when count/count2 increments")
  //  }, [count, count2])

  // VARIATION : 5
   useEffect(() => {
     alert("This will execute when count increments")
   
     return () => {
       alert("This will execute when the count is unmounted")
     }
   }, [count])
   
   

  return (
    <div>
       <h1>Count : {count}</h1>
       <button onClick={handleClick}>Increment</button>
       <br />
       <br />
       <h1>Count2 : {count2}</h1>
       <button onClick={handleClick2}>Increment</button>
    </div>
  )
}

export default App
