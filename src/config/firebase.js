import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAqD6dsWiryRvAT7z-N8QhGDPdUl7n1lM8",
  authDomain: "careerclimb-13ae2.firebaseapp.com",
  projectId: "careerclimb-13ae2",
  storageBucket: "careerclimb-13ae2.appspot.com",
  messagingSenderId: "748984984560",
  appId: "1:748984984560:web:e1d812bf4c53ad91a5f335",
  measurementId: "G-NZQPPR0BGR",
};

firebase.initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = getAuth(app);
