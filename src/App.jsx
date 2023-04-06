import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navigation from './components/navigation/navigation.component'

import stars from '../src/assets/Images/background-stars.png'
import AiAnabel from './components/ai-anabel/ai-anabel.component'
import Title from './components/title/title.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img className='background-stars' src={stars} />
      <Navigation />
      <Title />
      <AiAnabel />
    </div>
  )
}

export default App
