import { FaGithub, FaLinkedinIn, FaTwitter, FaHeart } from "react-icons/fa";

function FooterButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="border border-[#eeeeef] bg-[#eeeeef]  p-2 hover:text-[#eeeeef] rounded-full cursor-pointer hover:bg-[#111a2b]  text-[#111a2b]  ">
      {children}
    </button>
  );
}

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#eeeeef] border-opacity-40 py-4 bg-[#051120]">
      <div className="w-full flex items-center justify-center gap-6">
        <FooterButton>
          <FaGithub />
        </FooterButton>
        <FooterButton>
          <FaLinkedinIn />
        </FooterButton>
        <FooterButton>
          <FaTwitter />
        </FooterButton>
      </div>
      <p className="flex w-full items-center gap-2 text-[#eeeeef] opacity-50 my-8 justify-center">
        Designed and developed with <FaHeart /> by @najmulhc
      </p>
    </footer>
  );
}
