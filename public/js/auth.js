
const loginLink = document.getElementById('login-link');
const createLink = document.getElementById('create-link');
const createAccountContainer = document.getElementById('createAccountContainer');
const loginAccountContainer = document.getElementById('loginAccountContainer');
const loginbtn = document.getElementById('login-btn');


// for creating new account
window.onload = function() {
  loginLink.onclick = function(e){
    createAccountContainer.classList.add('d-none');
    loginAccountContainer.classList.remove('d-none');
  }


  createLink.onclick = function(e){
    loginAccountContainer.classList.add('d-none');
    createAccountContainer.classList.remove('d-none');
  }
}

// window.onload = function () {

// loginLink.onclick = function (e) {
//       heading.innerText = "Login";
//       loginbtn.classList.remove('d-none');
//       createbtn.classList.add('d-none');
//       loginque.classList.add('d-none');
//       createque.classList.remove('d-none');
//       homeimg.src = "imgs/login1.png";
//       return false;
// }

// createlink.onclick = function (e) {
//       heading.innerText = "Create Account";
//       createbtn.classList.remove('d-none');
//       loginbtn.classList.add('d-none');
//       loginque.classList.remove('d-none');
//       createque.classList.add('d-none');
//       homeimg.src = "imgs/createaccount.png";
//       return false;
//       }
// }

// listen for auth status changed
auth.onAuthStateChanged(user => {
    if(user){
      
    }else{
      
    }
})

// listening for change in profile image selection

       const imgDiv = document.querySelector('.profile-pic-div');
        const img = document.querySelector('#photo');
        const file = document.querySelector('#file');
        const uploadBtn = document.querySelector('#uploadBtn');
        let choosedFile;


        imgDiv.addEventListener('mouseenter', function () {
            uploadBtn.style.display = "block";
        });



        imgDiv.addEventListener('mouseleave', function () {
            uploadBtn.style.display = "none";
        });



        file.addEventListener('change', function () {

            choosedFile = this.files[0];


            if (choosedFile) {

                const reader = new FileReader();

                reader.addEventListener('load', function () {
                    img.setAttribute('src', reader.result);
                });

                reader.readAsDataURL(choosedFile);
            }
        });

// sign up
const signupForm = document.getElementById("signupf");
signupForm.addEventListener('click', function (e) {
    e.preventDefault();

    // get info
    const email = document.getElementById('emailC').value;
    const password = document.getElementById('passwordC').value;  
    const firstName = document.getElementById('firstname').value; 
    const lastName = document.getElementById('lastname').value;

 
       
        alert('Saved');
         firebase.storage().ref('users/'+'/img.jpg').put(choosedFile).then(function() {
            alert('Saved Success');
          })

    //Firebase user authentication
   auth.createUserWithEmailAndPassword(email, password)
   .then(userCredential => {
     
        
          
         //set data into User database
         database.ref('records' + "/" + userCredential.user.uid).set({
           Email: email,
           Password: password,
           Firstname:firstName,
           Lastname:lastName
         }).then(success => {
                  
 
           window.location = "./homepage.html";
         });
       })
       .catch(function (error) {

         var errorCode = error.code;
         var errorMessage = error.message;


       });
  });

 

const saveToRealTimeDatabase = () =>{

    // get info
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;    
    // make object of data
    const data = {
      email:email,
      password:password
    }

    ref.push(data);

}

//signing users in
const loginForm = document.getElementById('loginf');

loginForm.addEventListener('submit', (e) => {

    e.preventDefault();

    // get user info
    const email = document.getElementById('emailP').value;
    const password = document.getElementById('passwordP').value;    

    auth.signInWithEmailAndPassword(email, password).then((cred)=>{
        // logged in successfully
        window.location.href = "./homepage.html";
    });

})

const googleFormSignIn = document.getElementById('googleFormSignIn');
const googleFormSignUp = document.getElementById('googleFormSignUp');

googleFormSignIn.addEventListener('submit', (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
  
   auth
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    const credential = result.credential;
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    window.location.href = "./homepage.html";
    
  }).catch((error) => {
  
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;

  });
})


googleFormSignUp.addEventListener('submit', (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
  
   auth
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    const credential = result.credential;
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    window.location.href = "./homepage.html";
    
  }).catch((error) => {
  
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;

  });
})