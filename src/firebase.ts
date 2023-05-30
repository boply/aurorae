// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { writable } from 'svelte/store';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu6locn2IJZSvhtx6N3AOGufXSbczB_Vk",
  authDomain: "aurorae-be25d.firebaseapp.com",
  projectId: "aurorae-be25d",
  storageBucket: "aurorae-be25d.appspot.com",
  messagingSenderId: "93654525841",
  appId: "1:93654525841:web:ba4d52a4b55daa1eaa9c30",
  measurementId: "G-7J1QWXC2YJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authenticated = writable(false);
export const auth = () => {
	return getAuth(app);
};
export const user = writable(null);

// Listen for authentication state to change => updates authenticated store
onAuthStateChanged(auth(), (User) => {
	if (User) {
		authenticated.set(true);
		// @ts-expect-error: "Can not set value User to null (user)"
		user.set(User);
	} else {
		authenticated.set(false);
		user.set(null);
	}
});

const db = getFirestore();
const storage = getStorage(app);
const aid = "TR7i9KDGkfbFolr0rSgLuuqrdfg2"

export {db, storage, aid };
