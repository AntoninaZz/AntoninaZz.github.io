import { object } from 'prop-types';

function HardSkill({ info }) {
    return (
        <div style={{ display: "inline-block", width: "15%", padding: 5 }}>
            <div>{info.skill}</div>
            <div style={{ width: info.level * 20 + '%', height: 2, backgroundColor: "blueviolet" }}></div>
        </div>
    );
}

HardSkill.propTypes = {
    info: object,
};

export default HardSkill;