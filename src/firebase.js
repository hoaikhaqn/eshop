import app from 'firebase/app';
import 'firebase/auth';
import "firebase/firebase-firestore";
import config from "./config/config.js";

var Timestamp = app.firestore.Timestamp;

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
    onAuthChanged(setUser) {
        this.auth.onAuthStateChanged(async (res) => {
            if (res) {
                const token = await res.getIdToken();
                var user = {
                    userId: res.uid,
                    username: res.displayName,
                    email: res.email,
                    refreshToken: res.refreshToken,
                    accessToken: token,
                };
            }
            setUser(user || {})
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
                userId: result.user.uid,
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
    getProductsByKeyword(collectionName, keyword) {
        return new Promise(resolve => {
            let api = this.db.collection(collectionName)
                .orderBy('name').startAt(keyword).endAt(keyword + '\uf8ff')
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
    addDocument(collectionName, doc) {
        return new Promise(resolve => {
            this.db.collection(collectionName).add({
                ...doc,
                createdAt: Timestamp.fromDate(new Date()),
            })
                .then(doc => {
                    resolve({
                        status: true,
                        result: {
                            id: doc.id,
                            ...doc.data()
                        }
                    })
                })
                .catch(errs => rejects({
                    status: false,
                    result: errs
                }));
        })
    }
    getProductsByCategory(collectionName, id) {
        return new Promise(resolve => {
            let api = this.db.collection(collectionName)
                .where("categoryID", "==", id);

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
    getProductsOrderBy(prop, type) {
        return new Promise(resolve => {
            let api = this.db.collection("products")
                .orderBy(prop, type)
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
    getCartByUserId(userId) {
        return new Promise((resolve, rejects) => {
            this.db.collection("carts").where("userId", "==", userId).get().then(function (snapshot) {
                if (!snapshot.empty) {
                    snapshot.forEach(function (doc) {
                        resolve({
                            status: true,
                            result: {
                                cartId: doc.id,
                                ...doc.data()
                            }
                        })
                    });
                } else {
                    resolve({
                        status: false,
                        result: {}
                    })
                }
            })
        })
    }
    updateCart(cart) {
        return new Promise(async (resolve, rejects) => {
            this.db
                .collection("carts")
                .doc(cart.cartId)
                .set({
                    ...cart,
                    updatedAt: Timestamp.fromDate(new Date()),
                })
                .then(function (res) {
                    resolve({ status: true });
                })
                .catch(function (error) {
                    rejects();
                });
        })

    }
    removeCart(cartId) {
        return new Promise(resolve => {
            this.db.collection(collectionName).doc(cartId).get().then(doc => {
                doc.ref.delete();
                resolve({
                    status: true,
                    result: {
                        cartId: doc.id,
                        ...doc.data()
                    }
                });
            });
        })
    }
}

export default new Firebase();