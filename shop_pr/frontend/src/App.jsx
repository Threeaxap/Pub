import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Aurora from './components/bg/Aurora'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout'
import Card from './components/card/Card'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Layout/>
        <Card/>
      
      
    </>
  )
}

export default App
