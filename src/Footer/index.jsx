import React from 'react';
import styled from 'styled-components';
import Wrap from './../Wrap';
import Localizations from './Localizations';
import Copyright from './Copyright';

const Footer = styled.div`
  border-top: 0.5px solid rgba(72, 72, 72, 0.3);
  margin-top: 48px;
`;
const Box = styled.div`
  display: flex;
`;

const List = styled.div`
  padding-bottom: 48px;
`;
const Title = styled.p`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: #383838;
`;
const Link = styled.a`
  display: block;
  margin-top: 8px;
  font-size: 15px;
  color: #636363;
`;

export default () => (
  <Footer>
    <Wrap>
      <Box>
        <Localizations className="col-sm-3 col-xs-12 row" />
        <List className="col-sm-2 col-sm-offset-1 hidden-xs">
          <Title>Airbnb</Title>
          <Link href="/">About us</Link>
          <Link href="/">Careers</Link>
          <Link href="/">Press</Link>
          <Link href="/">Policies</Link>
          <Link href="/">Help</Link>
          <Link href="/">Diversity & Belonging</Link>
        </List>
        <List className="col-sm-2 col-sm-offset-1 hidden-xs">
          <Title>Discover</Title>
          <Link href="/">Trust & Safety</Link>
          <Link href="/">Travel Credit</Link>
          <Link href="/">Gift Cards</Link>
          <Link href="/">Airbnb Citizen</Link>
          <Link href="/">Business Travel</Link>
          <Link href="/">Guidebooks</Link>
          <Link href="/">Airbnbmag</Link>
        </List>
        <List className="col-sm-2 col-sm-offset-1 hidden-xs">
          <Title>Hosting</Title>
          <Link href="/">Why Host</Link>
          <Link href="/">Hospitality</Link>
          <Link href="/">Responsible Hosting</Link>
          <Link href="/">Community Center</Link>
        </List>
      </Box>
      <Copyright />
    </Wrap>
  </Footer>
);
