import React from 'react';
import PropTypes from 'prop-types';
import { Block, Text } from './Notification.styled';

export const Notification = ({ message }) => (
  <Block>
    <Text>{message}</Text>
  </Block>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
