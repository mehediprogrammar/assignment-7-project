/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Course Registration</h1>  
      <Cards></Cards>
    </>
  )
}

export default App
