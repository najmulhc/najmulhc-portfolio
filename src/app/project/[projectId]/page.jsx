
import {H1} from "../../components/Typography/Typography";
import Image from 'next/image';
import banner from './banner.png'
import Header from "../../components/Header/Header";
import PageTitle from '../../components/PageTitle/PageTitle'

const page = () => {
  const project = {
    name: "Project", 
    intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illo assumenda minus provident sit, autem fugiat cum praesentium similique neque doloremque libero laudantium qui aliquam nulla soluta! Fugiat tempore eos, quasi ill"
  };
  const {name, intro} = project;
  return (
    <>
      <Header />
      <main className="">
        <Image className="w-full h-auto" src={banner} alt="top banner" />
         <PageTitle pageName={name} description={intro} />
      </main>
    </>
  );
};

export default Page;
