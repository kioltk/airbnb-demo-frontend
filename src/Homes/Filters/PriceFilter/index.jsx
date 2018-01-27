import React from 'react';
import styled from 'styled-components';
import Rheostat from 'rheostat';
import './rheostat.css';
import Filter from './../Filter';
import { formatPriceLabel } from './../LabelFormats';
import prices from './prices.svg';

const Box = styled.div`
  width: 294px;
  padding: 16px;
`;
const Title = styled.p`
  font-size: 16px;
  color: #383838;
  font-weight: lighter;
`;
const Average = styled.p`
  font-size: 12px;
  font-weight: lighter;
`;
const PriceMapping = styled.img`
  margin-left: 37px;
  margin-bottom: -16px;
  margin-top: 20px;
`;
export default class extends React.Component {
  state = {
    selected: false,
    startPrice: null,
    endPrice: null,
    selectedStartPrice: 0,
    selectedEndPrice: 100,
  };

  onApply = () => {
    this.props.closeDropdown();
    this.setState({
      selected: false,
      startPrice: this.state.selectedStartPrice,
      endPrice: this.state.selectedEndPrice,
    });
    this.props.onApply(this.state.selectedStartPrice, this.state.selectedEndPrice);
  };

  onCancel = () => {
    this.props.closeDropdown();
    this.setState({
      selected: false,
      selectedStartPrice: this.state.startPrice,
      selectedEndPrice: this.state.endPrice,
    });
  };

  onToggle = (selected) => {
    this.setState({ selected });
  };

  render() {
    return (
      <Filter
        className={this.props.className}
        label={formatPriceLabel(this.state)}
        onCancel={this.onCancel}
        onToggle={this.onToggle}
        onApply={this.onApply}
      >
        <Box>
          <Title>
            ${this.state.selectedStartPrice} — ${this.state.selectedEndPrice}+
          </Title>
          <Average>The average nightly price is $75.</Average>
          <PriceMapping src={prices} />
          <Rheostat
            onChange={(slider) => {
              this.setState({
                selectedStartPrice: slider.values[0],
                selectedEndPrice: slider.values[1],
              });
            }}
            min={1}
            max={100}
            values={[this.state.selectedStartPrice, this.state.selectedEndPrice]}
          />
        </Box>
      </Filter>
    );
  }
}
