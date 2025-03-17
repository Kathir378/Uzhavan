const apiKeyOne   = "AIzaSyCP6JdVrlu2Fdmj0yStUZYIdqRRihTdm7U";
const apiKeyTwo   = "AIzaSyBcD9CcatWX6jFdxgFfl2zwnuqXcG9avoo";
const apiKeyThree = "AIzaSyDPRf0QIw-bAAkD4nFKUuerpJB-8goPjFQ";

const apiKeyFour  = "AIzaSyD29wquFEd2LDsPMM_ogtl9NJc-dX3aaKE";
const apiKeyFive  = "AIzaSyDZIERKpfsLYR9ysnG3RB-mfH9ePdoRS_Y";
const apiKeySix   = "AIzaSyAboKtGfysp_dNa13irOr2tY1nkPjblU0s";
const apiKeySeven = "AIzaSyCQQHfuw_qWOPJqOfVekT09gMnKYv0GN2o";


//---------------API FROM ESAKI--------------
// const apiKeyOne = AIzaSyCaEGPyOeZb56GQub4Y_Ghw1OK_mgGtZWA
// const apiKeyTwo = AIzaSyCXXOCA72Dx0nqMNGE730QEzMo2gA46grg
// const apiKeyThree = AIzaSyDlKnCWvmAqUGCbffFk7AaA76nRvNixUYU
// const apiKeyFour  =  AIzaSyBPMGFWK3hVKWKMSv9yoQH06FDficW30ac
// const apiKeyFive  = AIzaSyBGpDZ-0XjthmjAcyQApTl7YD4PucnI0_M
// const apiKeySix  AIzaSyDLDo7kHw12hqAfK3DQ-csj6XgBlaEpoI4
// 17 AIzaSyDWDaAhae0jHiBvS84O5MsdmGn4dCndDuk
// 18 AIzaSyAot7umV79t4Cp91OIehiPSqNh1X_70ePM
// 19 AIzaSyAD4ST9dQ8N7WTO7LXiqoDeOppOXfTISrA
// 20 AIzaSyDpLSCOGzKAuNKYJFpwYc6bHzPCDI1-9mY

let keyForPage =1;
let todayNotif=""
function pageChange(){
  if(keyForPage%2==1){
      document.getElementById("pageChanger").innerHTML = `
       Task Details
        <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                clip-rule="evenodd"
                ></path>
        </svg>
      `
      document.getElementById("mainTaskPage").style.display="none"
      document.getElementById("OtherDetailPage").style.display ="flex";
  }
  else{
      document.getElementById("pageChanger").innerHTML = `
       Farm Facts
        <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                clip-rule="evenodd"
                ></path>
        </svg>
      `
      document.getElementById("mainTaskPage").style.display="flex"
      document.getElementById("OtherDetailPage").style.display ="none";
  }
  keyForPage++; 
}


const apiKeyArray = [apiKeyOne, apiKeyTwo, apiKeyThree, apiKeyFour, apiKeyFive, apiKeySix, apiKeySeven];
let apiKeyIndex = 0;
let videoId;

let stire = localStorage.getItem("currentFarmDetails");
let json =JSON.parse(stire);
let dayForCrop = 2;
let finalDay = 0;

let cropProcess = json["Progress"];
let currentCropName = json["Crop"]
console.log(stire)
let increaceRate =0;
getLastDay();
fetchYouTubeData("plant");


function nextDay(){
    document.getElementById("hasvestDay").innerText="Hasvest within : "+(finalDay - dayForCrop);
   dayForCrop++;
   cropProcess += increaceRate;

   cropProcess = cropProcess>=100 ? 100: cropProcess;
   console.log(dayForCrop);
   getLastDay();
   fetch('https://jsurya-7777-8443.zcodeusers.in/authfilter/UpdateProcess', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
          farmName: json["Name"],
          process : cropProcess,
       })
    })
    .then(response => response.json()) // Get raw text instead of parsing as JSON
    .then(response => {
        console.log(response);
    })
    .catch(error => console.error("Error:", error));

