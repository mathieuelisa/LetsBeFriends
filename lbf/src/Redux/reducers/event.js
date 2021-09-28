import { SET_ALL_EVENTS } from "../actions/event";

export const initialState = {
<<<<<<< HEAD
  events: [{ 
    id: 1,
    infos: "searchEvent-infos",
    pictures: "searchEvent-pictures",
    eventTag: "Atelier cuisine",
    titleConfig: "searchEvent-title",
    language: "English",
    placeLeft: 1,
  },
  { 
    id: 2,
    infos: "searchEvent-infos",
    pictures: "searchEvent-pictures",
    eventTag: "Soirée XBOX",
    titleConfig: "searchEvent-title",
    language: "Roumain",
    placeLeft: 2
  },
  { 
    id: 3,
    infos: "searchEvent-infos",
    pictures: "searchEvent-pictures",
    eventTag: "Tous chez Julien",
    titleConfig: "searchEvent-title",
    language: "Japanese",
    placeLeft: 1
  }, 
  { 
    id: 4,
    infos: "searchEvent-infos",
    pictures: "searchEvent-pictures",
    eventTag: "Tous chez Julien",
    titleConfig: "searchEvent-title",
    language: "Japanese",
    placeLeft: 6
  },  
],
=======
  events: [],
>>>>>>> 8303c18451cd9abb3905a93ca86408843c4451e9
  fieldsSearch: {city: 'Paris', eventTag: 'Soirée BBQ', dateBegin: '27-09-2021', dateEnd: '10-10-2021', language: 'English'},
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
