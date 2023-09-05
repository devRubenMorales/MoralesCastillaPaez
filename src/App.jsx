import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Agents from './components/Agents/Agents'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
<Agents/>
    </>
  )
}

export default App
