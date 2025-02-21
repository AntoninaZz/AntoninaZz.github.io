import { useState } from 'react'
import './App.css'
import data from '../data.json'

function App() {
  const [lang, setLang] = useState('en');

  return (
    <>
      <button onClick={() => setLang(lang == 'ua' ? 'en' : 'ua')}>{lang == 'ua' ? <img src="/language-ua.svg" alt="english language" width={40} /> : <img src="/language-en.svg" alt="ukrainian language" width={40} />}</button>
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
      <section>
        <div>{data.skills.soft.map((skill) => (<SoftSkill info={skill} lang={lang} />))}</div>
        <div>{data.skills.hard.map((skill) => (<HardSkill info={skill} />))}</div>
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
        <p>{data.profile.position[language]}</p>
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

function HardSkill({ info }) {
  return (
    <div style={{display: "inline-block", width: "15%", padding: 5}}>
    <div>{info.skill}</div>
    <div style={{width: info.level*20+'%', height: 2, backgroundColor: "blueviolet"}}></div>
    </div>
  );
}

function SoftSkill({ info, lang }) {
  return (
    <>
    <span style={{padding: 5}}>{info[lang]}</span>
    </>
  );
}

export default App
