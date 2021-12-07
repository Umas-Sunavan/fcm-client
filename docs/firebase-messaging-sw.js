console.log('123');
importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-messaging.js');
const firebaseConfig = {
    apiKey: "AIzaSyDLEdF8IkJMKXDrn2-fX__JrBd5zI6J5ks",
    authDomain: "fir-fcm-practce.firebaseapp.com",
    projectId: "firebase-fcm-practce",
    storageBucket: "firebase-fcm-practce.appspot.com",
    messagingSenderId: "742144536842",
    appId: "1:742144536842:web:0e93a99a85ca3966884af3",
    measurementId: "G-LVN8HMR1YC"
  };
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();