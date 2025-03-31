import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Module 3/Introduction to ReactJS/Ques_1'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <h1>Hi Darling...!</h1>
    <Hello />
   </div>
  )
}

export default App
