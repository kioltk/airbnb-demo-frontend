import React from 'react';
import styled from 'styled-components';
import Media from './../../../Media';
import plus from './plus.svg';
import minus from './minus.svg';

const Box = styled.div`
  padding: 16px 22px;
  ${Media.sm`
    min-width: 326px;
  `};
`;

const Title = styled.p`
  margin-top: 18px;
  margin-bottom: 0;
  font-size: 20px;
`;

const SubTitle = styled.p`
  margin-top: 8px;
  margin-bottom: 0;
  font-size: 16px;
  font-weight: lighter;
`;

const Button = styled.button`
  border: 1px solid #008489;
  box-sizing: border-box;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  &:disabled {
    opacity: 0.5;
  }
`;

const Counter = styled.span`
  font-size: 18px;
  font-weight: lighter;
  vertical-align: middle;
  width: 50px;
  line-height: 32px;
  text-align: center;
`;

const Controls = styled.div`
  display: flex;
  margin-top: 18px;
  justify-content: flex-end;
`;

export default props => (
  <Box>
    <div className="row">
      <div className="col-xs">
        <Title>Adults</Title>
      </div>
      <Controls className="col-xs">
        <Button
          disabled={props.adults === 0}
          onClick={() => props.decrease('adults')}
          image={minus}
        />
        <Counter>{props.adults}</Counter>
        <Button
          disabled={props.adults === 10}
          onClick={() => props.increase('adults')}
          image={plus}
        />
      </Controls>
    </div>
    <div className="row">
      <div className="col-xs">
        <Title>Children</Title>
        <SubTitle>Ages 2 — 12</SubTitle>
      </div>
      <Controls className="col-xs">
        <Button
          disabled={props.children === 0}
          onClick={() => props.decrease('children')}
          image={minus}
        />
        <Counter>{props.children}</Counter>
        <Button
          disabled={props.children === 10}
          onClick={() => props.increase('children')}
          image={plus}
        />
      </Controls>
    </div>
    <div className="row">
      <div className="col-xs">
        <Title>Infants</Title>
        <SubTitle>Under 2</SubTitle>
      </div>
      <Controls className="col-xs">
        <Button
          disabled={props.infants === 0}
          onClick={() => props.decrease('infants')}
          image={minus}
        />
        <Counter>{props.infants}</Counter>
        <Button
          disabled={props.infants === 10}
          onClick={() => props.increase('infants')}
          image={plus}
        />
      </Controls>
    </div>
  </Box>
);
