import { H1, P } from "../Typography/Typography";
const PageTitle = ({ pageName, description }) => {
  return (
    <div className="mx-8 md:mx-32">
      <H1 classname="mt-16 text-center">{pageName}</H1>
      <P classname="text-center my-4 ">{description}</P>
      <hr className="mt-1 border border-[#202939] dark:border-[#EEF2F6] opacity-80 mb-4 w-64 mx-auto" />
    </div>
  );
};

export default PageTitle;
