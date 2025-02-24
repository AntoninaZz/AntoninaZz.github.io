import { object, string } from 'prop-types';

function SubSection({ title, contents }) {
    return (
        <>
            <h3>{title}</h3>
            <div>{contents}</div>
        </>
    );
}

SubSection.propTypes = {
  title: string,
  contents: object,
};

export default SubSection;