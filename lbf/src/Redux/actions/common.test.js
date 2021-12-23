import {
  SET_LANGUAGES,
  setLanguages,
  SET_LANGUAGES_TO_LEARN,
  setLanguagesToLearn,
  RESET_ASKING_LIST,
  resetAskingList,
} from "./common";

describe("TESTING SYNC LANGUAGES ACTIONS", () => {
  test("should create a language actions", () => {
    const value = "test";
    const action = {
      type: SET_LANGUAGES,
      value,
    };
    expect(setLanguages(value)).toEqual(action);
  });

  test("should create a setLanguage action", () => {
    const value = "test";
    const action = {
      type: SET_LANGUAGES_TO_LEARN,
      value,
    };
    expect(setLanguagesToLearn(value)).toEqual(action);
  });

  test("Should remove language", () => {
    const error = new Error("You got a error");
    const action = {
      type: RESET_ASKING_LIST,
      error,
    };
    expect(resetAskingList(error)).toEqual(action);
  });
});
