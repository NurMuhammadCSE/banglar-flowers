// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZOFSEsOBEnmFkpKM3u3w10bun1y-Urwg",
  authDomain: "banglar-flowers.firebaseapp.com",
  projectId: "banglar-flowers",
  storageBucket: "banglar-flowers.appspot.com",
  messagingSenderId: "1088685652872",
  appId: "1:1088685652872:web:b907e3d64fed02c1d4d83d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;