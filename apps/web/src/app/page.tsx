import Hero from '@/components/sections/home/hero';
import Quotes from '@/components/sections/home/quotes';
import Stats from '@/components/sections/home/stats';

export default function Home() {
  return (
    <main className=" text-center ">
      <Hero />
      <Stats />
      {/* about  */}
      {/* experience (if any )  */}
      {/* projects  */}
      <Quotes />
      {/* technologies/tech st   */}

      {/* contracts   */}
    </main>
  );
}
