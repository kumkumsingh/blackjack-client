import { LOGIN_SUCCESS } from "../actions/login";
export default (state = null, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
