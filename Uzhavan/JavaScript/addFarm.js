function validateForm() {
    document.querySelectorAll(".error-message").forEach(error => {
        error.classList.remove("active");
    });

    var isValid = true;

    // Validate Farm Name
    const farmName = document.getElementById("farmName").value.trim();
    if (!farmName) {
        document.getElementById("farmNameError").classList.add("active");
        isValid = false;
    }

    // Validate Pincode
    const pinCode = document.getElementById("pinCode").value.trim();
    if (!pinCode || pinCode.length < 6) {
        document.getElementById("pinCodeError").classList.add("active");
        isValid = false;
    }
    console.log("Pin: "+pinCode);
    console.log("Pin type : "+ (typeof pinCode));

    

    // Survey Number
    const surveyNo = document.getElementById("surveyNo").value.trim();
    if (!surveyNo || surveyNo.length < 4) {
        document.getElementById("surveyError").classList.add("active");
        isValid = false;
    }


    // Validate Land Area
    const landArea = document.getElementById("landArea").value;
    if (!landArea) {
        document.getElementById("landAreaError").classList.add("active");
        isValid = false;
    }

    const areaValue = document.getElementById("areaValue").value;
    console.log(areaValue);

    if (!areaValue) {
        document.getElementById("areaValueError").classList.add("active");
        isValid = false;
    }
    if (areaValue < 0) {
        isValid = false;
    }
    
    console.log("checking is valid    "+isValid);
    // Validate Area Value (if visible)
    if (isValid) {
        let area = areaValue;
        console.log("entered into is valid")
        localStorage.setItem("FarmName", farmName);
        localStorage.setItem("pinCode", pinCode);
        localStorage.setItem("landType", landArea);
        if(landArea == "hectare"){
            area *= 2.47;
            area = (Math.trunc(area*100)/100)
        }
        else if(landArea == "hectare"){
            area *= 0.01;
            area = (Math.trunc(area*100)/100)
        }
        console.log("Are   "+area);
        localStorage.setItem("landSize", (area));
        localStorage.setItem("surveyNo", surveyNo);
        console.log(pinCode + "   " + surveyNo);
        validateIndianPincode(pinCode).then(isValid1 => {
            console.log("Validation: " + isValid1);
            console.log("type Validation: " + typeof isValid1);

            if (isValid1 === true) {
                checkPinAndSurvey(pinCode, surveyNo);
            }
            else{
                document.getElementById("pinCodeError").classList.add("active");
            }
        });
        
        
        console.log("next page")
    }
}


function checkPinAndSurvey(pin, sur) {
    const data = {
        pinCode: pin,
        surveyNo: sur
    };
    console.log("Entered into checking:", data);

    fetch("https://jsurya-7777-8443.zcodeusers.in/authfilter/AddfarmCheck", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text(); // Log the raw response
        })
        .then((text) => {
            console.log("Raw Response:", text);
            return JSON.parse(text); // Parse the JSON
        })
        .then((response) => {
            console.log("Response:", response);
            console.log("Success");
            if(response.responseCode == "101"){
                document.getElementById("farmError").style.display = "block";

            }
            else if(response.responseCode == "200"){
                window.location.href = "cropSuggestion.html";
            }
        })
        .catch((error) => {
            console.error("Error:", error.message);
            // Handle the error (e.g., display a message to the user)
        });
}

showInputBox()
function showInputBox() {
    // const selectBox = document.getElementById("areaLabel").value;
    // const selectedValue = selectBox.value;
    // const selectedAreaType = document.getElementById("selectedAreaType");
    // selectedAreaType.innerHTML = selectBox.trim()+":";
    // inputContainer.style.display = "flex";
    // if (selectedValue) {
    //     document.getElementById("areaLabel").innerText = `Enter the amount of ${selectedValue} you have:`;
    //     inputContainer.style.display = "flex";
    // } else {
    //     inputContainer.style.display = "none";
    // }
}

function goBackToLanding() {
    window.location.href = "calendar.html";
}

function validateIndianPincode(pincode) {
  const url = `https://api.postalpincode.in/pincode/${pincode}`;
  
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data[0].Status === "Success") {
        return true; // Valid pincode
      } else {
        return false; // Invalid pincode
      }
    })
    .catch(error => {
      console.error("Error validating pincode:", error);
      return false;
    });
}


// Test
validateIndianPincode("627809").then(valid => {
    console.log("Val "+valid);
  console.log(valid ? "Valid Pincode" : "Invalid Pincode");
});

document.querySelector('.back-arrow').addEventListener('click', () => {
    window.history.back();
});

function exit(){
    window.location.href = "../Html/calendar.html";
}
