
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAA4Nwqdn0M528wn5btMtkr9Bb_729Ri30",
    authDomain: "uclassroom-3b507.firebaseapp.com",
    databaseURL: "https://uclassroom-3b507.firebaseio.com",
    projectId: "uclassroom-3b507",
    storageBucket: "uclassroom-3b507.appspot.com",
    messagingSenderId: "163931403563",
    appId: "1:163931403563:web:72089ad2a519da783f816e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function SignUp()
  {
      
      var email= document.getElementById("email");
      var password = document.getElementById("password");

      
      
      firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then(u => {
    window.location.href="HomePage.html"
  })
  .catch(error => {
    
     switch (error.code) {
        case 'auth/email-already-in-use':
          alert(`Email address  ${email.value} already in use.`)
          console.log(`Email address ${email.value} already in use.`);
        
          break;
        case 'auth/invalid-email':
          alert("Email is Invalid!")
          console.log(`Email address ${this.email.value} is invalid.`);
          
          break;
        case 'auth/operation-not-allowed':
          alert("Email is already used or is Invalid!")
          console.log(`Error during sign up.`);
          break;
        case 'auth/weak-password':
          alert("Password is not strong enough!")
          console.log('Password is not strong enough. Add additional characters including special characters and numbers.');
         
          break;
        default:
          alert("Sign-Up Error. Please try again!")
          console.log(error.message); 
          break;
      }
  });
  }

  function SignIn()
  {
    var email= document.getElementById("email");
    var password = document.getElementById("password");
    const loginErrorMsg = document.getElementById("login-error-msg");
    
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then(u=>{
        window.location.href = "HomePage.html";
    })
    .catch(error=>
        {
          loginErrorMsg.style.opacity = 1;
        });
  
    
  }

  function SignOut()
  {
      auth.signOut();
      alert("Signed Out")
  }

 