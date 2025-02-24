import { object, string } from 'prop-types';

function SoftSkill({ info, lang }) {
    return (
        <>
            <span style={{ padding: 5 }}>{info[lang]}</span>
        </>
    );
}

SoftSkill.propTypes = {
    info: object,
    lang: string,
};

export default SoftSkill;