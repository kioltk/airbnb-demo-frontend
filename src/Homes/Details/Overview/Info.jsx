import React from 'react';
import styled from 'styled-components';

import { Box, Paragraph, Link } from './../styled';
import OriginalSpoileredContent from './../SpoileredContent';
import Media, { MobileOnly, MobileFrom } from './../../../Media';
import avatar from './avatar.png';
import superhost from './superhost.svg';
import bed from './bed.svg';
import studio from './studio.svg';
import guests from './guests.svg';
import bathtub from './bathtub.svg';

const ContactHost = styled(Link)`
  margin-top: 23px;
`;

const Header = styled.div``;

const HostBox = styled.div`
  text-align: center;
  margin-top: 8px;
  ${Media.sm`margin-top:40px;`};
`;

const AvatarBox = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 40px;
  ${Media.sm`max-width: 64px;`};
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

const HostName = styled.p`
  font-weight: lighter;
  display: none;
  ${Media.sm`display:block;`};
`;

const Name = styled.h1`
  font-size: 24px;
  margin-bottom: 0;
  ${Media.sm`font-size: 36px`};
`;

const NameBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${Media.sm`display:block;`};
`;

const Type = styled.p`
  font-weight: lighter;
  font-size: 16px;
  color: #636363;
  width: 100%;
  ${Media.sm`margin-top:4px;`};
`;

const SummaryBox = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const SummaryItem = styled.div`
  font-size: 14px;
  font-weight: lighter;
  display: flex;
  margin-top: 16px;
  align-items: center;
`;

const SpoileredContent = styled(OriginalSpoileredContent)`
  color: red;
`;

const SummaryIcon = styled.img`
  margin-right: 8px;
`;

export default () => (
  <Box>
    <MobileOnly>
      <Name>Romantic Cabana with view</Name>
    </MobileOnly>
    <div>
      <Header className="row">
        <NameBox className="col-xs-9 col-sm-10">
          <MobileFrom>
            <Name>Romantic Cabana with view</Name>
          </MobileFrom>
          <Type>Entire cabin · Armenia</Type>
          <SummaryBox className="row">
            <SummaryItem className="col-xs-6">
              <SummaryIcon src={guests} />
              <span>2 guests</span>
            </SummaryItem>
            <SummaryItem className="col-xs-6">
              <SummaryIcon src={bed} />
              <span>2 beds</span>
            </SummaryItem>
            <SummaryItem className="col-xs-6">
              <SummaryIcon src={studio} />
              <span>Studio</span>
            </SummaryItem>
            <SummaryItem className="col-xs-6">
              <SummaryIcon src={bathtub} />
              <span>1 bath</span>
            </SummaryItem>
          </SummaryBox>
        </NameBox>
        <HostBox className="col-xs-3 col-sm-2 ">
          <AvatarBox>
            <Avatar src={avatar} />
            <Superhost src={superhost} />
          </AvatarBox>
          <HostName>Yudi & Victoria</HostName>
        </HostBox>
      </Header>
    </div>
    <Paragraph>
      Located in the coffee region, in the Andean mountains of Colombia, South America, a charming
      cabana made from bamboo, with a great view and a "sendero" or pathway through the bamboo
      forest which criss-crosses our 5 acre organic farm, leading down to a stream. A place to relax
      and commune with nature.
    </Paragraph>
    <SpoileredContent message="Read more about the space">
      <Paragraph>
        Located in the coffee region, in the Andean mountains of Colombia, South America, a charming
        cabana made from bamboo, with a great view and a "sendero" or pathway through the bamboo
        forest which criss-crosses our 5 acre organic farm, leading down to a stream. A place to
        relax and commune with nature.
      </Paragraph>
    </SpoileredContent>
    <br />
    <ContactHost to="#">Contact host</ContactHost>
  </Box>
);
