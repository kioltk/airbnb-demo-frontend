import React from 'react';
import Wrap from './../Wrap';
import Item from './Item';
import forest from './forest.png';
import mountain from './mountain.png';
import salsa from './salsa.png';
import whale from './whale.png';
import Header from './../Header';
import Slider from './../Slider';

const items = [
  {
    image: forest,
    price: '$29',
    stars: 5,
    title: 'Forest therapy',
    reviewsCounter: 44,
  },
  {
    image: whale,
    price: '$69',
    stars: 5,
    title: 'Whale watching',
    reviewsCounter: 46,
  },
  {
    image: mountain,
    price: '$69',
    stars: 5,
    title: 'Table Mountain Summit, Cable Car Down',
    reviewsCounter: 44,
  },
  {
    image: salsa,
    price: '$69',
    stars: 5,
    title: 'Salsa Night',
    reviewsCounter: 44,
  },
];

export default () => (
  <Wrap>
    <Header link="#">Experiences</Header>
    <Slider paginationEnabled>
      {items.map(item => (
        <Item
          className="col-md-3 col-sm-4 col-xs-6"
          imageSrc={item.image}
          title={item.title}
          stars={item.stars}
          price={item.price}
          reviewsCounter={item.reviewsCounter}
        />
      ))}
    </Slider>
  </Wrap>
);
