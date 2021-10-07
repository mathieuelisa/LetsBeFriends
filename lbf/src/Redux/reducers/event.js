import { SET_ALL_EVENTS, SET_ASKING_LIST, SET_EVENT_TAGS, SET_USER_EVENTS_BY_ID } from "../actions/event";

export const initialState = {
  events: [],
  eventTags: [],
  eventUserEvents: [],
  askingList: [],
  // fieldsSearch: {city: 'Paris', eventTag: 'Soirée BBQ', dateBegin: '27-09-2021', dateEnd: '10-10-2021', language: 'English'},
};

const reducer = (state = initialState, action = {}) => {

  switch (action.type) {
    case SET_ALL_EVENTS:
      return{
        ...state,
        events: action.value,
      }
    case SET_EVENT_TAGS:
      return{
        ...state,
        eventTags: action.value,
      }
    case SET_USER_EVENTS_BY_ID:
      return{
        ...state,
        eventUserEvents: action.value,
      }
    case SET_ASKING_LIST:
      return{
        ...state,
        askingList: action.value,
      }
    default:
      return state;
  }
};

export default reducer;
