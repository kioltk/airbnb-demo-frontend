import React from 'react';
import Wrap from './../Wrap';
import Card from './Card';
import german from './german.png';
import korean from './korean.png';
import seafood from './seafood.png';
import speakeasy from './speakeasy.png';
import Header from './../Header';
import Slider from './../Slider';

const items = [
  {
    image: speakeasy,
    price: 60,
    category: 'Speakeasy',
    title: 'Chumley’s',
  },
  {
    image: korean,
    price: 50,
    category: 'Korean gastropub',
    title: 'Hanjan',
  },
  {
    image: german,
    price: 55,
    category: 'German american',
    title: 'Prime Meats',
  },
  {
    image: seafood,
    price: 70,
    category: 'Fine seafood',
    title: 'Seaprice',
  },
];

export default () => (
  <Wrap>
    <Header link="#">Popular reservations around the world</Header>
    <Slider paginationEnabled>
      {items.map(item => <Card className="col-lg-3 col-sm-4 col-xs-6" reservation={item} />)}
    </Slider>
  </Wrap>
);
