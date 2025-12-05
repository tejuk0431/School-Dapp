import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import abi from './contractabi.json'
import { BrowserProvider, Contract } from 'ethers'
function App() {
  const [count, setCount] = useState(0)
  const CONTRACTADDRESS="0x36d8699A6Dc614177EeAa7e8Fc3D1211fb803dC8"
  const registerStudent =async () => {
    const provider = new BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    const contract = new Contract(CONTRACTADDRESS,abi,signer)
    await contract.registerRole(Number(2))
    alert ("successfully registered")
  }
  const loginUser = async () => {
    const provider = new BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    const contract = new Contract(CONTRACTADDRESS,abi,signer)
    const address = await signer.getAddress()
    const role = await contract.roles(address)
    if (role == 1 ){
      alert ("login as a teacher") 
    }
    if (role ==2){
      alert ("login as a student")
    }
  }
  return (
    <>
      <button onClick={loginUser}>Login</button>
      <br />
      <button>Register as Teacher</button>
      <br />
      <button onClick={registerStudent}>Register as Student</button>
    </>
  )
}

export default App
