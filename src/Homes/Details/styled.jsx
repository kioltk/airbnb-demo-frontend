import React from 'react';
import styled from 'styled-components';
import { Link as RLink } from 'react-router-dom';
import spoilerArrow from './arrow-down.svg';
import Media from './../../Media';

export const Box = styled.div`
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
  padding-bottom: 22px;
`;

export const SmallDivider = styled.div`
  background: rgba(118, 118, 118, 0.2);
  height: 1px;
  width: 66px;
  margin: 20px 0;
`;

export const Header = styled.h2`
  font-size: 28px;
  margin-top: 48px;
  margin-bottom: 14px;
`;
export const Title = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-top: 22px;
  margin-bottom: 14px;
`;

export const Subtitle = styled.span`
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 4px;
  display: inline-block;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: lighter;
  color: #383838;
  line-height: 20px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const Link = styled(RLink)`color: #0f7276;`;

export const ActionLink = styled(Link)`
  font-size: 16px;
  font-weight: normal;
  margin-top: 6px;
  color: #0f7276;
  display: inline-block;
`;

export const Spoiler = styled.a`
  font-size: 16px;
  color: #0f7276;
  display: flex;
  align-items: center;
  display: inline-block;
  cursor: pointer;
  &:after {
    content: ' ';
    background: url(${spoilerArrow});
    display: inline-block;
    width: 12px;
    height: 12px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    margin-top: 4px;
    margin-left: 8px;
    ${props => props.opened && 'transform: rotate(180deg);'};
  }
`;

const ReadMore = styled(Link)`
  ${props => (props.break ? 'display: block;' : 'display: inline-block;')};
  ${Media.sm`display: inline-block;`};
`;

export class CollapsedText extends React.Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return this.props.children.length > this.props.maxSymbols && !this.state.isOpen ? (
      <p className={this.props.className}>
        {this.props.children.substring(0, this.props.maxSymbols)}...{' '}
        <ReadMore onClick={this.toggle} break={this.props.breakReadme} to="#">
          {this.props.expandLabel}
        </ReadMore>
      </p>
    ) : (
      <p className={this.props.className}>{this.props.children}</p>
    );
  }
}
