import Card, { CardInner } from "./Card";
import { H3, H4, P } from "../Typography/Typography";
import Image from "next/image";
import Button from "../Buttons/button";

const EducationCard = () => {
  const education = {
    inistitute: "University of Dhaka",
    course: "BBA in Management Information Systems",
    start: "Jan 2022",
    end: "July 2025",
    description:
      "University of Dhaka: A prestigious institution known for fostering academic excellence and innovation. A hub of diverse disciplines and a cornerstone of educational advancement. ",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Dhaka_University_logo.svg",
    certificate: "www.google.com",
  };

  return (
    <Card>
      <CardInner>
        <div className="flex justify-start end w-full gap-4">
          <Image
            src={education.logo}
            alt="education logo"
            width={64}
            height={64}
          />
          <div className=" w-full">
            <H3>{education.course}</H3>

            <H4>{education.inistitute}</H4>
            <H4 classname="font-bold text-right">
              {education.start} - {education.end}
            </H4>
          </div>
        </div>
        <P classname="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae ex
          voluptate? Eius ut recusandae amet qui ducimus inventore qu itia
          incidunt vitae? Architecto optio rerum sapiente impedit sit dolores
          minim m dit eius esse praesentium maiores est officia amet, optio quia
          iure numquam!
        </P>
        {education.certificate && (
          <Button classname="button w-full mt-4" link={education.certificate}>
            View Certificate
          </Button>
        )}
      </CardInner>
    </Card>
  );
};

export default EducationCard;
