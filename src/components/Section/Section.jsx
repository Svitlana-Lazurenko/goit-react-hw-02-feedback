import React from 'react';
import PropTypes from 'prop-types';
import { SectionFeedback } from './Section.styled';

export const Section = ({ children }) => (
  <SectionFeedback>{children}</SectionFeedback>
);
