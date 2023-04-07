import About from "./components/sections/About";
import Certification from "./components/sections/Certification";
import Education from "./components/sections/Education";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import Projects from "./components/sections/Projects";
import TechStack from "./components/sections/TechStack";
import {
  Background,
  BackgroundLogo,
  Content,
  Global,
} from "./components/styled/Global.styled";
import logo from "/log.svg";

const App: React.FC = () => {
  return (
    <Global>
      <Background>
        <BackgroundLogo
          src={logo}
          title="Logo of @najmulhc"
          alt="logo of @najmulhc"
        />
      </Background>
      <Content>
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Education/>
        <Projects/>
        <Certification/>
        <Footer />
      </Content>
    </Global>
  );
};
export default App;
