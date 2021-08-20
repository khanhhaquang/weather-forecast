const initialState = {
  isLoading: false,
  data: null,
  error: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'weather/fetch':
      return {
        ...state,
        isLoading: true,
      };
    case 'weather/success':
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    case 'weather/error':
      return {
        ...state,
        isLoading: false,
        data: null,
        error: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
