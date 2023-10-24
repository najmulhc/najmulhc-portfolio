import PageTitle from "../components/PageTitle/PageTitle";
import Title from "../components/Titles/Title";
import EducationCard from "../components/Cards/EducationCard";
import getEducation from "../services/getEducation";
import Section from "../components/Section/Section";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const EducationPage = async () => {
  const educations = await getEducation();
  const types = ["Formal Education", "Coding Bootcamp", "Online Course"];

  return (
    <>
      <Header />
      <main className="">
        <PageTitle
          pageName="Education"
          description="Dive into my journey of learning and growth. Discover my educational endeavors, from formal academics to intensive coding bootcamps and enriching online courses. This page unveils the stepping stones that have equipped me with the knowledge and skills to excel in the dynamic world of technology."
        />

        {types.map((type) => (
          <Section key={type} title={type}>
            <div className="grid grid-cols-1    md:grid-cols-2 w-full">
              {educations
                .filter((education) => education.type === type)
                .map((item) => (
                  <EducationCard key={item._id} education={item} />
                ))}
            </div>
          </Section>
        ))}
      </main>

      <Footer />
    </>
  );
};

export default EducationPage;
