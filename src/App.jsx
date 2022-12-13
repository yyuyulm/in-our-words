import { useState, createContext } from 'react'
import InputElements from './components/InputElements'
import BlackoutElements from './components/BlackoutElements'
import ResultElements from './components/ResultElements'
import './App.css'
import min from './assets/min.svg'
import max from './assets/max.svg'
import close from './assets/close.svg'

export const SubmitionContext = createContext()

function App() {
  const [submitions, setSubmitions] = useState({stage : 1})

  function callback1(value){
    let copiedSubmitions = {...submitions}
    copiedSubmitions.stage = 2
    if(submitions.submitionA){
      copiedSubmitions.submitionA = value
      setSubmitions({...copiedSubmitions})
    }else{
      setSubmitions({...copiedSubmitions, submitionA : value})
    }
  }

  function callback2(value){
    let copiedSubmitions = {...submitions}
    copiedSubmitions.stage = 3
    if(submitions.submitionB){
      copiedSubmitions.submitionB = value
      setSubmitions({...copiedSubmitions})
    }else{
      setSubmitions({...copiedSubmitions, submitionB : value})
    }
  }

  return (
    <div className="App">
      <main role="main" className="wrapper">
        <div className='window'>
          <SubmitionContext.Provider value={submitions}>
            <div className='flex-top'>
              <div className="flex-left" id="windowTag">
                <h1 id="title">In (Y)our Words</h1>
                <div className='icon'><img src={min}></img></div>
                <div className='icon'><img src={max}></img></div>
                <div className='icon'><img src={close}></img></div>
              </div>
              <div className='flex-top' id="innerWindow">
                {submitions.stage == 1 ? <InputElements callback={callback1}/> : null}
                {submitions.stage == 2 ? <BlackoutElements callback={callback2}/> : null}
                {submitions.stage == 3 ? <ResultElements/> : null}
              </div>
            </div>
          </SubmitionContext.Provider>
        </div>
      </main>
    </div>
  )
}

export default App
