document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".planet-card");
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0 0 20px #00ffcc";
        });
        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "none";
        });
    });
});
