import { arrayOf, object } from 'prop-types';
import '../css/SkillSet.css';

function SkillSet({ skills }) {
    return (
        <div className='set'>
            {skills}
        </div>
    );
}

SkillSet.propTypes = {
    skills: arrayOf(object),
};

export default SkillSet;