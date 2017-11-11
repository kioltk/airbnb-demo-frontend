import React from 'react';
import homes from './homes@2x.png';
import restaurants from './restaurants.png';
import experiences from './experiences@2x.png';
import Wrap from './../Wrap';
import Header from './../Header';
import Slider from './../Slider';
import Card from './Card';

const items = [
  { picture: homes, title: 'Homes' },
  { picture: experiences, title: 'Experiences' },
  { picture: restaurants, title: 'Restaurants' },
];

export default () => (
  <Wrap>
    <Header>Explore Aribnb</Header>
    <Slider>
      {items.map(item => <Card explore={item} className="col-md-4 col-sm-5 col-xs-6" />)}
    </Slider>
  </Wrap>
);
