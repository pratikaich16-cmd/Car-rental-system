

let loginForm = document.getElementById("loginForm");
let loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function(event) {

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;//let is a variable which store user input and where the input are changeable
    let role = document.getElementById("role").value;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let error = "";

    if (email == "") {
        error = "Email cannot be empty.";
    }
    else if (!emailPattern.test(email)) {
        error = "Enter a valid email address.";
    }
    else if (password == "") {
        error = "Password cannot be empty.";
    }
    else if (password.length < 6) {
        error = "Password must contain at least 6 characters.";
    }
    else if (role == "") {
        error = "Please select your user category.";
    }

    if (error != "") {
        event.preventDefault();
        loginMessage.innerHTML = "<p>" + error + "</p>";
    }
    else {
        event.preventDefault();
        loginMessage.innerHTML =
            "<p>Login form is valid! Backend authentication is required.</p>";
    }
});

loginForm.addEventListener("reset", function() {
    loginMessage.innerHTML = "";
});