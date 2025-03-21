import { useState, useEffect } from 'react';
import './css/App.css';
import data from '../data.json';
import MainInfo from './components/MainInfo';
import Section from './components/Section';
import SubSection from './components/Subsection';
import Education from './components/Education';
import SkillSet from './components/SkillSet';
import HardSkill from './components/HardSkill';
import SoftSkill from './components/SoftSkill';
import Language from './components/Language';
import Certificate from './components/Certificate';
import MoreBtn from './components/MoreBtn';
import Project from './components/Project';

function App() {
  const [lang, setLang] = useState('en');
  const [lastCommit, setLastCommit] = useState();

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/AntoninaZz/AntoninaZz.github.io/branches/master"
    )
      .then(response => {
        response.json().then(json => {
          setLastCommit(json.commit.commit.author.date);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className='main-screen'>
        <button onClick={() => setLang(lang == 'ua' ? 'en' : 'ua')} className='lang-btn'>{lang == 'ua' ? <img src="/language-ua.svg" alt="english language" /> : <img src="/language-en.svg" alt="ukrainian language" width={40} />}</button>
        <MainInfo language={lang} data={data} className="main" />
        <Section title={lang == 'ua' ? "Про себе" : "About"} contents={data.profile.about[lang]} />
        <Section title={lang == 'ua' ? "Навички" : "Skills"}
          contents={
            <div className='skills-container'>
              <SubSection title="Soft Skills" contents={<div className='soft-container'>{data.skills.soft.map((skill, i) => (<SoftSkill info={skill} lang={lang} key={i} className="soft" />))}</div>} />
              <SubSection title={lang == 'ua' ? "Мови" : "Languages"} contents={data.languages.map((language, i) => (<Language info={language} lang={lang} key={i} />))} />
            </div>
          } />
      </div>
      <SubSection title="Hard Skills" contents={(<SkillSet skills={data.skills.hard.map((skill, i) => (<HardSkill info={skill} key={i} />))} />)} />
      <Section title={lang == 'ua' ? "Освіта" : "Education"} contents={
        <div className='ed-container'>
          <div className='degrees'>{data.education.map((ed, i) => (<Education info={ed} lang={lang} key={i} />))}</div>
          <img src="/education-photo.png" alt="Antonina Zdebska Masters degree photo" className='ed-photo' />
          <ul>{data.achievements.map((a, i) => (<li key={i} >{a[lang]}</li>))}</ul>
        </div>
      } />
      <Section title={lang == 'ua' ? "Проєкти" : "Projects"} contents={
        <div className='projects'><MoreBtn />{data.projects.sort(function (a, b) {
          let da = new Date(a.date);
          let db = new Date(b.date);
          return db - da;
        }).map((project, i) => (<Project info={project} lang={lang} key={i} />))}</div>
      } />
      <Section title={lang == 'ua' ? "Сертифікати" : "Certificates"} contents={
        <div className='certificates'>
          {data.certificates.map((certificate, i) => (<Certificate info={certificate} lang={lang} monthes={data.monthes} key={i} />))}
          <MoreBtn link={data.contacts.linkedin} as='a' />
        </div>} />
      <footer>
        <span>{data.profile.name[lang]}</span>
        <span>© {new Date(lastCommit).getFullYear()}</span>
      </footer>
    </>
  )
}
export default App