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
        var res = { status: true };
        const {
            username,
            email,
            password
        } = doc;
        await this.auth.createUserWithEmailAndPassword(email, password).catch((error) => {
            res.status = false;
            res.errCode = error.code;
            res.errMsg = error.message;
        });
        await this.auth.currentUser.updateProfile({
            displayName: username
        }).catch((error) => {
            res.status = false;
            res.errCode = error.code;
            res.errMsg = error.message;
        })
        return res;
    }
    async signIn(doc) {
        var res = { status: true };
        await this.auth.signInWithEmailAndPassword(doc.email, doc.password).then((result) => {
            res.result = {
                username: result.user.displayName,
                email: result.user.email,
                refreshToken: result.user.refreshToken
            };
        }).catch((error) => {
            res.status = false;
            res.errCode = error.code;
            res.errMsg = error.message;
        })
        return res;
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