import { objectOf, string } from 'prop-types';

function Contact({ type, contacts }) {
    return (<a href={contacts[type]} target="_blank"><img src={type + ".svg"} alt={type} /></a>);
}

Contact.propTypes = {
    type: string,
    contacts: objectOf(string),
};

export default Contact;