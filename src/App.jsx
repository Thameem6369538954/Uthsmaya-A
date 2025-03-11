import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Allrouters from './AllRouters/Allrouters'

function App() {
  const [count, setCount] = useState(0)

  return (  
  <div>
    <Allrouters />
  </div>
  )
}

export default App
