

let adminForm = document.getElementById("adminRegisterForm");//stores the form element with the id "adminRegisterForm" in the variable adminForm which is in the admin-register.html file
let adminMessage = document.getElementById("adminRegisterMessage");//stores the element with the id "adminRegisterMessage" in the variable adminMessage 
//which is in the admin-register.html file,this helps to display messages related to the admin registration form, such as validation errors or success messages.

adminForm.addEventListener("submit", function(event) {//this line adds an event listener to the adminForm that listens for the "submit" event. When the form is submitted, the provided function will be executed.

    let name = document.getElementById("fullname").value.trim();//stores the value of the input field with the id "fullname" in the variable name, and trims any leading or trailing whitespace from the value. This is typically used to get the user's full name input from the form.
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let adminId = document.getElementById("adminid").value.trim();
    let department = document.getElementById("department").value;
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let securityCode = document.getElementById("security-code").value;
    let agreement = document.getElementById("agreement").checked;//stores the checked state of the checkbox with the id "agreement" in the variable agreement. This is typically used to determine whether the user has agreed to certain terms or conditions.

    let namePattern = /^[A-Za-z ]+$/;//this line defines a regular expression pattern that matches a string containing only uppercase and lowercase letters (A-Z, a-z) and spaces. The pattern is stored in the variable namePattern. 
    //It can be used for validating names to ensure they consist of valid characters.
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//this line defines a regular expression pattern that matches a valid email address format. The pattern is stored in the variable emailPattern.
    //also ^ means the start of the string, [^\s@]+ means one or more characters that are not whitespace or '@', @ is a literal '@' character, \. is a literal dot, and [^\s@]+$ means one or more characters that are not whitespace or '@' at the end of the string.
    let phonePattern = /^[0-9]{11}$/;//this line defines a regular expression pattern that matches a string containing exactly 11 digits (0-9). The pattern is stored in the variable phonePattern.

    let error = "";//this line initializes an empty string variable named error. It will be used to store error messages related to form validation. If any validation checks fail, the corresponding error message will be assigned to this variable.

    if (name == "") {
        error = "Name cannot be empty.";
    }
    else if (!namePattern.test(name)) {
        error = "Name should contain only letters and spaces.";
    }
    else if (email == "") {
        error = "Email cannot be empty.";
    }
    else if (!emailPattern.test(email)) {
        error = "Enter a valid email address.";
    }
    else if (!phonePattern.test(phone)) {
        error = "Phone number must contain exactly 11 digits.";
    }
    else if (adminId.length < 4) {
        error = "Admin ID must contain at least 4 characters.";
    }
    else if (department == "") {
        error = "Please select a department.";
    }
    else if (username.length < 4) {
        error = "Username must contain at least 4 characters.";
    }
    else if (password.length < 6 || !/[0-9]/.test(password)) {//this line checks if the length of the password is less than 6 characters or if it does not contain at least one digit (0-9). If either condition is true, it means the password does not meet the specified criteria.
        error = "Password must contain at least 6 characters and one number.";
    }
    else if (confirmPassword != password) {
        error = "Passwords do not match.";
    }
    else if (securityCode.length < 4) {
        error = "Security code must contain at least 4 characters.";
    }
    else if (agreement == false) {
        error = "Please confirm the agreement.";
    }

    if (error != "") {
        event.preventDefault();
        adminMessage.innerHTML = "<p>" + error + "</p>";
    }
    else {
        event.preventDefault();
        adminMessage.innerHTML =
            "<p>Registration Successful! This is a front-end demo.</p>";
    }
});

adminForm.addEventListener("reset", function() {
    adminMessage.innerHTML = "";
});