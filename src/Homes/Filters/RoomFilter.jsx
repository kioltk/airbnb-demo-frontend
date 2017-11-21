import React from 'react';
import Filter from './Filter';
import { formatRoomLabel } from './LabelFormats';

export default class extends React.Component {
  state = {
    selected: false,
    room: 0,
    selectedRoom: 0,
  };

  onApply = () => {
    this.props.closeDropdown();
    this.setState({
      selected: false,
      room: this.state.selectedRoom,
    });
    this.props.onApply(this.state.room);
  };

  onCancel = () => {
    this.props.closeDropdown();
    this.setState({
      selected: false,
      room: this.state.room,
    });
  };

  onToggle = (selected) => {
    this.setState({ selected });
  };

  render() {
    return (
      <Filter
        className={this.props.className}
        label={formatRoomLabel(this.state)}
        onCancel={this.onCancel}
        onToggle={this.onToggle}
        onApply={this.onApply}
      >
        <div>Hello, i am room type filter! </div>
      </Filter>
    );
  }
}
