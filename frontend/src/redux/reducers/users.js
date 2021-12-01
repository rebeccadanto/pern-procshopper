import { LOGIN_USER, REGISTER_USER } from "../types";

const initialState = {
  user: {},
  loading: false,
  error: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER.REQUEST:
      return { ...state, user: {}, loading: true, error: "" };
    case LOGIN_USER.SUCCESS:
      return { ...state, user: action.user, loading: false, error: "" };
    case LOGIN_USER.ERROR:
      return { ...state, user: {}, loading: false, error: action.error };
    case REGISTER_USER.REQUEST:
      return { ...state, user: {}, loading: true, error: "" };
    case REGISTER_USER.SUCCESS:
      return { ...state, user: action.user, loading: false, error: "" };
    case REGISTER_USER.ERROR:
      return { ...state, user: {}, loading: false, error: action.error };
      case "LOGOUT_USER":
        return { ...state, user: {}, loading: false, error: "" };

    default:
      return state;
  }
};

export default usersReducer;
