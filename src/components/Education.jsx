import { object, string } from 'prop-types';

function Education({ info, lang }) {
    return (
        <>
            <h3>{info.school[lang]}</h3>
            <h4>{info.degree[lang]}</h4>
            <p>{info.years[lang]}</p>
        </>
    );
}

Education.propTypes = {
    lang: string,
    info: object,
};

export default Education;