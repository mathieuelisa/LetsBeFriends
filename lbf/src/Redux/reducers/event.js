import { SET_ALL_EVENTS } from "../actions/event";

export const initialState = {
  events: [],
  // fieldsSearch: {city: 'Paris', eventTag: 'Soirée BBQ', dateBegin: '27-09-2021', dateEnd: '10-10-2021', language: 'English'},
};

const reducer = (state = initialState, action = {}) => {

  switch (action.type) {
    case SET_ALL_EVENTS:
      return{
        ...state,
        events: action.value,
      }
    default:
      return state;
  }
};

export default reducer;
