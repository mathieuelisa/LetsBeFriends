import axios from 'axios'
import { LOGIN, SIGN_UP } from '../actions/profil';


const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // case LOGIN: {
    //   const { login } = store.getState().login;
       
    //   axios.get('https://lets-be-friend.herokuapp.com/v1/user/login', {
    //         email: login.email,
    //         password: login.password,
    //       }).then((response) => {
    //         console.log('Vous avez soumis le formulaire Login, voici la réponse de l API: ', response)
    //       }).catch(
    //       (error) => console.log('error'),
    //     );
    //   next(action);
    //   break;
    // }

    // case SIGN_UP: {
      
    //   const { email, password, confirmedPassword, firstName, lastName, gender } = 
    //   console.log('Soumission du formulaire avec le formulaire : ', email, password, confirmedPassword, firstName, lastName, gender );
      
       
    //   axios.post('https://lets-be-friend.herokuapp.com/v1/user/login', {
    //         email: email,
    //         password: password,
    //         confirmedPassword: confirmedPassword,
    //         firstName: firstName,
    //         lastName: lastName,
    //         gender: gender,
    //       }).then((response) => {
    //         console.log('Vous avez soumis le formulaire Login, voici la réponse de l API: ', response)
    //       }).catch(
    //       (error) => console.log('error'),
    //     );
    //   next(action);
    //   break;
    // }

   default:
    next(action);
 }
}

export default authMiddleware;