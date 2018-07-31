import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDXIBU41qUsJ0xCTVYfp74Z4o1G66Ro6OQ",
    authDomain: "catch-of-the-day-erin-black.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-erin-black.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;