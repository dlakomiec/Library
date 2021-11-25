import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCGxgmK6cuW08EET1n9ywhBgW5TM4u7ENk',
  authDomain: 'login-auth-21784.firebaseapp.com',
  databaseURL:
    'https://login-auth-21784-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'login-auth-21784',
  storageBucket: 'login-auth-21784.appspot.com',
  messagingSenderId: '576349871661',
  appId: '1:576349871661:web:f8c73aa96bf2f66cfce2a4',
  measurementId: 'G-X7PW0R7TXS',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
