// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, addDoc, collection } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: "picasso-landing.firebaseapp.com",
  projectId: "picasso-landing",
  storageBucket: "picasso-landing.appspot.com",
  messagingSenderId: "769087316433",
  appId: "1:769087316433:web:b8f6ad6157a05f9c9140f0",
  measurementId: "G-G51WV8T4J1",
};

console.log(import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export async function writeUserData(name: string | null, email: string | null) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      username: name,
      email: email,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.log("Error adding document: ", e);
  }
}

export default app;
