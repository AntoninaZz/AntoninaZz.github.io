import { useState } from 'react'
import './App.css'
import data from '../data.json'

function App() {
  const [lang, setLang] = useState('en');

  return (
    <>
      <button onClick={() => setLang(lang == 'ua' ? 'en' : 'ua')}>{lang == 'ua' ? <img src="/language-ua.svg" alt="english language" width={40} /> : <img src="/language-en.svg" alt="ukrainian language" width={40} />}</button>
      <MainInfo language={lang} />
      <Section title={lang == 'ua' ? "Про себе" : "About"} contents={data.profile.about[lang]} />
      <Section title={lang == 'ua' ? "Навички" : "Skills"}
        contents={
          <>
            <SubSection title="Soft" contents={data.skills.soft.map((skill) => (<SoftSkill info={skill} lang={lang} />))} />
            <SubSection title="Hard" contents={data.skills.hard.map((skill) => (<HardSkill info={skill} />))} />
            <SubSection title={lang == 'ua' ? "Мови" : "Languages"} contents={data.languages.map((language) => (<Language info={language} lang={lang} />))} />
          </>
        } />
      <Section title={lang == 'ua' ? "Освіта" : "Education"} contents={
        <>
          <img src="/education-photo.png" alt="Antonina Zdebska Masters degree photo" width={100} />
          {data.education.map((ed) => (<Education info={ed} lang={lang} />))}
          {data.achievements.map((a) => (<Achievement info={a} lang={lang} />))}
        </>
      } />
      <Section title="Certificates" contents={
        data.certificates.map((certificate) => (<Certificate info={certificate} lang={lang} />))
      }/>
      <Section title="Projects" />
      <Section title="Contact" />
    </>
  )
}

function MainInfo({ language }) {
  return (
    <>
      <div>
        <img src="/profile-photo.jpg" alt="Antonina Zdebska profile photo" width={100} />
        <h1>{data.profile.name[language]}</h1>
        <p>{data.profile.position[language]}, {getAge(new Date(data.profile.birthday))} {language == 'ua' ? "роки" : "y.o."}</p>
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
    <div style={{ display: "inline-block", width: "15%", padding: 5 }}>
      <div>{info.skill}</div>
      <div style={{ width: info.level * 20 + '%', height: 2, backgroundColor: "blueviolet" }}></div>
    </div>
  );
}

function SoftSkill({ info, lang }) {
  return (
    <>
      <span style={{ padding: 5 }}>{info[lang]}</span>
    </>
  );
}

function Language({ info, lang }) {
  return (
    <>
      <span style={{ padding: 5 }}>{info.language[lang]} ({info.level[lang]})</span>
    </>
  );
}

function Achievement({ info, lang }) {
  return (
    <>
      <p>{info[lang]}</p>
    </>
  );
}

function Section({ title, contents }) {
  return (
    <>
      <h2>{title}</h2>
      <div>{contents}</div>
    </>
  );
}

function SubSection({ title, contents }) {
  return (
    <>
      <h3>{title}</h3>
      <div>{contents}</div>
    </>
  );
}

function Certificate({info, lang}) {
  return(
    <>
    <h3>{info.title[lang]}</h3>
    <h4>{info.organization}</h4>
    <p>{new Date(info.date).toString()}</p>
    <img src={info.src} alt={info.title[lang]} width={100} />
    </>
  );
}

function getAge(birthday) {
  let today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  var m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return age;
}

export default App
