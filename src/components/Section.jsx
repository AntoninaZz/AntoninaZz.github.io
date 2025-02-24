import { object, string } from 'prop-types';

function Section({ title, contents }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>{contents}</div>
    </div>
  );
}

Section.propTypes = {
  title: string,
  contents: object,
};

export default Section;