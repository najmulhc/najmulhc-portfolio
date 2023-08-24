'use client';
const Button = ({ children, onclick, type }) => {
  return (
    <button type={type} onClick={onclick ? () => onclick(): console.log("nothing here")}>
      {children}
    </button>
  );
};

export default Button;
