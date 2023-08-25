import {H2} from '../Typography/Typography'
const Title = ({text}) => {
  return (
    <>
      <H2 classname="mb-0 pb-0">{text}</H2> 
      <hr className="mt-[4px] border border-[#151515] dark:border-[#d5d5d5] opacity-80 mb-[16px]" />
    </>
  );
};

export default Title;