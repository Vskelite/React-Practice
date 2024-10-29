import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import About from './components/About.jsx';
import Pricing from './components/Pricing.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element: 
    <div>
      <Navbar/>
      <Home/>
    </div>
  },
  {
    path:'/about',
    element: 
    <div>
      <Navbar/>
      <About/>
    </div>
  },
  {
    path:'/pricing',
    element: 
    <div>
      <Navbar/>
      <Pricing/>
    </div>
  },
  {
    path:'/pricing',
    element: 
    <div>
      <Navbar/>
      <Dashboard/>
    </div>
  }
]);

function App() {

  return (
    <div>
      <h1>Jai Ganesh</h1>
    </div>
  )
}

export default App
