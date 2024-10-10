
import { useState } from 'react'
import './App.css'
import Card from './components/card';



function App() {
  
const [name, setName] = useState('');
  return (
   <div className='content'>
      <Card title= "Card 1" name ={name} setName = {setName}/>
      <p>I am inside parebt and value is:{name}</p>
      <Card title="Card 2" name = {name} setName = {setName}/>
   </div>
  )
}

export default App
