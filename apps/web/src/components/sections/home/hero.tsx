import Star26 from '@/components/stars/s26';
import Star8 from '@/components/stars/s8';
import { Button, H1 } from '@/components/ui';
import Section from '@/components/ui/section';
import axios from 'axios';
import Link from 'next/link';

const Hero = async () => {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+'/home/hero');
  const { hero } = data;
  console.log(hero);

  return (
    <Section className="w-full h-[80vh] flex items-center justify-center flex-col  gap-2  relative  bg-pattern">
      <Star8
        color="var(--coral)"
        size={150}
        stroke="var(--border)"
        className="absolute   left-4 top-6 "
      />
      <H1 align='center'>{hero.tagline}</H1>
      <Link href={hero.ctaUrl} className="pointer">
        <Button>{hero?.ctaText}</Button>
      </Link>
      <Star26
        color="var(--mint)"
        size={120}
        stroke="var(--border)"
        className="absolute bottom-8 right-12 pointer-events-none"
      />
    </Section>
  );
};

export default Hero;
