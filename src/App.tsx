import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
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
        <Footer/>
      </Content>
    </Global>
  );
};
export default App;
