import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyASb9R9d5c4nAgtuf0hCpDKjbD_wbjPrnc",
  authDomain: "turnout-b51a4.firebaseapp.com",
  databaseURL: "https://turnout-b51a4.firebaseio.com",
  projectId: "turnout-b51a4",
  storageBucket: "turnout-b51a4.appspot.com",
  messagingSenderId: "591439134589"
};

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
