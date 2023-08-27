import Card, { CardImage, CardInner } from "./Card";
import {Badge, H3, H4, P} from '../Typography/Typography'
import Button from "../Buttons/button";

const ProjectCard = ({project}) => {
  const {name, type, time, description, image ,link} = project;
  return (
    <Card>
      <CardImage
        src={image}
        alt="Testing placeholder Imag"
      />
      <CardInner>
        <H3>{name}</H3>
        <div className="w-full flex justify-between items-center mb-[8px]">
          <Badge>{type}</Badge>
          <H4>{time}</H4>
        </div>
        <P>
        {description}
        </P>
        <Button link={link} classname="w-full mt-[18px] bg-red-700">Project Detail</Button>
      </CardInner>
    </Card>
  );
};

export default ProjectCard;
