import React from 'react';
import styled from 'styled-components';
import Wrap from './../Wrap';
import List from './List';
import Localizations from './Localizations';
import Copyright from './Copyright';

const Footer = styled.div`
  box-shadow: 0px -1px 0px rgba(72, 72, 72, 0.3);
  margin-top: 64px;
`;
const Box = styled.div`display: flex;`;
const lists = {
  about: {
    title: 'Airbnb',
    items: [
      { title: 'About us', link: '#' },
      { title: 'Careers', link: '#' },
      { title: 'Press', link: '#' },
      { title: 'Policies', link: '#' },
      { title: 'Help', link: '#' },
      { title: 'Diversity & Belonging', link: '#' },
    ],
  },
  discover: {
    title: 'Discover',
    items: [
      { title: 'Trust & Safety', link: '#' },
      { title: 'Travel Credit', link: '#' },
      { title: 'Gift Cards', link: '#' },
      { title: 'Airbnb Citizen', link: '#' },
      { title: 'Business Travel', link: '#' },
      { title: 'Guidebooks', link: '#' },
      { title: 'Airbnbmag', link: '#' },
    ],
  },
  hosting: {
    title: 'Hosting',
    items: [
      { title: 'Why Host', link: '#' },
      { title: 'Hospitality', link: '#' },
      { title: 'Responsible Hosting', link: '#' },
      { title: 'Community Center', link: '#' },
    ],
  },
};

export default () => (
  <Footer>
    <Wrap>
      <Box>
        <Localizations className="col-sm-3 col-xs-12 row" />
        <List className="col-sm-2 col-sm-offset-1 hidden-xs" list={lists.about} />
        <List className="col-sm-2 col-sm-offset-1 hidden-xs" list={lists.discover} />
        <List className="col-sm-2 col-sm-offset-1 hidden-xs" list={lists.hosting} />
      </Box>
      <Copyright />
    </Wrap>
  </Footer>
);
