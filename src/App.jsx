import { useState } from 'react' 
import './App.css'
import WeatherApp from './WatherApp/WeatherApp'
import PassWordGenrate from './PasswordGenrator/PassWordGenrate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <WeatherApp /> */}
      <PassWordGenrate />
    </>
  )
}

export default App
