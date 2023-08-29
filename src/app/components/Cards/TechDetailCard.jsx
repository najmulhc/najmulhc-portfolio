import Card, { CardInner } from "./Card";
import Image from "next/image";
import Link from "next/link";
import { P, H3, H4 } from "../Typography/Typography";
import { FaArrowRightLong } from "react-icons/fa6";
const TechDetailCard = ({ technology }) => {
  const { name, logo, type, description, time } = technology;
  return (
    <Card>
      <CardInner>
        <div className="flex justify-start items-center gap-[8px] mb-[16px]">
          <Image src={logo} width={64} height={64} alt="html logo" />
          <div className="w-full">
            <H3>{name}</H3>
            <div className="flex justify-between items-center w-full ">
              <H4>{time} of in hand experience</H4>
            </div>
          </div>
        </div>
        <P>{description}</P>
        <Link
          className="h4 flex gap-1 text-right items-center justify-end"
          href="http://www.github.com"
        >
          See Projects with {name} <FaArrowRightLong />
        </Link>
      </CardInner>
    </Card>
  );
};

export default TechDetailCard;
