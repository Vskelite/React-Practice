import React, { useContext } from 'react'
import { UserContext, ThemeContext } from '../App'
const ChildC = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const user = useContext(UserContext);
    function handleTheme(){
       if(theme === 'Light'){
        setTheme('dark')
       }else{
        setTheme('Light')
       }
    }
  return (
    <div>
        <button onClick={handleTheme}>
            Change Theme
        </button>
        <h1 style={{color: 'orange'}}> Jai {user.name}</h1>
    </div>
  )
}

export default ChildC