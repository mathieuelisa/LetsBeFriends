export const SET_ALL_EVENTS = 'SET_ALL_EVENTS';

export const setAllEvents = (value) => (
   {
    type: SET_ALL_EVENTS,
    value,
  }
);

export const SET_EVENT_TAGS = 'SET_EVENT_TAGS';
export const setEventTags = (value) => (
   {
    type: SET_EVENT_TAGS,
    value,    
  }
);

export const SET_USER_EVENTS_BY_ID = "SET_USER_EVENTS_BY_ID";
export const setUserEventsById = (value) =>(
  {
    type: SET_USER_EVENTS_BY_ID,
    value,
  }
)

export const SET_ASKING_LIST = 'SET_ASKING_LIST';

export const setAskingList = (value) => (
   {
    type: SET_ASKING_LIST,
    value,    
  }
);

export const SET_UPDATE_ASKING_LIST = 'SET_UPDATE_ASKING_LIST';

export const setUpdateAskingList = (value) => (
   {
    type: SET_UPDATE_ASKING_LIST,
    value,    
  }
);

export const RESET_DATA_EVENTS = 'RESET_DATA_EVENTS';

export const resetDataEvents = () => (
   {
    type: RESET_DATA_EVENTS, 
  }
);