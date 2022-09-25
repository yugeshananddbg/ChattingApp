import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB2YpW1QuL9SCLyYiGdqu95pqe2AcW8otE",
  authDomain: "chat-89872.firebaseapp.com",
  projectId: "chat-89872",
  storageBucket: "chat-89872.appspot.com",
  messagingSenderId: "806949985828",
  appId: "1:806949985828:web:bfb2c026d04440475a82b1",
  measurementId: "G-E89C94PNB3",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
