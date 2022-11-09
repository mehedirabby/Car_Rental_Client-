// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChtaNKpoasd6Y5UKSnl3FyvgUf8rDDWmU",
  authDomain: "khan-car-rental.firebaseapp.com",
  projectId: "khan-car-rental",
  storageBucket: "khan-car-rental.appspot.com",
  messagingSenderId: "157859024907",
  appId: "1:157859024907:web:b42bb0f4f901390a18b70e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
