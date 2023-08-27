import Image from "next/image";

export const CardInner = ({ children }) => {
  return <div className="card-inner">{children}</div>;
};

export const CardImage = ({ src, alt }) => {
  return (
    <Image
      className="card-image"
      width={1600}
      height={900}
      src={src}
      alt={alt}
    />
  );
};

const Card = ({ children, classname }) => {
  return <div className={`card ${classname}`}>{children}</div>;
};

export default Card;
