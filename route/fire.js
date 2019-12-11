var firebase = require('firebase')

var config = {
    apiKey: "AIzaSyD08YkWZ-XpQT_I6bS3CjuHhJF7b6Dyv6Q",
    authDomain: "weatherapp-95615.firebaseapp.com",
    databaseURL: "https://weatherapp-95615.firebaseio.com",
    projectId: "weatherapp-95615",
    storageBucket: "weatherapp-95615.appspot.com",
    messagingSenderId: "504855136276"
};

var fire = firebase.initializeApp(config);
module.exports = fire