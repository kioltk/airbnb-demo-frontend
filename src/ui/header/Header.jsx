import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Search from "./Search";
import Navigation from "./Navigation";
import Adaptive from "./../Adaptive";
import Wrap from "./../Wrap";
const Header = styled.div`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 80px;
  display: flex;
  align-items: center;
  -webkit-box-shadow: 0px 1px 0px rgba(72, 72, 72, 0.3);
  -moz-box-shadow: 0px 1px 0px rgba(72, 72, 72, 0.3);
  box-shadow: 0px 1px 0px rgba(72, 72, 72, 0.3);
`;

export default () => {
  return (
    <Header>
      <Wrap className="row">
        <Logo className="col-lg-1 col-md-1 col-s-1 col-xs-2" />
        <Search className="col-lg-5 col-md-5 col-xs-10" />
        <Navigation className="col-md-5 col-md-offset-1 col-s-hidden" />
      </Wrap>
    </Header>
  );
};
