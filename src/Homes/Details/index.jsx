import React from 'react';
import styled from 'styled-components';
import Navigation from './../../Navigation';
import Splash from './Splash';
import Anchors from './Anchors';
import Overview from './Overview';
import Reviews from './Reviews';
import AboutHost from './AboutHost';
import Similar from './../Similar';
import Related from './Related';
import Footer from './../../Footer';
import Location from './Location';
import OriginalWrap from './../../Wrap';
import Booking from './Booking';

const Wrap = styled(OriginalWrap)`
  display: flex;
`;

export default class extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Navigation searchPlaceholder="Search" />
        <Splash />
        <Wrap>
          <div className="col-xs col-lg-8">
            <Anchors />
            <Overview />
            <Reviews />
            <AboutHost />
          </div>
          <div className="col-lg-4">
            <Booking />
          </div>
        </Wrap>
        <Location />
        <Similar />
        <Related />
        <Footer />
      </div>
    );
  }
}
