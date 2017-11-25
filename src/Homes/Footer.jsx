import React from 'react';
import styled from 'styled-components';
import Pager from './../Pager';
import location from './location.svg';
import Media from './../Media';

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

const Footer = styled.div`
  padding-top: 8px;
  margin-bottom: 24px;
  position: relative;
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

export default ({ onMapToggle, ...props }) => (
  <Footer>
    <Pager />
    <ResultsTip>1 – 18 of 300+ Rentals</ResultsTip>
    <SearchTip>
      Enter dates to see full pricing. Additional fees apply. Taxes may be added.
    </SearchTip>
    <MapToggler onClick={onMapToggle} />
  </Footer>
);