//      let d = localStorage.getItem("currentFarmDetails");
//    let s =JSON.parse(d);
    // fetch('https://jsurya-7777-8443.zcodeusers.in/authfilter/NotificationIncrement', {
    //    method: 'POST',
    //    headers: { 'Content-Type': 'application/json' },
    //    body: JSON.stringify({
    //       pincode: json["Pincode"],
    //       surveyNo :json["surveyNo"],
    //       nextDay:
    //    })
    // })
    // .then(response => response.json()) // Get raw text instead of parsing as JSON
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(error => console.error("Error:", error))
}

function generateNotfi(message, json) {
     let d = localStorage.getItem("currentFarmDetails");
   let s =JSON.parse(d);
    if (!s || !s["Pincode"] || !s["surveyNo"]) {
        console.error("Invalid input: Missing Pincode or surveyNo");
        return;
    }

    fetch('https://jsurya-7777-8443.zcodeusers.in/authfilter/NotificationIncrement', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            pincode: s["Pincode"],
            surveyNo: s["surveyNo"],
            nextday: message
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Ensure server returns valid JSON
    })
    .then(data => {
        console.log("Success:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

function updateProcedure(response){
    let procedure = response;
    let process = procedure.split("Date")[1];
    let query = procedure.split("Date")[1];
    updateFarm();
}

function updateFarm(){
   let d = localStorage.getItem("currentFarmDetails");
   let s =JSON.parse(d);

    console.log(d)
    console.log(s["Name"])
    document.getElementById("farmName").innerText = s["Name"];
    document.getElementById("farmCrop").innerText = s["Crop"]
    document.getElementById("farmProgress").innerText = cropProcess >=100 ?100+"%" :cropProcess.toFixed(2)+"%"
    let precentage = cropProcess >=100? 100 : cropProcess ;

    startLoading(10000, cropProcess);
    document.getElementById("farmPincode").innerText = s["Pincode"]
    document.getElementById("farmDate").innerText = "12/2/25"
    document.getElementById("farmDistrict").innerText = s['District']
    document.getElementById("farmState").innerText = s["State"]
    // fetchWeather(s['District']);
    // progerssCheck(cropProcess);
    fetchWeather(s["District"]);
}

function getLastDay() {
    // document.getElementById("city").innerText = json["District"];
    console.log("GET LAST DAY IN FUNCTION");
    fetch('https://jsurya-7777-8443.zcodeusers.in/authfilter/Procedure', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
       
        farmName: json["Name"],
        cropName : currentCropName,
        day : dayForCrop,
      })
    })
    .then(response => response.json()) 
    .then(response => {
        console.log(response)
        completedDays(response["completedWork"])
        todayTask();

        // document.getElementById("day").innerText="Day :"+dayForCrop;
    }).catch(error => console.error("Error:", error));
}

function completedDays(days){
    console.log("LASY DAY"+days)
   let lastDay =  days.split('"')[1].split("-")[1];
//    console.log(lastDay);
   finalDay = lastDay;
   increaceRate = ((1)/(lastDay))*(100)
   let currentDay = ((cropProcess) / (100))*lastDay;
   cropProcess = (currentDay / lastDay) * 100;
   console.log(cropProcess)
   dayForCrop = Math.round(currentDay);
   dayForCrop = dayForCrop==0?1:dayForCrop;
   console.log("First-----"+dayForCrop);
   //    document.getElementById("day").innerText="Day :"+dayForCrop;
   // document.getElementById("totalDays").innerText = "Harvesting : "+(lastDay-dayForCrop);
  document.getElementById("hasvestDay").innerText="Hasvest within : "+(finalDay-dayForCrop);

}

function getCurrentApiKey() {
  return apiKeyArray[apiKeyIndex];
}

function switchToNextApiKey() {
  apiKeyIndex = (apiKeyIndex + 1) % apiKeyArray.length;
}

