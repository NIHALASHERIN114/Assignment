import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Add from './components/Add'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>

<Routes>
  <Route path='/a' element={<Add/>}/>
  <Route path='/h' element={<Home/>}/>
</Routes>
  
    </>
  )
}

export default App
