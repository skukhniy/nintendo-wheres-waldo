// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC_eQLo_X0Mx-vBq_snNBjd7_ixyDMuW1I',
  authDomain: 'nintendo-wheres-waldo.firebaseapp.com',
  projectId: 'nintendo-wheres-waldo',
  storageBucket: 'nintendo-wheres-waldo.appspot.com',
  messagingSenderId: '696740305983',
  appId: '1:696740305983:web:91ab11fead56553ad52c8a',
  measurementId: 'G-2CDDZHNE9J',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
