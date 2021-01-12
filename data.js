const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBibQjIchIdQjufLF29121guKchIfJeuPw",
    authDomain: "eshop-50a07.firebaseapp.com",
    databaseURL: "https://eshop-50a07-default-rtdb.firebaseio.com",
    projectId: "eshop-50a07",
    storageBucket: "eshop-50a07.appspot.com",
    messagingSenderId: "982384953544",
    appId: "1:982384953544:web:9c15e574c4c184340efdfd",
    measurementId: "G-07XE39MJ7D"
});

var db = firebase.firestore();

var menu = [{
        "id": 1,
        "name": "Focaccia al rosmarino",
        "description": "Wood fired rosemary and garlic focaccia",
        "price": 8.50,
        "type": "Appetizers"
    },
    {
        "id": 2,
        "name": "Burratta con speck",
        "description": "Burratta cheese, imported smoked prok belly prosciutto, pached balsamic pear",
        "price": 13.50,
        "type": "Appetizers"
    }
]

menu.forEach(function (obj) {
    db.collection("menu").add({
            id: obj.id,
            name: obj.name,
            description: obj.description,
            price: obj.price,
            type: obj.type
        }).then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
});