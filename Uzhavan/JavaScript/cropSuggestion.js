// backToSuggection();

var list = {

    "Coconut": {
        "Introduction": "Coconut (Cocos nucifera) is a tropical palm tree grown primarily for its fruit, which provides oil, milk, water, and fiber. It is widely cultivated in coastal regions of India, including Kerala, Tamil Nadu, Karnataka, and Andhra Pradesh.",
        "Climate": "Coconut thrives in tropical climates with temperatures between 20°C and 32°C. It requires high humidity and well-distributed rainfall of 1500-2500mm annually. It grows best at elevations below 600m above sea level.",
        "Soil": "Coconut prefers sandy loam or laterite soils with good drainage and a pH range of 5.0-8.0. Saline soils near the coast are also suitable.",
        "Varieties Recommended": "Tall Varieties: West Coast Tall, East Coast Tall.\nDwarf Varieties: Malayan Yellow Dwarf, Malayan Orange Dwarf.\nHybrids: Chowghat Green Dwarf x West Coast Tall, Gangabondam x West Coast Tall.",
        "Planting": "Planting is done during May-June or September-October. Pits of 90cm x 90cm x 90cm are dug and filled with organic matter. Seedlings are planted at a spacing of 7.5m x 7.5m.",
        "Manures and Fertilizers": "Apply FYM at 20kg/tree/year along with fertilizers like NPK in the ratio of 4:2:4 kg/tree/year. Micronutrients like boron and zinc should be applied as needed.",
        "Irrigation": "Irrigation is required every 3-4 days in dry seasons. Drip irrigation is recommended for efficient water use.",
        "Weed Control": "Mulching and herbicides like glyphosate can be used to control weeds.",
        "Major Insects and Pests": "1. Rhinoceros Beetle: Causes damage to the crown. Managed with neem-based insecticides.\n2. Coconut Caterpillar: Defoliates leaves. Managed with biopesticides.",
        "Major Diseases and Their Management": "1. Bud Rot: Causes rotting of the growing tip. Managed with Bordeaux mixture sprays.\n2. Leaf Blight: Causes yellowing and drying of leaves. Managed with copper fungicides.",
        "Harvesting": "Coconuts are harvested 12-14 months after flowering. Fully mature nuts are hand-picked.",
        "Yield": "A well-managed coconut plantation yields 80-100 nuts/tree/year."
    },
    "Tomato": {
        "Introduction": "Tomato (Solanum lycopersicum) is one of the most widely cultivated vegetables globally. It is consumed fresh or processed into sauces, soups, and juices. In India, it is grown in states like Maharashtra, Karnataka, and Bihar.",
        "Climate": "Tomato grows best in warm climates with temperatures between 20°C and 25°C. Frost and extreme heat reduce yield.",
        "Soil": "Well-drained sandy loam or clay loam soils with a pH of 6.0-7.5 are ideal.",
        "Varieties Recommended": "Hybrid Varieties: Arka Vikas, Pusa Ruby, Avinash-2.\nOpen-Pollinated: PKM-1, CO-3.",
        "Planting": "Seeds are sown in nursery beds and transplanted after 25-30 days. Spacing is 60cm x 45cm.",
        "Manures and Fertilizers": "Apply FYM at 25t/ha and NPK at 120:60:60 kg/ha.",
        "Irrigation": "Frequent irrigation is required, especially during flowering and fruiting stages.",
        "Weed Control": "Pre-emergence herbicides like Pendimethalin and manual weeding are effective.",
        "Major Insects and Pests": "1. Fruit Borer: Damages fruits. Managed with Neem oil.\n2. Whitefly: Transmits viral diseases. Managed with insecticidal sprays.",
        "Major Diseases and Their Management": "1. Early Blight: Causes leaf spots. Managed with Mancozeb sprays.\n2. Fusarium Wilt: Causes wilting. Managed with resistant varieties.",
        "Harvesting": "Tomatoes are harvested when fully ripe or semi-ripe depending on market demand.",
        "Yield": "Average yield is 20-30t/ha."
    },
    "Groundnut": {
        "Introduction": "Groundnut (Arachis hypogaea) is an important oilseed crop grown in India. It is used for oil extraction, confectionery, and animal feed.",
        "Climate": "Groundnut grows best in warm climates with temperatures between 20°C and 35°C. Rainfall of 500-1000mm is ideal.",
        "Soil": "Sandy loam soils with good drainage and a pH of 6.0-7.0 are preferred.",
        "Varieties Recommended": "Spanish Varieties: JL-24, TAG-24.\nVirginia Varieties: K-134, Girnar-2.",
        "Planting": "Seeds are sown in rows spaced 30cm apart. Sowing depth is 5-7cm.",
        "Manures and Fertilizers": "Apply FYM at 10t/ha and NPK at 20:40:40 kg/ha.",
        "Irrigation": "Irrigation is required every 10-15 days depending on soil moisture.",
        "Weed Control": "Pre-emergence herbicides like Fluchloralin are effective.",
        "Major Insects and Pests": "1. Aphids: Suck sap from leaves. Managed with systemic insecticides.\n2. Termites: Damage roots. Managed with chlorpyrifos.",
        "Major Diseases and Their Management": "1. Tikka Disease: Causes leaf spots. Managed with Bordeaux mixture.\n2. Stem Rot: Causes wilting. Managed with Trichoderma.",
        "Harvesting": "Pods are harvested when leaves turn yellow and pods are mature.",
        "Yield": "Average yield is 1.5-2.5t/ha."
    },
    "Wheat": {
        "Introduction": "Wheat (Triticum aestivum) is a staple cereal crop grown in India during the winter season. It is primarily used for making bread, chapatis, and other food products.",
        "Climate": "Wheat grows best in cool climates with temperatures between 10°C and 25°C. Frost-free conditions are essential.",
        "Soil": "Loamy soils with good drainage and a pH of 6.0-7.5 are ideal.",
        "Varieties Recommended": "HD-2967, PBW-343, GW-496.",
        "Planting": "Seeds are sown in rows spaced 20cm apart. Sowing is done in October-November.",
        "Manures and Fertilizers": "Apply FYM at 10t/ha and NPK at 120:60:40 kg/ha.",
        "Irrigation": "Irrigation is required every 20-25 days depending on rainfall.",
        "Weed Control": "Post-emergence herbicides like Isoproturon are effective.",
        "Major Insects and Pests": "1. Aphids: Damage leaves. Managed with systemic insecticides.\n2. Armyworm: Feeds on grains. Managed with biopesticides.",
        "Major Diseases and Their Management": "1. Rust: Causes leaf discoloration. Managed with resistant varieties.\n2. Powdery Mildew: Managed with sulfur sprays.",
        "Harvesting": "Wheat is harvested when grains are hard and straw turns yellow.",
        "Yield": "Average yield is 3-5t/ha."
    },
    "Tamarind": {
        "Introduction": "Tamarind (Tamarindus indica) is a tropical tree grown for its sour fruit, used in culinary preparations and medicinal purposes.",
        "Climate": "Tamarind grows best in hot, dry climates with temperatures between 25°C and 35°C.",
        "Soil": "Deep, well-drained sandy loam soils with a pH of 5.0-7.0 are ideal.",
        "Varieties Recommended": "PKM-1, Urigam Local.",
        "Planting": "Pits of 1m x 1m x 1m are dug and filled with organic matter. Spacing is 10m x 10m.",
        "Manures and Fertilizers": "Apply FYM at 20kg/tree/year and NPK at 500g/tree/year.",
        "Irrigation": "Young plants require irrigation every 10-15 days. Mature trees are drought-tolerant.",
        "Weed Control": "Mulching and manual weeding are effective.",
        "Major Insects and Pests": "1. Mealybugs: Suck sap from leaves. Managed with neem oil.\n2. Fruit Borers: Damage pods. Managed with biopesticides.",
        "Major Diseases and Their Management": "1. Leaf Spot: Managed with copper fungicides.\n2. Dieback: Managed with pruning and fungicide sprays.",
        "Harvesting": "Fruits are harvested when pods turn brown and dry.",
        "Yield": "Average yield is 100-150kg/tree/year."
    },
    "Rubber": {
        "Introduction": "Rubber (Hevea brasiliensis) is a perennial tree grown for latex production, used in manufacturing tires, gloves, and other rubber products.",
        "Climate": "Rubber grows best in humid tropical climates with temperatures between 20°C and 35°C and annual rainfall of 2000-3000mm.",
        "Soil": "Deep, well-drained sandy loam soils with a pH of 4.5-6.5 are ideal.",
        "Varieties Recommended": "RRIM 600, GT 1, RRII 105.",
        "Planting": "Budded stumps are planted at a spacing of 6m x 3m.",
        "Manures and Fertilizers": "Apply FYM at 10kg/tree/year and NPK at 200g/tree/year.",
        "Irrigation": "Young plants require irrigation every 7-10 days.",
        "Weed Control": "Manual weeding and mulching are effective.",
        "Major Insects and Pests": "1. Scale Insects: Damage bark. Managed with neem oil.\n2. Termite: Damages roots. Managed with chlorpyrifos.",
        "Major Diseases and Their Management": "1. Pink Disease: Managed with Bordeaux mixture.\n2. Abnormal Leaf Fall: Managed with fungicides.",
        "Harvesting": "Latex tapping starts 6-7 years after planting.",
        "Yield": "Average yield is 1500-2000kg dry rubber/ha/year."
    },
    "Mango": {
        "Introduction": "Mango (Mangifera indica) is a tropical fruit known as the 'King of Fruits.' It is widely cultivated in India for fresh consumption and processing.",
        "Climate": "Mango grows best in tropical climates with temperatures between 24°C and 30°C.",
        "Soil": "Deep, well-drained sandy loam soils with a pH of 5.5-7.5 are ideal.",
        "Varieties Recommended": "Alphonso, Dashehari, Langra, Totapuri.",
        "Planting": "Pits of 1m x 1m x 1m are dug and filled with organic matter. Spacing is 10m x 10m.",
        "Manures and Fertilizers": "Apply FYM at 20kg/tree/year and NPK at 1kg/tree/year.",
        "Irrigation": "Young plants require irrigation every 10-15 days.",
        "Weed Control": "Mulching and manual weeding are effective.",
        "Major Insects and Pests": "1. Hoppers: Damage leaves. Managed with neem oil.\n2. Fruit Fly: Damages fruits. Managed with bait traps.",
        "Major Diseases and Their Management": "1. Anthracnose: Managed with copper fungicides.\n2. Powdery Mildew: Managed with sulfur sprays.",
        "Harvesting": "Fruits are harvested when fully mature but still firm.",
        "Yield": "Average yield is 100-200kg/tree/year."
    },
    "Cotton": {
        "Introduction": "Cotton (Gossypium hirsutum) is a fiber crop grown for textile production. It is also used for oil extraction from seeds.",
        "Climate": "Cotton grows best in warm climates with temperatures between 21°C and 30°C.",
        "Soil": "Well-drained black cotton soils with a pH of 6.0-8.0 are ideal.",
        "Varieties Recommended": "H-4, LRA-5166, MCU-5.",
        "Planting": "Seeds are sown in rows spaced 60cm apart. Sowing depth is 3-5cm.",
        "Manures and Fertilizers": "Apply FYM at 10t/ha and NPK at 120:60:60 kg/ha.",
        "Irrigation": "Irrigation is required every 10-15 days depending on rainfall.",
        "Weed Control": "Pre-emergence herbicides like Atrazine are effective.",
        "Major Insects and Pests": "1. Bollworm: Damages bolls. Managed with biopesticides.\n2. Jassids: Damage leaves. Managed with neem oil.",
        "Major Diseases and Their Management": "1. Root Rot: Managed with Trichoderma.\n2. Leaf Curl Virus: Managed with resistant varieties.",
        "Harvesting": "Cotton bolls are picked when they burst open.",
        "Yield": "Average yield is 1.5-2.5t/ha."
    },
    "Rice": {
        "Introduction": "Rice (Oryza sativa) is a staple food crop grown in India. It is consumed as a primary source of carbohydrates.",
        "Climate": "Rice grows best in warm, humid climates with temperatures between 20°C and 35°C. Rainfall of 1500-2000mm is ideal.",
        "Soil": "Clayey or loamy soils with good water retention and a pH of 5.0-7.0 are ideal.",
        "Varieties Recommended": "IR-64, Sona Masuri, Basmati.",
        "Planting": "Transplanting is done in puddled fields. Spacing is 20cm x 15cm.",
        "Manures and Fertilizers": "Apply FYM at 10t/ha and NPK at 120:60:60 kg/ha.",
        "Irrigation": "Continuous flooding is required during the growing period.",
        "Weed Control": "Pre-emergence herbicides like Butachlor are effective.",
        "Major Insects and Pests": "1. Rice Hispa: Damages leaves. Managed with neem oil.\n2. Stem Borer: Damages stems. Managed with biopesticides.",
        "Major Diseases and Their Management": "1. Blast: Managed with resistant varieties.\n2. Sheath Blight: Managed with fungicides.",
        "Harvesting": "Rice is harvested when grains are hard and straw turns yellow.",
        "Yield": "Average yield is 3-5t/ha."
    },
    "Banana": {
        "Introduction": "Banana (Musa spp.) is one of the most widely cultivated tropical fruits in the world. It is consumed fresh and also used in various culinary preparations, such as smoothies, desserts, and chips. In India, banana is grown in states like Tamil Nadu, Maharashtra, Gujarat, and Kerala.",
        "Climate": "Banana thrives in warm, humid climates with temperatures between 25°C and 35°C. Frost and extreme cold can damage the crop. Annual rainfall of 1500-2500mm is ideal, but irrigation is necessary in dry regions.",
        "Soil": "Banana grows best in well-drained loamy or sandy loam soils with good water retention capacity. The soil pH should be between 6.0 and 7.5. Waterlogged or saline soils are unsuitable.",
        "Varieties Recommended": "Dwarf Cavendish, Grand Naine, Robusta (Harichal), Poovan, Rasthali, Nendran, Red Banana.",
        "Planting": "Suckers or tissue-cultured plants are planted in pits of 50cm x 50cm x 50cm. Spacing varies depending on the variety: Dwarf Cavendish (2m x 2m), Grand Naine (2m x 2m), and Robusta (2.1m x 2.1m). Planting is typically done during February-March or August-September.",
        "Manures and Fertilizers": "Apply FYM at 20kg/plant/year along with NPK at 200:100:300g/plant/year. Micronutrients like boron, zinc, and magnesium should be applied as needed to prevent deficiencies.",
        "Irrigation": "Banana requires frequent irrigation, especially during flowering and fruit development. Drip irrigation is highly recommended for efficient water use and better yield.",
        "Weed Control": "Mulching and pre-emergence herbicides like Paraquat or Glyphosate are effective for weed control.",
        "Major Insects and Pests": "1. Banana Aphid: Transmits bunchy top virus. Managed with systemic insecticides.\n2. Fruit Fly: Damages ripening fruits. Managed with bait traps.\n3. Nematodes: Damage roots. Managed with neem cake or biocontrol agents.",
        "Major Diseases and Their Management": "1. Panama Wilt: Causes wilting and yellowing of leaves. Managed with resistant varieties and soil drenching with fungicides.\n2. Sigatoka Leaf Spot: Causes leaf spots. Managed with Bordeaux mixture sprays.\n3. Anthracnose: Causes fruit rot. Managed with post-harvest fungicide dips.",
        "Harvesting": "Bananas are harvested when the fruits are fully developed but still green. The bunches are cut using a sharp knife or sickle.",
        "Yield": "Average yield is 30-50t/ha for commercial varieties like Grand Naine and Dwarf Cavendish."
    }
}

