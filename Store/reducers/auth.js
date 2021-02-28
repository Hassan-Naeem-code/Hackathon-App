import {USER_REGISTERED, USER_LOGGED_OUT,ALL_USERS} from '../constants/actiontypes';

const INIT_STATE = {
  auth: null,
  users: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_REGISTERED:
      return {
        ...state,
        auth: action.payload,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        auth: null,
      };
      case ALL_USERS: {
        let usersArray = state.users.slice(0);
        let newUser = true;
        usersArray.map((recipient) => {
          if (recipient.uid === action.payload.uid) {
            newUser = false;
          }
        });
  
        if (usersArray.length === 0 || newUser) {
          usersArray.push(action.payload);
        }
        return {
          ...state,
          users: usersArray,
        };
      }
    default:
      return state;
  }
};
