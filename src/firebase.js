import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxTRyGQyPr2HfuiPrtgAPq1IP3q6yPIao",
  authDomain: "akweb-portfolio.firebaseapp.com",
  projectId: "akweb-portfolio",
  storageBucket: "akweb-portfolio.appspot.com",
  messagingSenderId: "291079085544",
  appId: "1:291079085544:web:e0cd425ea64aedcbbd985d",
  measurementId: "G-BS7VR14V41"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
