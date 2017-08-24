importScripts('https://www.gstatic.com/firebasejs/4.3.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.3.0/firebase-messaging.js')

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCkjsvnLNnXPKwt75GQHONDV6x5q1GdY_I",
    authDomain: "fcm-web-test-d9462.firebaseapp.com",
    databaseURL: "https://fcm-web-test-d9462.firebaseio.com",
    projectId: "fcm-web-test-d9462",
    storageBucket: "fcm-web-test-d9462.appspot.com",
    messagingSenderId: "36527637075"
};
firebase.initializeApp(config);
// End of Firebase Init

// Message handler
const messaging = firebase.messaging();

// Message handler - DATA PAYLOAD ONLY -
messaging.setBackgroundMessageHandler(function(payload) {
    const title = "Hello World";
    const options = {
        body: payload.data.status
    };
    
    return self.registration.showNotification(title, options);
});