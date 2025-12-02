import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button>Login</button>
      <br />
      <button>Register as Teacher</button>
      <br />
      <button>Register as Student</button>
    </>
  )
}

export default App
