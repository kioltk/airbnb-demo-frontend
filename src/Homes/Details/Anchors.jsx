import React from 'react';
import styled from 'styled-components';
import Wrap from './../../Wrap';

const Anchor = styled.a`
  margin: 16px 0px;
  display: inline-block;
  color: #0f7276;
  font-size: 14px;
  ${props => props.active && 'color:#383838; font-weight:bold'};
`;
const Divider = styled.span`
  display: inline-block;
  margin-left: 8px;
  margin-right: 8px;
`;
// const anchors = ['Overview', 'Reviews', 'The Host', 'Location'];
// const StickyWrap = styled(Wrap)``;
const Sticky = styled.div`
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
  display: flex;
  align-items: center;
`;
export default props => (
  <Wrap className="col-xs-12 col-sm-10 col-lg-8">
    <Sticky>
      <Anchor active href="#">
        Overview
      </Anchor>
      <Divider>·</Divider>
      <Anchor href="#">Reviews</Anchor>
      <Divider>·</Divider>
      <Anchor href="#">The Host</Anchor>
      <Divider>·</Divider>
      <Anchor href="#">Location</Anchor>
    </Sticky>
  </Wrap>
);
