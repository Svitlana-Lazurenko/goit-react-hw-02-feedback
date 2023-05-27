import React from 'react';
import PropTypes from 'prop-types';
import { SectionFeedback, Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionFeedback>
    <Title>{title}</Title>
    {children}
  </SectionFeedback>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
