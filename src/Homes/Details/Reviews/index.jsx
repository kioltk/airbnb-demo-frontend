import React from 'react';
import styled from 'styled-components';
import { Box, Header as OriginalHeader } from './../styled';
import Wrap from './../../../Wrap';
import Media from './../../../Media';
import Stars from './../../../Stars';
import search from './search.svg';
import marlee from './marlee.png';
import michelle from './michelle.png';
import Review from './Review';
import OriginalPager from './../../../Pager';

const HeaderStars = styled(Stars)`
  height: 16px;
  margin-left: 12px;
  ${Media.sm`
    height: 18px;
    margin-left:16px;
  `};
`;
const Search = styled.input`
  width: 100%;
  padding: 0px 7px 0px 40px;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 2px;
  color: #383838;
  height: 40px;
  font-size: 14px;
  background-image: url(${search});
  background-position: 12px 50%;
  background-repeat: no-repeat;
  margin-top: 16px;
  ${Media.sm`
    padding-left: 32px;
    margin-top: 4px;
    position: absolute;
    right: 0;
    width: auto;
    height:32px;
    background-position: 10px 50%;
  `};
  &::placeholder {
    color: #383838;
  }
`;

const Header = styled(OriginalHeader)`
  position: relative;
  margin-bottom: 24px;
`;
const Summary = styled.div`
  position: relative;
  margin-top: 16px;
  font-size: 18px;
  font-weight: lighter;
`;
const SummaryStars = styled(Stars)`
  position: absolute;
  right: 0;
  height: 16px;
`;
const Pager = styled(OriginalPager)`
  margin-top: 24px;
  margin-bottom: 48px;
`;

export default class extends React.Component {
  state = {
    reviews: [
      {
        name: 'Marlee',
        avatar: marlee,
        time: 'November 2017',
        text:
          'This was one of my favourite places we stayed in all on Colombia. A very peaceful setting and a great spot to unwind.',
      },
      {
        name: 'Michelle',
        avatar: michelle,
        time: 'November 2017',
        text:
          'What an absolutely wonderful place to stay! Yudy and Victoria were so kind and lovely, even after we arrived super late due to problems at the airport, and Hernando our driver was super friendly and really patient with our little Spanish. Victoria was a lovely host and gave us so fucking elepsized text',
      },
    ],
  };
  render() {
    return (
      <Wrap className="col-xs-12 col-lg-8">
        <Box>
          <Header>
            113 Reviews<HeaderStars stars={5} />
            <Search placeholder="Search reviews" />
          </Header>
          <div className="row">
            <Summary className="col-sm-6 col-xs-12">
              Accuracy<SummaryStars stars={5} />
            </Summary>
            <Summary className="col-sm-6 col-xs-12">
              Communication<SummaryStars stars={5} />
            </Summary>
            <Summary className="col-sm-6 col-xs-12">
              Cleanliness<SummaryStars stars={5} />
            </Summary>
            <Summary className="col-sm-6 col-xs-12">
              Location<SummaryStars stars={5} />
            </Summary>
            <Summary className="col-sm-6 col-xs-12">
              Check In<SummaryStars stars={5} />
            </Summary>
            <Summary className="col-sm-6 col-xs-12">
              Value<SummaryStars stars={5} />
            </Summary>
          </div>
        </Box>
        {this.state.reviews.map(review => <Review review={review} />)}
        <Pager />
      </Wrap>
    );
  }
}
