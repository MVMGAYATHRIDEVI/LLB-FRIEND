
document.addEventListener("DOMContentLoaded", () => {

    // Update footer year
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Mobile navigation
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.textContent = isOpen ? "✕" : "☰";
        });

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.textContent = "☰";

            });

        });
    }

    // Reusable View / Hide section function
    function setupSectionToggle(buttonId, sectionId, showText, hideText) {

        const button = document.getElementById(buttonId);
        const section = document.getElementById(sectionId);

        if (!button || !section) return;

        button.addEventListener("click", () => {

            const isHidden = section.hidden;

            section.hidden = !isHidden;

            button.setAttribute("aria-expanded", String(isHidden));

            button.innerHTML = isHidden
                ? `${hideText} <span>↑</span>`
                : `${showText} <span>→</span>`;

            if (isHidden) {

                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });
    }

    // QB Answers
    setupSectionToggle(
        "toggleAnswers",
        "qb-answers",
        "View QB Answers",
        "Hide QB Answers"
    );

    // Complete Notes
    setupSectionToggle(
        "toggleCompleteNotes",
        "complete-notes",
        "View Complete Notes",
        "Hide Complete Notes"
    );

    // Case Laws
    setupSectionToggle(
        "toggleCaseLaws",
        "case-laws",
        "View Case Laws",
        "Hide Case Laws"
    );

});
