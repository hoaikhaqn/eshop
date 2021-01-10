import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firebase-firestore";
import config from "../config/config.js";

class Firebase {
    constructor() {
        firebase.initializeApp(config.firebase);
        console.log("FIREBASE");
        
        this.auth = firebase.auth();
        this.db = firebase.firestore();
    }
    getDataCollection(collectionName) {
        return new Promise (resolve =>{
            let api = this.db.collection(collectionName)
            api.onSnapshot(function (snapshot) {
                const data = [];
                snapshot.docs.forEach(doc => {
                    data.push({
                        ...doc.data(),
                        id: doc.id
                    });
                });
                resolve(data);
            });
        })
    }
}

export default new Firebase();