import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Test = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background-color: rgb(250, 150, 0);
  border: solid 3px rgb(250, 0, 0);
`;

const Button = ({ children }) => <Test>{children}</Test>;

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
