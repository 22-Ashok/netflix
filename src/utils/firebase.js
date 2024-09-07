import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDXQE8F-CImgYBF9q664dOTKLmsVzkBwP8",
  authDomain: "netflix-1a36f.firebaseapp.com",
  projectId: "netflix-1a36f",
  storageBucket: "netflix-1a36f.appspot.com",
  messagingSenderId: "254085264113",
  appId: "1:254085264113:web:1e98543cad28e9d199af50",
  databaseURL:"https://netflix-1a36f-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
