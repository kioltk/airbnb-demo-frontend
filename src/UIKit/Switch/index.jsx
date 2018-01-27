import React from 'react';
import styled from 'styled-components';
import checked from './checked.svg';
import unchecked from './unchecked.svg';

const Box = styled.button`
  background: rgba(72, 72, 72, 0.08);
  border: 1px solid rgba(72, 72, 72, 0.3);
  box-sizing: border-box;
  border-radius: 24px;
  width: 64px;
  height: 40px;
  padding: 0;
`;
const Switch = styled.div`
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.3);
  box-sizing: border-box;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  margin: -1px;
  ${props =>
    (props.checked
      ? `
      margin-left: 24px;
    background-image: url(${checked});
  `
      : `
    background-image: url(${unchecked});
  `)};
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

export default ({ checked, onClick, props }) => (
  <Box onClick={onClick}>
    <Switch checked={checked} />
  </Box>
);
