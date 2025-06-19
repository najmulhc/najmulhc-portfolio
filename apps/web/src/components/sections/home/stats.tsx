import { H2, P } from '@/components/ui';
import { Card, CardContent } from '@/components/ui/card';
import Section from '@/components/ui/section';

const stats = [
  {
    label: 'LeetCode Problems',
    value: '135+',
    description: 'Crushed DSA one bug at a time',
  },
  {
    label: 'GitHub Contributions',
    value: '1.2k+',
    description: 'Built, broke, fixed, repeated',
  },
  {
    label: 'Hours Coded',
    value: '900+ hrs',
    description: 'Caffeine-powered sessions',
  },
  {
    label: 'Projects Deployed',
    value: '12',
    description: 'Not just side — these slap',
  },
];

export default function Stats() {
  return (
    <Section className="bg-coral text-foreground py-12 px-4 md:px-12 border-t-4 border-black border-b-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="bg-white">
            <CardContent className="flex flex-col justify-center items-center bg-white">
              <H2 className="text-4xl  ">{stat.value}</H2>
              <P className="text-base  mt-1">{stat.label}</P>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
