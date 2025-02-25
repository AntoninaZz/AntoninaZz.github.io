import { useState } from 'react'
import { string } from 'prop-types';
import '../css/Skill.css'

function MoreBtn() {
    const [className, setClassName] = useState("more-btn");
    return (<button onClick={() => {className.includes(' ') ? setClassName("more-btn") : setClassName("more-btn show")}} className={className}></button>);
}

MoreBtn.propTypes = {
    link: string,
    lang: string,
};

export default MoreBtn;