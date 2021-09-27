

export const initialState = {
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
],
  fieldsSearch: {city: 'Paris', eventTag: 'Soirée BBQ', dateBegin: '27-09-2021', dateEnd: '10-10-2021', language: 'English'},

};

const reducer = (state = initialState, action = {}) => {

  switch (action.type) {

    default:
      return state;
  }
};

export default reducer;
