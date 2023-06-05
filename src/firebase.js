// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8g7JDFWlsWni-SyBhpUNU0jdyjGopKas",
  authDomain: "learnard-e08cb.firebaseapp.com",
  projectId: "learnard-e08cb",
  storageBucket: "learnard-e08cb.appspot.com",
  messagingSenderId: "381465482171",
  appId: "1:381465482171:web:e69ca6f0688c586a8e2a9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app