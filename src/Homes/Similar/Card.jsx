import React from 'react';
import styled from 'styled-components';
import Stars from './../../Stars';
import like from './like.svg';

const Card = styled.a`
  color: #383838;
  display: block;
  margin-bottom: 8px;
  position: relative;
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const Title = styled.p`
  margin-top: 4px;
  margin-bottom: 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: bold;
`;

const Description = styled.p`
  margin-top: 12px;
  margin-bottom: 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: bold;
  font-size: 10px;
  text-transform: uppercase;
  ${props => props.matches && 'color:#8D1F13'};
`;
const Price = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: lighter;
`;
const ReviewsCounter = styled.span`
  margin-left: 4px;
  font-size: 12px;
`;
const Rating = styled.p`
  margin: 0;
  margin-top: 6px;
`;
const New = styled.p`
  margin: 0;
  margin-top: 4px;
  font-size: 12px;
  text-transform: uppercase;
  display: inline-block;
  background: #008489;
  border-radius: 2px;
  padding: 6px;
  color: white;
`;
const Like = styled.img`
  position: absolute;
  right: 16px;
  top: 8px;
`;

export default ({ home, ...props }) => (
  <Card to={`/homes/${home.id}`} className={props.className}>
    <Image src={home.image} />
    <Like src={like} />
    <Description matches={home.matches}>
      {home.type} · {home.bedsCounter} {home.bedsCounter === 1 ? 'bed' : 'beds'}
    </Description>
    <Title>{home.title}</Title>

    <Price>${home.price} per night</Price>

    {home.reviewsCounter > 0 ? (
      <Rating>
        <Stars stars={home.stars} />
        <ReviewsCounter>
          {home.reviewsCounter} {home.isSuperhost ? '· Superhost' : ''}
        </ReviewsCounter>
      </Rating>
    ) : (
      <New>new</New>
    )}
  </Card>
);
