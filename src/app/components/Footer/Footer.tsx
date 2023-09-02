import Link from "next/link";
import Logo from "../Logo/Logo";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mx-32 py-8  ">
      <div className="footer-top-container">
        <Logo
          width={64}
          height={64}
          color=""
          classname="fill-[#121926] dark:fill-[#EEF2F6]"
        />
        <div className="footer-top-right">
          <p className="footer-top">+880 19044 02144</p>
          <p className="footer-top">najmulhc@outlook.com</p>
          <p className="footer-top">
            <Link href="http://www.github.com/najmulhc" target="_blank">
              <AiFillGithub />
            </Link>
            <Link href="http://www.linkedin.com/in/najmulhc" target="_blank">
              <AiFillLinkedin />
            </Link>
            <Link href="http://www.twitter.com/najmulhc" target="_blank">
              <AiFillTwitterCircle />
            </Link>
          </p>
        </div>
      </div>
      <hr className="my-2 border border-[#151515] dark:border-[#EEF2F6] opacity-80" />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <Link href="#">Home</Link>
          <Link href="#">Tech Stack</Link>
          <Link href="#">Projects</Link>
          <Link href="#">Education</Link>
          <Link href="#">Contact</Link>
        </div>
        <p className="text-base font-normal">
          Designed and developed by{" "}
          <span className="text-[#764ABC]">@najmulhc</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
