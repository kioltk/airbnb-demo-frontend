import React from 'react';
import styled from 'styled-components';
import arrow from './arrow.svg';

const Box = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.h2`
  line-height: 34px;
  font-size: 32px;
  color: #383838;
  margin-top: 48px;
`;
const SeeAll = styled.a`
  height: 100%;
  font-weight: normal;
  font-size: 14px;
  vertical-align:middle;
  color: #383838;
  display: flex;
  align-items: center;
  margin-top: 20px;
  &:after {
    display: inline-block;
    margin-left:8px;
    width: 10px;
    height: 10px;
    content: " ";
    background: url("${arrow}") no-repeat;
  }
`;

export default props => (
  <Box>
    <Title className="col-xs">{props.children}</Title>
    {props.link && <SeeAll href={props.link}>See all</SeeAll>}
  </Box>
);