const value = {};

updateDetails();
function updateDetails() {
    var currentCrop = localStorage.getItem("currentSelectedCropToShowDetails");
    console.log(currentCrop);

    for (let key in list) {
        if (key == currentCrop) {
            for (let h in list[currentCrop]) {
                let crop = list[currentCrop];
                var div = document.createElement('div');
                div.setAttribute("class", "boxForExplaination");

                var topic = document.createElement('p');
                topic.setAttribute("class", "heading");
                topic.innerText = h;

                var para = document.createElement('p');
                para.setAttribute("class", "paragraph");
                para.innerText = crop[h];

                div.appendChild(topic);
                div.appendChild(para);
                document.getElementById("whatNeedToDo").appendChild(div);
            }
            let button = document.createElement("button");
            button.setAttribute("id", "acceptingTheCrop");
            button.innerText = "Accept";
            button.addEventListener('click', function () {
                localStorage.setItem("acceptedCrop", "Apple");
                addingFarm();
                // window.location.href = "calendar.html";
            });
            document.getElementById("whatNeedToDo").appendChild(button);
        }
    }
}

function getFromLocal(name) {
    return localStorage.getItem(name);
}

function addingFarm() {
    // console.log("working");
    let pin = getFromLocal("pinCode");
    let name = getFromLocal("FarmName");
    let size = getFromLocal("landSize");
    let survey = getFromLocal("surveyNo");
    // let mail = "admin@gmail.com";
    let cropSelected = getFromLocal("currentSelectedCropToShowDetails");
    // let cropSelected = getFromLocal("selectedCropToShowDetails");
    let data = {
        pinCode: pin,
        farmName: name,
        landSize: size,
        surveyNo: survey,
        crop: cropSelected
    }
    console.log("working   " + pin + "   " + name + "   " + size + "   " + survey + "   " + cropSelected);
    fetch('https://jsurya-7777-8443.zcodeusers.in/authfilter/FieldAddServlet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            window.location.href = "../Html/calendar.html";
        })
        .catch(error => console.error('Error:', error));

}

