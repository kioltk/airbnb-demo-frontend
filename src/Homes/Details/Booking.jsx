import React from 'react';
import styled from 'styled-components';
import { StickyContainer as OriginalStickyContainer, Sticky } from 'react-sticky';
import Stars from './../../Stars';
import arrow from './arrow-down.svg';
import mind from './mind.png';
import flag from './flag.svg';
import close from './close.svg';
import Media, { isDesktop, DesktopOnly, NotDesktop } from './../../Media';

const StickyContainer = styled(OriginalStickyContainer)`
  height: calc(100% - 180px);
`;
const Box = styled.div`
  background: #ffffff;
  box-sizing: border-box;
  overflow: auto;

  ${props => props.isSticky && 'margin-top:104px;'};

  overflow: auto;
  width: 100%;
  height: 100%;
  padding: inherit;
  padding-top: 8px;
  ${Media.sm`
    padding: 16px;
    width: auto;
    height: auto;
    border: 1px solid rgba(118, 118, 118, 0.2);
  `};
  ${Media.lg`
    margin-top: 24px;
    padding: 14px 24px 24px 24px;
  `};
`;
const Container = styled.div`
  ${Media.lg`height: 100%;`};
`;
const Price = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-right: 4px;
`;
const PriceHolder = styled.p`
  font-size: 12px;
  color: #636363;
`;
const RatingHolder = styled.p`
  font-size: 12px;
`;
const Divider = styled.div`
  background: #767676;
  mix-blend-mode: normal;
  opacity: 0.2;
  height: 1px;
  margin-top: 24px;
  margin-bottom: 16px;
`;
const DatesDivider = styled.div`
  background: #767676;
  mix-blend-mode: normal;
  opacity: 0.2;
  width: 1px;
  height: 40px;
`;
const SelectedDates = styled.div`
  background: #ffffff;
  border: 1px solid rgba(118, 118, 118, 0.2);
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  color: #636363;
  font-size: 14px;
  margin-top: 8px;
  display: flex;
`;
const GuestsSelect = styled.select`
  appearance: none;
  &::-ms-expand {
    display: none;
  }
  width: 100%;
  display: block;
  color: #636363;
  background: #ffffff;
  border: 1px solid rgba(118, 118, 118, 0.2);
  box-sizing: border-box;
  padding: 12px;
  border-radius: 0;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: calc(100% - 12px) 50%;
  padding-right: 40px;
`;
const Action = styled.button`
  background: #ff5a5f;
  border-radius: 4px;
  color: white;
  border: none;
  font-size: 16px;
  padding: 12px 16px;
  ${Media.sm`
    font-size: 18px;
  `};
  ${props =>
    props.wide &&
    `
    margin-top: 24px;
    padding: 9px auto;
    width:100%;
  `};
`;
const Tip = styled.p`
  text-align: center;
`;
const Mind = styled.div`
  display: flex;
  font-size: 14px;

  color: #383838;
`;
const MindIcon = styled.img`
  width: 48px;
  height: 48px;
`;
const MindTitle = styled.p`
  margin: 0;
`;
const MindMessage = styled.p`
  margin-top: 4px;
  font-weight: lighter;
`;
const Report = styled.div`
  text-align: center;
  font-size: 14px;
  margin-top: 16px;
`;
const ReportLink = styled.a`
  color: #383838;
`;
const ReportFlag = styled.img`
  margin-right: 8px;
  vertical-align: middle;
`;
const StickedBox = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0px -1px 0px #d5d5d5;
  z-index: 9;
`;
const Booking = props => (
  <div className={props.className}>
    <PriceHolder>
      <Price>$41</Price>per night
    </PriceHolder>
    <RatingHolder>
      <Stars stars={5} />111
    </RatingHolder>
    <Divider />
    <div className="row">
      <div className="col-xs-6">Check In</div>
      <div className="col-xs-6">Check Out</div>
    </div>
    <SelectedDates>
      <div className="col-xs">mm/dd/yyyy</div>
      <DatesDivider />
      <div className="col-xs">mm/dd/yyyy</div>
    </SelectedDates>
    <p>Guests</p>
    <GuestsSelect>
      <option>1 guests</option>
    </GuestsSelect>
    <Action wide>Request to Book</Action>
    <Tip>You won't be charged yet</Tip>
    <Divider />
    <Mind>
      <div>
        <MindTitle>This home is on people’s minds.</MindTitle>
        <MindMessage>It’s been viewed 500+ times in the past week.</MindMessage>
      </div>
      <MindIcon src={mind} />
    </Mind>
  </div>
);

const Window = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(254, 254, 254, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Close = styled.button`
  border: none;
  background: url(${close});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 32px;
  height: 32px;
  margin-bottom: 4px;
`;
export default class extends React.Component {
  state = {
    isOpened: true,
  };

  toggleBooking = () => {
    this.setState({ isOpened: !this.state.isOpened });
  };

  render() {
    return (
      <Container>
        <DesktopOnly>
          <StickyContainer>
            <Sticky>
              {({
                isSticky,
                wasSticky,
                style,
                distanceFromTop,
                distanceFromBottom,
                calculatedHeight,
              }) => (
                <div style={style}>
                  <Box isSticky={isSticky}>
                    <Booking />
                  </Box>
                  <Report>
                    <ReportLink href="#">
                      <ReportFlag src={flag} />Report this listing
                    </ReportLink>
                  </Report>
                </div>
              )}
            </Sticky>
          </StickyContainer>
        </DesktopOnly>
        <NotDesktop>
          {this.state.isOpened ? (
            <Window>
              <Box className="col-sm-6">
                <Close onClick={this.toggleBooking} />
                <Booking className="col-xs" />
              </Box>
            </Window>
          ) : (
            <StickedBox className="col-xs">
              <div>
                <PriceHolder>
                  <Price>$41</Price>per night
                </PriceHolder>
                <RatingHolder>
                  <Stars stars={5} />111
                </RatingHolder>
              </div>
              <div>
                <Action onClick={this.toggleBooking}>Request to book</Action>
              </div>
            </StickedBox>
          )}
        </NotDesktop>
      </Container>
    );
  }
}
