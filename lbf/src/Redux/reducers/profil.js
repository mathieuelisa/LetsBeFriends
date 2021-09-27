import { SET_FIELD_LOGIN_EMAIL, SET_FIELD_LOGIN_PASSWORD } from '../actions/profil';

export const initialState = {
  email: 'robin.marien@gmail.com',
  password: 'abcd',
};

const reducer = (state = initialState, action = {}) => {

  switch (action.type) {
    case SET_FIELD_LOGIN_EMAIL :
      return {
        ...state,
        email: action.value,
      };
      case SET_FIELD_LOGIN_PASSWORD :
        return {
          ...state,
          password: action.value,
        }
    default:
      return state;
  }
};

export default reducer;
