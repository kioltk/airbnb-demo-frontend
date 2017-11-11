import React from 'react';
import styled from 'styled-components';

const Item = styled.a`color: #383838;`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const Category = styled.div`
  margin-top: 12px;
  margin-bottom: 6px;
  font-weight: bold;
  line-height: normal;
  font-size: 10px;
  text-transform: uppercase;
`;

const Title = styled.div`
  margin-top: 2px;
  margin-bottom: 6px;
  font-weight: bold;
  overflow: hidden;
  font-size: 18px;
`;
const Price = styled.div`
  font-size: 18px;
  margin-top: 4px;
`;
export default (props) => {
  const reservation = props.reservation;
  return (
    <Item href="#" className={props.className}>
      <Image src={reservation.image} />
      <Category>{reservation.category}</Category>
      <Title>{reservation.title}</Title>
      <Price>About {reservation.price} per person</Price>
    </Item>
  );
};
