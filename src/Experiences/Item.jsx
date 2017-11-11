import React from 'react';
import styled from 'styled-components';
import Stars from './../Stars';

const Item = styled.a`color: #383838;`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const ItemTitle = styled.div`
  margin-top: 8px;
  margin-bottom: 6px;
`;
const Price = styled.span`font-weight: bold;`;
const ReviewsCounter = styled.span`margin-left: 4px;`;
export default props => (
  <Item href="#" className={props.className}>
    <Image src={props.imageSrc} />
    <ItemTitle>
      <Price>{props.price} </Price>
      {props.title}
    </ItemTitle>
    <Stars stars={props.stars} />
    <ReviewsCounter>{props.reviewsCounter} reviews</ReviewsCounter>
  </Item>
);
