import { useState } from 'react'
import ButtonBoostrap from './components/button/ButtonBoostrap'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <ButtonBoostrap type="primary" content="Incrementar" action={increment}/>
      <ButtonBoostrap type="secondary" content="Decrementar" action={decrement}/>
    </>
  )
}

export default App
