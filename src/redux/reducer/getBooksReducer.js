let initialState = {
  loading: true,
  data: undefined,
  error: undefined,
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PENDING":
      return {
        ...state,
        loading: true,
      };
    case "FULFILLED":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "REJECTED":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};
