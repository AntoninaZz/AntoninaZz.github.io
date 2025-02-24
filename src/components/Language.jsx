import { object, string } from 'prop-types';

function Language({ info, lang }) {
    return (
        <>
            <span style={{ padding: 5 }}>{info.language[lang]} ({info.level[lang]})</span>
        </>
    );
}

Language.propTypes = {
    lang: string,
    info: object,
};

export default Language;