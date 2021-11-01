import { SET_FIELD_IDENTIFICATION, SET_CHECKBOX_REMEMBER, SET_CHECKBOX_TERMS, SET_PSEUDO, SET_INFOS_USER, RESET_INFOS_USER, SET_UPDATED_PROFIL_INFOS } from '../actions/profil';

export const initialState = {
  //login: {email: 'gertrude.manoukian@gmail.com', password: 'abcd'},
  //signup: {email: 'antoine.dupond@gmail.com', password: 'efgh', confirmedPassword: 'efgh', firstName: 'Antoine', lastName: 'Dupond', gender:"male" },
  termsAccepted: false,
  isRemembered: false,
  infosUser: []
};

let pipo = localStorage.getItem("user") 
let result =  JSON.parse(pipo)

if (pipo) {
    initialState.myName = result.firstname 
}

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
      case SET_PSEUDO:
        return{
          ...state,
          myName: action.value
        }
      case SET_INFOS_USER: 
      return{
        ...state,
        infosUser: action.value,
      }
      case RESET_INFOS_USER: 
      return{
        ...state,
        infosUser: [],
      }
      case SET_UPDATED_PROFIL_INFOS: 
      return{
        ...state,
        infosUser: action.value,
      }
    default:
      return state;
  }
};

export default reducer;
