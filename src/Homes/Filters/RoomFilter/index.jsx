import React from 'react';
import Filter from './../Filter';
import RoomPicker from './RoomPicker';
import { formatRoomLabel } from './../LabelFormats';

export default class extends React.Component {
  state = {
    selected: false,
    rooms: {
      enitre: false,
      privateRoom: false,
      shared: false,
    },
    selectedEntire: false,
    selectedPrivateRoom: false,
    selectedShared: false,
  };

  onApply = () => {
    this.props.closeDropdown();
    this.setState({
      selected: false,
      rooms: {
        entire: this.state.selectedEntire,
        privateRoom: this.state.selectedPrivateRoom,
        shared: this.state.selectedShared,
      },
    });
    this.props.onApply(this.state.rooms);
  };

  onCancel = () => {
    this.props.closeDropdown();
    this.setState({
      selected: false,
      selectedEntire: this.state.rooms.entire,
      selectedPrivateRoom: this.state.rooms.privateRoom,
      selectedShared: this.state.rooms.shared,
    });
  };

  onToggle = (selected) => {
    this.setState({ selected });
  };

  toggleSelection = (type) => {
    this.setState({ [type]: !this.state[type] });
  };

  render() {
    return (
      <Filter
        className={this.props.className}
        label={formatRoomLabel(this.state.selected ? this.state : this.state.rooms)}
        onCancel={this.onCancel}
        onToggle={this.onToggle}
        onApply={this.onApply}
      >
        <RoomPicker
          toggleSelection={this.toggleSelection}
          selectedEntire={this.state.selectedEntire}
          selectedPrivateRoom={this.state.selectedPrivateRoom}
          selectedShared={this.state.selectedShared}
        />
      </Filter>
    );
  }
}
