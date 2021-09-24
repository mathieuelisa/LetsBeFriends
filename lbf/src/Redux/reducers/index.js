import { combineReducers } from 'redux';

import profilReducer from './profil';
import eventReducer from './event';
import commonReducer from './common';

const rootReducer = combineReducers({
  // ici, on indique que notre state aurra une tranche (slice) appelée
  // recipes et que c'est le reducers recipesReducer (défini dans le module ./recipes)
  // qui en aura la charge
  // on accède à cette tranche du state par state.recipes
  profil: profilReducer,
  event: eventReducer,
  common: commonReducer,
});

export default rootReducer;