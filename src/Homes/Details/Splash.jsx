import React from 'react';
import styled from 'styled-components';
import splash from './splash.png';
import like from './like.svg';
import liked from './liked.svg';
import share from './share.svg';

import Media from './../../Media';
import Wrap from './../../Wrap';

const Box = styled.div`position: relative;`;
const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
// rename this
const StyledWrap = styled(Wrap)`
  height: 290px;
  ${Media.sm`height: 360px`};
  ${Media.lg`height: 440px`};
  position: relative;
`;
const Button = styled.button`
  line-height: 24px;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #383838;
  background: #ffffff;
  border: none;
  padding: 8px 16px;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  background-repeat: no-repeat;
  background-position: 16px 50%;
`;
const ViewPhotos = styled(Button)`
  position: absolute;
  right: 8px;
  bottom: 16px;

  ${Media.sm`
    left: 8px;
    right: auto;
    bottom: 24px;
  `};
`;
const ActionButton = styled(Button)`
  background: none;
  ${Media.sm`
    background: #ffffff;
    margin-left: 16px;
  `};
`;
const Actions = styled.div`
  display: flex;
  position: absolute;
  right: 8px;
  top: 16px;
`;
const Icon = styled.img`
  fill: white;
  stroke: white;
  ${Media.sm`margin-right: 12px;`};
`;

export default class extends React.Component {
  state = {
    liked: false,
  };

  onLikeClicked = () => {
    this.setState({ liked: !this.state.liked });
  };

  render() {
    return (
      <Box>
        <Image src={splash} />
        <StyledWrap>
          <ViewPhotos>View photos</ViewPhotos>
          <Actions>
            <ActionButton>
              <Icon src={share} />
              <span className="hidden-xs">Share</span>
            </ActionButton>
            <ActionButton onClick={this.onLikeClicked}>
              <Icon src={this.state.liked ? liked : like} />
              <span className="hidden-xs">Save</span>
            </ActionButton>
          </Actions>
        </StyledWrap>
      </Box>
    );
  }
}
