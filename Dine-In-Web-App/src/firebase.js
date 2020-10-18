import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAbJfzkgs_to84nRnapY4H80HuQdfMiDoM",
  authDomain: "hello-world-54831.firebaseapp.com",
  databaseURL: "https://hello-world-54831.firebaseio.com",
  projectId: "hello-world-54831",
  storageBucket: "hello-world-54831.appspot.com",
  messagingSenderId: "216290515874",
  appId: "1:216290515874:web:c105c73e531bf894f4b0fb",
  measurementId: "G-3K3L86HLZJ"
};

  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;