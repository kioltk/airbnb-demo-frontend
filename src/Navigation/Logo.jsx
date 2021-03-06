import React from 'react';
import styled from 'styled-components';
import appLogo from './appLogo.svg';
import arrow from './arrow.svg';
import Media from './../Media';
import { Link as ReactLink } from 'react-router-dom';

const Logo = styled.img`
  width: 30px;
  height: 32px;
  vertical-align: middle;
`;
const Link = styled(ReactLink)`
  flex-wrap: nowrap;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  &:after {
    display: inline-block;
    width: 10px;
    height: 10px;
    content: ' ';
    background: url(${arrow}) no-repeat;
  }
  ${Media.lg`&:after{display: none;}`};
`;
const Box = styled.div`
  display: flex;
  align-items: center;
`;

export default props => (
  <Box className={props.className}>
    <Link to="/">
      <Logo src={appLogo} />
    </Link>
  </Box>
);
