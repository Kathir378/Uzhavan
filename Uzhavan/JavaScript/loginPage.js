document.getElementById("userInfo").style.display="none";

function redirect(){
    window.location.href = "../Html/availableCrops.html";
    console.log("Redirecting to the calendar page");
}

localStorage.setItem("CurrentPage", "Pratice")


function login(){
    document.getElementById("userInfo").style.display = "none";
     document.getElementById("nameError").innerText="";
    document.getElementById("mobileError").innerText="";
    document.getElementById("emailError").innerText="";
    document.getElementById("passwordError").innerText="";
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(email.trim()==""||email.trim()==""){
            document.getElementById("username").value = "";
            document.getElementById("mobileNumber").value = "";
            document.getElementById("password").value = "";
            document.getElementById("userInfo").style.display = "block";
            document.getElementById("userInfo").innerText = "Please enter the vaild input";
            return "";
    }

    
    // Create a JSON object with the form data
    var data = {
        email1: email,
        password1: password,
    };
    fetch('https://jsurya-7777-8443.zcodeusers.in/LogIn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log('Response Headers:', response.headers.get('Content-Type'));
        
        // Check if response is JSON before parsing
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new Error("Server did not return JSON");
        }
        
        return response.json();
    })
    .then(response => {
        console.log('Raw Response:', response); 
        if (!response) {
            throw new Error('Empty response body');
        }
        if (response.responseCode == "200") {
            console.log("Correct");
            document.getElementById("userInfo").style.display = "block";
            document.getElementById("userInfo").style.color = "green"; 
            document.getElementById("userInfo").innerText = "Login Successful";
            redirect();
        } else {
            console.log("Not Correct");  
            document.getElementById("username").value = "";
            document.getElementById("mobileNumber").value = "";
            document.getElementById("password").value = "";
            document.getElementById("userInfo").style.display = "block";
            document.getElementById("userInfo").innerText = "email or password is incorrect";
        }
    })
    .catch(error => {
        console.error('Error:', error);  
    });

}


function signup(){
    document.getElementById("userInfo").style.display = "none";
    document.getElementById("nameError").innerText="";
    document.getElementById("mobileError").innerText="";
    document.getElementById("emailError").innerText="";
    document.getElementById("passwordError").innerText="";
    var username = document.getElementById('username').value; 
    var mobileNumber = document.getElementById('mobileNumber').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value; // Fix the variable name here
    // if(email.trim()==""||password.trim()==""||mobileNumber.trim()==""){
    //         document.getElementById("username").value = "";
    //         document.getElementById("mobileNumber").value = "";
    //         document.getElementById("password").value = "";
    //         document.getElementById("userInfo").style.display = "block";
    //         document.getElementById("userInfo").innerText = "Please enter the vaild input";
    //         return "";
    // }
   if (username.trim() == "") {
    document.getElementById("nameError").innerText = "The user name is not correct";
    return "";
}

// Fix for email validation
if (email.trim() == "" || !email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    document.getElementById("emailError").innerText = "The email is incorrect";
    return "";
}

// Fix for mobile number validation
if (mobileNumber.trim() == "" || !mobileNumber.match(/^[6-9]\d{9}$/)) {
    document.getElementById("mobileError").innerText = "The  mobile number is incorrect";
    return "";
}

if (password.trim().length < 6) {
    document.getElementById("passwordError").innerText = "The password atleast 6 characters";
    return "";
}

    // Log the data to the console
    console.log("User Name: " + username + " Mobile Number: " + mobileNumber + " Password: " + password);
    
    // Create a JSON object with the form data
    var data = {
        username1: username,
        phoneNumber1 : mobileNumber,
        password1: password,
        email1:email
    };
    fetch('https://jsurya-7777-8443.zcodeusers.in/SignUp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        return response.json();
    })  
    .then(response => {
        console.log('Raw Response:', response); 
        if (!response) {
            throw new Error('Empty response body');
        }
        if(response["responseCode"]=="200"){
        console.log("Correct ");
        document.getElementById("userInfo").style.display="block";
        document.getElementById("userInfo").style.color = "green"; 
        document.getElementById("userInfo").innerText = "Login Successfully";
        nag();
        }
        else if(response["responseCode"]=="121"){
        console.log(" not Correct ")  
        document.getElementById("username").value = "";
        document.getElementById("mobileNumber").value = "";
        document.getElementById("password").value= "";
        document.getElementById("userInfo").style.display="block";
        document.getElementById("userInfo").innerText = "The user is already exit";
        }
        else {
        console.log(" not Correct ")  
        document.getElementById("username").value = "";
        document.getElementById("mobileNumber").value = "";
        document.getElementById("password").value= "";
        document.getElementById("userInfo").style.display="block";
        document.getElementById("userInfo").innerText = "Please enter the vaild Input";
        }
    })
    .then(result => {
        console.log('Parsed Result:', result);  // Handle the parsed JSON response
    })
    .catch(error => {
            console.error('Error:', error);  // Handle any errors
    });
}
nag();

function nag(){
    document.getElementById("userInfo").style.display = "none";
    console.log(document.getElementById("navigater").innerText);
    if(document.getElementById("navigater").innerText=="Don't have an account? Sign Up"){
        document.getElementById("loginToManage").innerText = "";
       document.getElementById("navigater").innerHTML= `<span class="info">Already have an account ?</span> Login`;
        document.getElementById("Login").style.display="none";
        // document.getElementById("welcomeWords").innerHTML = "Hello, <br> Welcome ";

        document.getElementById("SignUp").style.display="block";
        document.querySelectorAll(".label1").forEach(function (element) {
        element.style.display="block";
    });
      document.querySelectorAll(".inputBox1").forEach(function (element) {
       element.style.display="block";
    });
    }
    else{
        document.getElementById("loginToManage").innerText = "Login to manage your account";

         document.getElementById("navigater").innerHTML=`<span class="info">Don't have an account? </span>Sign Up`;
        document.getElementById("Login").style.display="block";
        document.getElementById("SignUp").style.display="none";
        // document.getElementById("welcomeWords").innerHTML = "Hello, <br> Welcome Back";
        document.querySelectorAll(".label1").forEach(function (element) {
        element.style.display="none";
    });
      document.querySelectorAll(".inputBox1").forEach(function (element) {
       element.style.display="none";
    });
    }
  
}
console.log(document.cookie.split('; '));
function checkCookie(name) {
    return document.cookie.split('; ').some(cookie => cookie.startsWith(name + "=")); 
}

// Example usage
if (checkCookie("Uzhavan")) {
    window.location.href = "../Html/availableCrops.html";
} 