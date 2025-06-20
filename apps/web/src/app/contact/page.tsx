import { Button, H1, H2, H4 } from '@/components/ui';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Section from '@/components/ui/section';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { FaDev, FaGithub, FaXTwitter } from 'react-icons/fa6';

export default function ContactPage() {
  return (
    <>
      <Section className="bg-white py-4">
        <H1 align="center">Contact With Me</H1>
      </Section>

      <Section className="bg-white grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 py-4">
        <Link href="https://github.com/najmulhc" target="_blank">
          <Card className="bg-[#F6F8FA] text-[#24292E] flex w-full justify-start items-center flex-row gap-6 p-4 border-4 border-black">
            <FaGithub className="text-[3rem]" />
            <H4 className="text-base">Check out my code</H4>
          </Card>
        </Link>

        <Link href="https://linkedin.com/in/najmulhc" target="_blank">
          <Card className="bg-[#E5F4FF] text-[#0A66C2] flex w-full justify-start items-center flex-row gap-6 p-4 border-4 border-black">
            <FaLinkedin className="text-[3rem]" />
            <H4 className="text-base">Connect with me</H4>
          </Card>
        </Link>

        <Link href="https://x.com/najmulhc" target="_blank">
          <Card className="bg-white text-black flex w-full justify-start items-center flex-row gap-6 p-4 border-4 border-black">
            <FaXTwitter className="text-[3rem]" />
            <H4 className="text-base">Follow my tech takes</H4>
          </Card>
        </Link>

        <Link href="https://dev.to/najmulhc" target="_blank">
          <Card className="bg-[#F5F5F5] text-[#0A0A0A] flex w-full justify-start items-center flex-row gap-6 p-4 border-4 border-black">
            <FaDev className="text-[3rem]" />
            <H4 className="text-base">Read my latest blogs</H4>
          </Card>
        </Link>
      </Section>
      <Section className="bg-white py-4">
        <Card className='bg-primary'>
          <CardHeader>
            <CardTitle>
              <H2 align='center' className='text-center'> Have your say </H2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Input type='text' placeholder='Enter your name' className='w-full mb-4' />
            <Input type='email' placeholder='Enter your email' className='w-full mb-4' />
            <Textarea placeholder='Enter your message' className='w-full mb-4' />
            <Button className='w-full' variant="default">
              Send Mail
            </Button>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