function startLoading(duration, process) {
    const progress = document.querySelector('.progress');
    const stages = document.querySelectorAll('.stageWord');
    let totalStages = stages.length;

    let intervalTime = duration / totalStages; // Duration per stage

    progress.style.width = (process>=100)? 0 +"%":process+"%"; // Fill loader over total duration
    progress.style.transition = `width ${duration}ms linear`;
  
    console.log("THINK SO "+process)

    if (process < 12.5) {
        document.getElementById("landPre").style.color = "green";
    } else if (process < 25) {
        document.getElementById("landPre").style.color = "green";
        document.getElementById("planting").style.color = "green";
    } else if (process < 37.5) {
        document.getElementById("landPre").style.color = "green";
        document.getElementById("planting").style.color = "green";
        document.getElementById("earlyGrowth").style.color = "green";
    } else if (process < 50.5) {
        document.getElementById("landPre").style.color = "green";
        document.getElementById("planting").style.color = "green";
        document.getElementById("earlyGrowth").style.color = "green";
        document.getElementById("vegeGrowth").style.color = "green";
    } else if (process < 62.5) {
        document.getElementById("landPre").style.color = "green";
        document.getElementById("planting").style.color = "green";
        document.getElementById("earlyGrowth").style.color = "green";
        document.getElementById("vegeGrowth").style.color = "green";
        document.getElementById("fruiting").style.color = "green";
    } else if (process < 75) {
        document.getElementById("landPre").style.color = "green";
        document.getElementById("planting").style.color = "green";
        document.getElementById("earlyGrowth").style.color = "green";
        document.getElementById("vegeGrowth").style.color = "green";
        document.getElementById("fruiting").style.color = "green";
        document.getElementById("ripening").style.color = "green";
    } else if (process < 87.5) {
        document.getElementById("landPre").style.color = "green";
        document.getElementById("planting").style.color = "green";
        document.getElementById("earlyGrowth").style.color = "green";
        document.getElementById("vegeGrowth").style.color = "green";
        document.getElementById("fruiting").style.color = "green";
        document.getElementById("ripening").style.color = "green";
        document.getElementById("harvesting").style.color = "green";
    } else if (process < 100) {
        document.getElementById("landPre").style.color = "green";
        document.getElementById("planting").style.color = "green";
        document.getElementById("earlyGrowth").style.color = "green";
        document.getElementById("vegeGrowth").style.color = "green";
        document.getElementById("fruiting").style.color = "green";
        document.getElementById("ripening").style.color = "green";
        document.getElementById("harvesting").style.color = "green";
        document.getElementById("postHarvest").style.color = "green";
    }

    // console.log("SDFghjk")
    stages.forEach((stage, index) => {
        setTimeout(() => {
            stages.forEach(s => s.classList.remove('highlight')); // Reset all
        }, index * intervalTime);
    });
}

function updateIframe(videoId) {
    const iframe = document.getElementById("videoFrame");
    iframe.src = `https://www.youtube.com/embed/${videoId}`;

}

function todayTask() {
    document.getElementById("currentDay").innerText = "Day : "+dayForCrop;
    console.log("Last day in process"+dayForCrop);
    fetch('https://jsurya-7777-8443.zcodeusers.in/authfilter/Procedure', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
    
        farmName: json["Name"],
        cropName : currentCropName,
        day : dayForCrop,
      })
    })
    .then(response => response.json()) 
    .then(response => {
        createTasks(response["tasks"],response["taskOrder"])
        updateProcedure(response["days"]);
    })
    .catch(error => console.error("Error:", error));
}

