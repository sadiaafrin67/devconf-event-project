
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgz0wq4jzU530O3DKdK4vFjnJw_rR5ztI",
  authDomain: "devconf-event-project.firebaseapp.com",
  projectId: "devconf-event-project",
  storageBucket: "devconf-event-project.appspot.com",
  messagingSenderId: "26315583186",
  appId: "1:26315583186:web:366974ea4ca87a90bc870b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth