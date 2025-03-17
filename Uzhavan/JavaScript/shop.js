// Product Data
const products = [
    { 
        name: "Nitrogen Fertilizer", 
        category: "fertilizers", 
        price: "₹450", 
        img: "nitrogenfertilizer.jpg", 
        link: "https://www.amazon.in/s?k=nitrogen+fertilizer" 
    },
    { 
        name: "Phosphorus Fertilizer", 
        category: "fertilizers", 
        price: "₹550", 
        img: "Phosphorusfertilizer.jpg", 
        link: "https://www.amazon.in/s?k=phosphorus+fertilizer" 
    },
    { 
        name: "Potassium Fertilizer", 
        category: "fertilizers", 
        price: "₹500", 
        img: "potassiumfertilizer.jpg", 
        link: "https://www.amazon.in/s?k=potassium+fertilizer" 
    },
    { 
        name: "NPK Fertilizer", 
        category: "fertilizers", 
        price: "₹700", 
        img: "npk.jpg", 
        link: "https://www.amazon.in/s?k=npk+fertilizer" 
    },
    { 
        name: "Organic Compost", 
        category: "fertilizers", 
        price: "₹300", 
        img: "organiccompost.jpg", 
        link: "https://www.amazon.in/s?k=organic+compost" 
    },
    { 
        name: "Urea Fertilizer", 
        category: "fertilizers", 
        price: "₹400", 
        img: "ureafertilizer.jpg", 
        link: "https://www.amazon.in/s?k=urea+fertilizer" 
    },
    { 
        name: "Vermicompost", 
        category: "fertilizers", 
        price: "₹350", 
        img: "vermicompost.jpg", 
        link: "https://www.amazon.in/s?k=vermicompost" 
    },
    { 
        name: "Bone Meal Fertilizer", 
        category: "fertilizers", 
        price: "₹600", 
        img: "bonemealfertilizer.jpg", 
        link: "https://www.amazon.in/s?k=bone+meal+fertilizer" 
    },
    { 
        name: "Fish Emulsion Fertilizer", 
        category: "fertilizers", 
        price: "₹800", 
        img: "fishemulsionfertilizer.jpg", 
        link: "https://www.amazon.in/s?k=fish+emulsion+fertilizer" 
    },
    { 
        name: "Gypsum Fertilizer", 
        category: "fertilizers", 
        price: "₹450", 
        img: "gypsumfertilizer.jpg", 
        link: "https://www.amazon.in/s?k=gypsum+fertilizer" 
    },
    { 
        name: "Epsom Salt", 
        category: "fertilizers", 
        price: "₹200", 
        img: "epsomsaltfertilizer.jpg", 
        link: "https://www.amazon.in/s?k=epsom+salt+fertilizer" 
    },
    { 
        name: "Dolomite Lime", 
        category: "fertilizers", 
        price: "₹400", 
        img: "dolomitelimefertilizer.jpg", 
        link: "https://www.amazon.in/s?k=dolomite+lime" 
    },
    {   
        name: "Organic Fertilizer", 
        category: "fertilizers", 
        price: "₹500", 
        img: "organicfertilizer.jpg", 
        link: "https://www.amazon.in/s?k=organic+fertilizer" },
    {   
        name: "Hoe", 
        category: "tools", 
        price: "₹800", 
        img: "hoe.jpg", 
        link: "https://www.amazon.in/s?k=hoe+agriculture" },
    {   
        name: "Shovel", 
        category: "tools", 
        price: "₹1200", 
        img: "shovel1.jpg", 
        link: "https://www.amazon.in/s?k=shovel+agriculture" },
    {   
        name: "Tractor", 
        category: "machinery", 
        price: "₹5,00,000", 
        img: "tractor.jpg", 
        link: "https://www.mahindratractor.com/" },
    {   
        name: "Seed Drill", 
        category: "machinery", 
        price: "₹25,000", 
        img: "seeddrill1.jpg", 
        link: "https://www.amazon.in/s?k=seed+drill" },
    {   
        name: "High-Quality Seeds", 
        category: "seeds", 
        price: "₹250", 
        img: "seeds.jpg", 
        link: "https://www.amazon.in/s?k=seeds" 
    },
    
    { 
        name: "Pruning Shears", 
        category: "tools", 
        img: "pruningshears.jpg", 
        link: "https://www.amazon.in/s?k=pruning+shears" 
    },
    { 
        name: "Garden Fork", 
        category: "tools", 
        img: "gardenfork.jpg", 
        link: "https://www.amazon.in/s?k=garden+fork" 
    },
    { 
        name: "Rake", 
        category: "tools", 
        img: "rake.jpg", 
        link: "https://www.amazon.in/s?k=rake" 
    },
    { 
        name: "Spade", 
        category: "tools", 
        img: "spade.jpg", 
        link: "https://www.amazon.in/s?k=spade" 
    },
    { 
        name: "Wheelbarrow", 
        category: "tools", 
        img: "wheelbarrow.jpg", 
        link: "https://www.amazon.in/s?k=wheelbarrow" 
    },
    { 
        name: "Watering Can", 
        category: "tools", 
        img: "wateringcan.jpg", 
        link: "https://www.amazon.in/s?k=watering+can" 
    },
    { 
        name: "Garden Trowel", 
        category: "tools", 
        img: "gardentrowel.jpg", 
        link: "https://www.amazon.in/s?k=garden+trowel" 
    },
    { 
        name: "Secateurs", 
        category: "tools", 
        img: "secateurs.jpg", 
        link: "https://www.amazon.in/s?k=secateurs" 
    },
    { 
        name: "Lawn Mower", 
        category: "tools", 
        img: "lawnmower.jpg", 
        link: "https://www.amazon.in/s?k=lawn+mower" 
    },
    { 
        name: "Garden Hoe", 
        category: "tools", 
        img: "gardenhoe.jpg", 
        link: "https://www.amazon.in/s?k=garden+hoe" 
    },
    { 
        name: "Shovel", 
        category: "tools", 
        img: "shovel.jpg", 
        link: "https://www.amazon.in/s?k=shovel" 
    },
    { 
        name: "Plow", 
        category: "machinery", 
        img: "plow.jpg", 
        link: "https://www.amazon.in/s?k=plow+machine+for+agriculture" 
    },
    { 
        name: "Harvester", 
        category: "machinery", 
        img: "harvester.jpg", 
        link: "https://dir.indiamart.com/impcat/combine-harvester.html" 
    },
    { 
        name: "Rotavator", 
        category: "machinery", 
        img: "rotavator.jpg", 
        link: "https://www.amazon.in/s?k=rotavator" 
    },
    { 
        name: "Cultivator", 
        category: "machinery", 
        img: "cultivator.jpg", 
        link: "https://www.amazon.in/s?k=cultivator" 
    },
    { 
        name: "Combine Harvester", 
        category: "machinery", 
        img: "combineharvester.jpg", 
        link: "https://www.amazon.in/s?k=combine+harvester" 
    },
    { 
        name: "Water Pump", 
        category: "machinery", 
        img: "waterpump.jpg", 
        link: "https://www.amazon.in/s?k=water+pump" 
    },
    { 
        name: "Power Tiller", 
        category: "machinery", 
        img: "powertiller.jpg", 
        link: "https://www.amazon.in/s?k=power+tiller" 
    },
    { 
        name: "Thresher", 
        category: "machinery", 
        img: "thresher.jpg", 
        link: "https://www.amazon.in/s?k=thresher" 
    },
    { 
        name: "Sprayer", 
        category: "machinery", 
        img: "sprayer.jpg", 
        link: "https://www.amazon.in/s?k=sprayer" 
    },
    { 
        name: "Baler", 
        category: "machinery", 
        img: "baler.jpg", 
        link: "https://www.amazon.in/s?k=baler" 
    }



];