function createTasks(tasks , order){
   console.log(tasks);
   console.log(order);
    let completedWork = document.getElementById("CompletedWork");
    completedWork.innerHTML=""
    let todaysWork = document.getElementById("todaysWork");
    todaysWork.innerHTML=""
    let futureWork = document.getElementById("futureWork");
    futureWork.innerHTML=""
   for(let key of order ){
    //  console.log(key)
     let task = document.createElement("div");
     task.setAttribute("class","taskDiv")
     task.innerHTML=`
       <p class="taskHeading">${key}</p>
       <p class="message">${tasks[key]}</p>
     `
    let date = key.split(" ")[1]
//  <p class="message">${tasks[key]}</p>

    if(date.includes("-")){
       let numbers = getNumbersInRange(date);
       let start = date.split("-")[0];
       let end = date.split("-")[1];
       console.log("START AND END",start,end,dayForCrop,(start <= dayForCrop && dayForCrop <= end))
       let todaysCheck=(start <= dayForCrop && dayForCrop <= end)
       console.log(todaysCheck)

       if(todaysCheck ==true ){
            generateNotfi(tasks[key]);
            todaysWork.appendChild(task);
            let completedPage = document.createElement("div")
            completedPage.setAttribute("class","completedCheck")
            completedPage.innerHTML = `<button onclick="nextDay()" id="taskCompleted" class="completedButton">Completed</button>`
            todaysWork.appendChild(completedPage,true);
            fetchYouTubeData(tasks[key]);
       }
       else if(end>dayForCrop){
            futureWork.appendChild(task)
       }
       else{
            task.innerHTML = "";
         task.innerHTML = `
        <p class="taskHeading">${key} <span class="dropButton"><i class="fa-solid fa-angle-down" style="color: #000000;"></i></span></p>
        <p class="message" style="display: none;">${tasks[key]}</p> 
      `;
         task.addEventListener("click", function(key) {
        let keyqw = key;
        console.log(key,keyqw)
        let message = task.querySelector(".message");
        if (message.style.display === "none") {
            message.style.display = "block";
            task.querySelector(".dropButton").innerHTML=`<i class="fa-solid fa-angle-up" style="color: #000000;"></i>`

        } else {
            message.style.display = "none";
            task.querySelector(".dropButton").innerHTML=`<i class="fa-solid fa-angle-down" style="color: #000000;"></i>`

        }
        });
            completedWork.appendChild(task)
       }

    }
    else{
        if(date==dayForCrop){
            todaysWork.appendChild(task);
            let completedPage = document.createElement("div")
            completedPage.setAttribute("class","completedCheck")
            completedPage.innerHTML = `<button onclick="nextDay()" id="taskCompleted" class="completedButton">Completed</button>`
            todaysWork.appendChild(completedPage,true);
        }
        else if(date>=dayForCrop){
            futureWork.appendChild(task)
        }
        else {
        task.innerHTML = "";
        task.innerHTML = `
        <p class="taskHeading">${key} <span class="dropButton"><i class="fa-solid fa-angle-down" style="color: #000000;"></i></span></p>
        <p class="message" style="display: none;">${tasks[key]}</p> 
       `;
       task.addEventListener("click", function(key) {
        let message = task.querySelector(".message");
        let h= task.querySelector(".taskHeading")
        console.log(h)
        if (message.style.display === "none") {
            message.style.display = "block";
            task.querySelector(".dropButton").innerHTML=` <i class="fa-solid fa-angle-up" style="color: #000000;"></i>`
        } else {
            message.style.display = "none";
            task.querySelector(".dropButton").innerHTML=`<i class="fa-solid fa-angle-down" style="color: #000000;"></i>`
        }
        });

        completedWork.appendChild(task);
       }
    }

   }
}

function getNumbersInRange(rangeStr) {
    let [start, end] = rangeStr.split("-").map(Number); // Split and convert to numbers
    let numbers = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers;
}



async function fetchWeather(city) {
    console.log("City"+city);
    // document.getElementById("cityName");
    // document.getElementById("Day-Date");
    // document.getElementById("temperature");
    // document.getElementById("humidity");
    // document.getElementById("windSpeed");
    const apiKey = "54b3a6fee7ff0223bde24d3ecd3c536c";
    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        // const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
        // const response1 = await fetch(forecastUrl);
        // const data1 = await response1.json();
         const today = new Date();
        document.getElementById("cityName").innerText=city;
        document.getElementById("Day-Date").innerText=getFormattedDate();
        document.getElementById("temperature").innerText=Math.round(data.main.temp)+" °C";
        document.getElementById("humidity").innerText=data.main.humidity+"%"
        document.getElementById("windSpeed").innerText=data.wind.speed+"km/h";
        document.getElementById("Descriptionweather").innerText=data.weather[0].description

        // document.getElementById("details").innerHTML = `
        //     <p> <span class="weatherTitle">NAME:</span> ${city}</p>
        //     <p> <span class="weatherTitle">TEMP:</span> ${Math.round(data.main.temp)}°C</p>
        //     <p> <span class="weatherTitle">HUMIDITY:</span> ${data.main.humidity}%</p>
        //     <p> <span class="weatherTitle">WIND SPEED:</span> ${data.wind.speed} Km/h</p>
        //     <div id="forecast"></div>
        // `;
        //
        // document.getElementById("main-card").innerHTML=   ` 
        //         <h1>${today.toLocaleDateString("en-IN", { weekday: "long"})}</h1>
        //         <p>${today.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p>
        //         <div class="weather-icon"><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"></div>
        //             <h2>${Math.round(data.main.temp)}°C</h2>
        //             <p>${ data.weather[0].description}</p>
        //                 `
        // let forecastContainer = document.getElementById("forecast");
        // forecastContainer.innerHTML = ""; // Clear previous forecast

        // let forecastDays = data1.list.filter(item => item.dt_txt.includes("12:00:00")); // Get daily forecast at noon

        // for (let i = 0; i < Math.min(4, forecastDays.length); i++) {
        //     const day = forecastDays[i];
        //     const forecastItem = document.createElement("div");
        //     const date = new Date(day.dt * 1000).toLocaleDateString("en-IN", { weekday: "short" });

        //     const temp = Math.round(day.main.temp);

        //     forecastItem.classList.add("day");
        //     forecastItem.innerHTML = `${date}<br>${temp}°C`;
        //     forecastContainer.appendChild(forecastItem);
        // }

    } catch (error) {
        console.log("Error fetching weather:", error);
    }
}
function getFormattedDate() {
    const today = new Date();

    // Get the day of the week
    const dayName = today.toLocaleDateString("en-IN", { weekday: "long" });

    // Get the day (numeric)
    let day = today.getDate();

    // Function to add ordinal suffix (st, nd, rd, th)
    const getOrdinalSuffix = (day) => {
        if (day > 3 && day < 21) return "th"; // Covers 4th-20th
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };

    // Get the suffix for the day
    const dayWithSuffix = day + getOrdinalSuffix(day);

    // Get the month name
    const monthName = today.toLocaleDateString("en-IN", { month: "short" });

    // Final formatted date
    return `${dayName}, ${dayWithSuffix} ${monthName}`;
}

