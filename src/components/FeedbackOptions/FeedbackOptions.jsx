import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, handleIncrement }) => (
  <>
    {options.map(option => (
      <Button
        key={option}
        type="button"
        onClick={handleIncrement}
        name={option}
      >
        {option}
      </Button>
    ))}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  handleIncrement: PropTypes.func.isRequired,
};
