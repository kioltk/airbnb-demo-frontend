export const formatCheckinLabel = state =>
  (state.selectedStartDate ? state.selectedStartDate.format('MMM Do') : 'Check in');

export const formatCheckoutLabel = state =>
  (state.selectedEndDate ? state.selectedEndDate.format('MMM Do') : 'Check out');

export const formatDateLabel = (state) => {
  if (state.selected) {
    return `${formatCheckinLabel(state)} — ${formatCheckoutLabel(state)} `;
  }
  return (
    (state.selectedStartDate ? state.selectedStartDate.format('MMM Do') : '') + // cant use && here cause it returns null on string
      (state.selectedEndDate ? ` —  ${state.selectedEndDate.format('MMM Do')}` : '') || 'Dates'
  );
};

export const formatPriceLabel = (state) => {
  if (state.startPrice && state.endPrice) {
    return `$${state.startPrice} — $${state.endPrice}`;
  }
  return 'Price';
};

export const formatInstantLabel = () => 'Instant booking';

export const formatGuestsLabel = (state) => {
  if (state.adults === 0 && state.children === 0 && state.infants === 0) {
    return 'Guests';
  }

  return (
    (state.adults ? `${state.adults} adults` : '') +
    (state.children || state.infants ? `, ${state.children + state.infants} children` : '')
  );
};

export const formatRoomLabel = (state) => {
  if (state.selectedEntire || state.selectedPrivateRoom || state.selectedShared) {
    const roomTypesCount = state.selectedEntire + state.selectedPrivateRoom + state.selectedShared;
    if (roomTypesCount > 1) {
      return `Home type · ${roomTypesCount}`;
    }

    return (
      (state.selectedEntire && 'Entire home') ||
      (state.selectedPrivateRoom && 'Private room') ||
      (state.selectedShared && 'Shared room ')
    );
  }

  if (state.entire || state.privateRoom || state.shared) {
    const roomTypesCount = state.entire + state.privateRoom + state.shared;
    if (roomTypesCount > 1) {
      return `Home type · ${roomTypesCount}`;
    }

    return (
      (state.entire && 'Entire home') ||
      (state.privateRoom && 'Private room') ||
      (state.shared && 'Shared room ')
    );
  }

  return 'Room type';
};
export const formatMoreLabel = () => 'More filters';
