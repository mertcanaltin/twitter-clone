import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA3WXPo-RgbPsQPCLRyQ0aGVQ8aAyg39bA",
  authDomain: "twitter-clone-2f2a0.firebaseapp.com",
  projectId: "twitter-clone-2f2a0",
  storageBucket: "twitter-clone-2f2a0.appspot.com",
  messagingSenderId: "964772540108",
  appId: "1:964772540108:web:d118c6332a26546a70dc69",
  measurementId: "G-SGG3BSPXVK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;
