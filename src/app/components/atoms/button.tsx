import { styles } from "@/app/styles/styles";

interface ButtonProps {
  className?: string;
  onClick?: (arg0: any) => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
