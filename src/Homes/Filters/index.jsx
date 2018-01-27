import React from 'react';
import styled from 'styled-components';
import Wrap from './../../Wrap';
import DateFilter from './DateFilter';
import PriceFilter from './PriceFilter';
import GuestsFilter from './GuestsFilter';
import InstantFilter from './InstantFilter';
import MoreFilter from './MoreFilter';
import RoomFilter from './RoomFilter';

const Fixed = styled.div`
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  position: fixed;
  right: 0;
  left: 0;
  top: 80.5px;
  background: white;
  z-index: 10;
`;

const Box = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
`;

const Offset = styled.div`
  height: 56px;
`;

class Filters extends React.Component {
  state = {
    dropdown: null,
  };
  setDropdown = (dropdown, callback) => {
    this.setState({ dropdown: this.state.dropdown === dropdown ? null : dropdown }, callback);
  };

  render() {
    return (
      <Offset>
        <Fixed>
          <Wrap className="col-xs">
            <Box>
              <DateFilter
                closeDropdown={() => this.setDropdown(null)}
                onApply={(startDate, endDate) => this.setState({ startDate, endDate })}
              />
              <GuestsFilter
                closeDropdown={() => this.setDropdown(null)}
                onApply={guests => this.setState({ guests })}
              />

              <RoomFilter
                className="hidden-md hidden-sm hidden-xs"
                closeDropdown={() => this.setDropdown(null)}
                onApply={room => this.setState({ room })}
              />
              <PriceFilter
                className="hidden-md hidden-sm hidden-xs"
                closeDropdown={() => this.setDropdown(null)}
                onApply={(startPrice, endPrice) => this.setState({ startPrice, endPrice })}
              />
              <InstantFilter
                className="hidden-md hidden-sm hidden-xs"
                closeDropdown={() => this.setDropdown(null)}
                onApply={instant => this.setState({ instant })}
              />

              <MoreFilter
                closeDropdown={() => this.setDropdown(null)}
                onApply={more => this.setState({ more })}
              />
            </Box>
          </Wrap>
        </Fixed>
      </Offset>
    );
  }
}
export default Filters;
