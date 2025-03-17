import { object, string } from 'prop-types';
import '../css/Style.css'

function Language({ info, lang }) {
    return (
        <div className='lang'>{info.language[lang]} ({info.level[lang]})</div>
    );
}

Language.propTypes = {
    lang: string,
    info: object,
};

export default Language;