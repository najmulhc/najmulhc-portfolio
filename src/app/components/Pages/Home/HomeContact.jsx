import Section from "../../Section/Section";
import ContactCard from '../../Cards/ContactCard'
const HomeContact = () => {
  return (
    <Section title="Contact">
      <div className="grid grid-cols-3 gap-4">
        <ContactCard text="Phone me"/>
      </div>
    </Section>
  );
};

export default HomeContact;
