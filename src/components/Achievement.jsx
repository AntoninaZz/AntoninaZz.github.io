import { object, string } from 'prop-types';

function Achievement({ info, lang }) {
    return (
        <>
            <p>{info[lang]}</p>
        </>
    );
}

Achievement.propTypes = {
    info: object,
    lang: string,
};

export default Achievement;