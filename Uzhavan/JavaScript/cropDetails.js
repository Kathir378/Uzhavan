
console.log("Connected");

// const cropIds = [ "Fruits",  "Flower", "Medicinal",  "Vegetables",  "Aromatic",  "Pulses",  "Cereals",  "Millets",  "OilSeeds", "Fiber-Crop", "Cash-Crop" ];
const cropIds = [ "Fruits",  "Flower", "Medicinal",  "Vegetables"];

function introductionPage(cropName){
  localStorage.setItem("currentCrop", cropName); 
  window.location.href = "../Html/cropIntroduction.html";
}

// window.onload = neededCrop("Fruits");


function change(){
  console.log("working")
  window.location.href = "../Html/todaysTask.html";
}

var crops={
    "Fruits": {"Apple":{"img":"url(../image/fruites/Apple.png)","id":"apple","onclick":"Apple"},"Banana":{"img":"url(../image/fruites/banana.png)","id":"banana","onclick":"Banana"},"Mango":{"img":"url(../image/fruites/Mango.png)","id":"mango","onclick":"Mango"},"Grapes":{"img":"url(../image/fruites/grapes.png)","id":"grapes","onclick":"Grapes"},"Lemon":{"img":"url(../image/fruites/Lemon.png)","id":"lemon","onclick":"Lemon"},"Orange":{"img":"url(../image/fruites/Orange.png)","id":"orange","onclick":"Orange"},"Pineapple":{"img":"url(../image/fruites/pineApple.png)","id":"pineApple","onclick":"Pineapple"},"Strawberry":{"img":"url(../image/fruites/Stabery.png)","id":"stabery","onclick":"Strawberry"},"Watermelon":{"img":"url(../image/fruites/Watermelon.png)","id":"watermelon","onclick":"Watermelon"}}
,  "Vegetables": {"Beetroot":{"img":"url(../image/vegetable/beetroot.png)","id":"beetroot","onclick":"Beetroot"},"Bitter Gourd":{"img":"url(../image/vegetable/Bitter-Gourd.png)","id":"bitter","onclick":"Bitter Gourd"},"Brinjal":{"img":"url(../image/vegetable/brinjal.png)","id":"brinjal","onclick":"Brinjal"},"CauliFlower":{"img":"url(../image/vegetable/califlower.png)","id":"cauliflower","onclick":"CauliFlower"},"Capsicum":{"img":"url(../image/vegetable/capsi.png)","id":"capsi","onclick":"Capsicum"},"Carrot":{"img":"url(../image/vegetable/carrot.png)","id":"carrot","onclick":"Carrot"},"Tomato":{"img":"url(../image/vegetable/tomato.png)","id":"tomato","onclick":"Tomato"},"Onion":{"img":"url(../image/vegetable/onion.png)","id":"onion","onclick":"Onion"},"Potato":{"img":"url(../image/vegetable/potato.png)","id":"potato","onclick":"Potato"}}
,  "Flower": {"Authurium":{"img":"url(../image/Flower/authurium.png)","id":"authurium","onclick":"Authurium"},"China Aster":{"img":"url(../image/Flower/China-aster.png)","id":"chinaAster","onclick":"China Aster"},"Jasmine":{"img":"url(../image/Flower/jasmine.png)","id":"jasmine","onclick":"Jasmine"},"Marigold":{"img":"url(../image/Flower/marigold.png)","id":"marigold","onclick":"Marigold"},"Orchid":{"img":"url(../image/Flower/orchild.png)","id":"orchild","onclick":"Orchid"},"Rose":{"img":"url(../image/Flower/rose.png)","id":"rose","onclick":"Rose"},"Sunflower":{"img":"url(../image/Flower/sunflower.png)","id":"sunflower","onclick":"SunFlower"},"Tuberose":{"img":"url(../image/Flower/Tuberose.png)","id":"tuberose","onclick":"Tuberose"},"Lotus":{"img":"url(../image/Flower/lotus.png)","id":"lotus","onclick":"Lotus"}}
,  "Medicinal": {"Aloevera":{"img":"url(../image/medicinal/aloevera.png)","id":"aloevera","onclick":"Aloevera"},"Pyrethrum":{"img":"url(../image/medicinal/pyrethrum.png)","id":"pyrethrum","onclick":"Pyrethrum"},"Opium":{"img":"url(../image/medicinal/opium.png)","id":"opium","onclick":"Opium"},"Neem":{"img":"url(../image/medicinal/neem.png)","id":"neem","onclick":"Neem"}} 
// ,
//    "Aromatic": {},
//    "Pulses": {},
//    "Cereals": {},
//    "Millets": {},
//    "OilSeeds": {},
//    "Fiber-Crop": {},
//    "Cash-Crop": {}
}




// function neededCrop(givenCrop) {
//     document.getElementById("currentCropHeading").innerHTML = givenCrop;
//     document.getElementById("cropList").innerHTML = " ";

//     let keys = Object.keys(crops[givenCrop]);
    
//     for(let id of cropIds){
//       if(id==givenCrop){
//             document.getElementById(id).style.backgroundColor="rgb(250, 146, 61)";
//             // document.getElementById(id).style.border="3px solid white";
//       }
//       else{
//         console.log("id    " + id);
//            document.getElementById(id).style.backgroundColor="#cae4c5";
//         //    document.getElementById(id).style.border=" 2px solid rgb(80, 80, 80)";
//       }
//     }


