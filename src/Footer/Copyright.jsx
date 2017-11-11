import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import Media from './../Media';
import Links from './Links';

const Logo = styled.img`
  width: 20px;
  height: 30px;
  margin-right: 12px;
`;
const Copyright = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #636363;
`;
const Box = styled.div`
  padding-bottom: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(72, 72, 72, 0.08);
  display: block;
  ${Media.sm`
    display: flex;
    padding-top: 36px;
    padding-bottom: 46px;
  `};
`;
export default () => (
  <Box>
    <Copyright className="col-xs-4">
      <Logo src={logo} />
      <span>© Airbnb Inc.</span>
    </Copyright>
    <Links className="col-xs" />
  </Box>
);
