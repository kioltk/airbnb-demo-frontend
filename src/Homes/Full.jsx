import React from 'react';

import styled from 'styled-components';
import GoogleMap from 'google-map-react';
import Wrap from './../Wrap';
import Navigation from './../Navigation';
import Card from './Card';
import dreamy from './dreamy.png';
import bedroom from './private.png';
import salentina from './salentina.png';
import Filters from './Filters';
import Pager from './Pager';
import Media, { DesktopOnly, isDesktop } from './../Media';
import location from './location.svg';

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
  margin-bottom: 24px;
  text-align: center;
  font-size: 16px;
  color: #636363;
`;
const MapToggler = styled.a`
  width: 40px;
  height: 40px;
  display: block;
  margin-left: auto;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.16);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 20px;
  background: url(${location});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  ${Media.md`
    position: absolute;
    right: 0;
    bottom: 0;
  `};
  ${Media.lg`
    display: none;
  `};
`;
// SC cant style GoogleMap component, so we have to create container for it
const GoogleMapContainer = styled.div`
  background: lightgrey;
  position: fixed;
  right: 0;
  top: calc(80px + 56px);
  bottom: 0;
  left: 0;

  display: ${props => (props.showingMap ? 'block' : 'none')};
  ${Media.lg`left: calc(100% / 12 * 8);display: block`};
  ${Media.xl`left: calc((1200px) / 12 * 8 + (100% - 1200px) / 2);`};
`;
const ListToggler = styled.button`
  background: white;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  position: fixed;
  bottom: 40px;
  font-size: 18px;
  border-radius: 20px;
  padding: 8px 12px 8px 32px;
  background-image: url(${location});
  background-repeat: no-repeat;
  background-position: 10px 50%;
  left: calc(50% - 60px);
  ${Media.lg`display:none;`};
`;
const Footer = styled.div`
  padding-top: 8px;
  margin-bottom: 24px;
  position: relative;
`;
export default class extends React.Component {
  state = {
    showingMap: isDesktop,
    showingList: true,
  };
  showMap = () => {
    this.setState({ showingMap: true, showingList: false });
  };
  showList = () => {
    this.setState({ showingMap: false, showingList: true });
  };

  render() {
    return (
      <div>
        <Navigation searchPlaceholder="Anywhere  ·  Homes" />
        <Filters />
        {this.state.showingMap && (
          <GoogleMapContainer showingMap={this.state.showingMap}>
            <GoogleMap
              apiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}
              defaultZoom={8}
              defaultCenter={{ lat: -34.397, lng: 150.644 }}
            />
            <ListToggler onClick={this.showList}>Open list</ListToggler>
          </GoogleMapContainer>
        )}
        {this.state.showingList && (
          <Wrap>
            <div className="col-lg-8 col-xs-12">
              <List>
                {items.map(item => <GridCard className="col-sm-6 col-xs-12" home={item} />)}
              </List>
              <Footer>
                <Pager />
                <ResultsTip>1 – 18 of 300+ Rentals</ResultsTip>
                <SearchTip>
                  Enter dates to see full pricing. Additional fees apply. Taxes may be added.
                </SearchTip>
                <MapToggler onClick={this.showMap} />
              </Footer>
            </div>
          </Wrap>
        )}
      </div>
    );
  }
}
