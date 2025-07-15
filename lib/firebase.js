import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    // Replace with your Firebase config
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Analytics only on client side
let analytics;
if (typeof window !== "undefined") {
    analytics = getAnalytics(app);
}

export { analytics };
