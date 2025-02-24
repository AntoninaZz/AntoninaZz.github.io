import { object, string } from 'prop-types';

function Section({ title, contents }) {
  return (
    <>
      <h2>{title}</h2>
      <div>{contents}</div>
    </>
  );
}

Section.propTypes = {
  title: string,
  contents: object,
};

export default Section;