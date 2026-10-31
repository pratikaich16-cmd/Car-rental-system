let correctAnswer;

function generateQuestion(){

    let num1=Math.floor(Math.random()*10)+1;
    let num2=Math.floor(Math.random()*10)+1;
    correctAnswer=num1+num2;
    document.getElementById("question").innerHTML=num1+" + "+num2+"  =  ?";

}

generateQuestion();

function verifyAnswer(){

    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
     let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let license = document.getElementById("dvli").value.trim();
    let expiry = document.getElementById("expirydate").value.trim();
    let experience = document.getElementById("expri").value.trim();
    let password = document.getElementById("pass").value.trim();

if (name.length < 6) {
    alert("Please enter a valid name!");
    return;
}

if (email !== email.toLowerCase() || !email.includes("@")) {
    alert("Please enter a valid email!");
    return;
}

if (!((password.includes('#') || password.includes('&') ||
       password.includes('$') || password.includes('@')) &&
      (password.includes('0') || password.includes('1') ||
       password.includes('2') || password.includes('3') ||
       password.includes('4') || password.includes('5') ||
       password.includes('6') || password.includes('7') ||
       password.includes('8') || password.includes('9')))) {

    alert("Invalid Password!");
    return;
}

 if (name.trim() === "" || email.trim() === "" ||
        phone.trim() === "" || address.trim() === "" ||
        license.trim() === "" || expiry === "" ||
        experience === "" || password.trim() === "") {

        alert("Please fill up all the data!");
        return;
    }

    let useranswer=document.getElementById("answer").value.trim();

    if(useranswer===""){
        document.getElementById("message").innerHTML="Enter The answer before submit";
      return;
    }

 let answer=Number(useranswer);

 if(Number.isNaN(answer)){
    document.getElementById("message").innerHTML="Is not a valid answer";
    return;
    
 }

 /*answer check..*/
 if (answer === correctAnswer) {

    let choice = confirm("Registration Successful! Do you want to continue?");

    if (choice === true) {
        document.getElementById("driverForm").reset();

        generateQuestion();
        return;
    }
}
     else {

        document.getElementById("message").innerHTML= "Wrong answer! Try again.";

        document.getElementById("answer").value = "";

        generateQuestion();
        return;
    }



function resetForm() {


    document.getElementById("myForm").reset();

    generateQuestion();
}

}


function checkname(){
    let name=document.getElementById("name").value.trim();
 
 if(name.length<6){
    document.getElementById("namemss").innerHTML="Your name is invalid..!";
 }
else{
    document.getElementById("namemss").innerHTML="";
}

}
checkname();

function phnnumcheck(){
let phone=document.getElementById("phone").value.trim();

if(phone.length>11){
    alert("Enter Wrong number..!");
}

}

function passcheck(){
    let password=document.getElementById("pass").value.trim();
    if(password===""){
document.getElementById("passmss").innerHTML="Password is Required";
    }

    else if((password.includes('#') || password.includes('&') || password.includes('$') || password.includes('@')) &&
       (password.includes('0') || password.includes('1') || password.includes('2') || password.includes('3') || password.includes('4') || password.includes('5') || password.includes('6') || password.includes('7') || password.includes('8') || password.includes('9'))){
        document.getElementById("passmss").innerHTML="Valid password";
    }

    else {
        document.getElementById("passmss").innerHTML="Must use #/&/$/@/0-9 any ..!";
    }

}
passcheck();

function emailcheck(){
    let email = document.getElementById("email").value.trim();
 if(email===""){
    document.getElementById("emailmss").innerHTML="email is required";
 }
   else if(email !== email.toLowerCase()){
        document.getElementById("emailmss").innerHTML = "Uppercase letters are not allowed!";
    }
    else{
        document.getElementById("emailmss").innerHTML = "";
    }
}
emailcheck();



