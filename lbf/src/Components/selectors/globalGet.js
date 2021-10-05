import axios from 'axios';

const optionsAxios = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
}


export const getLanguages = () => {   
  let result = [];
    axios
      .get("https://lets-be-friend.herokuapp.com/v1/languages", optionsAxios)
      .then((response) => {
        console.log("Voici la réponse de l API les tous Languages :",response.data);
        result = response.data;
      })
      .catch((error) => console.log("Error recherche users "));
      return result;
  };


export const getEventsTags = () => {
  let result = [];
    axios
      .get("https://lets-be-friend.herokuapp.com/v1/tags", optionsAxios)
      .then((response) => {
        console.log("Voici la réponse de l API les tous event tags :",response.data);
        result = response.data;
      })
      .catch((error) => console.log("Error recherche users "));
      return result;
  };
