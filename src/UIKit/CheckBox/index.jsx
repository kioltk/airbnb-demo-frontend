import React from 'react';
import styled from 'styled-components';
import checked from './checked.svg';

const CheckBox = styled.button`
  border: 1px solid rgba(72, 72, 72, 0.3);
  box-sizing: border-box;
  border-radius: 4px;
  background: none;
  width: 24px;
  height: 24px;
  padding: 0;
  ${props =>
    props.checked &&
    `
        background: #008489;
        border: 1px solid #008489;
        box-sizing: border-box;
        border-radius: 4px;
        background-image: url(${checked});
  `};

  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export default ({ checked, ...props }) => (
  <CheckBox className={props.className} checked={checked}>
    {props.children}
  </CheckBox>
);
