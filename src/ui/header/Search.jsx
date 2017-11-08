import React from "react";
import styled from "styled-components";
import searchIcon from "./searchIcon.svg";
import Adaptive from "./../Adaptive";

const SearchField = styled.input`
  vertical-align: middle;
  width: 100%;
  height: 100%;
  padding-left: 48px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  color: #383838;
`;

const SearchLogo = styled.img`
  left: 16px;
  top: 14px;
  width: 22px;
  heigh: 24px;
  position: absolute;
`;

const SearchBox = styled.div`
  height: 48px;
  position: relative;
  display: inline-block;

  ${Adaptive.phone`display:100%;`};
`;

export default props => {
  return (
    <SearchBox className={props.className}>
      <SearchLogo src={searchIcon} />
      <SearchField placeholder="Try &quot;Miami&quot;" />
    </SearchBox>
  );
};
