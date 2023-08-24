import Hero from "./components/Pages/Home/Hero";
import TopBanner from "./components/Pages/Home/TopBanner";
import Title from "./components/Titles/Title"
const HomePage = () => {
  return (
    <main className="">
      <Hero />
      <TopBanner />
      <Title text="Featured Projects" />
    </main>
  );
};

export default HomePage;
