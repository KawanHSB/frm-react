import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey:  "AIzaSyCQesCuzCDLy6EntRQrVZWya8BPec0ayRM",
    authDomain: "movlabs---mb.firebaseapp.com",
    databaseURL: "https://movlabs---mb-default-rtdb.firebaseio.com",
    projectId: "movlabs---mb",
    storageBucket: "movlabs---mb.appspot.com",
    messagingSenderId: "905158624593",
    appId: "1:905158624593:web:f068f6670b0603e5fd3f70"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export const db = getFirestore(app);

export {auth};