import React from 'react';
import Section from '../ui/section';
import { H1, P } from '../ui';

const PageTitle = ({
  pageName,
  description,
}: {
  pageName: string;
  description?: string;
}) => {
  return (
    <Section>
      <H1>{pageName}</H1>
      <P>{description}</P>
    </Section>
  );
};

export default PageTitle;
