import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Allrouters from './AllRouters/Allrouters'
import ConfettiWrapper from "../src/ConfettiWrapper";


function App() {
  const [count, setCount] = useState(0)

  return (  
  <div>
    <ConfettiWrapper>
    <Allrouters />
    </ConfettiWrapper>
  </div>
  )
}

export default App
