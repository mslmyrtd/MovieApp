import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOvPhdJk6PiKL2Go_qLE0A4uxWDln6J34",
  authDomain: "movie-app-1-56a4a.firebaseapp.com",
  projectId: "movie-app-1-56a4a",
  storageBucket: "movie-app-1-56a4a.appspot.com",
  messagingSenderId: "535567158914",
  appId: "1:535567158914:web:4b4fd715246e438d686e9b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
