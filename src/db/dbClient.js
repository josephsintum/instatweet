// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration




// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
// }
const firebaseConfig = {
  apiKey: "AIzaSyDn029MMyQjs8hfyskD6E6JRBrLCRpFvFo",
  authDomain: "instatweet2.firebaseapp.com",
  projectId: "instatweet2",
  storageBucket: "instatweet2.appspot.com",
  messagingSenderId: "1066432286867",
  appId: "1:1066432286867:web:d9e2f7d1717e9aca9abd66",
  measurementId: "G-NV1WW1MTP2"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)