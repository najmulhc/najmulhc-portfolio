import Card, { CardInner } from "./Card";
import { H3, H4, P } from "../Typography/Typography";
import Image from "next/image";
import Button from "../Buttons/button";
import { format } from "date-fns/esm";

const EducationCard = ({ education }) => {
  const { institute, course, start, end, description, logo, certificate } =
    education; 
  return (
    <Card>
      <CardInner>
        <div className="flex justify-start end w-full gap-4">
          <Image className="object-contain" src={logo} alt="education logo" width={64} height={64} />
          <div className=" w-full">
            <H3>{course}</H3>

            <H4>{institute}</H4>
            <H4 classname="font-bold text-right">
              {format(new Date(start), "MMM YYY")} -{" "}
              {format(new Date(end), "MMM YYY")}
            </H4>
          </div>
        </div>
        <P classname="mt-4">{description}</P>
        <Button classname="button w-full mt-4" link={education.certificate}>
          {certificate ? "View Certificate" : "No Certificate Yet"}
        </Button>
      </CardInner>
    </Card>
  );
};

export default EducationCard;
