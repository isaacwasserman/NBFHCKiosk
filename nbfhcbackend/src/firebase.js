import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCHJ8AmK0JjMtu8mdL4_vBpchshQTXDXAw",
    authDomain: "nbfhckiosk.firebaseapp.com",
    databaseURL: "https://nbfhckiosk.firebaseio.com",
    projectId: "nbfhckiosk",
    storageBucket: "nbfhckiosk.appspot.com",
    messagingSenderId: "611677241375"
  };
firebase.initializeApp(config);

export default firebase;
