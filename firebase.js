import firebase from "firebase";
const firebaseApp = firebase.initializeApp({

    
        apiKey: "AIzaSyCCWMLogmEKuYJ4jivXim1rHKE8n2jkoXI",
        authDomain: "clone-40c9c.firebaseapp.com",
        projectId: "clone-40c9c",
        storageBucket: "clone-40c9c.appspot.com",
        messagingSenderId: "108891556145",
        appId: "1:108891556145:web:37dd60a5309a8e9cf10810",
        measurementId: "G-RJZMN40DHJ"
    
  
    
 

})

const auth = firebase.auth();
export {auth};