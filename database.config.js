var firebase = require('firebase');

//Inicializo firebase
const CONFIG = {
    apiKey: "AIzaSyDdJNh29qNUByHQ8C3Hop9lWA7_vuFLpkc",
    authDomain: "darev1-7660a.firebaseapp.com",
    databaseURL: "https://darev1-7660a.firebaseio.com",
    projectId: "darev1-7660a",
    storageBucket: "darev1-7660a.appspot.com",
    messagingSenderId: "483248782943"
};

var ConfigurarDataBase = () => {
    firebase.initializeApp(CONFIG);

    return firebase.database().ref();
}

module.exports = ConfigurarDataBase;