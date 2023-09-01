import Card, { CardInner } from "./Card";
import Image from "next/image";
import Link from "next/link";
import { P, H3, Badge} from "../Typography/Typography";
import { FaArrowRightLong } from "react-icons/fa6";

const TechCard = ({ technology
}) => {
  const { name, logo, type, description } = technology;
  return (
    <Card>
      <CardInner>
        <div className="flex justify-start items-center gap-2 mb-4">
          <Image src={logo} width={64} height={64} alt="html logo" />
          <div>
            <H3>{name}</H3>
            <Badge>{type}</Badge>
          </div>
        </div>
        <P>{description}</P>
        <Link
          className="h4 flex gap-1 text-right items-center justify-end mt-2"
          href="http://www.github.com"
        >
          See Projects with {name} <FaArrowRightLong />
        </Link>
      </CardInner>
    </Card>
  );
};

export default TechCard;
