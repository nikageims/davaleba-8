// System Variables
const systemVars = {
    countdownDuration: 24 * 60 * 60, // 24 hours in seconds
    flashSales: ["Flash Sale Item 1", "Flash Sale Item 2", "Flash Sale Item 3"],
    trendingMustHaves: ["Trending Item 1", "Trending Item 2", "Trending Item 3"],
    top100: ["Top 100 Item 1", "Top 100 Item 2", "Top 100 Item 3"],
    newArrivals: ["New Arrival 1", "New Arrival 2", "New Arrival 3"]
};

// Countdown Timer
let countdown = systemVars.countdownDuration;

const hourElem = document.querySelector(".hour");
const minElem = document.querySelector(".min");
const secElem = document.querySelector(".sec");

function updateCountdown() {
    let hours = Math.floor(countdown / 3600);
    let minutes = Math.floor((countdown % 3600) / 60);
    let seconds = countdown % 60;

    if (hourElem) hourElem.textContent = hours.toString().padStart(2, "0");
    if (minElem) minElem.textContent = minutes.toString().padStart(2, "0");
    if (secElem) secElem.textContent = seconds.toString().padStart(2, "0");

    if (countdown > 0) countdown--;
}

updateCountdown(); // Initial call
setInterval(updateCountdown, 1000);

// Dropdown Functionality
document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector(".dropbtn");
        const dropdownContent = dropdown.querySelector(".dropdown-content");

        if (dropbtn && dropdownContent) {
            dropbtn.addEventListener("click", function(e) {
                e.preventDefault();
                dropdownContent.classList.toggle("show");
            });

            // Close dropdown when clicking outside
            document.addEventListener("click", function(e) {
                if (!dropdown.contains(e.target)) {
                    dropdownContent.classList.remove("show");
                }
            });
        }
    });
});
