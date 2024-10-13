import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDifM4s528CHfhVV6pVbbjlLGtj3Nno5Lk",
  authDomain: "final-fc5c7.firebaseapp.com",
  projectId: "final-fc5c7",
  storageBucket: "final-fc5c7.appspot.com",
  messagingSenderId: "240345534935",
  appId: "1:240345534935:web:f8790c2cd95f662777bb92",
  measurementId: "G-588PM66RF7" //please add the measurement id here, current one is from another Firebase project
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = firebase.firestore(app);

// Google Authentication Function
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    // You can access the Google Access Token and User info here
    const user = result.user;
    console.log('User Info:', user);
    return user;
  } catch (error) {
    console.error('Error signing in with Google:', error);
    throw error; // Rethrow the error to handle it in the calling component
  }
};
