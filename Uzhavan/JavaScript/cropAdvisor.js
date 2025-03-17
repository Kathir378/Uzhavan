const API_KEY = "AIzaSyDjc01aRG7A9OOpWKufKwK6R1rSAbJ6g9w"; 
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";
const API_URL1= "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"
const chatMessages = document.getElementById("chatMessages");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendBtn");
document.getElementById("botDiv").style.display = "none";
async function generateResponse(prompt) {
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
        })
    });
    const data = await response.json();
    
    console.log(data); // Debugging API response structure

    // Extract response text
    if (data && data.candidates && data.candidates.length > 0) {
        return data.candidates[0].content.parts[0].text;
    } else {
        return "No response from AI.";
    }
}




function addMessage(message, isUser) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", isUser ? "userMessage" : "botMessage");

    const profileImage = document.createElement("img");
    profileImage.classList.add("profileImage");
    profileImage.src = isUser ? "../image/icons/user.jpg" : "../image/icons/bot.jpg";

    const messageContent = document.createElement("div");
    messageContent.classList.add("messageContent");
    messageContent.textContent = message;

    messageElement.appendChild(profileImage);
    messageElement.appendChild(messageContent);
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function handleUserInput() {
    const userMessage = "'"+userInput.value.trim()+"'"+" analyse this prompt and if it is related to agriculture give me the answer only theroytacal and genernal prompt like hi ,hello becasues your a employe that work for a app called uzhavan  otherwise reply 'sorry this is not agri based' and this is important don't accept any tangential ways on the prompt and don't accept any coding related prompts including about agriculture";
    // console.log(userMessage);
    if (userMessage) {
        addMessage(userInput.value.trim(), true);
        userInput.value = "";
        sendButton.disabled = true;
        userInput.disabled = true;
        try {
            const botMessage = await generateResponse(userMessage);
            addMessage(botMessage, false);
        } catch (error) {
            console.error("Error:", error);
            addMessage("Sorry, I encountered an error. Please try again.", false);
        } finally {
            sendButton.disabled = false;
            userInput.disabled = false;
            userInput.focus();
        }
    }
}

sendButton.addEventListener("click", handleUserInput);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleUserInput();
    }
});



function loadBot(){
    
}




























const advisors = [
    { 
        name: "Arunmozhi", 
        mobile: "+91 9876543210", 
        email: "arunmozhi@gmail.com", 
        address: "Tirunelveli, Tamil Nadu", 
        level: "Senior Advisor" 
    },
    { 
        name: "Velmurugan", 
        mobile: "+91 9876512345", 
        email: "velmurugan@gmail.com", 
        address: "Madurai, Tamilnadu", 
        level: "Expert Consultant" 
    },
    { 
        name: "Senthamizhan", 
        mobile: "+91 9876598765", 
        email: "senthamizhan@gmail.com", 
        address: "Vellore, Tamilnadu", 
        level: "Field Specialist" 
    },
    { 
        name: "Perumal", 
        mobile: "+91 9790474973", 
        email: "perumal@gmail.com", 
        address: "Tenkasi, Tamilnadu", 
        level: "Top Consultant" 
    },
    { 
        name: "Thirunavukkarasu", 
        mobile: "+91 9876587654", 
        email: "thirunavukkarasu@gmail.com", 
        address: "Cuddalore, Tamilnadu", 
        level: "Senior Researcher" 
    }
];

const advisorContainer = document.querySelector('.advisor-full');
https://aistudio.google.com/?gad_source=1&gclid=Cj0KCQiAoJC-BhCSARIsAPhdfSh21CMT6UMFAM3m5rW-OdWz-CLKq-WZuceufCeVppOkItvw103Dp5kaAi41EALw_wcB

advisors.forEach(advisor => {
    const imageName = advisor.name.replace(/\s+/g, "").toLowerCase() + ".png";
    const advisorCard = document.createElement('div');
    advisorCard.classList.add('advisor-card');
    advisorCard.innerHTML = `
        <img src="../image/advisorImage/${imageName}" class="advisor-img">
        <div class="advisor-details">
            <h3>${advisor.name}</h3>
            <p>Level: <span class="level">${advisor.level}</span></p>
            <p>Mobile: ${advisor.mobile}</p>
            <p>Email: <a href="mailto:${advisor.email}" class="email-link">${advisor.email}</a></p>
            <p>Address: ${advisor.address}</p>
        </div>
    `;

    advisorContainer.appendChild(advisorCard);
});



function turnOffBot(){
    document.getElementById("botDiv").style.display = "none"
}

function turnOnBot(){
    document.getElementById("botDiv").style.display = "flex"
}


























