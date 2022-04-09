// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZnpUTT4-Ffkrnp2os_PlB9K5EUpRnQLo",
  authDomain: "ema-jhon-simple-fdf2c.firebaseapp.com",
  projectId: "ema-jhon-simple-fdf2c",
  storageBucket: "ema-jhon-simple-fdf2c.appspot.com",
  messagingSenderId: "426391848169",
  appId: "1:426391848169:web:8ae17a873a82722f0f9c78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
export default auth;