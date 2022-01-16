import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCsUC5jAUlF0vrXCq-BjIEjaq4FEc_-Xnc",
  authDomain: "tasks-services.firebaseapp.com",
  projectId: "tasks-services",
  storageBucket: "tasks-services.appspot.com",
  messagingSenderId: "699559013948",
  appId: "1:699559013948:web:08a17bd9b6a20323b51d39",
  measurementId: "G-84CPJEVMH0",
};

// Initialize Firebase
export default initializeApp(firebaseConfig);

