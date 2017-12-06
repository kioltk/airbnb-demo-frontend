import React from 'react';
import styled from 'styled-components';
import { Box as OriginalBox, CollapsedText as OriginalCollapsedText } from './../styled';
import report from './report.svg';

const Box = styled(OriginalBox)`
  position: relative;
`;
const Avatar = styled.img`
  width: 48px;
  height: 48px;
  position: absolute;
`;
const Name = styled.p`
  font-size: 20px;
  margin-left: 64px;
  margin-bottom: 2px;
`;
const Time = styled.p`
  margin-left: 64px;
  font-size: 16px;
  font-weight: lighter;
  margin-top: 0px;
`;
const CollapsedText = styled(OriginalCollapsedText)`
  font-size: 18px;
  font-weight: lighter;
  margin-top: 16px;
`;
const Report = styled.button`
  width: 16px;
  height: 16px;
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  box-shadow: none;
  background: url(${report});
  cursor: pointer;
`;

export default props => (
  <Box>
    <Avatar src={props.review.avatar} />
    <Name>{props.review.name}</Name>
    <Time>{props.review.time}</Time>
    <CollapsedText maxSymbols={280} expandLabel="Read more" breakReadme>
      {props.review.text}
    </CollapsedText>
    <Report />
  </Box>
);
