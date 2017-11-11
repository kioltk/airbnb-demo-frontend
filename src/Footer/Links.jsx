import React from 'react';
import styled from 'styled-components';
import Media from './../Media';
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';

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
export default props => (
  <Links className={props.className}>
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
);
