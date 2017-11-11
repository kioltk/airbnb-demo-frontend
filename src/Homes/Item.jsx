import React from 'react';
import styled from 'styled-components';
import Stars from './../Stars';

const Item = styled.a`color: #383838;`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const Title = styled.div`
  margin-top: 8px;
  margin-bottom: 6px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: bold;
`;

const Description = styled.div`
  margin-top: 8px;
  margin-bottom: 6px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: lighter;
`;
const Price = styled.span``;
const ReviewsCounter = styled.span`margin-left: 4px;`;
export default (props) => {
  const home = props.home;
  return (
    <Item href="#" className={props.className}>
      <Image src={home.image} />
      <Title>
        <Price>{home.price} </Price>
        {home.title}
      </Title>
      <Description>
        {home.type} · {home.bedsCounter} {home.bedsCounter === 1 ? 'bed' : 'beds'}
      </Description>
      <Stars stars={home.stars} />
      <ReviewsCounter>
        {home.reviewsCounter} {home.isSuperhost ? '· Superhost' : 'reviews'}
      </ReviewsCounter>
    </Item>
  );
};