// crops(cropData);
cropSuggestion();

async function cropSuggestion() {
    console.log("Fetching crop suggestions...");
    let pin = localStorage.getItem("pinCode");
    let data = {
        "pinCode": pin
    };

    try {
        console.log("using sendpin");
        let response = await fetch('https://jsurya-7777-8443.zcodeusers.in/sendPin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let responseData = await response.json();
        console.log("Crop suggestions:", responseData);

        // Handle response data (e.g., update UI)
        const container = document.querySelector(".crops-full");
        const fullContainer = document.querySelector(".crops-section");

        // Sort crops by value in descending order
        const sortedCrops = Object.entries(responseData).sort((a, b) => b[1] - a[1]);

        // Function to determine color based on value
        function getColor(value) {
            if (value >= 90) return "#1b5e20"; // Dark Green
            if (value >= 80) return "#2e7d32"; // Green
            if (value >= 70) return "#66bb6a"; // Light Green
            if (value >= 60) return "#d4e157"; // Yellow-Green
            if (value >= 50) return "#fdd835"; // Yellow
            if (value >= 40) return "#fb8c00"; // Orange
            if (value >= 30) return "#e64a19"; // Red-Orange
            if (value >= 20) return "#d32f2f"; // Red
            if (value >= 10) return "#b71c1c"; // Dark Red
            return "#7f0000"; // Darkest Red (Lowest)
        }

        // Create crop elements dynamically
        sortedCrops.forEach(([crop, value]) => {
            const cropContainer = document.createElement("div");
            cropContainer.classList.add("crop-container");
            cropContainer.innerHTML = `
                <div class="crop-top">
                    <div class="crop-img" style="background-image: url('../image/furitebackground/${crop}.png');"></div>
                </div>
                <div class="crop-bottom">
    <span class="crop-name">${crop}</span>
    <div class="progress-bar-container">
        <div class="progress-bar" data-value="${value}" style="background-color: ${getColor(value)};"></div>
        <span class="progress-text"></span>
    </div>
</div>
            `;

            cropContainer.addEventListener("click", function () {
                console.log(crop);
                localStorage.setItem("currentSelectedCropToShowDetails", crop);
                console.log("Onclik is working");
                document.getElementById("crops-fill").innerHTML = `
                    <div id="furtureDetails" class="furtureDetails"> 
                        <div class="currentCropHeader">
                            <div onclick="backToSuggection()" class="backtoSuggestion">
                                <i class="fa-solid fa-circle-xmark fa-xl" style="color: #ffffff;"></i>
                            </div>
                            <div class="name ">${crop}</div>
                            <div onclick="giveMeEstimation()" class="estimation">
                                <i class="fa-solid fa-file-invoice-dollar fa-xl" style="color: #ffffff;"></i>
                            </div>
                        </div>
                        <section id="invoiceContainer" class="invoiceContainer">
                            <div class="whatNeedToDo" id="whatNeedToDo"></div>
                        </section>
                    </div>`;
                updateDetails();
            });

            container.appendChild(cropContainer);
        });

        fullContainer.innerHTML = `<div class="pinDetails">
            <p>Loading land details...</p>
        </div>`;
        fullContainer.appendChild(container);

        // Fetch and display pin details
        getPinDetails();

        // Animate all progress bars simultaneously
        function animateProgressBars() {
            const progressBars = document.querySelectorAll(".progress-bar");
            let startTime = null;

            function step(timestamp) {
                if (!startTime) startTime = timestamp;
                let progress = (timestamp - startTime) / 2000; // Animation duration: 2s
                let completed = true;

                progressBars.forEach(bar => {
                    let targetValue = parseFloat(bar.dataset.value);
                    let currentValue = progress * targetValue;

                    if (currentValue < targetValue) {
                        bar.style.width = currentValue + "%";
                        bar.nextElementSibling.innerText = Math.floor(currentValue) + "%";
                        completed = false;
                    } else {
                        bar.style.width = targetValue + "%";
                        bar.nextElementSibling.innerText = Math.floor(targetValue) + "%";
                    }
                });

                if (!completed) {
                    requestAnimationFrame(step);
                }
            }
            requestAnimationFrame(step);
        }
        animateProgressBars();
    } catch (error) {
        console.error("Error fetching crop suggestions:", error);
    }
}


function goBackToAddFarm() {
    window.location.href = "addFarm.html";
}

async function download() {
    const { jsPDF } = window.jspdf;
    console.log("download")
    // Capture the div as an image
    const divElement = document.getElementById("invoice");
    const canvas = await html2canvas(divElement);
    const imgData = canvas.toDataURL("image/png");

    // Create a PDF
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 10, 10, 180, 100);
    pdf.save("invoice-for-your-crop.pdf");
}



