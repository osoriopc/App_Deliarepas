import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import {} from "firebase/auth";
import {} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBrHjb2ZhegNWitCwstr0dYRbKivRwYEk",
  authDomain: "appcuadre.firebaseapp.com",
  projectId: "appcuadre",
  storageBucket: "appcuadre.appspot.com",
  messagingSenderId: "1078284948935",
  appId: "1:1078284948935:web:7de412df76558a17b9f5e2",
};

const app = initializeApp(firebaseConfig);

fetch("https://dummyjson.com/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    username: "kminchelle",
    password: "0lelplR",
    // expiresInMins: 60, // optional
  }),
})
  .then((res) => res.json())
  .then(console.log);

   // check if username and password are not empty
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter your username and password.");
      return;
    }
    
    // check if username and password are correct
    if (username === "myusername" && password === "mypassword") {
      alert("Login successful!");
    } else {
      alert("Incorrect username or password.");
    }
  }
  

  

