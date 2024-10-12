import React from "react";
interface CopyrightProps {
  children: React.ReactNode;
}
const Copyright: React.FC<CopyrightProps> = ({ children }) => {
  return (
    <p className="text-primary text-left mt-10 font-chillax-light text-[.75rem]">
      {children}
    </p>
  );
};

export default Copyright;
