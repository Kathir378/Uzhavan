function redirect(){
  window.location.href = "../landing/calendar.html";
  console.log("Redirecting to the calendar page");
}


function login(){
    var username = document.getElementById('username').value; 
    var mobileNumber = document.getElementById('mobileNumber').value;
    var password = document.getElementById('password').value; // Fix the variable name here
    
    // Log the data to the console
    console.log("User Name: " + username + " Mobile Number: " + mobileNumber + " Password: " + password);
    
    // Create a JSON object with the form data
    var data = {
        username: username,
        phoneNumber : mobileNumber,
        password: password
    };
    
fetch('http://kathirvenkat-5586.zcodeusers.in/LogIn', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => {
    console.log('Response Status:', response.status);  // Log response status
    return response.json();  // Parse the JSON
})
.then(result => {
    console.log('Response:', result);  // Log the parsed response
})
.catch(error => {
    console.error('Error:', error);  // Handle any errors
});
}


