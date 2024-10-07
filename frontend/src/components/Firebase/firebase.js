import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDifM4s528CHfhVV6pVbbjlLGtj3Nno5Lk",
  authDomain: "final-fc5c7.firebaseapp.com",
  projectId: "final-fc5c7",
  storageBucket: "final-fc5c7.appspot.com",
  messagingSenderId: "240345534935",
  appId: "1:240345534935:web:f8790c2cd95f662777bb92"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = firebase.firestore(app)