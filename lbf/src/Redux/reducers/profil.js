import { SET_FIELD_IDENTIFICATION } from '../actions/profil';

export const initialState = {
  login: {email: 'robin.marien@gmail.com', password: 'abcd'},
  signup: {email: 'robin.marien@gmail.com', password: 'abcd'},

  
};

const reducer = (state = initialState, action = {}) => {

  switch (action.type) {
      case SET_FIELD_IDENTIFICATION :
        return {
          ...state,
          [action.formType.name]: action.value,

        }
    default:
      return state;
  }
};

export default reducer;
