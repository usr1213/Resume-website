document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const themeToggle = document.getElementById("theme-toggle");

    function revealOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.85) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once to show sections in view on load

    // Dark/Light Mode Toggle
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        themeToggle.textContent = document.body.classList.contains("light-mode") ? "🌙 Dark Mode" : "☀️ Light Mode";
    });
});
