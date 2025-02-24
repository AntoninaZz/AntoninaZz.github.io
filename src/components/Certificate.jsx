import { object, string } from 'prop-types';

function Certificate({ info, lang, monthes }) {
    let date = new Date(info.date);
    return (
        <>
            <h3>{info.title[lang]}</h3>
            <h4>{info.organization}</h4>
            <p>{monthes[date.getMonth()][lang]} {date.getFullYear()}</p>
            <img src={info.src} alt={info.title[lang]} width={100} />
        </>
    );
}

Certificate.propTypes = {
    info: object,
    lang: string,
    monthes: object,
};

export default Certificate;