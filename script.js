
document.addEventListener("DOMContentLoaded", function () {

    // MOBILE NAVIGATION
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // CLOSE MOBILE MENU AFTER CLICKING A LINK
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });

    // RESOURCE SEARCH
    const searchInput = document.getElementById("resourceSearch");
    const resourceCards = document.querySelectorAll(".resource-card");
    const resourceCount = document.getElementById("resourceCount");
    const noResults = document.getElementById("noResults");

    function searchResources() {

        const searchText = searchInput.value
            .toLowerCase()
            .trim();

        let visibleCount = 0;

        resourceCards.forEach(card => {

            const searchableText =
                (card.dataset.search + " " + card.innerText)
                .toLowerCase();

            const isMatch = searchableText.includes(searchText);

            card.style.display = isMatch ? "block" : "none";

            if (isMatch) {
                visibleCount++;
            }
        });

        resourceCount.textContent =
            `${visibleCount} of ${resourceCards.length} study resources found`;

        noResults.hidden = visibleCount !== 0;
    }

    searchInput.addEventListener("input", searchResources);

    // INITIAL RESOURCE COUNT
    resourceCount.textContent =
        `${resourceCards.length} Study Resources`;

    // CURRENT YEAR
    document.getElementById("currentYear").textContent =
        new Date().getFullYear();

});
