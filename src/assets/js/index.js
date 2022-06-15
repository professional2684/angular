var signup = document.querySelector('.signup');
var signin = document.querySelector('.signin');
var signUpScreen = document.querySelector('.signup-screen');
var signInScreen = document.querySelector('.signin-screen');
var a = false;
signup.addEventListener('click', () => {
    if(a){
        signup.classList.toggle('option-toggle');
        signin.classList.toggle('option-toggle');
        signInScreen.classList.toggle('non-display');
        signUpScreen.classList.toggle('non-display');
        a = !a;
    };
});
signin.addEventListener('click', () => {
    if(!a){
        signin.classList.toggle('option-toggle');
        signup.classList.toggle('option-toggle');
        signUpScreen.classList.toggle('non-display');
        signInScreen.classList.toggle('non-display');
        a = !a;
    };
});