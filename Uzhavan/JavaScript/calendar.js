let parsedMessage = "";
function updateFarmLand() {
    console.log("Update");
    let data = {
        "UpdateLand": "requestFromClient",
    };

    fetch('https://jsurya-7777-8443.zcodeusers.in/authfilter/GetField', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            parsedMessage = JSON.parse(data["message"]);
            console.log(parsedMessage);
            createFarmDivs(parsedMessage);
        })
        .catch(error => console.error('Error:', error));
}
document.getElementById("search").addEventListener("input", function () {
  let farmData = parsedMessage.map(farm => JSON.parse(farm)); // Ensure correct parsing

let word = document.getElementById("search").value.toLowerCase(); // Convert input to lowercase for case-insensitive search

farmData = farmData.filter(farm => farm.farmName.toLowerCase().includes(word.toLowerCase())); // Convert objects to string before filtering
console.log(farmData)
createFarmDivs(farmData) // Output the filtered farms


 

})
function createFarmDivs(farmData) {
    const container = document.getElementById("farmDetails");
    container.innerHTML = ""; // Clear existing farms

    farmData.forEach(farm => {
        const farmland = document.createElement("div");
        farmland.setAttribute("class", "farmland");

        const farmObj = typeof farm === "string" ? JSON.parse(farm) : farm;
        // farmland.innerHTML = `
        //     <div class="farmlandImage" style="background-image:url('../image/furitebackground/${farmObj.crop}.png')"></div>
        //     <div class="farmlandDetails">
        //         <div class="dustbin"><i class="fa-solid fa-ellipsis-vertical" style="color: #00000;"></i>
        //             <div class="dropdown-content">
        //                 <div class="dropdown-option" id="renameOption"><i class="fa-solid fa-repeat"></i>Rename</div>
        //                 <div class="dropdown-option" id="deleteOption"><i class="fa-solid fa-trash"></i>Delete</div>
        //             </div>
        //         </div>
        //         <p class="farmLetter">Farm Name: ${farmObj.farmName}</p>
        //         <p class="farmLetter">Crop: ${farmObj.crop}</p>
        //         <p class="farmLetter">Progress: ${farmObj.progress}%</p>
        //         <p class="farmLetter">Pincode: ${farmObj.pincode}</p>
        //         <p class="farmLetter">Farm Size: ${farmObj.size} acres</p>
        //         <p class="farmLetter">District: ${farmObj.district}</p>
        //         <p class="farmLetter">State: ${farmObj.state}</p>
        //     </div>`;
        farmland.innerHTML = `<div class="logo" style="background-image: url('../image/furitebackground/${farmObj.crop}.png');"></div>

                    <!-- <img href='../image/furitebackground/${farmObj.crop}.png'> -->
                    <div class="farmName">
                        <h1>${farmObj.farmName}</h1>
                      
                    </div>
                    <div class="cropName">
                          <p>${farmObj.crop}</p>
                    </div>
                    <div class="progress-container">
                        <svg width="100" height="100">
                            <circle class="progress-bg" cx="55" cy="55" r="30" stroke="#e0e0e0"></circle>
                            <circle class="progress-bar" cx="55" cy="55" r="30" stroke="#3498db"></circle>
                        </svg>
                        <div class="progress-text"> ${farmObj.progress}%</div>
                    </div>
                    <div></div>
                    <div class="dustbin"><i class="fa-solid fa-ellipsis-vertical" style="color: #00000"></i>
                     <div class="dropdown-content">
                         <div class="dropdown-option" id="renameOption"><i class="fa-solid fa-repeat"></i>Rename</div>
                       <div class="dropdown-option" id="deleteOption"><i class="fa-solid fa-trash"></i>Delete</div>
                    </div>
                    </div>`;
        // Add event listeners for dropdown
        let progress = farmObj.progress; // Example: 75
        let progressBar = farmland.querySelector(".progress-bar");

        // Circle circumference = 2 * π * r (where r = 40)
        let circumference = 2 * Math.PI * 30;
        let offset = circumference - (progress / 100) * circumference;

        progressBar.style.strokeDasharray = circumference;  // Set total length
        progressBar.style.strokeDashoffset = offset;
        const dustbin = farmland.querySelector(".dustbin");
        dustbin.addEventListener("click", showDropdown);

        const renameOption = farmland.querySelector("#renameOption");
        const deleteOption = farmland.querySelector("#deleteOption");
        let farmName = farmObj.farmName
        let pin = farmObj.pincode;
        let survey = farmObj.surveyNumber;
        renameOption.addEventListener("click", (event) => {
            const renamePopup = document.getElementById("renamePopup");
            const newNameInput = document.getElementById("newNameInput");
            newNameInput.value = farmName;
            renamePopup.style.display = "block";

            // Ensure no duplicate event listeners
            const confirmRenameBtn = document.getElementById("confirmRename");
            confirmRenameBtn.onclick = null;
            confirmRenameBtn.onclick = () => {


                const newName = newNameInput.value.trim();
                if (newName) {
                    console.log(`Renaming farm to: ${newName}`);
                    renamePopup.style.display = "none";

                    let data = {
                        pincode: pin,
                        surveyNo: survey,
                        name: newName // ✅ Use new name instead of old name
                    };

                    console.log(data);

                    fetch('https://jsurya-7777-8443.zcodeusers.in/authfilter/RenameLand', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(response => {
                             let name = farmland.querySelector(".farmName");
                            name.innerHTML = `<h1>${newName}</h1>`
                            console.log('Response Headers: rename', response.headers.get('Content-Type'));

                            if (!response.ok) {
                                throw new Error(`HTTP error! Status: ${response.status}`);
                            }

                            const contentType = response.headers.get("content-type");
                            if (contentType && contentType.includes("application/json")) {
                                return response.json();
                            } 
                        })
                        .then(response => {
                            console.log('Raw Response:', response);
                            if (!response) {
                                throw new Error('Empty response body');
                            }
                            if (response.responseCode == "200") {
                                console.log("Correct");
                                // ✅ Reload only after successful rename
                            } else {
                                console.log("Response Code:", response.responseCode);
                            }
                            let name = farmland.querySelector(".farmName");
                            name.innerHTML = `<h1>${newName}</h1>`
                            console.log("name is change "+newName );
                        })
                        .catch(error => {
                            let name = farmland.querySelector(".farmName");
                            name.innerHTML = `<h1>${newName}</h1>`;
                            console.log("name is change");
                             console.log("name is change "+newName );
                            console.error('Error:', error);
                            
                        });
                }
            };
        });

        deleteOption.addEventListener("click", (event) => {
            event.stopPropagation();
            const deletePopup = document.getElementById("deletePopup");
            deletePopup.style.display = "block";

            document.getElementById("confirmDelete").onclick = () => {
                // Add your delete logic here
                // console.log(`Deleting farm: ${farmName}`);
                deletePopup.style.display = "none";
                // location.reload(); // Reload after delete
                let data = {
                    pincode: pin,
                    surveyNo: survey
                }
                console.log(data);
                fetch('https://jsurya-7777-8443.zcodeusers.in/authfilter/DeleateFarmLand', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(response => {
                        farmland.style.display = "none";

                        console.log('Response Headers dele:', response.headers.get('Content-Type'));

                        // Check if response is JSON before parsing
                        const contentType = response.headers.get("content-type");
                        if (!contentType || !contentType.includes("application/json")) {
                            throw new Error("Server did not return JSON");
                        }
                        // return response.json();
                        // return true;
                    })
                    .then(response => {

                        console.log('Raw Response:', response);
                        if (!response) {
                            throw new Error('Empty response body');
                        }
                        if (response.responseCode == "200") {
                            console.log("Correct");
                            return true;
                        } else {
                            console.log("Not Correct");

                        }
                        farmland.style.display = "none";

                    }).catch(error => {
                        console.error('Error:', error);
                        farmland.style.display = "none";
                    });

            };

        });
        farmland.addEventListener("mouseleave", function () {
             
                let bin = farmland.querySelector(".dropdown-content");
                if (bin) bin.style.display = "none";
            });
        farmland.addEventListener("click", function () {
            let details = {
                "Name": farmObj.farmName,
                "Crop": farmObj.crop,
                "Pincode": farmObj.pincode,
                "Progress": farmObj.progress,
                "Size": farmObj.size,
                "District": farmObj.district,
                "State": farmObj.state,
                "surveyNo":farmObj.surveyNumber

            };

            localStorage.setItem("currentFarmDetails", JSON.stringify(details));
            window.location.href = "todaysTask.html";
        });

        container.appendChild(farmland);
    });

    // Add "+" button
    // const plus = document.createElement("div");
    // plus.setAttribute("id", "plus");
    const addFarmButton = document.getElementById("addFarmButton");
    addFarmButton.addEventListener("click", function () {
        window.location.href = "../Html/addFarm.html";
    });
    // plus.innerHTML = `<i class="fa-solid fa-plus" style="color: #77767b;"></i>`;
    // container.appendChild(plus);
    console.log("Inner  ." + (typeof container.innerHTML) + ".");
    if (container.innerHTML === "") {
        // console.log("hiiii");
        container.innerHTML = `<h1>No Farm Added</h1>`
        container.style.display = "flex";
    }
}

// Add back arrow functionality
// document.querySelector('.back-arrow').addEventListener('click', () => {
//     window.history.back();
// });

// Modified showDropdown function
function showDropdown(event) {
    event.stopPropagation();
    const dropdown = event.currentTarget.querySelector(".dropdown-content");
    // Hide all other dropdowns first
    document.querySelectorAll('.dropdown-content').forEach(d => d.style.display = "none");
    dropdown.style.display = "block";

    // Close dropdown when clicking outside
    const clickHandler = (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.style.display = "none";
            document.removeEventListener('click', clickHandler);
        }
    };
    document.addEventListener('click', clickHandler);
}

// Modified handleRename function
// function handleRename(farmName, pin, survey) {
//     const renamePopup = document.getElementById("renamePopup");
//     const newNameInput = document.getElementById("newNameInput");
//     newNameInput.value = farmName;
//     renamePopup.style.display = "block";

//     // Ensure no duplicate event listeners
//     const confirmRenameBtn = document.getElementById("confirmRename");
//     confirmRenameBtn.onclick = null;
//     confirmRenameBtn.onclick = () => {


//         const newName = newNameInput.value.trim();
//         if (newName) {
//             console.log(`Renaming farm to: ${newName}`);
//             renamePopup.style.display = "none";

//             let data = {
//                 pincode: pin,
//                 surveyNo: survey,
//                 name: newName // ✅ Use new name instead of old name
//             };

//             console.log(data);

//             fetch('https://jsurya-7777-8443.zcodeusers.in/authfilter/RenameLand', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(data)
//             })
//                 .then(response => {
//                     console.log('Response Headers:', response.headers.get('Content-Type'));

//                     if (!response.ok) {
//                         throw new Error(`HTTP error! Status: ${response.status}`);
//                     }

//                     const contentType = response.headers.get("content-type");
//                     if (contentType && contentType.includes("application/json")) {
//                         return response.json();
//                     } else {
//                         return response.text(); // Return as text if not JSON
//                     }
//                 })
//                 .then(response => {
//                     console.log('Raw Response:', response);
//                     if (!response) {
//                         throw new Error('Empty response body');
//                     }
//                     if (response.responseCode == "200") {
//                         console.log("Correct");
//                         location.reload(); // ✅ Reload only after successful rename
//                     } else {
//                         console.log("Response Code:", response.responseCode);
//                     }
//                     location.reload();
//                 })
//                 .catch(error => {
//                     console.error('Error:', error);
//                     location.reload();
//                 });
//         }
//     };
// }



// Modified handleDelete function
// function handleDelete(farmName,pin,survey) {
//     const deletePopup = document.getElementById("deletePopup");
//     deletePopup.style.display = "block";

//     document.getElementById("confirmDelete").onclick = () => {
//         // Add your delete logic here
//         // console.log(`Deleting farm: ${farmName}`);
//         deletePopup.style.display = "none";
//         // location.reload(); // Reload after delete
//             let data={
//         pincode:pin,
//         surveyNo:survey
//     }
//     console.log(data);
//      fetch('https://jsurya-7777-8443.zcodeusers.in/authfilter/DeleateFarmLand', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => {
//         console.log('Response Headers:', response.headers.get('Content-Type'));

//         // Check if response is JSON before parsing
//         const contentType = response.headers.get("content-type");
//         if (!contentType || !contentType.includes("application/json")) {
//             throw new Error("Server did not return JSON");
//         }
//         // return response.json();
//         // return true;
//     })
//     .then(response => {

//         console.log('Raw Response:', response); 
//         if (!response) {
//             throw new Error('Empty response body');
//         }
//         if (response.responseCode == "200") {
//             console.log("Correct");
//             return true;
//         } else {
//             console.log("Not Correct");  

//         }
//          location.reload(); 
//     }).catch(error => {
//         console.error('Error:', error);  
//          location.reload(); 
//     });

//     };

// }

// Close popups when clicking cancel    
document.querySelectorAll('.cancel').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.popup').forEach(popup => {
            popup.style.display = "none";
        });
    });
});
function sortFarms(order) {
    let farmData = parsedMessage
    farmData = farmData.map(farm => JSON.parse(farm));

    // Sort by farmName (ascending order)
    if (order == "A-Z") {
        farmData.sort((a, b) => a.farmName.localeCompare(b.farmName));
    }
    else if (order == "Z-A") {
        farmData.sort((a, b) => b.farmName.localeCompare(a.farmName));
    }
    else if (order == "progressLow") {
        farmData.sort((a, b) => a.progress - b.progress);
    }
    else {
        farmData.sort((a, b) => b.progress - a.progress);
    }
    createFarmDivs(farmData);
}
document.getElementById("filter").addEventListener("click",function(){
    document.getElementById("dropdown-content1").style.display="flex";
    
})
 document.getElementById("dropdown-content1").addEventListener("mouseleave",function(){
     document.getElementById("dropdown-content1").style.display="none"
 })
// Initialize
updateFarmLand();