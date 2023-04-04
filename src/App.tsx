import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import { Global } from "./components/styled/Global.styled";

const App: React.FC = () => {
  return (
    <Global>
      <Navbar />
      <Hero />
    </Global>
  );
};
export default App;
