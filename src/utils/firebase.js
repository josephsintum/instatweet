import firebase from `firebase`;

const firebaseConfig = {

    apiKey: "AIzaSyDGgBHP1csUeDU4OpThmYXi5vmhmRVeHqw",
  
    authDomain: "fighthunger-845cc.firebaseapp.com",
  
    databaseURL: "https://fighthunger-845cc-default-rtdb.firebaseio.com",
  
    projectId: "fighthunger-845cc",
  
    storageBucket: "fighthunger-845cc.appspot.com",
  
    messagingSenderId: "254737626204",
  
    appId: "1:254737626204:web:5b97dc99895fab8a976299",
  
    measurementId: "G-GLSVQYBDGP"

  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  export default firebase;