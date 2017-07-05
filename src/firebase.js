import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDbGT4-raSa1n9MFjQT77rcnJRd1qglXL4",
  authDomain: "lunch-rush-46e0a.firebaseapp.com",
  databaseURL: "https://lunch-rush-46e0a.firebaseio.com",
  projectId: "lunch-rush-46e0a",
  storageBucket: "lunch-rush-46e0a.appspot.com",
  messagingSenderId: "521091921655"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
