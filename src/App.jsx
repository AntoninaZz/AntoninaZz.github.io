import { useState } from 'react'
import './css/App.css'
import data from '../data.json'
import MainInfo from './components/MainInfo';
import Section from './components/Section';
import SubSection from './components/Subsection';
import Education from './components/Education';
import SkillSet from './components/SkillSet';
import HardSkill from './components/HardSkill';
import SoftSkill from './components/SoftSkill';
import Language from './components/Language';
import Achievement from './components/Achievement';
import Certificate from './components/Certificate';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <>
      <button onClick={() => setLang(lang == 'ua' ? 'en' : 'ua')} className='lang-btn'>{lang == 'ua' ? <img src="/language-ua.svg" alt="english language" width={40} /> : <img src="/language-en.svg" alt="ukrainian language" width={40} />}</button>
      <MainInfo language={lang} data={data} className="main" />
      <Section title={lang == 'ua' ? "Про себе" : "About"} contents={data.profile.about[lang]} />
      <Section title={lang == 'ua' ? "Навички" : "Skills"}
        contents={
          <div className='skills-container'>
            <SubSection title="Soft Skills" contents={data.skills.soft.map((skill, i) => (<SoftSkill info={skill} lang={lang} key={i} className="soft" />))} />
            <SubSection title={lang == 'ua' ? "Мови" : "Languages"} contents={data.languages.map((language, i) => (<Language info={language} lang={lang} key={i} />))} />
          </div>
        } />
      <div className='hard-sec'>
        <SubSection title="Hard Skills" contents={(<SkillSet skills={data.skills.hard.map((skill, i) => (<HardSkill info={skill} key={i} />))} />)} />
      </div>
      <Section title={lang == 'ua' ? "Освіта" : "Education"} contents={
        <>
          <img src="/education-photo.png" alt="Antonina Zdebska Masters degree photo" className='ed-photo' />
          {data.education.map((ed, i) => (<Education info={ed} lang={lang} key={i} />))}
          {data.achievements.map((a, i) => (<Achievement info={a} lang={lang} key={i} />))}
        </>
      } />
      <Section title="Certificates" contents={
        data.certificates.map((certificate, i) => (<Certificate info={certificate} lang={lang} monthes={data.monthes} key={i} />))
      } />
      <Section title="Projects" />
      <Section title="Contact" />
    </>
  )
}
export default App