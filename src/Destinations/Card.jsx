import React from 'react';
import styled from 'styled-components';

const Card = styled.a`
  color: #383838;
  display: block;
  margin-bottom: 8px;
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const Title = styled.p`
  margin-top: 8px;
  margin-bottom: 6px;
  font-weight: bold;
  overflow: hidden;
  font-size: 18px;
`;
export default ({ destination, ...props }) => (
  <Card href="/" className={props.className}>
    <Image src={destination.image} />
    <Title>{destination.title}</Title>
  </Card>
);
