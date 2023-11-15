import Card, { CardImage, CardInner } from "./Card";
import {Badge, H2, H3, H4, P} from '../Typography/Typography'
import Button from "../Buttons/button";

const ProjectCard = ({project}) => {
  const {name, type, time, intro, display, _id} = project;
  const link = `/project/${_id}`
  const date = new Date
  return (
    <Card>
      <CardImage
        src={display}
        alt="Testing placeholder Imag"
      />
      <CardInner>
        <H2>{name}</H2>
        <div className="w-full md:flex md:justify-between items-center my-2">
          <Badge>{type}</Badge>
          <H4 classname="text-right">{}</H4>
        </div>
        <P>
        {intro}
        </P>
        <Button link={link} classname="button w-full mt-2">Project Detail</Button>
      </CardInner>
    </Card>
  );
};

export default ProjectCard;
