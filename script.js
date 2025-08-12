document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".planet-card");
    const modal = document.getElementById("planetModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalInfo = document.getElementById("modalInfo");
    const modalImage = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            modalTitle.textContent = card.dataset.name;
            modalInfo.textContent = card.dataset.info;
            modalImage.src = card.dataset.img;
            modal.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
