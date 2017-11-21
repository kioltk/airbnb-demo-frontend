import React from 'react';
import Filter from './Filter';
import { formatGuestsLabel } from './LabelFormats';

export default class extends React.Component {
  state = {
    selected: false,
    guests: 0,
    selectedGuests: 0,
  };

  onApply = () => {
    this.props.closeDropdown();
    this.setState({
      selected: false,
      guests: this.state.selectedGuests,
    });
    this.props.onApply(this.state.guests);
  };

  onCancel = () => {
    this.props.closeDropdown();
    this.setState({
      selected: false,
      guests: this.state.guests,
    });
  };

  onToggle = (selected) => {
    this.setState({ selected });
  };

  render() {
    return (
      <Filter
        className={this.props.className}
        label={formatGuestsLabel(this.state)}
        onCancel={this.onCancel}
        onToggle={this.onToggle}
        onApply={this.onApply}
      >
        <div>Hello, i am guests filter! </div>
      </Filter>
    );
  }
}
