// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMp7vcaQWhypYQcaBwM5HTsP83L-JQoV8",
  authDomain: "medium-clone-e11b0.firebaseapp.com",
  projectId: "medium-clone-e11b0",
  storageBucket: "medium-clone-e11b0.appspot.com",
  messagingSenderId: "796572854072",
  appId: "1:796572854072:web:38904c8bc583b04a4803cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app)

export { auth, provider, db }
