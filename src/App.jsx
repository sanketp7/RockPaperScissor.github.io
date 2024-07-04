import { useState } from 'react'
import './App.css'
import Game from './Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <h1>Stone Paper Scissor</h1>
    <Game/>
    </>
  )
}

export default App;