import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCCvbIqZ4p6dZO0RLK8sThEzBrFwZ84fk0",
    authDomain: "rewms-7ff5f.firebaseapp.com",
    projectId: "rewms-7ff5f",
    storageBucket: "rewms-7ff5f.firebasestorage.app",
    messagingSenderId: "618737123168",
    appId: "1:618737123168:web:2f1d5d0326c6b5b25aa805",
    measurementId: "G-EBP3THFG81"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
