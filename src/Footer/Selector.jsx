import React from 'react';
import styled from 'styled-components';
import Media from './../Media';
import arrow from './arrow.svg';

const Select = styled.select`
  appearance: none;
  &::-ms-expand {
    display: none;
  }
  display: block;
  padding: 12px 36px 12px 12px;
  margin-bottom: 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  ${Media.sm`width: 100%;`};
  background: url("${arrow}") no-repeat;
  background-position: calc(100% - 12px ) 50%;
  font-size: 15px;
`;
const Box = styled.div``;
export default props => (
  <Box className={props.className}>
    <Select>{props.children}</Select>
  </Box>
);
