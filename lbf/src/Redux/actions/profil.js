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

export const setFieldIdentification = (value, name, formType) => (
   {
    type: SET_FIELD_IDENTIFICATION,
    value,
    name,
    formType,
  }
);