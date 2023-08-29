import PageTitle from "../components/PageTitle/PageTitle";
import Title from "../components/Titles/Title";
import EducationCard from "../components/Cards/EducationCard";

const EducationPage = () => {
  return (
    <main className="mx-[128px] ">
      <PageTitle
        pageName="Education"
        description="Dive into my journey of learning and growth. Discover my educational endeavors, from formal academics to intensive coding bootcamps and enriching online courses. This page unveils the stepping stones that have equipped me with the knowledge and skills to excel in the dynamic world of technology."
      />
      <Title text="Formal Education" />
      <div className="grid grid-cols-2">
        <EducationCard />
      </div>
    </main>
  );
};

export default EducationPage;
