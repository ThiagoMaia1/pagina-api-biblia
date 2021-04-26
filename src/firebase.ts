// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/app";
import "@firebase/functions";
import '@firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyA-ndReDUU5QvnpZYkyemEU6cl0n691FPI",
    authDomain: "api-biblia-humana.firebaseapp.com",
    projectId: "api-biblia-humana",
    storageBucket: "api-biblia-humana.appspot.com",
    messagingSenderId: "44793131556",
    appId: "1:44793131556:web:72cc3b6f5c60c615c25eb1",
    measurementId: "G-WKD9NE8HTT"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;

export const firebaseFunctions = firebase.functions();