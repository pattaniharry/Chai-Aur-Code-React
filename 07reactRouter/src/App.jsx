import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Footer, Header, Home } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header/>
  <Home/>
  <Footer/> 
    </>
  )
}

export default App
