import React from 'react';
import styled from 'styled-components';
import searchIcon from './search-icon.svg';
import Media from './../Media';

const SearchField = styled.input`
  vertical-align: middle;
  width: 100%;
  height: 100%;

  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  color: #383838;
  padding-left: 48px;
  &::placeholder {
    color: #383838;
  }
  ${Media.sm`padding-left: 54px;`};
`;

const SearchLogo = styled.img`
  left: 20px;
  ${Media.sm`left: 24px;`};
  top: 14px;
  width: 22px;
  heigh: 24px;
  position: absolute;
`;

const SearchBox = styled.div`
  height: 48px;
  position: relative;
  display: inline-block;

  ${Media.xs`display:100%;`};
`;

export default ({ placeholder, ...props }) => (
  <SearchBox className={props.className}>
    <SearchLogo src={searchIcon} />
    <SearchField placeholder={placeholder} />
  </SearchBox>
);
