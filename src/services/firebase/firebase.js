import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIXX",
  authDomain: "XX",
  databaseURL: "XX",
  projectId: "XX",
  storageBucket: "XX",
  messagingSenderId: "XX",
  appId: "XX"
};

const originalSend = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function(body) {
  if (body === '') {
    originalSend.call(this);
  } else {
    originalSend.call(this, body);
  }
};

firebase.firestore.setLogLevel("debug");
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
firestore.settings({ experimentalForceLongPolling: true });

export default firebase;