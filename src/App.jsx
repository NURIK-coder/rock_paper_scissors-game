import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signs from './components/Signs'
import Game from './components/Game'

function App() {
  const [sign, setSigns]=useState(null);
  return (
    <div>
      <header className='header'>
        <h1>Welcome to my RPS game!</h1>
      </header>
      <div>
        <Game sign={sign} />
      </div>
      <div className='signs'>
        <Signs setSigns={setSigns}/>  
      </div>
      
    </div>
  )
}

export default App
