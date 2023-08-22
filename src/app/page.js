import { BsTools } from "react-icons/bs";
const HomePage = () => {
  return (
    <main className=" flex flex-col justify-center items-center gap-[2rem]">
      <h1 className="text-[#191919] dark:text-[#f5f5f5] text-[5rem]">
        <BsTools />
      </h1>
      <h2 className="text-[#191919] dark:text-[#f5f5f5] text-2rem font-semibold text-[32px]">
        The page is under Development
      </h2>
    </main>
  );
};

export default HomePage;
