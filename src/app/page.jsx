import { Badge, H1, H2, H3, P } from "./components/Typography/Typography";

const HomePage = () => {
  return (
    <main className="">
      <H1 classname=''>I am first title</H1>
      <H2>I am second title</H2>
      <H3>The third element</H3>
      <Badge>Important text</Badge>
      <P>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        illo culpa? Dicta, modi consectetur amet iste dignissimos eius iusto qui
        ducimus alias eum quam cum culpa quod, consequatur voluptatum et.
      </P>
    </main>
  );
};

export default HomePage;
