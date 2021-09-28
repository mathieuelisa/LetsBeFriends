import { SET_FIELD_IDENTIFICATION, SET_CHECKBOX_REMEMBER, SET_CHECKBOX_TERMS, LOGIN, SET_PSEUDO } from '../actions/profil';

export const initialState = {
  //login: {email: 'gertrude.manoukian@gmail.com', password: 'abcd'},
  //signup: {email: 'antoine.dupond@gmail.com', password: 'efgh', confirmedPassword: 'efgh', firstName: 'Antoine', lastName: 'Dupond', gender:"male" },
  termsAccepted: false,
  isRemembered: false,
  myName: ""
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
<<<<<<< HEAD
      case SET_PSEUDO: 
      return{
        ...state,
        myName: action.value
      }
        // Utiliser axios
      // case LOGIN: 
      // return{
      //   ...state,
      // }
=======
>>>>>>> 8303c18451cd9abb3905a93ca86408843c4451e9
    default:
      return state;
  }
};

export default reducer;