// Example usage:
// console.log(getFormattedDate()); // Output: Monday, 4th May (depending on the current date)



function fetchYouTubeData(query) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${getCurrentApiKey()}&maxResults=2`;
   fetch(url)
    .then((response) => {
      if (response.status == 403) {
        switchToNextApiKey();
        return fetchYouTubeData(query);
      }
      return response.json();
    })
    .then((data) => {
      if (data) {
        console.log(data);
        videoId = data.items[0].id.videoId;
        updateIframe(videoId);
      }
    })
    .catch((error) => console.log("Error fetching data:", error));
}

let fipCard = 1;
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function() {
        this.querySelector('.flip-card-inner').classList.toggle('flipped');
        fipCard++;
        if(fipCard%2==0){
         document.getElementById("weatherCard").style.display="none"
        }
        else{
          document.getElementById("weatherCard").style.display="flex"
        }

    });
});

function iNeedVideo(){
    let query =  document.getElementById("neededQuery").value
    fetchYouTubeData(query);
}












// function nextDay(){
//     dayForCrop +=1;
//     document.getElementById("day").innerText="Day :"+dayForCrop;

//     // {"Producer Notification":"Use manual weeding, mulching, and organic pest repellents.","title":"Today task","farm_name":"cocunut"}
//     document.getElementById("totalDays").innerText = "Harvesting : "+(finalDay-dayForCrop);


//    cropProcess += increaceRate;

//    cropProcess = cropProcess>=100 ? 100: cropProcess;

//     fetch('https://jsurya-7777-8443.zcodeusers.in/authfilter/UpdateProcess', {
//        method: 'POST',
//        headers: { 'Content-Type': 'application/json' },
//        body: JSON.stringify({
      
//           farmName: json["Name"],
//           process : cropProcess,
//        })
//     })
//     .then(response => response.json()) // Get raw text instead of parsing as JSON
//     .then(response => {
//         console.log(response);
//     })
//     .catch(error => console.error("Error:", error))
//     // fetch('https://jsurya-7777-8443.zcodeusers.in/authfilter/', {
//     //    method: 'POST',
//     //    headers: { 'Content-Type': 'application/json' },
//     //    body: JSON.stringify({
//     //       task:"Task for day "+dayForCrop+" is connected",
//     //       title:"Task Completed"
//     //       farm_Name: json["Pincode"],
//     //       process : json["surveyNo"]
//     //    })
//     // })
//     // .then(response => response.json()) // Get raw text instead of parsing as JSON
//     // .then(response => {
//     //     console.log(response);
//     // })
//     // .catch(error => console.error("Error:", error))
//     todayTask();
// }



