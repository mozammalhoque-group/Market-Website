// firebase/auth.js
import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword, signOut, updatePassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-auth.js";

// Client login
export async function clientLogin(userid, password) {
    const email = `${userid}@clients.market.mhg.info.bd`;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}

// Admin login (email + password)
export async function adminLogin(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}

// Logout
export function logout() {
    signOut(auth);
}

// Auth state listener
export function onAuthState(callback) {
    onAuthStateChanged(auth, callback);
}

// Change password
export async function changePassword(user, newPassword) {
    await updatePassword(user, newPassword);
}
