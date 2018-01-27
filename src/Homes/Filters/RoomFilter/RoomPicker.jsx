import React from 'react';
import styled from 'styled-components';
import Filter from './../Filter';
import entire from './entire.svg';
import shared from './shared.svg';
import privateRoom from './private.svg';
import OriginalCheckBox from './../../../UIKit/CheckBox';

const Box = styled.div`
  padding-top: 16px;
`;

const Title = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: lighter;
`;

const Subtitle = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 12px;
  width: 226px;
  font-weight: lighter;
`;

const Icon = styled.img``;
const CheckBox = styled(OriginalCheckBox)`
  margin-right: 12px;
  cursor: pointer;
`;

const Type = styled.div`
  width: 100%;
  display: flex;
  padding: 8px 16px 8px 16px;
  align-items: top;
  cursor: pointer;
`;

export default props => (
  <Box>
    <Type onClick={() => props.toggleSelection('selectedEntire')}>
      <CheckBox checked={props.selectedEntire} />
      <div>
        <Title>Entire home</Title>
        <Subtitle>Have a place to yourself</Subtitle>
      </div>
      <Icon src={entire} />
    </Type>
    <Type onClick={() => props.toggleSelection('selectedPrivateRoom')}>
      <CheckBox checked={props.selectedPrivateRoom} />
      <div>
        <Title>Private room</Title>
        <Subtitle>Have your own room and share some common spaces</Subtitle>
      </div>
      <Icon src={privateRoom} />
    </Type>
    <Type onClick={() => props.toggleSelection('selectedShared')}>
      <CheckBox checked={props.selectedShared} />
      <div>
        <Title>Shared room</Title>
        <Subtitle>Stay in a shared space, like a common room</Subtitle>
      </div>
      <Icon src={shared} />
    </Type>
  </Box>
);
