import { H3 } from "../Typography/Typography";
import Card, { CardInner } from "./Card";
const ContactCard = ({ children, text }) => {
  return (
    <Card>
      <CardInner>
        <H3 classname="text-center">{text}</H3>
      </CardInner>
    </Card>
  );
};

export default ContactCard;
