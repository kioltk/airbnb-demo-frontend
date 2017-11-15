import React from 'react';

import styled from 'styled-components';
import GoogleMap from 'google-map-react';
import Wrap from './../Wrap';
import Navigation from './../Navigation';
import Card from './Card';
import dreamy from './dreamy.png';
import bedroom from './private.png';
import salentina from './salentina.png';
import Header from './../Header';
import Slider from './../Slider';
import Filters from './Filters';
import Pager from './Pager';
import Media from './../Media';

const Map = styled(GoogleMap)`
  background: red;
  position: fixed;
  right: 0;
  top: calc(80px + 56px);
  bottom: 0;

  display: none;
  ${Media.lg`left: calc(100% / 12 * 8);display: block`};
  ${Media.xl`left: calc((1200px) / 12 * 8 + (100% - 1200px) / 2);`};
  
  1
`;

const items = [
  {
    image: salentina,
    price: 82,
    type: 'Entire house',
    bedsCounter: 9,
    isSuperhost: true,
    stars: 5,
    title: 'La Salentina, see, nature & relax',
    reviewsCounter: 97,
  },
  {
    image: salentina,
    price: 82,
    type: 'Entire house',
    bedsCounter: 9,
    isSuperhost: true,
    stars: 5,
    title: 'La Salentina, see, nature & relax',
    reviewsCounter: 97,
  },
  {
    image: salentina,
    price: 82,
    type: 'Entire house',
    bedsCounter: 9,
    isSuperhost: true,
    stars: 5,
    title: 'La Salentina, see, nature & relax',
    reviewsCounter: 97,
  },
  {
    image: salentina,
    price: 82,
    type: 'Entire house',
    bedsCounter: 9,
    isSuperhost: true,
    stars: 5,
    title: 'La Salentina, see, nature & relax',
    reviewsCounter: 97,
  },
  {
    image: salentina,
    price: 82,
    type: 'Entire house',
    bedsCounter: 9,
    isSuperhost: true,
    stars: 5,
    title: 'La Salentina, see, nature & relax',
    reviewsCounter: 97,
  },
  {
    image: bedroom,
    price: 82,
    type: 'Entire house',
    bedsCounter: 5,
    isSuperhost: true,
    stars: 5,
    title: 'Your private 3 bedr. riad and exclusive',
    reviewsCounter: 161,
  },
  {
    image: dreamy,
    price: 200,
    stars: 5,
    type: 'Entire house',
    bedsCounter: 1,
    isSuperhost: true,
    title: 'Dreamy Tropical Tree House',
    reviewsCounter: 364,
  },
];
const List = styled.div`
  display: flex;
  flex-flow: wrap;
  padding-top: 24px;
`;
const GridCard = styled(Card)`margin-bottom: 40px;`;
const ResultsTip = styled.p`
  font-size: 16px;
  text-align: center;
  color: #383838;
`;
const SearchTip = styled.p`
  margin-top: 40px;
  margin-bottom: 25px;
  text-align: center;
  font-size: 16px;
  color: #636363;
`;
export default () => (
  <div>
    <Navigation searchPlaceholder="Anywhere  ·  Homes" />
    <Filters />
    <div>
      <Map
        apiKey="AIzaSyC-BebC7ChnHPzxQm7DAHYFMCqR5H3Jlps"
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      />
    </div>
    <Wrap className="row">
      <div className="col-lg-8 col-xs-12">
        <List>{items.map(item => <GridCard className="col-sm-6 col-xs-12" home={item} />)}</List>
        <Pager />
        <ResultsTip>1 – 18 of 300+ Rentals</ResultsTip>
        <SearchTip>
          Enter dates to see full pricing. Additional fees apply. Taxes may be added.
        </SearchTip>
      </div>
    </Wrap>
  </div>
);
