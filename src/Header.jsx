import React from 'react';
import styled from 'styled-components';
import arrow from './arrow.svg';

const Box = styled.div`display: flex;`;
const Title = styled.h2`
  line-height: 34px;
  font-size: 32px;
  color: #383838;
  margin-top: 48px;
`;
const SeeAll = styled.a`
  float: right;
  height: 100%;
  line-height: 34px;
  font-size: 14px;
  vertical-align:middle;
  color: #383838;
  display: flex;
  align-items: center;
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
    <Title className="col-xs">
      {props.link && (
        <SeeAll className="col-xs" href={props.link}>
          See all
        </SeeAll>
      )}
      {props.children}
    </Title>
  </Box>
);
