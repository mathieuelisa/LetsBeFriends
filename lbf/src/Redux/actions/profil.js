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
    type: SIGN_UP
  }
)