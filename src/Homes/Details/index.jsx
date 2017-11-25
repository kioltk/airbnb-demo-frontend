import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import Navigation from './../../Navigation';
import Splash from './Splash';
import Anchors from './Anchors';
import Overview from './Overview';
import Reviews from './Reviews';
import AboutHost from './AboutHost';
import Similar from './../Similar';
import Related from './Related';
import Footer from './../../Footer';

export default class extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Navigation searchPlaceholder="Search" />
        <StickyContainer>
          <Sticky topOffset={10}>
            {({
              style,

              // the following are also available but unused in this example
              isSticky,
              wasSticky,
              distanceFromTop,
              distanceFromBottom,
              calculatedHeight,
            }) => <div style={style}>I AM STICKY</div>}
          </Sticky>
        </StickyContainer>
        <Splash />
        <Anchors />
        <Overview />
        <Reviews />
        <AboutHost />
        <Similar />
        <Related />
        <Footer />
      </div>
    );
  }
}