function giveMeEstimation(cropName) {
    let pinCode = localStorage.getItem("pinCode");
    document.getElementById("invoiceContainer").innerHTML = `
                           <div id="invoice-full">
                                        <table id="invoice">
                                            <thead>
                                                <tr>
                                                    <th style="text-align: center" rowspan="5"
                                                        class="table-body landInvoice"><span id="farmText">Farm Land</span> Estimation</th>
                                                    <th style="text-align: left" class="table-body left-pad farmDetailLi min white ">Land
                                                        Name </th>
                                                    <th style="text-align: left" class="table-body left-pad max white">${localStorage.getItem("FarmName")}</th>
                                                </tr>
                                                <tr>
                                                    <th style="text-align: left" class="table-body left-pad farmDetailLi min white">Crop Name
                                                        </th>
                                                    <th style="text-align: left" class="table-body left-pad max white">${localStorage.getItem("currentSelectedCropToShowDetails")}
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th style="text-align: left" class="table-body left-pad min white farmDetailLi">Pin code
                                                        </th>
                                                    <th style="text-align: left" class="table-body left-pad max white">${pinCode}
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th style="text-align: left" class="table-body left-pad min white farmDetailLi">Date
                                                        </th>
                                                    <th style="text-align: left" class="table-body left-pad max white">${getFormattedDate()}
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th style="text-align: left" class="table-body left-pad min white farmDetailLi">Survey Number
                                                        </th>
                                                    <th style="text-align: left" class="table-body left-pad max white">${localStorage.getItem("surveyNo")}
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th class="table-heading">Expense Category</th>
                                                    <th class="table-heading min ">Minimum Amount</th>
                                                    <th class="table-heading max ">Maximum Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="table-body">
                                                    <td class="table-body heading">Land Preparation</td>
                                                    <td style="text-align: center" class="table-body money"
                                                        id="min-Land_Preparation"></td>
                                                    <td style="text-align: center" class="table-body money"
                                                        id="max-Land_Preparation"></td>
                                                </tr>
                                                <tr class="table-body">
                                                    <td class="table-body heading">Seeds</td>
                                                    <td style="text-align: center" class="table-body money"
                                                        id="min-Seeds"></td>
                                                    <td style="text-align: center" class="table-body money"
                                                        id="max-Seeds"></td>
                                                </tr>
                                                <tr class="table-body">
                                                    <td class="table-body heading">Sowing</td>
                                                    <td style="text-align: center" class="table-body money"
                                                        id="min-Sowing"></td>
                                                    <td style="text-align: center" class="table-body money"
                                                        id="max-Sowing"></td>
                                                </tr>
                                                <tr class="table-body">
                                                    <td class="table-body heading">Fertilizers</td>
                                                    <td style="text-align: center" class="table-body money"
                                                        id="min-Fertilizers"></td>
                                                    <td style="text-align: center" class="table-body money"
                                                        id="max-Fertilizers"></td>
                                                </tr>
                                                <tr class="table-body">
                                                    <td class="table-body heading">Pesticides/Herbicides</td>
                                                    <td style="text-align: center" class="table-body money"
                                                        id="min-Pesticides_Herbicides"> </td>
                                                    <td style="text-align: center" class="table-body money"
                                                        id="max-Pesticides_Herbicides">₹ </td>
                                                </tr>
                                                <tr class="table-body">
                                                    <td class="table-body heading">Irrigation</td>
                                                    <td style="text-align: center" class="table-body money"
                                                        id="min-Irrigation"> </td>
                                                    <td style="text-align: center" class="table-body money"
                                                        id="max-Irrigation"> </td>
                                                </tr>
                                                <tr class="table-body">
                                                    <td class="table-body heading">Labor</td>
                                                    <td style="text-align: center" class="table-body money"
                                                        id="min-Labor"></td>
                                                    <td style="text-align: center" class="table-body money"
                                                        id="max-Labor"></td>
                                                </tr>
                                                <tr class="table-body">
                                                    <td class="table-body heading">Miscellaneous</td>
                                                    <td style="text-align: center" class="table-body money"
                                                        id="min-Miscellaneous"></td>
                                                    <td style="text-align: center" class="table-body money"
                                                        id="max-Miscellaneous"></td>
                                                </tr>
                                                <tr class="table-body">
                                                    <td class="table-body heading">Harvesting</td>
                                                    <td style="text-align: center" class="table-body money"
                                                        id="min-Harvesting"></td>
                                                    <td style="text-align: center" class="table-body money"
                                                        id="max-Harvesting"></td>
                                                </tr>
                                                <tr class="table-body">
                                                    <td class="table-body"
                                                        style="font-weight: 900; letter-spacing: 1.5px;text-align: center">
                                                        Grand Total</td>
                                                    <td style="text-align: center" class="table-body money"
                                                        id="min-grandTotal"></td>
                                                    <td style="text-align: center" class="table-body money"
                                                        id="max-grandTotal"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                           </div>
                            <div id="" class="invoiceButtons">
                                        <div class="forCenterButton">
                                            <button class="invoiceButton" onclick="backToProcedure()" id="exit" ><i class="fa-solid fa-arrow-left" style="color: #ffffff;"></i>Back</button>
                                            <button class="invoiceButton" id="download" onclick="download()"><i class="fa-solid fa-download" style="color: #ffffff;"></i>Download</button>
                                        </div>
                             </div>
       `;
    console.log("USer NAme check", cropName);
    invoice();
}
// getPinDetails();
function getPinDetails() {
    const pin = localStorage.getItem("pinCode");
    console.log("Fetching details for pin:", pin);

    const data = {
        pinCode: pin
    };

    fetch('https://jsurya-7777-8443.zcodeusers.in/detailedAPI', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response
        })
        .then(response => {
            console.log("API Response:", response); // Log the full response

            // Check if the response contains the expected data
            if (response && response.district && response.soilType && response.temperature && response.humidity) {
                // Update the pinDetails section
                const pinDetails = document.querySelector(".pinDetails");
                if (pinDetails) {
                    pinDetails.innerHTML = `
                    <p>District: ${response.district}</p>
                    <p>Soil type: ${response.soilType}</p>
                    <p>Temperature: ${response.temperature}°C</p>
                    <p>Humidity: ${response.humidity}%</p>
                `;
                } else {
                    console.error("pinDetails element not found!");
                }
            } else {
                console.error("Invalid response format:", response);
            }
        })
        .catch(error => {
            console.error("Error fetching pin details:", error);
        });
}

