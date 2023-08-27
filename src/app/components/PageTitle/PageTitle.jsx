import { H1, P } from "../Typography/Typography";
const PageTitle = ({ pageName, description }) => {
  return (
    <>
      <H1 classname="mt-[64px] text-center">{pageName}</H1>
      <P classname="text-center my-4 ">{description}</P>
      <hr className="mt-[4px] border border-[#151515] dark:border-[#d5d5d5] opacity-80 mb-[16px] w-[256px] mx-auto" />
    </>
  );
};

export default PageTitle;
