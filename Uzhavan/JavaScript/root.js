let mainpages = ["Home","Shop" , "Advisor" , "Pratice"]
console.log("Root Page");

function rootColor( currentpage ){
   for(let page of mainpages ){
      let icon = document.getElementById(page)
      if(currentpage==page){
          console.log(page)
          icon.style.color ="white";
          currentPage = page;
          localStorage.setItem("CurrentPage",page)
        }
      else{
          icon.style.color ="white";
      }
   }
}

updateIconColor();
function updateIconColor(){
   let currentPage = localStorage.getItem("CurrentPage")
   console.log("CurrentPage: " + currentPage)
   document.getElementById(currentPage).style.color = "white";  
}
let notifications = 0;
let notifCount=0;
function notifShow() {


           fetch('https://jsurya-7777-8443.zcodeusers.in/authfilter/notification', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include"
      
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
            if(notifCount!=1){
                notifications=new Map(Object.entries(JSON.parse(response.message)));
            }
            notifCount++;
            
        } else {
            console.log("Not Correct");  
         }
    })
    .catch(error => {
        console.error('Error:', error);  
    });
    console.log(notifications);

    let container = document.getElementById("notificationDropdown");

    if (!container) {
        console.error("Error: notificationDropdown not found!");

        return;

    }

  
    container.innerHTML = ""; // Clear previous notifications
      let container1= document.createElement("div");
       let notifHeader= document.createElement("div");
      container1.id="contentNotfic"
    notifHeader.id="notification-header";
    notifHeader.innerHTML='<a onclick="notifHide()"><i class="fa-solid fa-xmark"></i></a><a>Notifications</a><a></a>'
    container.appendChild(notifHeader)
    if (!notifications || notifications.size === 0) {
            notifHeader.innerHTML='<a onclick="notifHide()"><i class="fa-solid fa-xmark"></i></a><a>Notifications</a><a></a><p>No new notifications</p>'
    container.appendChild(notifHeader)
        // container.innerHTML = "<p>No new notifications</p>";
        container.style.display = "block";
        return; // Stop execution
    }
    let notifElement = document.createElement("div");
    // Iterate through Map
    notifications.forEach((value, key) => {
        let notificationObj = value; // The object containing notification details

        let notifElement = document.createElement("div");
        notifElement.classList.add("notification");
        if(notificationObj["status"]=="read"){
notifElement.innerHTML = `
            <div class="notify ">
                <h5 style="line-height: 1px;">${notificationObj["title"]}</h5>
               <h5> <p>farm name:${notificationObj["farm_name"]}</p></h5>
                <p class="description">${notificationObj["Producer Notification"]}</p>
                <div class="time">${notificationObj["time"]}<div>
            </div>
        `;
        }
        else{
            notifElement.innerHTML = `
            <div class="notify notifycl">
                <h5 style="line-height: 1px;">${notificationObj["title"]}</h5>
               <h5> <p>farm name:${notificationObj["farm_name"]}</p></h5>
                <p class="description">${notificationObj["Producer Notification"]}</p>
                <div class="time">${notificationObj["time"]}<div>
            </div>
        `;
        }
        

        container1.appendChild(notifElement);
       
    });
     container.appendChild(container1);
     container.style.display = "block";
      
}
function notifHide(){
    document.getElementById("notificationDropdown").style.display="none";

}

function checkCookie(name) {
    return document.cookie.split('; ').some(cookie => cookie.startsWith(name + "=")); 
}

if (checkCookie("Uzhavan")) {
    console.log("is there");
} else {
    window.location.href = "../Html/loginPage.html";
}

function findFooterWidth(){
    const foot = document.querySelector("footer");
    console.log(foot.offsetWidth);
}

findFooterWidth();
notifShow();
notifHide();

// function redirect(){

// }

// let eventSource;

// function connectSSE() {
//     console.log("⏳ Connecting to SSE...");

//     eventSource = new EventSource("http://kathirvenkat-5586.zcodeusers.in/scheduled-notifications");

//     eventSource.onopen = () => {
//         console.log("✅ Connected to SSE");
//     };

//     eventSource.onmessage = (event) => {
//         console.log("🔔 New Notification:", event.data);
//     };

//     eventSource.onerror = (error) => {
//         console.log("❌ Connection lost. Reconnecting in 3 seconds...", error);
//         eventSource.close();
//         setTimeout(connectSSE, 3000);
//     };
// }

// connectSSE();


// function getCookie(name) {
//     let cookies = document.cookie.split("; ");
//     for (let cookie of cookies) {
//         let [key, value] = cookie.split("=");
//         if (key === name) {
//             return value;
//         }
//     }
//     return null; // Return null if the cookie is not found
// }
// window.onload = function () {
//     let userToken = getCookie("Uzhavan"); // Replace with your actual cookie name

//     if (!userToken) {
//         // No valid cookie, redirect to login page
//         window.location.href = "../Html/loginPage.html"; // Change this to your login page URL
//     }
//};

  
// document.getElementById("dropDown").addEventListener("click", function() {
//    document.getElementById("notificationDropdown").style.display="block";
// });

// document.getElementById("dropDown").addEventListener("mouseout", function() {
//     document.getElementById("notificationDropdown").style.display="block"; // Reset background color when mouse leaves
// });
// function showNotification() {
//             document.getElementById("notificationDropdown").style.display = "block";
//         }

//         function hideNotification() {
//             document.getElementById("notificationDropdown").style.display = "none";
//         }


