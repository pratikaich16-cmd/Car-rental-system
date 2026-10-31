
function nameCheck() {
    let name = document.getElementById("fullname").value.trim();

    if (name === "") {
        document.getElementById("fullnameerror").innerHTML = "Please fill your name ";
        return false;
    }

    if (name.length < 5) {
        document.getElementById("fullnameerror").innerHTML = "Name must be at least 5 characters long";
        return false;
    }

    for (let i = 0; i < name.length; i++) {
        let ch = name[i];

        let isLetter = (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z');
        let isSpace = (ch === ' ');

        if (!isLetter && !isSpace) {
            document.getElementById("fullnameerror").innerHTML = "Name should contain only letters";
            return false;
        }
    }

    document.getElementById("fullnameerror").innerHTML = "";
    return true;
}


function emailCheck() {
    let email = document.getElementById("email").value.trim();

    if (email === "") {
        document.getElementById("emailerror").innerHTML = "Please fill your email";
        return false;
    }

    let atPos = email.indexOf("@");
    let dotPos = email.lastIndexOf(".");

    if (atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= email.length || email.indexOf(" ") !== -1) {
        document.getElementById("emailerror").innerHTML = "Enter a valid email address";
        return false;
    }

    document.getElementById("emailerror").innerHTML = "";
    return true;
}


function phoneCheck() {
    let phone = document.getElementById("phone").value.trim();

    if (phone === "") {
        document.getElementById("phoneerror").innerHTML = "Please enter your number";
        return false;
    }

    if (phone.length !== 11) {
        document.getElementById("phoneerror").innerHTML = "Number must contain exactly 11 digits";
        return false;
    }

    for (let i = 0; i < phone.length; i++) {
        if (phone[i] < '0' || phone[i] > '9') {
            document.getElementById("phoneerror").innerHTML = "Only numbers are allowed";
            return false;
        }
    }

    document.getElementById("phoneerror").innerHTML = "";
    return true;
}


function dobCheck() {
    let dob = document.getElementById("dob").value;

    if (dob === "") {
        document.getElementById("doberror").innerHTML = "Please fill your Date of Birth";
        return false;
    }

    document.getElementById("doberror").innerHTML = "";
    return true;
}


function genderCheck() {
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let other = document.getElementById("other").checked;

    if (!male && !female && !other) {
        document.getElementById("gendererror").innerHTML = "Please select from this";
        return false;
    }

    document.getElementById("gendererror").innerHTML = "";
    return true;
}


function addressCheck() {
    let address = document.getElementById("address").value.trim();

    if (address === "") {
        document.getElementById("addresserror").innerHTML = "Please write your address";
        return false;
    }

    document.getElementById("addresserror").innerHTML = "";
    return true;
}


function licenseCheck() {
    let license = document.getElementById("license").value.trim();

    if (license === "") {
        document.getElementById("licenseerror").innerHTML = "Please fill this out";
        return false;
    }

    document.getElementById("licenseerror").innerHTML = "";
    return true;
}


function nidCheck() {
    let nid = document.getElementById("nid").value.trim();

    if (nid === "") {
        document.getElementById("niderror").innerHTML = "Please fill your nid";
        return false;
    }

    document.getElementById("niderror").innerHTML = "";
    return true;
}


function usernameCheck() {
    let username = document.getElementById("username").value.trim();

    if (username === "") {
        document.getElementById("usernameerror").innerHTML = "Please enter your username";
        return false;
    }

    document.getElementById("usernameerror").innerHTML = "";
    return true;
}


function passwordCheck() {
    let password = document.getElementById("password").value;

    if (password === "") {
        document.getElementById("passworderror").innerHTML = "Enter your password please";
        return false;
    }

    let hasNumber = false;
    let hasUpper = false;

    for (let i = 0; i < password.length; i++) {

        if (password[i] >= '0' && password[i] <= '9') {
            hasNumber = true;
        }

        if (password[i] >= 'A' && password[i] <= 'Z') {
            hasUpper = true;
        }
    }

    if (password.length < 6 || !hasNumber || !hasUpper) {
        document.getElementById("passworderror").innerHTML = "Password must contain 6 characters, one uppercase letter and one number";
        return false;
    }

    document.getElementById("passworderror").innerHTML = "";
    return true;
}


function confirmCheck() {
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm_password").value;

    if (confirm === "") {
        document.getElementById("confirmerror").innerHTML = "Please fill this out";
        return false;
    }

    if (password !== confirm) {
        document.getElementById("confirmerror").innerHTML = "Passwords do not match";
        return false;
    }

    document.getElementById("confirmerror").innerHTML = "";
    return true;
}


function termsCheck() {
    let terms = document.getElementById("terms").checked;

    if (!terms) {
        document.getElementById("termserror").innerHTML = "Please click on it";
        return false;
    }

    document.getElementById("termserror").innerHTML = "";
    return true;
}

function myVal() {

    let allValid = true;

    if (nameCheck() == false) {
        allValid = false;
    }

    if (emailCheck() == false) {
        allValid = false;
    }

    if (phoneCheck() == false) {
        allValid = false;
    }

    if (dobCheck() == false) {
        allValid = false;
    }

    if (genderCheck() == false) {
        allValid = false;
    }

    if (addressCheck() == false) {
        allValid = false;
    }

    if (licenseCheck() == false) {
        allValid = false;
    }

    if (nidCheck() == false) {
        allValid = false;
    }

    if (usernameCheck() == false) {
        allValid = false;
    }

    if (passwordCheck() == false) {
        allValid = false;
    }

    if (confirmCheck() == false) {
        allValid = false;
    }

    if (termsCheck() == false) {
        allValid = false;
    }

    if (allValid == true) {
        document.getElementById("success").innerHTML = "Registration  is Successful!";
        window.location.href = "success.html";
    }
    else {
        document.getElementById("success").innerHTML = "";
    }

    return false;
}

