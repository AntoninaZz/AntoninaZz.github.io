import { object, string } from 'prop-types';
import '../css/Skill.css'

function Project({ info, lang }) {
    return (
        <a href={info.link} target='_blank' className='tile'>
            <div className='project skill'>
                <img src={info.img} alt={info.title[lang]} />
                <div className='text'>
                    <h3>{info.title[lang]}</h3>
                    <p>{new Date(info.date).getFullYear()}</p>
                    {info.technologies.map((tech, i) => (<div className='tech skill' key={i} >{tech}</div>))}
                </div>
            </div>
        </a>
    );
}

Project.propTypes = {
    info: object,
    lang: string,
};

export default Project;