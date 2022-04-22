import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCD64lrI8VJZySXIIQcQDFTYHDSbV51DOc",
    authDomain: "tset-4578c.firebaseapp.com",
    projectId: "tset-4578c",
    storageBucket: "tset-4578c.appspot.com",
    messagingSenderId: "967411798591",
    appId: "1:967411798591:web:19867b0749637f0f11de8a",
    measurementId: "G-ZJKFMWQWZ3"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth } 
