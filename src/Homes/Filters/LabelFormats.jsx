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
