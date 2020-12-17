import * as firebase from 'firebase'

import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyCVzLcwIM8OO8b0wIi-TSkWN8Cinl3oRxA",
    authDomain: "contactapp-b66a3.firebaseapp.com",
    databaseURL: "https://contactapp-b66a3.firebaseio.com",
    projectId: "contactapp-b66a3",
    storageBucket: "contactapp-b66a3.appspot.com",
    messagingSenderId: "859282362868",
    appId: "1:859282362868:web:c5bbd31656444067ba29a1"
  };
  
  firebase.initializeApp(firebaseConfig);

export default firebase;