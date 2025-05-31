// components/Typography.tsx
import React from 'react';

type TextAlign = 'left' | 'center' | 'right' | 'justify';

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
  align?: TextAlign;
};

const baseAlign = (align?: TextAlign) => {
  switch (align) {
    case 'center':
      return 'text-center';
    case 'right':
      return 'text-right';
    case 'justify':
      return 'text-justify';
    default:
      return 'text-left';
  }
};

// H1
export const H1 = ({ children, className = '', align }: TypographyProps) => (
  <h1
    className={`font-syne text-4xl md:text-5xl font-bold tracking-tight ${baseAlign(
      align,
    )} ${className}`}
  >
    {children}
  </h1>
);

// H2
export const H2 = ({ children, className = '', align }: TypographyProps) => (
  <h2
    className={`text-3xl font-syne md:text-4xl font-semibold tracking-tight ${baseAlign(
      align,
    )} ${className}`}
  >
    {children}
  </h2>
);

// H3
export const H3 = ({ children, className = '', align }: TypographyProps) => (
  <h3
    className={`text-2xl font-syne md:text-3xl font-semibold ${baseAlign(align)} ${className}`}
  >
    {children}
  </h3>
);

// H4
export const H4 = ({ children, className = '', align }: TypographyProps) => (
  <h4
    className={`text-xl md:text-2xl font-syne font-medium ${baseAlign(align)} ${className}`}
  >
    {children}
  </h4>
);

// H5
export const H5 = ({ children, className = '', align }: TypographyProps) => (
  <h5
    className={`text-lg md:text-xl font-syne font-medium ${baseAlign(align)} ${className}`}
  >
    {children}
  </h5>
);

// H6
export const H6 = ({ children, className = '', align }: TypographyProps) => (
  <h6
    className={`text-base md:text-lg font-syne font-medium ${baseAlign(align)} ${className}`}
  >
    {children}
  </h6>
);

// Paragraph
export const P = ({ children, className = '', align }: TypographyProps) => (
  <p className={`text-base font-inter leading-relaxed ${baseAlign(align)} ${className}`}>
    {children}
  </p>
);

// Small
export const Small = ({ children, className = '', align }: TypographyProps) => (
  <small
    className={`text-sm text-muted-foreground font-inter  ${baseAlign(align)} ${className}`}
  >
    {children}
  </small>
);
