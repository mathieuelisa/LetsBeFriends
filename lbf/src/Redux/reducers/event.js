

export const initialState = {
  events: [{ 
    id: 1,
    infos: "searchEvent-infos",
    pictures: "searchEvent-pictures",
    title: "Atelier cuisine",
    titleConfig: "searchEvent-title",
    language: "English",
    placeLeft: 1
  },
  { 
    id: 1,
    infos: "searchEvent-infos",
    pictures: "searchEvent-pictures",
    title: "Soirée XBOX",
    titleConfig: "searchEvent-title",
    language: "Roumain",
    placeLeft: 2
  },
  { 
    id: 1,
    infos: "searchEvent-infos",
    pictures: "searchEvent-pictures",
    title: "Tous chez Julien",
    titleConfig: "searchEvent-title",
    language: "Japanese",
    placeLeft: 1
  },  
],

};

const reducer = (state = initialState, action = {}) => {

  switch (action.type) {

    default:
      return state;
  }
};

export default reducer;
