import React from 'react';
import Filter from './../Filter';
import { formatGuestsLabel } from './../LabelFormats';
import GuestsPicker from './GuestsPicker';

export default class extends React.Component {
  state = {
    selected: true,
    guests: {
      adults: 0,
      children: 0,
      infants: 0,
    },
    adults: 0,
    children: 0,
    infants: 0,
  };

  onApply = () => {
    this.props.closeDropdown();
    this.setState({
      selected: false,
      guests: {
        adults: this.state.adults,
        children: this.state.children,
        infants: this.state.infants,
      },
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

  increase = (guestType) => {
    this.setState({ [guestType]: this.state[guestType] + 1 });
  };

  decrease = (guestType) => {
    this.setState({ [guestType]: this.state[guestType] - 1 });
  };

  render() {
    return (
      <Filter
        className={this.props.className}
        label={formatGuestsLabel(this.state.selected ? this.state : this.state.guests)}
        onCancel={this.onCancel}
        onToggle={this.onToggle}
        onApply={this.onApply}
      >
        <GuestsPicker
          adults={this.state.adults}
          infants={this.state.infants}
          children={this.state.children}
          increase={this.increase}
          decrease={this.decrease}
        />
      </Filter>
    );
  }
}