//     for(let i=0;i<keys.length;i++){
//         let cropDiv = document.createElement("div");
//         cropDiv.setAttribute("class", "cropDiv");

//         let croImage = document.createElement("div");
//         croImage.setAttribute("class", "cropPhoto");

//         if (crops[givenCrop].id) {
//             croImage.setAttribute("id", crops[givenCrop].id);
//         }
//         let obj = crops[givenCrop];
        
//         let obj2= obj[keys[i]];

//         croImage.style.backgroundImage = obj2["img"]; 
//         croImage.style.backgroundRepeat = "no-repeat"; 
//         croImage.style.backgroundSize = "contain";
//         croImage.style.backgroundPosition = "center";

//         let ptag1 = document.createElement("p");
//         ptag1.textContent = keys[i];
//         ptag1.setAttribute("class", "cropName");

//         let ptag2 = document.createElement("p");
//         ptag2.setAttribute("class", "smallGap");

//         cropDiv.addEventListener("click", function () {
//          introductionPage( obj2["onclick"]);
//     });

//     cropDiv.appendChild(croImage);
//     cropDiv.appendChild(ptag1);
//     cropDiv.appendChild(ptag2);
//     document.getElementById("cropList").appendChild(cropDiv);
//     }    
//     console.log("Success");
// }

function neededCrop(givenCrop) {
    document.getElementById("currentCropHeading").innerHTML = givenCrop;
    const cropList = document.getElementById("cropList");
    cropList.innerHTML = ""; // Clear previous results

    let keys = Object.keys(crops[givenCrop]);

    // Highlight the selected category
    cropIds.forEach(id => {
        const element = document.getElementById(id);
        if (id === givenCrop) {
            element.style.backgroundColor = "rgb(250, 146, 61)";
        } else {
            element.style.backgroundColor = "#cae4c5";
        }
    });


    // Add crops to the grid
    keys.forEach(key => {
        const cropData = crops[givenCrop][key];
        const cropDiv = document.createElement("div");
        cropDiv.setAttribute("class", "cropDiv");
        cropDiv.addEventListener("click", () => introductionPage(cropData["onclick"]));

        const cropPhoto = document.createElement("div");
        cropPhoto.setAttribute("class", "cropPhoto");
        cropPhoto.style.backgroundImage = cropData["img"];

        const cropName = document.createElement("p");
        cropName.setAttribute("class", "cropName");
        cropName.textContent = key;

        cropDiv.appendChild(cropPhoto);
        cropDiv.appendChild(cropName);
        cropList.appendChild(cropDiv);
    });

    // Show "No Crops Found" if the list is empty
    if (cropList.childElementCount === 0) {
        const noCrops = document.createElement("div");
        noCrops.setAttribute("id", "noCrops");
        noCrops.textContent = "No Such Crop Found";
        cropList.appendChild(noCrops);
    }
}


function displaySearchedCrops(query) {
    document.getElementById("cropList").innerHTML = ""; // Clear previous results
    query = query.toLowerCase();
    let hasValue = false;
    Object.keys(crops).forEach(category => {
        Object.keys(crops[category]).forEach(crop => {
            if (crop.toLowerCase().includes(query)) {
                let cropData = crops[category][crop];
                let cropDiv = document.createElement("div");
                cropDiv.setAttribute("class", "cropDiv");
                let croImage = document.createElement("div");
                croImage.setAttribute("class", "cropPhoto");
                croImage.style.backgroundImage = cropData["img"];
                croImage.style.backgroundRepeat = "no-repeat";
                croImage.style.backgroundSize = "contain";
                croImage.style.backgroundPosition = "center";

                let ptag1 = document.createElement("p");
                ptag1.textContent = crop;
                ptag1.setAttribute("class", "cropName");

                let ptag2 = document.createElement("p");
                ptag2.setAttribute("class", "smallGap");

                cropDiv.addEventListener("click", function () {
                    introductionPage(cropData["onclick"]);
                });

                cropDiv.appendChild(croImage);
                cropDiv.appendChild(ptag1);
                cropDiv.appendChild(ptag2);
                document.getElementById("cropList").appendChild(cropDiv);
                hasValue = true;
            }
            else{
                hasValue = false;
            }
        });
    });
    if(document.getElementById("cropList").childNodes.length==0){
        let noResult = document.createElement("div");
        noResult.setAttribute("id", "noCrops");
        noResult.innerText="No Such Crop Found"
        document.getElementById("cropList").appendChild(noResult,false);
    }
    
}

document.getElementById("cropSearch").addEventListener("input", function() {
    displaySearchedCrops(this.value);
});

// document.querySelector('.back-arrow').addEventListener('click', () => {
//     window.history.back();
// });



let serachButton=0;
function search(){
    document.getElementById("cropSearch").focus();

    serachButton++;
    if(serachButton%2==1){
        document.getElementById("cropSearch").style.display="block";
        document.getElementById("cropSearch").focus();

    } else {
        document.getElementById("cropSearch").style.display="none";
    }
}


neededCrop("Fruits");




