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

var bigOne = document.getElementById('bigOne');
var dbRef = firebase.database().ref().child('text');
dbRef.on('value', snap => bigOne.innerText = snap.val());

// Messaging
const messaging = firebase.messaging();
messaging.requestPermission()
.then(function() {
    console.log("Have Permission");
    return messaging.getToken();
})
.then(function(token) {
    console.log(token);
})
.catch(function(err) {
    console.log("Error occured");
})

messaging.onMessage(function(payload) {
    console.log('onMessage: ', payload);
    
    
    addNotification('panelContainer', payload.notification.title, payload.notification.body);
});

function addNotification(parentId, notificationTitle, notificationBody) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement('div');
    newElement.setAttribute('class', 'alert alert-success');
    newElement.setAttribute('role', 'alert');
    
    var html = '<strong>' + notificationTitle + '</strong> - ' + notificationBody + '</div>';
    newElement.innerHTML = html;
    p.appendChild(newElement);
}
