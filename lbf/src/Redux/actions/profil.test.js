import {
  SET_FIELD_LOGIN_EMAIL,
  setFieldLoginEmail,
  SET_FIELD_LOGIN_PASSWORD,
  setFieldLoginPassword,
  SET_FIELD_IDENTIFICATION,
  setFieldIdentification,
  SET_CHECKBOX_REMEMBER,
  setCheckboxRemember,
  SET_CHECKBOX_TERMS,
  setCheckboxTerms,
  LOGIN,
  submitLogin,
  SIGN_UP,
  submitSignUp,
  SET_PSEUDO,
  setPseudo,
  SET_INFOS_USER,
  setInfosUser,
  RESET_INFOS_USER,
  resetInfosUser,
  SET_UPDATED_PROFIL_INFOS,
  setUpdatedProfilInfos,
  SET_LOGGEDIN,
  setLoggedin,
} from "./profil";

// Login testing
describe("TESTING FIELDS LOGIN PROFIL ACTIONS", () => {
  test("should get login email field actions", () => {
    const value = "my test";
    const action = {
      type: SET_FIELD_LOGIN_EMAIL,
      value,
    };
    expect(setFieldLoginEmail(value)).toEqual(action);
  });

  test("should get login passworld field actions", () => {
    const value = "test";
    const action = {
      type: SET_FIELD_LOGIN_PASSWORD,
      value,
    };
    expect(setFieldLoginPassword(value)).toEqual(action);
  });

  test("should get login action", () => {
    const error = new Error("new error");
    const action = {
      type: LOGIN,
      error,
    };
    expect(submitLogin(error)).toEqual(action);
  });

  test("should get loggedin action", () => {
    const error = new Error("erreur");
    const action = {
      type: SET_LOGGEDIN,
      error,
    };
    expect(setLoggedin(error)).toEqual(action);
  });
});

//Signup testing
describe("TESTING FIELDS SIGNUP PROFIL ACTIONS", () => {
  test("should get fields signup actions", () => {
    const value = "test";
    const action = {
      type: SET_FIELD_IDENTIFICATION,
      value,
    };
    expect(setFieldIdentification(value)).toEqual(action);
  });

  test("should get signup", () => {
    const error = new Error("new error");
    const action = {
      type: SIGN_UP,
      error,
    };
    expect(submitSignUp(error)).toEqual(action);
  });
});

// Profil users testing
describe("TESTING FIELDS PROFIL ACTIONS", () => {
  test("should get pseudo actions", () => {
    const value = "test";
    const action = {
      type: SET_PSEUDO,
      value,
    };
    expect(setPseudo(value)).toEqual(action);
  });

  test("should get infos user actions", () => {
    const value = "test";
    const action = {
      type: SET_INFOS_USER,
      value,
    };
    expect(setInfosUser(value)).toEqual(action);
  });

  test("should get update profil actions", () => {
    const value = "test";
    const action = {
      type: SET_UPDATED_PROFIL_INFOS,
      value,
    };
    expect(setUpdatedProfilInfos(value)).toEqual(action);
  });

  test("should get the reset of user actions", () => {
    const error = new Error("Erreur");
    const action = {
      type: RESET_INFOS_USER,
      error,
    };
    expect(resetInfosUser(error)).toEqual(action);
  });
});

//Checkbox testings profil
describe("TESTING CHECKBOX FORM ACTIONS", () => {
  test("should be checked action", () => {
    const error = new Error("test");
    const action = {
      type: SET_CHECKBOX_TERMS,
      error,
    };
    expect(setCheckboxTerms(error)).toEqual(action);
  });

  test("should be checked and remember action", () => {
    const error = new Error("test");
    const action = {
      type: SET_CHECKBOX_REMEMBER,
      error,
    };
    expect(setCheckboxRemember(error)).toEqual(action);
  });
});
