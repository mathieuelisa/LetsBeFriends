import { SET_FIELD_IDENTIFICATION, SET_CHECKBOX_REMEMBER, SET_CHECKBOX_TERMS, LOGIN } from '../actions/profil';

export const initialState = {
  //login: {email: 'gertrude.manoukian@gmail.com', password: 'abcd'},
  //signup: {email: 'antoine.dupond@gmail.com', password: 'efgh', confirmedPassword: 'efgh', firstName: 'Antoine', lastName: 'Dupond', gender:"male" },
  termsAccepted: false,
  isRemembered: false,
  
};

const reducer = (state = initialState, action = {}) => {

  switch (action.type) {
      case SET_FIELD_IDENTIFICATION :
        console.log(action);
        return {
          ...state,
          // [action.formType.name]: action.value,
        }
      case SET_CHECKBOX_REMEMBER :
        return {
          ...state,
          isRemembered: !state.isRemembered,

        }
      case SET_CHECKBOX_TERMS :
        return {
          ...state,
          termsAccepted: !state.termsAccepted,
        }
    default:
      return state;
  }
};

export default reducer;
