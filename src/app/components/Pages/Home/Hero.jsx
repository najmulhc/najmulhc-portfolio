import { H1, P } from "../../Typography/Typography";
import Button from "../../Buttons/button"
const Hero = () => {
  return (
    <section className="mx-[128px] min-h-[90vh] flex justify-between items-center ">
     
        <div className="hero-text-container">
          <H1>Welcome to my world of <br /> code and creativity</H1>
          <P>Dive into my journy of coding and designing.</P>
          <Button>Download my resume</Button>
        </div>
        {/* hero image will be here */}
      
    </section>
  );
};

export default Hero;
