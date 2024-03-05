import { useState } from 'react'
import Login from './Login'
import SignUp from './Signup'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
      <SignUp/>
    </>
  )
}

export default App
