

const initialState = {
  open: false,
  message: '',
  alertType: '',
};

export default function alert(state = initialState, action) {
  switch (action.type) {
    case 'SET_TYPE_ALERT':
      return Object.assign({}, state, {
        message: action.message,
        alertType: action.alertType,
      });
    case 'SET_VISIBILITY_ALERT':
      return Object.assign({}, state, {
        open: action.open,
      });
    default:
      return state;
  }
}
