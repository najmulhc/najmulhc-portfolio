import { Paragraph } from "./components/atoms/typography";
import Card from "./components/atoms/card";

const Home = () => {
  return (
    <main>
      <p>Hero section</p>
      <p>what i offer section</p>
      <p>featured projects</p>
      <p>My journey </p>
      <p>about me(basic) </p>

      <Card>
        <Paragraph>
         is this even working? 
        </Paragraph>
      </Card>
    </main>
  );
};

export default Home;
