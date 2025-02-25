import { arrayOf, object } from 'prop-types';
import MoreBtn from './MoreBtn';
import '../css/SkillSet.css';

function SkillSet({ skills }) {
    return (
        <div className='set'>
            <MoreBtn />
            {skills}
        </div>
    );
}

SkillSet.propTypes = {
    skills: arrayOf(object),
};

export default SkillSet;