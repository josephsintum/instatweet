import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANmAc88-21DWeLeMPX_Ydisz-wPLitIoA",
  authDomain: "instaweet-c1bfc.firebaseapp.com",
  projectId: "instaweet-c1bfc",
  storageBucket: "instaweet-c1bfc.appspot.com",
  messagingSenderId: "611507844706",
  appId: "1:611507844706:web:38ebef28e34c1c03f2033b"
};


const app = initializeApp(firebaseConfig)
export const auth = getAuth()
