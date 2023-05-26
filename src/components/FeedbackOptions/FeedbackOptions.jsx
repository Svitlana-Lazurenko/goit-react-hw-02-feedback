import React from 'react';
import PropTypes from 'prop-types';
import { Block, Title, BtnBlock, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, title, handleIncrement }) => (
  <Block>
    <Title>{title}</Title>
    <BtnBlock>
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
    </BtnBlock>
  </Block>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  title: PropTypes.string.isRequired,
  handleIncrement: PropTypes.func.isRequired,
};
