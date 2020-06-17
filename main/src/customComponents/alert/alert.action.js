

// eslint-disable-next-line import/prefer-default-export
export function setAlert(message, alertType) {
  return {
    type: 'SET_TYPE_ALERT',
    message,
    alertType,
  };
}

export function showAlert(open) {
  return {
    type: 'SET_VISIBILITY_ALERT',
    open,
  };
}
