'use client';

import Link from 'next/link';
import { H2, H3, H4, P } from '@/components/ui/typography';
import { Github, GithubIcon } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';
import Section from '../ui/section';

const routes = [
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Technologies', href: '/technologies' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-shadow text-white px-4 sm:px-8 py-12 border-t border-neutral-800">
      <Section className=" grid grid-cols-1 sm:grid-cols-3 gap-12">
        {/* Site Info */}
        <div>
          <H3 className="text-white">Najmul Huda Chowdhury</H3>
          <P className="mt-2 text-neutral-400 text-sm leading-relaxed">
            Building beautiful fullstack things from scratch. <br />
            Dreams rooted in Dhaka, thriving in code.
          </P>
        </div>

        {/* Nav Links */}
        <div>
          <H4 className="text-neutral-300 text-base mb-3">Quick Links</H4>
          <ul className="space-y-2">
            {routes.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className="text-neutral-400 text-sm hover:text-white transition-colors"
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials + CTA */}
        <div className="space-y-3">
          <H4 className="text-neutral-300 text-base">Connect</H4>
          <div className="flex gap-5 text-xl">
            <Link
              href="https://github.com/najmulhc"
              target="_blank"
              className="hover:text-white text-neutral-400"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://linkedin.com/in/najmulhc"
              target="_blank"
              className="hover:text-white text-neutral-400"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="mailto:najmul@example.com"
              className="hover:text-white text-neutral-400"
            >
              <FiMail />
            </Link>
          </div>

          <Link
            href="/contact"
            className="inline-block mt-4 text-sm font-medium underline underline-offset-4 text-white hover:text-primary"
          >
            Let’s build something together →
          </Link>
        </div>
      </Section>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500">
        &copy; {new Date().getFullYear()} najmulhc. All rights reserved.
      </div>
    </footer>
  );
}
