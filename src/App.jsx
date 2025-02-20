// import { useState } from 'react'
import './App.css'
import data from '../data.json'

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
        <img src="/profile-photo.jpg" alt="Antonina Zdebska profile photo" width={100} />
        <p>Antonina Zdebska</p>
        <Contact type="linkedin" />
        <Contact type="instagram" />
        <Contact type="github" />
        <Contact type="facebook" />
      </div>
    </>
  );
}

function Contact({ type }) {
  return (<a href={data.contacts[type]} target="_blank"><img src={type + ".svg"} alt={type} /></a>);
}

export default App
