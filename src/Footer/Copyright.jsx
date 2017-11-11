import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import Media from './../Media';
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';

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
const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 11px;
  ${Media.sm`
    margin-top: 0px;
    justify-content: flex-end;
  `};
`;
const Link = styled.a`
  margin-right: 12px;
  line-height: normal;
  font-size: 15px;
  color: #636363;
`;
const Social = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  ${Media.sm`margin-right: 16px;`};
`;
const Instagram = Social.extend`
  width: 20px;
  height: 20px;
  border: 1px solid #636363;
  border-radius: 6px;
`;
export default () => (
  <Box>
    <Copyright className="col-xs-4">
      <Logo src={logo} />
      <span>© Airbnb Inc.</span>
    </Copyright>
    <Links className="col-xs">
      <Link href="#">Terms</Link>
      <Link href="#">Privacy</Link>
      <Link href="#">Site map</Link>
      <a href="#">
        <Social src={facebook} />
      </a>
      <a href="#">
        <Social src={twitter} />
      </a>
      <a href="#">
        <Instagram src={instagram} />
      </a>
    </Links>
  </Box>
);
