import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import Actions from './Actions';
// import Media from "./../Media";
import Wrap from './../Wrap';

const Header = styled.div`
  background: white;
  top: 0;
  z-index: 100;
  left: 0px;
  right: 0px;
  position: fixed;
  height: 80px;
  display: flex;
  align-items: center;
  -webkit-box-shadow: 0px 1px 0px rgba(72, 72, 72, 0.3);
  -moz-box-shadow: 0px 1px 0px rgba(72, 72, 72, 0.3);
  box-shadow: 0px 1px 0px rgba(72, 72, 72, 0.3);
`;
const Box = styled.div`display: flex;`;
const HeaderOffset = styled.div`height: 100px;`;

export default () => (
  <div>
    <Header>
      <Wrap>
        <Box>
          <Logo className="col-md-1 col-xs-2" />
          <Search className="col-sm-5 col-xs-10" />
          <Actions className="col-md-5 col-md-offset-1 hidden-sm hidden-xs" />
        </Box>
      </Wrap>
    </Header>
    <HeaderOffset />
  </div>
);
