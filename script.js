// Get elements
const enterBtn = document.getElementById("enterBtn");
const landing = document.querySelector(".landing");
const universe = document.querySelector(".universe");

const stars = document.querySelectorAll(".star");
const modal = document.querySelector(".modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");

// Ensure modal is hidden on load
modal.style.display = "none";

// Enter Universe button
enterBtn.addEventListener("click", () => {
    landing.style.display = "none";
    universe.classList.remove("hidden");
});

// Messages for each star
const messages = {
    mother: "You were my first home. Every strength I have started with you.",
    friend: "You listened when no one else did. You understood me without explanation.",
    strong: "You carried more than anyone saw. And you never let me feel the weight.",
    dreamer: "You taught me to imagine bigger worlds and believe I belonged in them.",
    professional: "Your dedication showed me what discipline and integrity look like.",
    favorite: "You are the universe I grew up inside. Every version of me exists because of you. I love you more than words can hold."
};

// Star click event
stars.forEach(star => {
    star.addEventListener("click", () => {
        const role = star.getAttribute("data-role");

        modalTitle.textContent = star.textContent;
        modalText.textContent = messages[role];

        modal.style.display = "flex";
    });
});

// Close button
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close if clicking outside modal content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
