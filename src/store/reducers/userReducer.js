import { SET_AUTH, SET_LOADING, SET_USER } from "../types/userTypes";

const initialValue = {
  user: null,
  authing: true,
  loading: false,
};

const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_AUTH:
      return {
        ...state,
        authing: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
