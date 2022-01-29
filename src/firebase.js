// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtycctqkKtpwuI_Opj0fyGpYO1F-9t7Dw",
  authDomain: "my-dictionary-9fcc4.firebaseapp.com",
  projectId: "my-dictionary-9fcc4",
  storageBucket: "my-dictionary-9fcc4.appspot.com",
  messagingSenderId: "278184571075",
  appId: "1:278184571075:web:79ad00e75df2ab91863276",
  measurementId: "G-1JSNR9E40B",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
