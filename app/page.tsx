import Hero from "./components/Hero";
import Education from "./components/home-sections/Education";
import Projects from "./components/home-sections/Projects";
import TechStack from "./components/home-sections/TechStack";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Education />
      <TechStack/>
      <Projects/>
    </main>
  );
}
