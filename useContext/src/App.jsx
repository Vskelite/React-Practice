import { createContext, useState } from 'react'

import './App.css'
import ChildA from './components/ChildA'

const UserContext = createContext();
const ThemeContext = createContext();

function App() {
  // step 1: craete context
  
  // step 2 : provide context

  // step 3: pass the data

  const [user,setUser] = useState({name:"Ganesh"});
  const [theme, setTheme]  = useState({theme:"Light"});

  return (
    <div>
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={{theme, setTheme}}>
         <div id='container' style={{backgroundColor: theme === 'Light' ? "beige": "grey"}}>
         <ChildA />
         </div>
        </ThemeContext.Provider>
      </UserContext.Provider>
      
    </div>
  )
}

export default App
export {UserContext, ThemeContext}
