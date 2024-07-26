


function reg(event) {
    event.preventDefault(); 
    
 
    var formElements = {
        userName: document.querySelector("#txtUserName").value,
        email: document.querySelector("#txtemail").value,
        pwd: document.querySelector("#txtpwd").value,
        conpwd: document.querySelector("#txtconpwd").value
    };
    var password = document.querySelector("#txtpwd").value;
    var confirmPassword = document.querySelector("#txtconpwd").value;

    if (password !== confirmPassword) {
        alert("Password do not match!");
        return;
    }

    
    localStorage.setItem('formData', JSON.stringify(formElements));

  
    document.getElementById("REGISTERFORM").style.display = "none";
    document.getElementById("LOGINFORM").style.display = "block";

  
    document.getElementById("registerForm").reset();

    
    console.log('Registration successful!', formElements);
}


document.getElementById("registerBtn").addEventListener("click", reg);

function login(event) {
    event.preventDefault(); 
    
    var email = document.querySelector("#txtemailLogin").value;
    var password = document.querySelector("#txtpwdLogin").value;
    console.log(value)

    var storedData = JSON.parse(localStorage.getItem('formData'));

    if (storedData && storedData.email === email && storedData.pwd === password) {
        alert("Login successful!");
      
        console.log('Login successful!');
    } else {
        alert("Invalid credentials. Please try again.");
    }
}


document.getElementById("loginBtn").addEventListener("click", login);


function logintrue(){
    document.getElementById("REGISTERFORM").style.display = "none";
    document.getElementById("LOGINFORM").style.display = "block";

}

function loginflase(){
    document.getElementById("REGISTERFORM").style.display = "block";
    document.getElementById("LOGINFORM").style.display = "none";
}