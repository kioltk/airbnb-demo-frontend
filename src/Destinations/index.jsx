import React from 'react';
import Wrap from './../Wrap';
import Item from './Item';
import miami from './miami.png';
import paris from './paris.png';
import seoul from './seoul.png';
import tokyo from './tokyo.png';
import losAngeles from './losAngeles.png';
import capeTown from './capeTown.png';
import Header from './../Header';
import Slider from './../Slider';

export default () => {
  const items = [
    {
      image: paris,
      title: 'Paris',
    },
    {
      image: miami,
      title: 'Miami',
    },
    {
      image: tokyo,
      title: 'Tokyo',
    },
    {
      image: capeTown,
      title: 'Cape Town',
    },
    {
      image: seoul,
      title: 'Seoul',
    },
    {
      image: losAngeles,
      title: 'Los Angeles',
    },
  ];

  return (
    <Wrap>
      <Header link="#">Featured destinations</Header>
      <Slider paginationEnabled>
        {items.map(item => <Item className="col-md-2 col-sm-3 col-xs-4" destination={item} />)}
      </Slider>
    </Wrap>
  );
};
