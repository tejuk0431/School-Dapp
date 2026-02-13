import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import abi from './contractabi.json'
import { BrowserProvider, Contract } from 'ethers'
function TeacherDashboard() {
    const updateMark = async () => {
     alert ("clicked button")
    // get the from the text box call the smart contract function with this value
    }
  return (
    <>
      <h1>this is TeacherDashboard</h1>
      <input type="text" />
        <button onClick={updateMark}>updatemark</button>
    </>
  )
}

export default TeacherDashboard
