import { object, string } from 'prop-types';

function SubSection({ title, contents }) {
    return (
        <div>
            <h3>{title}</h3>
            <div>{contents}</div>
        </div>
    );
}

SubSection.propTypes = {
  title: string,
  contents: object,
};

export default SubSection;