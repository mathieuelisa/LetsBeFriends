import {
  RESET_TOGGLE,
  SET_TOGGLE,
  SET_LANGUAGES,
  SET_LANGUAGES_TO_LEARN,
} from "../actions/common";

export const initialState = {
  toggleAction: false,
  optionsAxios: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  allLanguages: [],
  allLanguagesToLearn: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_TOGGLE:
      return {
        ...state,
        toggleAction: !state.toggleAction,
      };
    case RESET_TOGGLE:
      return {
        ...state,
        toggleAction: false,
      };
    case SET_LANGUAGES:
      return {
        ...state,
        allLanguages: action.value,
      };
    case SET_LANGUAGES_TO_LEARN:
      return {
        ...state,
        allLanguagesToLearn: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
