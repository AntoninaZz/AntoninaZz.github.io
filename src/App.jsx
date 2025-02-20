import { useState } from 'react'
import './App.css'
import data from '../data.json'

function App() {
  const [lang, setLang] = useState('en');

  return (
    <>
      <button onClick={() => setLang(lang == 'ua' ? 'en' : 'ua')}>{lang == 'ua' ? "🇬🇧" : "🇺🇦"}</button>
      <MainInfo language={lang} />
    </>
  )
}

function MainInfo({ language }) {
  console.log(language)
  return (
    <>
      <div>
        <img src="/profile-photo.jpg" alt="Antonina Zdebska profile photo" width={100} />
        <p>{data.profile.name[language]}</p>
        <Contact type="linkedin" />
        <Contact type="github" />
        <Contact type="instagram" />
        <Contact type="facebook" />
      </div>
    </>
  );
}

function Contact({ type }) {
  return (<a href={data.contacts[type]} target="_blank"><img src={type + ".svg"} alt={type} /></a>);
}

export default App
