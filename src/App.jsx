import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './components/Child1'
import Child2 from './components/Child2'
function App() {
  const [child1State, setChild1State] = useState(false)
  const [child2State, setChild2State] = useState(false)
  const child1Function = React.useCallback(() => {
    console.log("child1Function")
  }, [child1State])
  const child2Function = React.useCallback(() => {
    console.log("child2Function")
  }, child2State)

  console.log('App rendered')
  return (
    <>
      <Child1 child1State={child1State} child1Function={child1Function} />
      <Child2 child2State={child2State} child2Function={child2Function} />
      <button onClick={() => { setChild1State(!child1State) }} >Toggle Child1 State</button>
      <br />
      <button onClick={() => { setChild2State(!child2State) }} >Toggle Child2 State</button>
    </>
  )
}

export default App
