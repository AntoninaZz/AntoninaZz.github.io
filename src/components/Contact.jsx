import { objectOf, string } from 'prop-types';
import '../css/Style.css'

function Contact({ type, contacts }) {
    return (<a href={contacts[type]} target="_blank"><img src={type + ".svg"} alt={type} className='contact' /></a>);
}

Contact.propTypes = {
    type: string,
    contacts: objectOf(string),
};

export default Contact;