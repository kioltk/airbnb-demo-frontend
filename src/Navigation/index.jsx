import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import Actions from './Actions';
import Wrap from './../Wrap';

const Navigation = styled.nav`
  background: white;
  top: 0;
  z-index: 10;
  left: 0px;
  right: 0px;
  position: fixed;
  height: 80px;
  display: flex;
  align-items: center;

  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
`;

const Box = styled.div`display: flex;`;

const Offset = styled.div`height: 80px;`;

export default ({ searchPlaceholder, ...props }) => (
  <div>
    <Offset>
      <Navigation>
        <Wrap>
          <Box>
            <Logo className="col-sm-1 col-xs-2" />
            <Search placeholder={searchPlaceholder} className="col-sm-5 col-xs-10" />
            <Actions className="col-lg-5 col-lg-offset-1 hidden-sm hidden-xs" />
          </Box>
        </Wrap>
      </Navigation>
    </Offset>
    {props.children}
  </div>
);
