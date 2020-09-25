// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCXY-cC5GRUG3MWzHkKkENRgnqHqAnNUuE",
    authDomain: "dating-float.firebaseapp.com",
    databaseURL: "https://dating-float.firebaseio.com",
    projectId: "dating-float",
    storageBucket: "dating-float.appspot.com",
    messagingSenderId: "411128125541",
    appId: "1:411128125541:web:606da61c4e7c7bd2898e8c",
    measurementId: "G-N3YVSZRJHR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database