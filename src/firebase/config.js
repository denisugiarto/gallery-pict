import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

//Firebase config
var firebaseConfig = {
  apiKey: "AIzaSyDzdt2WdIJV0uoneQGMSFZUN0L5wCP2MeA",
  authDomain: "gallery-picts.firebaseapp.com",
  projectId: "gallery-picts",
  storageBucket: "gallery-picts.appspot.com",
  messagingSenderId: "458566837331",
  appId: "1:458566837331:web:1dbee737cd58b7b56cd2a6",
};

firebase.initializeApp(firebaseConfig);
