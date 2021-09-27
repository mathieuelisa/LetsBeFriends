import { RESET_TOGGLE, SET_TOGGLE } from "../actions/common";

export const initialState = {
  toggleAction: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
      case SET_TOGGLE:
        return{
          ...state,
          toggleAction:!state.toggleAction
        }
      case RESET_TOGGLE:
        return{
          ...state,
          toggleAction: false
        }
    default:
      return state;
  }
};

export default reducer;
