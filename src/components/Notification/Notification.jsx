import React from 'react';
import PropTypes from 'prop-types';
import { Block } from './Notification.styled';

export const Notification = ({ message }) => <Block>{message}</Block>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
