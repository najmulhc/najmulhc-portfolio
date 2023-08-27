import Image from "next/image";
import { P } from "../../Typography/Typography";
import Title from "../../Titles/Title";

const AboutMeHome = () => {
  return (
    <section className="section grid grid-cols-2 items-center ">
      <div className="flex justify-start items-center">
        <Image
          width={340}
          src="https://smartslider3.com/wp-content/uploads/slider/cache/ebab2373b76342e707ae1a386570b3b1/portfolio.webp"
          height={340}
          alt="image"
        />
      </div>
      <div className="py-[128px] gap-8">
        <Title text="About me" />
        <div className="flex flex-col justify-center gap-2">
          <P>
            ident dolorem? Excepturi, esse quia unde nihil impedit soluta,
            mollitia consequatur blanditiis beatae vero tempora. Assumenda, amet
            debitis?
          </P>

          <P>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            veritatis ut voluptatem a, ipsa vero? Adipisci optio asperiores
            necessitatibus sit, exercitationem nam placeat magnam! Ab reiciendis
            voluptatum quasi distinctio nihil libero repellat, quia alias sunt
            possimus quam beatae officia sit labore odio, vitae iusto!
            Aspernatur incidunt officiis, quasi illum dolores nam illo? Delectus
            quaerat sapiente ea quasi, natus ut provident dolorem? Excepturi,
            esse quia unde nihil impedit soluta, mollitia consequatur blanditiis
            beatae vero tempora. Assumenda, amet debitis?
          </P>
        </div>
      </div>
    </section>
  );
};

export default AboutMeHome;
