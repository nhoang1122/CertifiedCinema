// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXcU4mpk48VYrj8mFshaEoOLscp_q7yXI",
  authDomain: "certifiedcinema2.firebaseapp.com",
  projectId: "certifiedcinema2",
  storageBucket: "certifiedcinema2.appspot.com",
  messagingSenderId: "321629573580",
  appId: "1:321629573580:web:8e7edcf698225ac9f48d69"
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
//   appId: process.env.REACT_APP_APP_ID
// };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);