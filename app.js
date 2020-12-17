
(function(){


const loginForm = document.getElementById("login-form");
    
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    

    const username = loginForm.username.value;
    const password = loginForm.password.value;
    const auth = firebase.auth();
    
    const promise = auth.signInWithEmailAndPassword(username,password);
    promise.catch(e=>console.log(e.message));
    
});
const signform = document.getElementById("signUp-form-submit");

const signupButton = document.getElementById();
signupButton.addEventListener("click", (e) => {
    e.preventDefault();


    const username = signform.username.value; // Need to add this in html
    const password = signform.password.value;
    const email = signform.email.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email,password);
    promise.catch(e=> console.log(e.message))
});

firebae.auth().onAuthStateChanged(firebase => {
    if(firebaseUser)
    {
        console.log(firebaseUser);
    }
    else{
        console.log('not logged in');
    }
});

}());
