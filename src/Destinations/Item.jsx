import React from 'react';
import styled from 'styled-components';

const Item = styled.a`color: #383838;`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const Title = styled.div`
  margin-top: 8px;
  margin-bottom: 6px;
  font-weight: bold;
  overflow: hidden;
  font-size: 18px;
`;
export default (props) => {
  const destination = props.destination;
  return (
    <Item href="#" className={props.className}>
      <Image src={destination.image} />
      <Title>{destination.title}</Title>
    </Item>
  );
};
