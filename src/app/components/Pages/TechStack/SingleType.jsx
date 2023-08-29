import Section from "../../Section/Section";
const SingleType = ({ type, children }) => {
  return <Section title={type}>{children}</Section>;
};

export default SingleType;
