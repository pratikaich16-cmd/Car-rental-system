
function showError(id, message) {
    document.getElementById(id).innerHTML = message;
    document.getElementById(id).style.color = "red";
}


function clearMessages() {
    let ids = ["nameError", "emailError", "phoneError", "addressError", "genderError",
               "usernameError", "passwordError", "confirmPasswordError",
               "carTypeError", "licenseError", "formMessage"];

    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).innerHTML = "";
    }
}


function checkCarType() {
    let carType = document.getElementById("car_type").value;

    if (carType == "") {
        showError("carTypeError", "Please select a car type");
    } else {
        document.getElementById("carTypeError").innerHTML = "";
    }
}




function isDigit(ch) {
    return ch >= "0" && ch <= "9";
}


function isCapital(ch) {
    return ch >= "A" && ch <= "Z";
}


function isLetter(ch) {
    return isCapital(ch) || (ch >= "a" && ch <= "z");
}


function allDigits(text) {
    for (let i = 0; i < text.length; i++) {
        if (!isDigit(text[i])) {
            return false;
        }
    }
    return true;
}


function validateForm() {
    clearMessages();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;
    let carType = document.getElementById("car_type").value;
    let license = document.getElementById("license").value.trim();

    let valid = true;

    
    let nameOnlyLetters = true;
    for (let i = 0; i < name.length; i++) {
        if (!isLetter(name[i]) && name[i] != " ") {
            nameOnlyLetters = false;
        }
    }

    
    if (name == "") {
        showError("nameError", "Name cannot be empty");
        valid = false;
    } else if (!nameOnlyLetters) {
        showError("nameError", "Name should contain only letters");
        valid = false;
    } else if (!isCapital(name[0]) || name.indexOf(" ") == -1) {
        
        showError("nameError", "Enter full name starting with a capital letter (e.g. Ahona Islam)");
        valid = false;
    }

    let at = email.indexOf("@");
    let dot = email.lastIndexOf(".");

    if (email == "") {
        showError("emailError", "Email cannot be empty");
        valid = false;
    } else if (at < 1 || dot < at + 2 || dot == email.length - 1 || email.indexOf(" ") != -1) {
        showError("emailError", "Enter a valid email address");
        valid = false;
    }

    
    if (phone == "") {
        showError("phoneError", "Phone number cannot be empty");
        valid = false;
    } else if (!allDigits(phone)) {
        showError("phoneError", "Phone number should contain only numbers");
        valid = false;
    } else if (phone.length != 11) {
        showError("phoneError", "Phone number must be 11 digits");
        valid = false;
    } else if (phone[0] != "0" || phone[1] != "1" || phone[2] < "3") {
        showError("phoneError", "Phone number must start with 013 to 019");
        valid = false;
    }

 
    if (address == "") {
        showError("addressError", "Address cannot be empty");
        valid = false;
    }

    
    let genders = document.getElementsByName("gender");
    let genderSelected = false;
    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            genderSelected = true;
        }
    }
    if (!genderSelected) {
        showError("genderError", "Please select your gender");
        valid = false;
    }

    
    let usernameOk = true;
    for (let i = 0; i < username.length; i++) {
        let ch = username[i];
        if (!isLetter(ch) && !isDigit(ch) && ch != "_") {
            usernameOk = false;
        }
    }

    if (username == "") {
        showError("usernameError", "Username cannot be empty");
        valid = false;
    } else if (!isLetter(username[0]) || username.length < 4 || username.length > 15 || !usernameOk) {
        showError("usernameError", "Username must start with a letter, 4-15 characters (letters, numbers, _ only)");
        valid = false;
    }

    
    let hasNumber = false;
    let hasCapital = false;
    for (let i = 0; i < password.length; i++) {
        if (isDigit(password[i])) {
            hasNumber = true;
        }
        if (isCapital(password[i])) {
            hasCapital = true;
        }
    }

    if (password.length < 6) {
        showError("passwordError", "Password must contain at least 6 characters");
        valid = false;
    } else if (!hasNumber) {
        showError("passwordError", "Password is too weak");
        valid = false;
    } else if (!hasCapital) {
        showError("passwordError", "Password must contain at least one uppercase letter");
        valid = false;
    }

    
    if (password != confirmPassword) {
        showError("confirmPasswordError", "Passwords do not match");
        valid = false;
    }

   
    if (carType == "") {
        showError("carTypeError", "Please select a car type");
        valid = false;
    }

    if (license == "") {
        showError("licenseError", "License number cannot be empty");
        valid = false;
    } else if (!isCapital(license[0]) || !isCapital(license[1]) ||
               !allDigits(license.substring(2)) ||
               license.length < 9 || license.length > 15) {
        showError("licenseError", "License must be 2 capital letters + 7-13 digits (e.g. DK1234567)");
        valid = false;
    }

    
    if (!valid) {
        showError("formMessage", "Please fix the errors above");
        return false;
    }

    document.getElementById("formMessage").innerHTML = "Registration Successful!";
    document.getElementById("formMessage").style.color = "green";
    return false;
}