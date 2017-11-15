import React from 'react';
import styled from 'styled-components';
import Wrap from './../../Wrap';
import Media from './../../Media';

const Fixed = styled.div`
  box-shadow: 0px 1px 0px rgba(72, 72, 72, 0.3);
  position: fixed;
  right: 0;
  left: 0;
  top: 80px;
  background: white;
`;
const Button = styled.a`
  padding: 7px 16px;
  margin-right: 12px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  color: #383838;
`;
const Box = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
`;
const Offset = styled.div`height: 56px;`;
const Filters = () => (
  <Offset>
    <Fixed>
      <Wrap className="col-xs">
        <Box>
          <Button href="#">Dates</Button>
          <Button href="#">Guests</Button>
          <Button className="hidden-md hidden-sm hidden-xs" href="#">
            Room type
          </Button>
          <Button className="hidden-md hidden-sm hidden-xs" href="#">
            Price
          </Button>
          <Button className="hidden-md hidden-sm hidden-xs" href="#">
            Instant book
          </Button>
          <Button href="#">More filters</Button>
        </Box>
      </Wrap>
    </Fixed>
  </Offset>
);
export default Filters;
