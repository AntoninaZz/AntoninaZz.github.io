import { object, string } from 'prop-types';
import '../css/Skill.css'

function Education({ info, lang }) {
    return (
        <div className='ed skill'>
            <h3>{info.school[lang]}</h3>
            <h4>{info.degree[lang]}</h4>
            <p>{info.years[lang]}</p>
        </div>
    );
}

Education.propTypes = {
    lang: string,
    info: object,
};

export default Education;