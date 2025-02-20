import { useState } from 'react'
import './App.css'
import data from '../data.json'

function App() {
  const [lang, setLang] = useState('en');

  return (
    <>
      <button onClick={() => setLang(lang == 'ua' ? 'en' : 'ua')}>{lang == 'ua' ? "🇬🇧" : "🇺🇦"}</button>
      <MainInfo language={lang} />
      <section>
        <h2>{lang == 'ua' ? "про себе" : "about"}</h2>
        <p>{data.profile.about[lang]}</p>
      </section>
      <section>
        <h2>{lang == 'ua' ? "освіта" : "education"}</h2>
        <img src="/education-photo.png" alt="Antonina Zdebska Masters degree photo" width={100} />
        {data.education.map((ed) => (<Education info={ed} lang={lang} />))}
      </section>
    </>
  )
}

function MainInfo({ language }) {
  return (
    <>
      <div>
        <img src="/profile-photo.jpg" alt="Antonina Zdebska profile photo" width={100} />
        <h1>{data.profile.name[language]}</h1>
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

function Education({ info, lang }) {
  return (
    <>
      <h3>{info.school[lang]}</h3>
      <h4>{info.degree[lang]}</h4>
      <p>{info.years[lang]}</p>
    </>
  );
}

export default App
