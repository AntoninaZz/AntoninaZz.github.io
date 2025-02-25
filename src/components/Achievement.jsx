import { object, string } from 'prop-types';

function Achievement({ info, lang }) {
    return (
        <ul>
            <li>{info[lang]}</li>
        </ul>
    );
}

Achievement.propTypes = {
    info: object,
    lang: string,
};

export default Achievement;