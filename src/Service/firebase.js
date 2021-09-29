import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB_gQTvBm_aPpasXRkumR9gYPTKNOjnf9g",
    authDomain: "admisstion-auth.firebaseapp.com",
    projectId: "admisstion-auth",
    storageBucket: "admisstion-auth.appspot.com",
    messagingSenderId: "158767196736",
    appId: "1:158767196736:web:4a28d91f0e996d62488da5"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export {firebase}