function backToProcedure() {
    document.getElementById("invoiceContainer").innerHTML = `
         <div class="whatNeedToDo" id="whatNeedToDo">
                                        
          </div>
    `;
    updateDetails();
}

document.getElementById("furtureDetails").style.display = "none";
function backToSuggection() {
    cropSuggestion();
    document.getElementById("furtureDetails").style.display = "none";
}


function updateTableValues(response) {
    console.log(response);
    let value = response["Invoice"];
    var values = JSON.parse(value);
    Object.keys(values).forEach(key => {
        console.log("SSSS " + values[key].split("-"));
        const [minValue, maxValue] = values[key].split("-");
        const minElement = document.getElementById(`min-${key}`);
        const maxElement = document.getElementById(`max-${key}`);
        if (minElement) minElement.textContent = `₹ ${parseFloat(minValue).toLocaleString()}`;
        if (maxElement) maxElement.textContent = `₹ ${parseFloat(maxValue).toLocaleString()}`;
    });
}

function invoice(cropname) {
    console.log(cropname)
    let data = {
        "landName": localStorage.getItem("FarmName"),
        "crop": localStorage.getItem("currentSelectedCropToShowDetails"),
        // "area" : size,
        // "crop":cropname,
        "area": localStorage.getItem("landSize"),
    };
    fetch('https://jsurya-7777-8443.zcodeusers.in/InvoiceServlet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(response => updateTableValues(response))
        .catch(error => console.error('Error:', error));
};

// <button class="invoiceButton" id="download" onclick="download()">Download</button>
function getFormattedDate() {
    const today = new Date(); // Get the current date

    // Extract day, month, and year
    const day = String(today.getDate()).padStart(2, '0'); // Day with leading zero
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1
    const year = today.getFullYear(); // Full year (e.g., 2025)

    // Format the date as "DD.MM.YYYY"
    return `${day}.${month}.${year}`;
}

console.log(getFormattedDate()); // Example output: "22.02.2025" (depending on the current date)