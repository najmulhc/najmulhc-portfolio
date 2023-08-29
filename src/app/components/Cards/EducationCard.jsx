import Card, { CardInner } from "./Card";
import {H3} from "../Typography/Typography"

const EducationCard = () => {
 const education = {
   inistitute: "University of Dhaka",
   course: "BBA in Management Information Systems",
   start: "Jan 2022",
   end: "July 2025",
   description:
     "University of Dhaka: A prestigious institution known for fostering academic excellence and innovation. A hub of diverse disciplines and a cornerstone of educational advancement. ",
 };

  return (
    <Card>
      <CardInner>
        <H3>{education.inistitute}</H3>
      </CardInner>
    </Card>
  );
};

export default EducationCard;
