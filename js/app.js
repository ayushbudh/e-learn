
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBeY_nLTK1zoB1cVPCIb77cd4Pva2q89II",
    authDomain: "learn-up-b2e40.firebaseapp.com",
    projectId: "learn-up-b2e40",
    storageBucket: "learn-up-b2e40.appspot.com",
    messagingSenderId: "418628749575",
    appId: "1:418628749575:web:9c8b78581b8385f32d1da2",
    measurementId: "G-38BYPK6Y31"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const auth = firebase.auth();

  const btnsignup = document.querySelector('signupid');
  const btnlogin = document.querySelector('login');
  const btnlogout = document.querySelector('btnlogout');

  function signup() {
  
      const txtemail = document.getElementById('email');
      const txtpass = document.getElementById('password');
      const email = txtemail.value;
      const pass = txtpass.value;

   auth.createUserWithEmailAndPassword(email, pass)
  .then((user) => {
    // Signed in 
    // ...
    window.location.href = "../html/HomePage.html"
    console.log('created');
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log('some error');
  });

  }

  function signin(){
      const txtemail = document.getElementById('email');
      const txtpass = document.getElementById('password');
      const email = txtemail.value;
      const pass = txtpass.value;

    auth.signInWithEmailAndPassword(email, pass)
    .then((user) => {
        // Signed in 
        // ...
         window.location.href = "../html/HomePage.html";
        console.log('signed in!')
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
    });
       
  }

  function signout(){
   auth.signOut().then(() => {
     console.log('signed out');
     location.replace("../html/SignOut.html");
  // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  }

  function signinwithgoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
  auth
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    window.location.href = "../html/HomePage.html";
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  }

 auth.onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log('User active');
  } else {
    // No user is signed in.
    console.log('User inactive');
  }
});
