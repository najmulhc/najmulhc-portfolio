import Title from "../Titles/Title";
const Section = ({ title, children }) => {
  return (
    <section className="section">
      <Title text={title}></Title>
      {children}
    </section>
  );
};

export default Section;
