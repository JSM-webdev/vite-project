import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function DragonCard(props) {
  console.log(props)
  return (
    <div ClassName={props.type + ' dragon-card'}>
      <h1>{props.type}</h1>
      <div>{props.icon} <span>{props.clicks}</span></div>
    </div>
  )
}



function App() {
  
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
         <DragonCard clicks={0} type={'fire'} icon={'🐉'}/>  
         <DragonCard clicks={0} type={'water'} icon={'🐉'}/> 
         <DragonCard clicks={0} type={'air'} icon={'🐉'}/>  
         <DragonCard clicks={0} type={'earth'} icon={'🐉'}/> 
         
    </div>
  )
}

export default App
