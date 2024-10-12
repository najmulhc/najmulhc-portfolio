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
