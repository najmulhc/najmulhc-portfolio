import { FaCode, FaGraduationCap, FaHome, FaProjectDiagram} from "react-icons/fa";
import MobileNavIconSet from "./MobileNav/MobileNavIconSet";

export default function MobileNav() {
  return (
    <nav className="w-full  border-t  border-[#eeeeef] border-opacity-75   text-center bottom-0 fixed block md:hidden p-2  bg-[#111a2b] opacity-100 z-10">
      <div className="flex justify-between">
        <MobileNavIconSet
          icon={FaHome}
          text="Home"
          link="https:www.facebook.com"
        />
        <MobileNavIconSet
          icon={FaGraduationCap}
          text="Education"
          link="https:www.facebook.com"
        />
        <MobileNavIconSet
          icon={FaCode}
          text="Tech Stack"
          link="https:www.facebook.com"
        />
        <MobileNavIconSet
          icon={FaProjectDiagram}
          text="Projects"
          link="https:www.facebook.com"
        />
      </div>
    </nav>
  );
}
