import React from 'react';
import styled from 'styled-components';

const Card = styled.a`color: #383838;`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const Category = styled.p`
  margin-top: 12px;
  margin-bottom: 6px;
  font-weight: bold;
  line-height: normal;
  font-size: 10px;
  text-transform: uppercase;
`;

const Title = styled.p`
  margin-top: 2px;
  margin-bottom: 6px;
  font-weight: bold;
  overflow: hidden;
  font-size: 18px;
`;
const Price = styled.p`
  font-size: 18px;
  margin-top: 4px;
  font-weight: lighter;
  opacity: 0.9;
`;
export default ({ reservation, ...props }) => (
  <Card href="/" className={props.className}>
    <Image src={reservation.image} />
    <Category>{reservation.category}</Category>
    <Title>{reservation.title}</Title>
    <Price>About ${reservation.price} per person</Price>
  </Card>
);
