import React from 'react';
import Filter from './Filter';
import { formatPriceLabel } from './LabelFormats';

export default class extends React.Component {
  state = {
    selected: false,
    startPrice: null,
    endPrice: null,
    selectedStartPrice: null,
    selectedEndPrice: null,
  };

  onApply = () => {
    this.props.closeDropdown();
    this.setState({
      selected: false,
      startPrice: this.state.selecte,
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
        <div>Hello, i am price filter! </div>
      </Filter>
    );
  }
}
