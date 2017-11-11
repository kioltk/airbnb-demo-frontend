import 'normalize.css';
import 'flexboxgrid2';
import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Explore from './Explore';
import Experiences from './Experiences';
import Homes from './Homes';
import Reservations from './Reservations';
import Destinations from './Destinations';
import Footer from './Footer';

export default () => (
  <div className="App">
    <Navigation />
    <Explore />
    <Experiences />
    <Homes />
    <Reservations />
    <Destinations />
    <Footer />
  </div>
);
