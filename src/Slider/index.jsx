import React from 'react';
import styled from 'styled-components';
import arrow from './../arrow.svg';
import Media from './../Media';

const Next = styled.a`
  position: absolute;
  top: calc(50% - 60px);
  right: -15px;
  height: 40px;
  width: 40px;
  background-color: #fff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 20px;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 25%;

  display: none;
  ${Media.md`
    display: block;
    `};
`;
const Slider = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
`;

const Container = styled.div`position: relative;`;
export default (props) => {
  const paginationButton = props.paginationEnabled ? <Next href="#" /> : '';
  return (
    <Container>
      <Slider>{props.children}</Slider>
      {paginationButton}
    </Container>
  );
};
