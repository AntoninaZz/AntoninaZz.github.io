import { arrayOf, object } from 'prop-types';
import MoreBtn from './MoreBtn';
import '../css/Style.css';

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