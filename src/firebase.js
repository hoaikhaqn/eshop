import app from 'firebase/app';
import 'firebase/auth';
import "firebase/firebase-firestore";
import config from "./config/config.js";

class Firebase {
    constructor() {
        app.initializeApp(config.firebase);
        this.auth = app.auth();
        this.db = app.firestore();
    }
    isInitialized() {
        return new Promise((resolved) => {
            this.auth.onAuthStateChanged(resolved)
        })
    }
    async signUp(doc) {
        try {
            var errorCode, errorMessage;
            const {
                username,
                email,
                password
            } = doc;
            await this.auth.createUserWithEmailAndPassword(email, password).catch((error) => {
                errorCode = error.code;
                errorMessage = error.message;
            });
            await this.auth.currentUser.updateProfile({
                displayName: username
            }).catch((error) => {
                errorCode = error.code;
                errorMessage = error.message;
            })
            if (errorCode) {
                return {
                    errCode: errorCode,
                    errMsg: errorMessage
                }
            }
            return false;
        } catch (error) {

        }
    }
    signIn(doc) {
        this.auth.signInWithEmailAndPassword(doc.email, doc.password).then((user) => {
                console.log("Signed in", user);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }
    getDataCollection(collectionName) {
        return new Promise(resolve => {
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