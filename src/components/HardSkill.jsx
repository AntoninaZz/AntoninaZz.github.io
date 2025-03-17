import { object } from 'prop-types';
import '../css/Style.css';
import '../css/colors.css';

function HardSkill({ info }) {
    return (
        <div className='hard skill'>
            <div className='title'>{info.skill}<div className='level' style={{ width: info.level * 20 + '%', height: 2 }} ></div></div>
            <div className='level' style={{ width: info.level * 20 + '%', height: 2 }} ></div>
        </div>
    );
}

HardSkill.propTypes = {
    info: object,
};

export default HardSkill;