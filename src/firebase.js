import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBu2BnjOJadG1GijaO-Nh53-VQkU4C5Nyo",
    authDomain: "myprotfolio-f6cd4.firebaseapp.com",
    projectId: "myprotfolio-f6cd4",
    storageBucket: "myprotfolio-f6cd4.appspot.com",
    messagingSenderId: "832277754514",
    appId: "1:832277754514:web:8fe0955c1343f794d56c4b",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

const storage = firebase.storage();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { database, auth, provider, storage };
