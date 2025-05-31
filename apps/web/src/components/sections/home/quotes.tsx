import { H2, P } from '@/components/ui';
import { Card } from '@/components/ui/card';
import Section from '@/components/ui/section';
import axios from 'axios';
import { FaQuoteLeft } from 'react-icons/fa6';

const Quotes = async () => {
  const { data } = await axios.get('http://localhost:3001/home/quote');
  const { quote } = data;
  return (
    <Section className="w-full h-[60vh] flex items-center justify-center flex-col gap-2 relative bg-mint">
      <Card className="bg-white p-8 flex justify-between w-full">
        <FaQuoteLeft className="text-6xl" />
        <div>
          <H2 align="center" className="text-shadow-color">
            {quote.text}
          </H2>
          <P className=" text-right text-3xl mt-4">- {quote.author}</P>
        </div>
      </Card>
    </Section>
  );
};

export default Quotes;
