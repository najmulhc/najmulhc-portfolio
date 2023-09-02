import { H2 } from "../Typography/Typography";
const Title = ({ text }) => {
  return (
    <>
      <H2 classname="mb-0 pb-0">{text}</H2>
      <hr className="mt-1 border border-[#151515] dark:border-[#EEF2F6] opacity-80 mb-4" />
    </>
  );
};

export default Title;
