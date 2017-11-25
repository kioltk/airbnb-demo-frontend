import React from 'react';
import styled from 'styled-components';
import Stars from './../Stars';

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
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: bold;
`;

const Description = styled.p`
  margin-top: 8px;
  margin-bottom: 6px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: lighter;
`;
const Price = styled.span``;
const ReviewsCounter = styled.span`
  margin-left: 4px;
`;
const Rating = styled.p`
  margin: 0;
`;
export default ({ home, ...props }) => (
  <Card href={`/homes/${home.id}`} className={props.className}>
    <Image src={home.image} />
    <Title>
      <Price>${home.price} </Price>
      {home.title}
    </Title>
    <Description>
      {home.type} · {home.bedsCounter} {home.bedsCounter === 1 ? 'bed' : 'beds'}
    </Description>
    <Rating>
      <Stars stars={home.stars} />
      <ReviewsCounter>
        {home.reviewsCounter} {home.isSuperhost ? '· Superhost' : 'reviews'}
      </ReviewsCounter>
    </Rating>
  </Card>
);
