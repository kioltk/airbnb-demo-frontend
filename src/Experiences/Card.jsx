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
  font-weight: lighter;
`;
const Price = styled.span`font-weight: bold;`;
const ReviewsCounter = styled.span`margin-left: 4px;`;
const Rating = styled.p`margin: 0;`;
export default ({ experience, ...props }) => (
  <Card href="/" className={props.className}>
    <Image src={experience.image} />
    <Title>
      <Price>${experience.price} </Price>
      {experience.title}
    </Title>
    <Rating>
      <Stars stars={experience.stars} />
      <ReviewsCounter>{experience.reviewsCounter} reviews</ReviewsCounter>
    </Rating>
  </Card>
);
