import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-bgMuted  inline-block p-[2rem] border border-border rounded m-4">
      {children}
    </div>
  );
};

export default Card;
