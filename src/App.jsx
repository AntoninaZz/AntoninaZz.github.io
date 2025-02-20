// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <MainInfo />
    </>
  )
}

function MainInfo() {
  return (
    <>
      <div>
        <img src={"/profile-photo.jpg"} alt="Antonina Zdebska profile photo" width={50}/>
        <p>Antonina Zdebska</p>
      </div>
    </>
  );
}

export default App
