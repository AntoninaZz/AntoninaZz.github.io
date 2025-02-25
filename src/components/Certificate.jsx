import { object, string } from 'prop-types';
import '../css/Skill.css'

function Certificate({ info, lang, monthes }) {
    let date = new Date(info.date);
    return (
        <div className='certificate skill'>
            <img src={info.src} alt={info.title[lang]} className='certificate' />
            <div className='certificate-info'>
                <h3>{info.title[lang]}</h3>
                <h4>{info.organization}</h4>
                <p>{monthes[date.getMonth()][lang]} {date.getFullYear()}</p>
            </div>
        </div>
    );
}

Certificate.propTypes = {
    info: object,
    lang: string,
    monthes: object,
};

export default Certificate;