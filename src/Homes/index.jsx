import React from 'react';
import Wrap from './../Wrap';
import Item from './Item';
import dreamy from './dreamy.png';
import bedroom from './private.png';
import salentina from './salentina.png';
import Header from './../Header';
import Slider from './../Slider';

export default () => {
  const items = [
    {
      image: salentina,
      price: '$82',
      type: 'Entire house',
      bedsCounter: 9,
      isSuperhost: true,
      stars: 5,
      title: 'La Salentina, see, nature & relax',
      reviewsCounter: 97,
    },
    {
      image: bedroom,
      price: '$82',
      type: 'Entire house',
      bedsCounter: 5,
      isSuperhost: true,
      stars: 5,
      title: 'Your private 3 bedr. riad and exclusive',
      reviewsCounter: 161,
    },
    {
      image: dreamy,
      price: '$200',
      stars: 5,
      type: 'Entire house',
      bedsCounter: 1,
      isSuperhost: true,
      title: 'Dreamy Tropical Tree House',
      reviewsCounter: 364,
    },
  ];

  return (
    <Wrap>
      <Header link="#">Homes</Header>
      <Slider paginationEnabled>
        {items.map(item => <Item className="col-md-4 col-sm-5 col-xs-8" home={item} />)}
      </Slider>
    </Wrap>
  );
};
