import { useState, createContext } from 'react'
import InputElements from './components/InputElements'
import BlackoutElements from './components/BlackoutElements'
import './App.css'

export const SubmitionContext = createContext()

function App() {
  const [submitions, setSubmitions] = useState({})
  return (
    <div className="App">
      <main role="main" className="wrapper">
        <div className='window'>
          <SubmitionContext.Provider value={submitions}>
            <InputElements callback={(value)=> setSubmitions({submitionA: value})}/>
            <BlackoutElements/>
          </SubmitionContext.Provider>
        </div>
      </main>
    </div>
  )
}

export default App
