import { useState } from 'react'
import { string } from 'prop-types';
import '../css/Skill.css'

function MoreBtn({ link, as: Component = 'button', }) {
    const [className, setClassName] = useState("more-btn");
    if (link) {
        return (<Component href={link} target='_blank' className="more-btn" ></Component>);
    } else {
        return (<Component onClick={() => { className.includes(' ') ? setClassName("more-btn") : setClassName("more-btn show") }} className={className}></Component>);
    }
}

MoreBtn.propTypes = {
    link: string,
    as: string,
};

export default MoreBtn;