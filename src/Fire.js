import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAU2By3LJzdXI2ddb4D9XygfuaWtjMTG4Y",
    authDomain: "unmessy-36bcd.firebaseapp.com",
    databaseURL: "https://unmessy-36bcd.firebaseio.com",
    projectId: "unmessy-36bcd",
    storageBucket: "unmessy-36bcd.appspot.com",
    messagingSenderId: "1083620364350",
    appId: "1:1083620364350:web:f7b6e97ea70e83174d016f"
  };

  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;