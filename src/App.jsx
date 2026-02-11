import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import abi from './contractabi.json'
import { BrowserProvider, Contract } from 'ethers'
function App() {
  const CONTRACT_ADDRESS="0x9051807EFD07f0dD3941d8B5C0F684f4A5E9753E"
  const [count, setCount] = useState(0)
  const registerStudent= async () => {
    const provider=new BrowserProvider(window.ethereum);
    const signer= await provider.getSigner();
    const contract= new Contract(CONTRACT_ADDRESS,abi,signer);
    await contract.register(2);
    alert("Successfully registered as Student")
  }
  const registerTeacher= async () => {
    const provider=new BrowserProvider(window.ethereum);
    const signer= await provider.getSigner();
    const contract= new Contract(CONTRACT_ADDRESS,abi,signer);
    await contract.register(1);
    alert("Successfully registered as teacher")
  }
  const userLogin= async () => {
     const provider=new BrowserProvider(window.ethereum);
    const signer= await provider.getSigner();
    const contract= new Contract(CONTRACT_ADDRESS,abi,signer);
    const address=await signer.getAddress()
    const role= await contract.roles[address];
    alert("role=",role)
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
