// Feature Scroll Animation
const features = document.querySelectorAll('.feature');

const checkFeatures = () => {
    const triggerBottom = window.innerHeight * 0.85;

    features.forEach(feature => {
        const featureTop = feature.getBoundingClientRect().top;

        if (featureTop < triggerBottom) {
            feature.classList.add('active');
        } else {
            feature.classList.remove('active');
        }
    });
};

// Plant Growing Animation with Video
const plant = document.getElementById('plant');

const updatePlant = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = scrollPosition / maxScroll;

    // Update plant scale (30% to 100%)
    const scale = 0.3 + scrollFraction * 0.7;
    plant.style.transform = `scale(${Math.min(1, Math.max(0.3, scale))})`;

    // Control video playback based on scroll (sync growth with scroll position)
    const duration = plant.duration || 10; // Fallback to 10s if duration isn’t available yet
    plant.currentTime = scrollFraction * duration; // Move video time proportional to scroll
    if (scrollPosition === 0) {
        plant.pause(); // Pause at top
        plant.currentTime = 0; // Reset to start
    } else if (scrollPosition + window.innerHeight >= document.body.scrollHeight) {
        plant.pause(); // Pause at bottom
        plant.currentTime = duration; // Stay at end
    } else {
        plant.play(); // Play while scrolling
    }
};

// Ensure video is ready before using duration
plant.addEventListener('loadedmetadata', () => {
    updatePlant(); // Initial update once video metadata is loaded
});

// Event Listeners
window.addEventListener('scroll', () => {
    checkFeatures();
    updatePlant();
});
console.log("beforeCheck1")
// Initial check
checkFeatures();
console.log("beforeCheck2")
updatePlant();


document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        
        // Scroll to the element smoothly
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Add a slight offset to move the view down
        setTimeout(() => {
            window.scrollBy({
                top: -66, // Adjust this value based on your header height or preference
                behavior: 'smooth'
            });
        }, 500); // Adjust delay if necessary
    });
});


