import React from 'react';
import styled from 'styled-components';
import Explore from './../Explore';
import Experiences from './../Experiences';
import Homes from './../Homes';
import Reservations from './../Reservations';
import Destinations from './../Destinations';
import Footer from './../Footer';
import Navigation from './../Navigation';

const Landing = styled.div`padding-top: 8px;`;
export default () => (
  <div>
    <Navigation searchPlaceholder="Try 'Miami'" />
    <Landing>
      <Explore />
      <Experiences />
      <Homes />
      <Reservations />
      <Destinations />
    </Landing>
    <Footer />
  </div>
);
