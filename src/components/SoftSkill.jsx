import { object, string } from 'prop-types';
import '../css/Style.css'

function SoftSkill({ info, lang }) {
    return (
        <>
            <div className='soft skill'>{info[lang]}</div>
        </>
    );
}

SoftSkill.propTypes = {
    info: object,
    lang: string,
};

export default SoftSkill;