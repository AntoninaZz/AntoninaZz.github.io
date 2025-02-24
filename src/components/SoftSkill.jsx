import { object, string } from 'prop-types';
import '../css/Skill.css'

function SoftSkill({ info, lang }) {
    return (
        <>
            <div className='skill'>{info[lang]}</div>
        </>
    );
}

SoftSkill.propTypes = {
    info: object,
    lang: string,
};

export default SoftSkill;