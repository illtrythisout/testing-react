import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter(count => count + 1)
    }, 1000)

    return () => clearInterval(key)

  }, [])
  
  return (
    <>
      <p>{counter} seconds passed</p>
    </>
  )
}

export default App
