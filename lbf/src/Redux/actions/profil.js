export const SET_FIELD_LOGIN_EMAIL = 'SET_FIELD_LOGIN_EMAIL';
export const setFieldLoginEmail = (value) => (
   {
    type: SET_FIELD_LOGIN_EMAIL,
    value,
  }
);

export const SET_FIELD_LOGIN_PASSWORD = 'SET_FIELD_LOGIN_PASSWORD';
export const setFieldLoginPassword = (value) => (
   {
    type: SET_FIELD_LOGIN_PASSWORD,
    value,
  }
);

export const SET_FIELD_IDENTIFICATION = 'SET_FIELD_SIGNUP';
export const setFieldIdentification = (value, name, formtype) => (
   {
    type: SET_FIELD_IDENTIFICATION,
    value,
    name,
    formtype,
  }
);

export const SET_CHECKBOX_REMEMBER = 'SET_CHECKBOX_REMEMBER';
export const setCheckboxRemember = () => (
   {
    type: SET_CHECKBOX_REMEMBER,
  }
);

export const SET_CHECKBOX_TERMS = 'SET_CHECKBOX_TERMS';
export const setCheckboxTerms = () => (
   {
    type: SET_CHECKBOX_TERMS,
    
  }
);

export const LOGIN = 'LOGIN';
export const submitLogin = () => (
   {
    type: LOGIN, 
  }
);

export const SIGN_UP = "SIGN_UP";
export const submitSignUp = () => (
  {
    type: SIGN_UP,
  }
)

export const SET_PSEUDO = "SET_PSEUDO";
export const setPseudo = (value) => (
  {
    type: SET_PSEUDO,
    value,
  }
)

export const SET_INFOS_USER = "SET_INFOS_USER"
export const setInfosUser = (value) => (
  {
    type: SET_INFOS_USER,
    value,
  }
)

export const RESET_INFOS_USER = 'RESET_INFOS_USER';
export const resetInfosUser = () => (
   {
    type: RESET_INFOS_USER,
  }
);