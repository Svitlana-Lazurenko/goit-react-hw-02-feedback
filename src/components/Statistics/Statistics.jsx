import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from '../Notification/Notification';
import {
  List,
  Item,
  ItemText,
  TotalFeedback,
  PositiveFeedback,
} from './Statistics.styled';

export const Statistics = ({ options, state, total, positivePercentage }) => (
  <>
    {total > 0 ? (
      <>
        <List>
          {options.map(option => (
            <Item key={option}>
              <ItemText>
                {option}: {state[option]}
              </ItemText>
            </Item>
          ))}
        </List>
        <TotalFeedback>Total feedback: {total}</TotalFeedback>
        <PositiveFeedback>
          Positive feedback: {positivePercentage}%
        </PositiveFeedback>
      </>
    ) : (
      <Notification message="There is no feedback" />
    )}
  </>
);

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  state: PropTypes.objectOf(PropTypes.number.isRequired),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
