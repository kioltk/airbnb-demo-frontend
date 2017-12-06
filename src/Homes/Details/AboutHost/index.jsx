import React from 'react';
import styled from 'styled-components';
import { Header as OriginalHeader, CollapsedText, Paragraph } from './../styled';
import SpoileredContent from './../SpoileredContent';
import Wrap from './../../../Wrap';
import Media from './../../../Media';
import verified from './verified.svg';
import avatar from './avatar.png';
import superhost from './superhost.svg';

const AvatarBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 60px;
  text-align: center;
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;
  ${Media.sm`
    max-width: 88px;
  `};
`;

const Avatar = styled.img`
  width: 100%;
`;
const Superhost = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 18px;
  ${Media.sm`height:30px;`};
`;

const Header = styled(OriginalHeader)`
  font-size: 28px;
  margin-bottom: 0;
  margin-top: 0;
  ${Media.sm`font-size: 36px`};
`;

const Info = styled.div`
  ${'' /* display: flex;
  align-items: center;
  flex-direction: column;
  ${Media.sm`display:block;`}; */};
`;

const Subheader = styled.p`
  font-weight: lighter;
  font-size: 16px;
  color: #636363;
  width: 100%;
  margin-bottom: 24px;
  ${Media.sm`
    margin-top:4px;
    margin-bottom:16px;
  `};
`;
const HostBox = styled.div`
  display: flex;
`;
const Badge = styled.div`
  vertical-align: middle;
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: lighter;
  color: #636363;
  margin-right: 32px;
  ${Media.sm`display: inline-block`};
`;
const ReviewsCounter = styled.span`
  background: linear-gradient(
    137.16deg,
    rgba(255, 195, 51, 0.8) 5.46%,
    #ffc333 38.68%,
    #ffb400 38.76%,
    #ffb400 85.47%
  );
  border-radius: 6px;
  padding: 6px 10px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-right: 16px;
  display: inline-block;
`;
const Verified = styled.img`
  display: inline-block;
  margin-right: 16px;
  vertical-align: middle;
`;
const HostDescription = styled(CollapsedText)`
  font-weight: lighter;
  font-size: 18px;
  margin-top: 0;
`;
const BadgesBox = styled.div`
  width: 100%;
`;
const Contact = styled.button`
  background: #ffffff;
  border: 1px solid #008489;
  box-sizing: border-box;
  border-radius: 2px;
  display: block;
  padding: 7px 12px;
  font-size: 14px;
  color: #0f7276;
  margin-bottom: 24px;
  cursor: pointer;
`;
const Summary = styled.p`
  margin-bottom: 4px;
  margin-top: 4px;
  font-size: 18px;
  color: #000000;
`;
const SummaryLabel = styled.span`
  font-weight: lighter;
`;
const NeighborhoodHeader = styled(Header)`
  margin-top: 48px;
`;
export default class extends React.Component {
  state = {};
  render() {
    return (
      <div className={this.props.className}>
        <div className="row">
          <HostBox className="">
            <Info className="col-xs-9 col-sm-10">
              <Header>Hosted by Yudy & Victoria</Header>
              <Subheader>Santa Ana, California, United States · Joined in August 2014</Subheader>
              <BadgesBox>
                <Badge>
                  <ReviewsCounter>153</ReviewsCounter>Reviews
                </Badge>
                <Badge>
                  <Verified src={verified} />Verified
                </Badge>
              </BadgesBox>
              <HostDescription maxSymbols={277} expandLabel="Read more">
                Yudy and I (Victoria) are sisters-in law. Yudy lives in Colombia and would be your
                hostess on the property. I live in California and am the owner of the property. It
                is my goal to create a "boutique eco-resort" on the approximately 5 acre farm we
                have in the coffee growing regular elepsized text
              </HostDescription>
              <div>
                <Contact>Contact host</Contact>
              </div>
              <Summary>
                <SummaryLabel>Languages:</SummaryLabel> English, Español
              </Summary>
              <Summary>
                <SummaryLabel>Response rate:</SummaryLabel> 100%
              </Summary>
              <Summary>
                <SummaryLabel>Response time:</SummaryLabel> within a few hours
              </Summary>
              <NeighborhoodHeader>The neighborhood</NeighborhoodHeader>
              <Paragraph>
                Yudy & Victoria’s home is located in Armenia, Quindio, Colombia. We are situated in
                the heart of the coffee region in the Andean mountains in Colombia. We are in
                "Vereda La Pradera" neighborhood, near the small town of "El Caimo", 20 minutes from
                Armenia and 20 minutes from the airport, by car. Close enough for comfort and easy
                access, far enough from the hustle of traffic and city noise that you can commune
                with nature. Sleep to the sound of the crickets and awaken to the sound of birds.
                <SpoileredContent message="Read more about neighborhood">
                  <Paragraph>
                    Yudy & Victoria’s home is located in Armenia, Quindio, Colombia. We are situated
                    in the heart of the coffee region in the Andean mountains in Colombia. We are in
                    "Vereda La Pradera" neighborhood, near the small town of "El Caimo", 20 minutes
                    from Armenia and 20 minutes from the airport, by car. Close enough for comfort
                    and easy access, far enough from the hustle of traffic and city noise that you
                    can commune with nature. Sleep to the sound of the crickets and awaken to the
                    sound of birds.
                  </Paragraph>
                </SpoileredContent>
              </Paragraph>
            </Info>
            <div className="col-xs-3 col-sm-2">
              <AvatarBox>
                <Avatar src={avatar} />
                <Superhost src={superhost} />
              </AvatarBox>
            </div>
          </HostBox>
        </div>
      </div>
    );
  }
}
