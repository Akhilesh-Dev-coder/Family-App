// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChPvfOL16UXqBnOeZ9Eph3ydUX8X3cLxY",
  authDomain: "family-tree-app-df08f.firebaseapp.com",
  projectId: "family-tree-app-df08f",
  storageBucket: "family-tree-app-df08f.firebasestorage.app",
  messagingSenderId: "285997356019",
  appId: "1:285997356019:web:3ea8c654cce0a26c0ab886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };