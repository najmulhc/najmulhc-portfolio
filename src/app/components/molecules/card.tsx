interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return <div>{children}</div>;
}
