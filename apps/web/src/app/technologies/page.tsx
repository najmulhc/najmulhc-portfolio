import { H1, P } from '@/components/ui';
import Section from '@/components/ui/section';
import axios from 'axios';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technologies',
  description: 'Explore the technologies I work with',
};
const TechnologiesPage = async () => {
  metadata.title = 'custom title from component';
  const { data } = await axios.get('http://localhost:3001/tech-stack');
  console.log(data);
  return (
    <>
      <Section>
        <H1>Technolgies I love to work with</H1>
        <P>As a by born solver of rp</P>
      </Section>
    </>
  );
};

export default TechnologiesPage;
