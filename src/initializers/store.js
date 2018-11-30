import {createStore, combineReducers, compose} from 'redux';
import persistState from 'redux-localstorage';
//Reducer que entrega o controla el Token.
//Recibe:estado(token existente o no) y Objeto action(define como se debe modificar el store y que se debe almacenar)
function tokenReducer(state='',action){
  switch (action.type) {
    case 'SET_TOKEN':
      return  action.token;
    case 'CLEAR_TOKEN':
      return '';
    default:
      return state;
  }
}

function userReducer(state=null,action){
  switch (action.type) {
    case 'LOGGED_IN':
      return  action.user;
    case 'SIGN_OUT':
      return null;
    default:
      return state;
  }
}

function albumsReducer(state=[],action){
  switch (action.type) {
    case 'SET_ALBUMS':
      return  action.albums;
    case 'CLEAR_ALBUMS':
      return [];
    default:
      return state;
  }
}

function albumReducer(state=null,action){
  switch (action.type) {
    case 'SET_ALBUM':
      return  action.album;
    case 'CLEAR_ALBUM':
      return null;
    default:
      return state;
  }
}

function photosReducer(state=[],action){
  switch (action.type) {
    case 'SET_PHOTOS':
      return  action.photos;
    case 'CLEAR_PHOTOS':
      return [];
    default:
      return state;
  }
}



let rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
  albums: albumsReducer,
  mainAlbum: albumReducer,
  photos: photosReducer
});

let mainEnhancer = compose(persistState('token'));

//Primer argumento reducers(Funcion que modifica el estado de la aplicacion)
//A travez de estas funciones modificamos el estado
export default createStore(rootReducer,{},mainEnhancer);
