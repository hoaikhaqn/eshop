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
    onAuthChanged(setUsername) {
        this.auth.onAuthStateChanged((user) => {
            setUsername(user || {})
        })
    }
    async signUp(doc) {
        var res = {
            status: true
        };
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
        var res = {
            status: true
        };
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
    async signOut() {
        var res = {
            status: true
        };
        await this.auth.signOut().catch((error) => {
            res.status = false;
            res.errCode = error.code;
            res.errMsg = error.message;
        })
        return res;
    }
    getCollection(collectionName) {
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
                resolve({
                    status: true,
                    result: data
                })
            });
        })
    }
    getDocument(collectionName, id) {
        return new Promise(resolve => {
            this.db.collection(collectionName).doc(id).get().then(doc => {
                console.log({
                    id: doc.id,
                    ...doc.data()
                });

                resolve({
                    status: true,
                    result: {
                        id: doc.id,
                        ...doc.data()
                    }
                })
            });
        })
    }
    setDocument(collection, id, data, cb) {
        return new Promise(resolve => {
            this.db
                .collection(collection)
                .doc(id)
                .set(data)
                .then(function () {
                    resolve()
                })
                .catch(function (error) {
                    cb && cb(false);
                });
        })
    }
}

export default new Firebase();