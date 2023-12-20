import {
  SET_AUTH,
  SET_LOADING,
  SET_MY_CVS,
  SET_SAVED_LIST,
  SET_USER,
} from "../types/userTypes";

const initialValue = {
  user: null,
  authing: true,
  loading: false,
  saved: [],
  myCvs: [],
};

const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_SAVED_LIST:
      const idList = action.payload.map((val) => val.jobId);
      return {
        ...state,
        saved: idList,
      };
    case SET_MY_CVS:
      return {
        ...state,
        myCvs: action.payload,
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
