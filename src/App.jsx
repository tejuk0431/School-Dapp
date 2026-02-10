import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import abi from './contractabi.json'
import { BrowserProvider, Contract } from 'ethers'
function App() {
  const [count, setCount] = useState(0)
  const registerStudent= async () => {
    console.log("clickede Student")
  }
  const registerTeacher= async () => {
    console.log("clickede Teacher")
  }
  const userLogin= async () => {
    console.log("clickede Login")
  }
  return (
    <>
      <button onClick={userLogin}>Login</button>
      <br />
      <button onClick={registerTeacher}>Register as Teacher</button>
      <br />
      <button onClick={registerStudent}>Register as Student</button>
    </>
  )
}

export default App
