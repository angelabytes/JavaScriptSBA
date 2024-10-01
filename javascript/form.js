
document.addEventListener("DOMContentLoaded", () => {

    /* 
     * select elements from login and sign up form
     * changes signup form or login form to active
    */

    const signUp = document.getElementById("sign-up");
    const logIn = document.getElementById("login");
    const container = document.querySelector(".container");

    signUp.addEventListener("click", () => {
        container.classList.add("active");
    });

    logIn.addEventListener("click", () => {
        container.classList.remove("active");
    });

    /*
     * event listener that allows the user to toggle username or email 
     * for signing in 
    */  

    const loginType = document.getElementById("login-type");
    const userName = document.getElementById("username");
    const emailAdd = document.getElementById("email-add");
   
    loginType.addEventListener("change", function() {
        userName.style.display = "none";
        emailAdd.style.display = "none";
        if(this.value === "text"){
            userName.style.display = "block";
        }
        else if(this.value === "email"){
            emailAdd.style.display = "block";
        }
    });


    /*
     * Validations
    */

    const signupForm = document.getElementById("signup-form");
    
    // signupForm.addEventListener("submit", function(e) {
    //     e.preventDefault();

    //     document
    //     .querySelectorAll(".error-message")
    //     .forEach(el => {
    //         el.style.display = none
    //         const user = document.getElementById("user").value.trim();
    //         const email = document.getElementById("email").value.trim();
    //         const password = document.getElementById("password").value.trim();
    //         let valid = true;
    //         if(!isValidUser){
    //             valid = false;
    //             document.getElementById("userError").style.display = "block";
    //         }

    //         if(!isValidEmail){
    //             valid = false;
    //             document.getElementById("emailError").style.display = "block";
    //         }

    //         if(!isValidPassword){
    //             valid = false;
    //             document.getElementById("passwordError").style.display = "block";
    //         }

    //         if(valid){
    //             alert("New account created!");
    //             this.submit();
    //         }

    //     });
    // });

    const errors = document.querySelectorAll(".error-message");

    Array.from(errors).forEach(errorMessage => {
        errorMessage.style.display = "none";
    });

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

            const user = document.getElementById("user").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            let valid = true;
            if(!isValidUser(user)){
                valid = false;
                document.getElementById("userError").style.display = "block";
            }

            if(!isValidEmail(email)){
                valid = false;
                document.getElementById("emailError").style.display = "block";
            }

            if(!isValidPassword(password)){
                valid = false;
                document.getElementById("passwordError").style.display = "block";
            }

            if(valid){
                alert("New account created!");
                this.submit();
            }
    })

    function isValidUser(user){
        const re =/^[a-zA-Z0-9_-]{4,16}$/;
        return re.test(user);
    }

    function isValidEmail(email){
        const re =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function isValidPassword(password){
        const re =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return re.test(password);
    }

});
    