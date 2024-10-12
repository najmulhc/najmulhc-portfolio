import { styles } from "@/app/styles/styles";
import Link from "next/link";

interface ButtonProps {
  className?: string;
  onClick?: (arg0: any) => void;
  children: React.ReactNode;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  children,
  href,
}) => {
  if (href) {
    return (
      <Link href={href} target="_new" className={styles.button}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
