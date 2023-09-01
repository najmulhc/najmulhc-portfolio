import Card, { CardInner } from "./Card";
import Image from "next/image";
import Link from "next/link";
import { P, H3, H4 } from "../Typography/Typography";
import { FaArrowRightLong } from "react-icons/fa6";
import getTimeDifference from '../../services/getTimeDifference'

const TechDetailCard = ({ technology }) => {
  const { name, logo, lightLogo, darkLogo,  type, description, timeOfLearning } = technology;
  const result = getTimeDifference(timeOfLearning);
  console.log(technology)
  return (
    <Card>
      <CardInner>
        <div className="flex justify-start items-center gap-2 mb-4">
          <Image className="dark:block hidden"  src={darkLogo} width={64} height={64} alt="html logo" />
          <Image className="block dark:hidden" src={lightLogo} width={64} height={64} alt="html logo" />
          <div className="w-full">
            <H3>{name}</H3>
            <div className="flex justify-between items-center w-full ">
              <H4>{result.value} {result.unit} of in hand experience</H4>
            </div>
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

export default TechDetailCard;
