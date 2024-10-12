
interface TypographyProps {
  className?: string;
  children: React.ReactNode;
}

export const H1: React.FC<TypographyProps> = ({ children }) => {
  return (
    <h1 className="text-center text-[10rem] font-satoshi-light tracking-normal  text-primary leading-none">
      {children}
    </h1>
  );
};

export const TopText: React.FC<TypographyProps> = ({ children }) => {
  return (
    <p className="text-primary uppercase text-center text-[0.813rem] tracking-[.094rem] font-satoshi-light">
      {children}
    </p>
  );
};

export const Paragraph: React.FC<TypographyProps> = ({ children }) => {
  return (
    <p className="font-chillax-light text-[1.125rem] text-primary leading-6 ">
      {children}
    </p>
  );
};

export const H2: React.FC<TypographyProps> = ({ children }) => {
  return (
    <h2 className="text-primary text-[7.5rem] font-satoshi-light text-center">
      {children}
    </h2>
  );
};

export const Gambetta: React.FC<TypographyProps> = ({ children }) => {
  return <span className="font-gambetta block">{children}</span>;
};


export const H3: React.FC<TypographyProps> = ({ children }) => {
  return (
    <h2 className="text-primary text-[3rem] font-satoshi-light text-center">
      {children}
    </h2>
  );
};