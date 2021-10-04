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