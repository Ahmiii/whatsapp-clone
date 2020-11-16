// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCKYoc7WrFkEt6ekPa2Tx08epb3S9fQ0v0",
  authDomain: "whatsapp-clone-cee3e.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-cee3e.firebaseio.com",
  projectId: "whatsapp-clone-cee3e",
  storageBucket: "whatsapp-clone-cee3e.appspot.com",
  messagingSenderId: "674054912514",
  appId: "1:674054912514:web:032de185e978e226e5451b",
  measurementId: "G-SZ9DWDP60N",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const whatsappdb = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default whatsappdb;
