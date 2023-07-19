import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAfwnjoAcr3Mt64TtGCd2fv30GriRzGar8",
  authDomain: "photo-tagging-3b1cb.firebaseapp.com",
  projectId: "photo-tagging-3b1cb",
  storageBucket: "photo-tagging-3b1cb.appspot.com",
  messagingSenderId: "532262825696",
  appId: "1:532262825696:web:9d198a1131eb8a9dce6a85"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)

export { firebaseApp, db }
