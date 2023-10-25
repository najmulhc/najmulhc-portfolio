import logo from "../assets/logo.svg";
import Image from "next/image";

// the loading animation for all pages
const loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Image
        className="text-red-500 fill-red-600 loading-animation"
        src={logo}
        alt="Logo screen"
        width={128}
        height={128}
      />
    </div>
  );
};

export default loading;
