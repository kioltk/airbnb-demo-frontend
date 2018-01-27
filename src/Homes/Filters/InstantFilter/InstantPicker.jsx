import React from 'react';
import styled from 'styled-components';
import Switch from './../../../UIKit/Switch';

const Box = styled.div`
  display: flex;
  padding: 24px 16px;
`;

const Title = styled.p`
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 4px;
`;

const Description = styled.p`
  margin: 0;
  width: 200px;
  font-size: 14px;
  font-weight: lighter;
`;

export default props => (
  <Box>
    <div>
      <Title>Instant Book</Title>
      <Description>Listings you can book without waiting for host approval.</Description>
    </div>
    <div>
      <Switch checked={props.checked} onClick={props.toggleCheck} />
    </div>
  </Box>
);
