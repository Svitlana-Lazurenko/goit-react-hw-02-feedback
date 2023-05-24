import React from 'react';
import PropTypes from 'prop-types';
import { Block, Title, List, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, title, handleIncrement }) => (
  <Block>
    <Title>{title}</Title>
    <List>
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
    </List>
  </Block>
);
