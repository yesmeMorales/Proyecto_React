import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(config);
//Con esto extraemos el resultado de la cache sin tener que volver a ejecutar lo anterior
export default firebase
