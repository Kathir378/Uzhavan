const updatePasswordBtn = document.getElementById("update-password-btn");
updatePasswordBtn.addEventListener("click",(e)=>{
updatePass(e);
});

function updatePass(e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    let changes = document.getElementById("changedUpdates");
    let old = document.getElementById("oldPassword").value;
    let newPass = document.getElementById("newPassword").value;
    let confirmPass = document.getElementById("confirmPassword").value;

    // Validate password strength and confirmation
    if (newPass.length < 6) {
        openNotMatch("Please choose a stronger password (minimum 6 characters).");
        return;
    }
    if (newPass !== confirmPass) {
        openNotMatch("New password and confirm password do not match.");
        return;
    }

    // Prepare the request payload
    const data = {
        newP: newPass,
        oldP: old
    };

    console.log("Entered into fetch with data:", data);

    // Make the POST request
    fetch("https://jsurya-7777-8443.zcodeusers.in/authfilter/ChangePassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (!response.ok) {
                // Handle non-JSON responses gracefully
                return response.text().then(text => {
                    throw new Error(`Server error: ${text}`);
                });
            }
            return response.json();
        })
        .then((response) => {
            console.log("Response:", response);

            // Handle successful response
            if (response.response === 200) {
                changes.style.display = "block";
                closepassForm();
                changes.innerText = "Password successfully changed.";
                setTimeout(() => {
                    changes.style.display = "none";
                }, 2000);
            } else {
                // Handle other response codes (e.g., 400)
                openNotMatch(response.output || "An error occurred.");
            }
        })
        .catch((error) => {
            console.error("Error:", error.message);
            openNotMatch(error.message || "An unexpected error occurred.");
        });
}


document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!");
    userDetails();

    // Close Button
    document.getElementById('closeBtn').addEventListener('click', function () {
        window.history.back(); // Redirect to the previous page
    });

    // Toggle Password Fields
    const togglePasswordFields = document.getElementById('togglePasswordFields');
    const passwordForm = document.getElementById('passwordForm');

    togglePasswordFields.addEventListener('click', function () {
        if (passwordForm.style.display === 'none' || passwordForm.style.display === '') {
            passwordForm.style.display = 'block'; // Show the password fields
        } else {
            passwordForm.style.display = 'none'; // Hide the password fields
        }
    });
});

function closepassForm(){
    const passwordForm = document.getElementById('passwordForm');
    passwordForm.style.display = 'none';
}

function userDetails() {
    console.log("Entered into userDetails");
    const data = {
        email: "kathireshv@gmail.com" // Replace with the actual email
    };
    console.log("Fetch of user Details")
    fetch("https://jsurya-7777-8443.zcodeusers.in/authfilter/GetUserDetails", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            console.log("Raw   :    ", response);
            return response.json();
        })
        .then((response) => {
            document.getElementById('name').value = response.name || 'Farmer';
            document.getElementById('number').value = response.mobileNo || 'N/A';
            document.getElementById('email').value = response.email || 'N/A';
            console.log("Response:", response);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

function goToLoginPage() {
    deleteCookie("Uzhavan");
    window.location.href = "../";
}

function deleteCookie(name) {
    deleteAllCookies();
}

function openNotMatch(str = "Password Doesn't match") {
    let notMatch = document.getElementById("passNotMatch");
    notMatch.style.display = "block";
    notMatch.innerText = str;

}

function deleteAllCookies() {
    // Get all cookies
    console.log("Before :    "+document.cookie);
    const cookies = document.cookie.split(";");

    // Loop through each cookie and set its expiration to a past date
    cookies.forEach(cookie => {
        const [name] = cookie.split("="); // Extract the cookie name
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });

    console.log("All cookies have been deleted.");
    console.log(document.cookie);
}

// Call the function to delete all cookies
// deleteAllCookies();
    


// document.addEventListener('DOMContentLoaded', () => {
//     // Fetch User Details on Page Load
//     fetch('http://kathirvenkat-5586.zcodeusers.in/authfilter/GetUserDetails') // Replace with your servlet endpoint
//         .then(response => response.json())
//         .then(data => {
//             // document.getElementById('name').value = data.name || 'Farmer';
//             // document.getElementById('number').value = data.mobile || 'N/A';
//             // document.getElementById('email').value = data.email || 'N/A';
//             console.log("hiii");
//         })
//         .catch(error => console.error('Error fetching user details:', error));

//     // Edit Name / Save Changes Button
//     const editNameBtn = document.getElementById('editNameBtn');
//     const nameInput = document.getElementById('name');

//     editNameBtn.addEventListener('click', () => {
//         if (editNameBtn.textContent === 'Edit Name') {
//             // Switch to "Save Changes" mode
//             nameInput.readOnly = false;
//             nameInput.focus();
//             editNameBtn.textContent = 'Save Changes';
//             editNameBtn.style.backgroundColor = '#4CAF50'; // Optional: Change button color
//         } else {
//             // Save changes and switch back to "Edit Name" mode
//             const newName = nameInput.value.trim();
//             if (!newName) {
//                 // alert('Name cannot be empty!');
//                 return;
//             }

//             fetch('/updateName', { // Replace with your servlet endpoint
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ name: newName })
//             })
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data.success) {
//                         // alert('Name updated successfully!');
//                         nameInput.readOnly = true;
//                         editNameBtn.textContent = 'Edit Name';
//                         editNameBtn.style.backgroundColor = '#4CAF50'; // Optional: Reset button color
//                     } else {
//                         // alert('Failed to update name.');
//                     }
//                 })
//                 .catch(error => console.error('Error updating name:', error));
//         }
//     });

//     // Logout Button
//     document.getElementById('logoutBtn').addEventListener('click', () => {
//         fetch('/logout', { // Replace with your logout endpoint
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' }
//         })
//             .then(response => {
//                 if (response.ok) {
//                     window.location.href = '/login.html'; // Redirect to login page
//                 } else {
//                     // alert('Logout failed. Please try again.');
//                 }
//             })
//             .catch(error => console.error('Error logging out:', error));
//     });

//     // Change Password Form
//     const passwordForm = document.getElementById('passwordForm');
//     passwordForm.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const oldPassword = document.getElementById('oldPassword').value;
//         const newPassword = document.getElementById('newPassword').value;
//         const confirmPassword = document.getElementById('confirmPassword').value;

//         if (newPassword !== confirmPassword) {
//             // alert('New passwords do not match!');
//             return;
//         }

//         fetch('/changePassword', { // Replace with your servlet endpoint
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ oldPassword, newPassword })
//         })
//             .then(response => response.json())
//             .then(data => {
//                 if (data.success) {
//                     // alert('Password changed successfully!');
//                     passwordForm.reset();
//                 } else {
//                     // alert(data.message || 'Failed to change password.');
//                 }
//             })
//             .catch(error => console.error('Error changing password:', error));
//     });
// });