// // Function to Load Products
function loadProducts(category = "all") {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; // Clear existing products

    products.forEach(product => {
        if (category === "all" || product.category === category) {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            // Create a div for the background image
            const imageDiv = document.createElement("div");
            imageDiv.classList.add("product-image");
            imageDiv.style.backgroundImage = `url('../image/products/${product.img}')`;
            productCard.style.backgroundSize = "cover";
            productCard.style.backgroundPosition = "center";
            // Add other product details
            productCard.innerHTML = `
                <h3>${product.name}</h3>
                <button onclick="buyNow('${product.link}')">Buy Now</button>
            `;

            // Append image div and other details
            productCard.prepend(imageDiv);
            container.appendChild(productCard);
        }
    });

    // Apply scroll animation after products load
    setTimeout(() => {
        const cards = document.querySelectorAll(".product-card");
        cards.forEach(card => card.classList.add("visible"));
    }, 100);
}


// Redirect to Product Page
function buyNow(link) {
    window.open(link, "_blank");
}

// Filter Products by Category
function filterCategory(category) {
    loadProducts(category);
}

// Apply scroll animation when products come into view
document.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".product-card");
    const triggerHeight = window.innerHeight * 0.9; // 90% of viewport

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerHeight) {
            card.classList.add("visible");
        }
    });
});

// Load all products on page load
document.addEventListener("DOMContentLoaded", () => loadProducts());
