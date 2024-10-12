import React from 'react'
import FooterLink from './footer-link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';
import { IoLogoStackoverflow } from 'react-icons/io5';

const SocialLinks = () => {
  return (
    <div className="gap-4 flex flex-col">
      <FooterLink Icon={<FiGithub />} href="https://www.github.com/najmulhc">
        github
      </FooterLink>
      <FooterLink
        Icon={<FiLinkedin />}
        href="https://www.linkedin.com/in/najmulhc"
      >
        Linkedin
      </FooterLink>
      <FooterLink Icon={<RiTwitterXLine />} href="https://www.x.com/namulhc">
        twitter
      </FooterLink>
      <FooterLink
        Icon={<IoLogoStackoverflow />}
        href="https://stackoverflow.com/users/16629266/najmulhc"
      >
        stack overflow
      </FooterLink>
    </div>
  );
}

export default SocialLinks