import { useState } from 'react'
import './App.css'
import Loginbtn from './components/Loginbtn';
import Logoutbtn from './components/Logoutbtn';

function App() {
  const [isLoggedIn, setButton] = useState(true)

  return (
   <div>
     {isLoggedIn ? <Logoutbtn/> : <Loginbtn/>}
   </div>
  )
}

export default App
