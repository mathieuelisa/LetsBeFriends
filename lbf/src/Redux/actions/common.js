export const SET_TOGGLE = "SET_TOGGLE";

export const RESET_TOGGLE = "RESET_TOGGLE";

export const SET_LANGUAGES = "SET_LANGUAGES";
export const setLanguages = (value) => ({
  type: SET_LANGUAGES,
  value,
});

export const SET_LANGUAGES_TO_LEARN = "SET_LANGUAGES_TO_LEARN";
export const setLanguagesToLearn = (value) => ({
  type: SET_LANGUAGES_TO_LEARN,
  value,
});

export const RESET_ASKING_LIST = "RESET_ASKING_LIST";

export const resetAskingList = (error) => ({
  type: RESET_ASKING_LIST,
  error,
});
