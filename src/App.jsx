import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Router/router'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Jay Shree Ram</h1>
        <RouterProvider router={router} />
    </>
  )
}

export default App
