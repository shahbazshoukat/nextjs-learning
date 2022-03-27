export const prevent = (event) => {
  if (event) {
    if (event.preventDefault) {
      event.preventDefault();
    }

    if (event.stopPropagation) {
      event.stopPropagation();
    }

    if (event.stopImmediatePropagation) {
      event.stopImmediatePropagation();
    }
  }
  return false;
};
