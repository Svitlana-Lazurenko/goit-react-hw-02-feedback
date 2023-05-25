import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from '../Notification/Notification';
import { Block, Title, List, Item, Text } from './Statistics.styled';

export const Statistics = ({
  options,
  title,
  state,
  total,
  positivePercentage,
}) => (
  <Block>
    <Title>{title}</Title>

    {total > 0 ? (
      <>
        <List>
          {options.map(option => (
            <Item key={option}>
              {option}: {state[option]}
            </Item>
          ))}
        </List>
        <Text>Total feedback: {total}</Text>
        <Text>Positive feedback: {positivePercentage}%</Text>
      </>
    ) : (
      <Notification message="There is no feedback" />
    )}
  </Block>
);

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  title: PropTypes.string.isRequired,
  state: PropTypes.objectOf(PropTypes.number.isRequired),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
