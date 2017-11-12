import React from 'react';
import styled from 'styled-components';
import Media from './../Media';
import Selector from './Selector';

const Box = styled.div`
  display: flex;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 24px;
  ${Media.sm`
    display:block;
    padding-top:48px;
    margin-bottom: 16px;
  `};
`;

export default props => (
  <Box className={props.className}>
    <Selector className="col-sm col-xs-6">
      <option>English</option>
    </Selector>
    <Selector className="col-sm col-xs-6">
      <option>United States Dollar</option>
    </Selector>
  </Box>
);
