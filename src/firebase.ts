import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "dummy_api_key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "aion-ims.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "aion-ims",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "aion-ims.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "104721340823",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:104721340823:web:8ebdf90580bbeaf80fccd2"
};

const app = initializeApp(firebaseConfig);
export { app };
