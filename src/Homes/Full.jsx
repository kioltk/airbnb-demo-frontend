import React from 'react';

import styled from 'styled-components';
import Wrap from './../Wrap';
import Navigation from './../Navigation';
import Card from './Card';
import dreamy from './dreamy.png';
import bedroom from './private.png';
import salentina from './salentina.png';
import Filters from './Filters';
import { isDesktop } from './../Media';
import Footer from './Footer';
import GoogleMap from './GoogleMap';

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

export default class extends React.Component {
  state = {
    showingMap: isDesktop(),
    showingList: true,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.onResize);
  }

  onResize = (windowSize) => {
    if (this.state.showingMap && this.state.showingList && !isDesktop()) {
      this.showList();
    }

    if ((!this.state.showingMap || !this.state.showingList) && isDesktop()) {
      this.setState({ showingMap: true, showingList: true });
    }
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

        {this.state.showingMap && <GoogleMap onListToggle={this.showList} />}

        {this.state.showingList && (
          <Wrap className="row">
            <div className="col-xs-12 col-lg-8">
              <List>
                {items.map(item => <GridCard className="col-xs-12 col-sm-6" home={item} />)}
              </List>
              <Footer onMapToggle={this.showMap} />
            </div>
          </Wrap>
        )}
      </div>
    );
  }
}
