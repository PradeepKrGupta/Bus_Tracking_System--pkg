// import React, {useState, useEffect } from 'react;'
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const firebaseConfig = {
//   apiKey: "AIzaSyCBCr7L-F7KgaPL-pRBjruMkwe8AeO5IkU",
//   authDomain: "bustrackauth-f96ba.firebaseapp.com",
//   projectId: "bustrackauth-f96ba",
//   storageBucket: "bustrackauth-f96ba.appspot.com",
//   messagingSenderId: "801383296913",
//   appId: "1:801383296913:web:97081d7be4575a64c77430"
// };

// // Check if Firebase is already initialized
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app(); // if already initialized, use that one
// }

// const auth = initializeAuth(firebase.app(), {
//   persistence: getReactNativePersistence(AsyncStorage)
// });

// export { auth };






import { initializeApp } from '@firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCBCr7L-F7KgaPL-pRBjruMkwe8AeO5IkU",
    authDomain: "bustrackauth-f96ba.firebaseapp.com",
    projectId: "bustrackauth-f96ba",
    storageBucket: "bustrackauth-f96ba.appspot.com",
    messagingSenderId: "801383296913",
    appId: "1:801383296913:web:97081d7be4575a64c77430"
};

export const app = initializeApp(firebaseConfig);
