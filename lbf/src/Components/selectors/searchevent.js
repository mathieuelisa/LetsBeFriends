import axios from 'axios';

const optionsGet = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
}

const searchEvent = (tagName, languageName ) => {
    console.log( tagName, languageName)
    const body = {
        tagName,
        languageName
    }
    const bodyToJson = JSON.stringify(body);
    axios.get('https://lets-be-friend.herokuapp.com/v1/events/search', bodyToJson, optionsGet )
    .then((response) => {
        console.log('Voici la réponse de l API pour recherche d evenements :', response.data);
    }).catch(error => console.log('Error recherche event '));
}

export default searchEvent;