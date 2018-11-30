import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCYOYAnO_C99F-6I0DVIqnX_aFWQ_G_TJg",
  authDomain: "album-react-9f96e.firebaseapp.com",
  databaseURL: "https://album-react-9f96e.firebaseio.com",
  projectId: "album-react-9f96e",
  storageBucket: "album-react-9f96e.appspot.com",
  messagingSenderId: "1048434255233"
};
firebase.initializeApp(config);
//Con esto extraemos el resultado de la cache sin tener que volver a ejecutar lo anterior
export default firebase
