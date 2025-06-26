window.addEventListener("DOMContentLoaded", () => {
    // Load Navbar
    fetch("partials/navbar.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;
            const hamburger = document.getElementById("hamburger");
            const navMenu = document.getElementById("navMenu");

            if (hamburger && navMenu) {
                hamburger.addEventListener("click", () => {
                    hamburger.classList.toggle("active");
                    navMenu.classList.toggle("active");
                });
            }
        });

    // Load Footer + Scroll-to-Top setup
    fetch("partials/footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;

            // Scroll to Top Functionality
            const scrollBtn = document.getElementById("scrollToTopBtn");
            if (scrollBtn) {
                window.addEventListener("scroll", () => {
                    scrollBtn.style.display = window.scrollY > 300 ? "flex" : "none";
                });

                scrollBtn.addEventListener("click", () => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                });
            }
        });

    // Load Enquiry Form
    fetch("partials/enquiry_form.html")
        .then(res => res.text())
        .then(data => {
            const placeholder = document.getElementById("enquiry-placeholder");
            if (placeholder) {
                placeholder.innerHTML = data;

                // Animate form appearance
                const form = document.querySelector(".enquiry-form-card");
                if (form) {
                    form.style.opacity = "0";
                    form.style.transform = "translateY(50px)";
                    setTimeout(() => {
                        form.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
                        form.style.opacity = "1";
                        form.style.transform = "translateY(0)";
                    }, 300);
                }

                // ✅ Scroll to form if URL hash is #enquiry-placeholder
                if (window.location.hash === "#enquiry-placeholder") {
                    setTimeout(() => {
                        document
                            .getElementById("enquiry-placeholder")
                            .scrollIntoView({ behavior: "smooth" });
                    }, 400); // Give a small delay to ensure it's rendered
                }
            }
        });




    // Load Testimonials
    fetch("partials/testimonials.html")
        .then(res => res.text())
        .then(data => {
            const placeholder = document.getElementById("testimonials-placeholder");
            if (placeholder) {
                placeholder.innerHTML = data;
            }
        });

    // Load About Section
    fetch("partials/about.html")
        .then(res => res.text())
        .then(data => {
            const aboutSection = document.getElementById("about-placeholder");
            if (aboutSection) {
                aboutSection.innerHTML = data;
            }
        });


    // Load Services Section
    fetch("partials/services.html")
        .then(res => res.text())
        .then(data => {
            const services = document.getElementById("services-placeholder");
            if (services) {
                services.innerHTML = data;
            }
        });

    // Load About Stats Section
    fetch("partials/about_stats.html")
        .then(res => res.text())
        .then(data => {
            const stats = document.getElementById("about-stats-placeholder");
            if (stats) {
                stats.innerHTML = data;

                // Counter animation
                const counters = stats.querySelectorAll(".stat-number");

                counters.forEach((counter) => {
                    const targetText = counter.textContent.trim();
                    const target = parseInt(targetText.replace(/\D/g, ""));

                    if (isNaN(target)) return;

                    let count = 0;
                    const increment = target / 100;

                    const updateCount = () => {
                        count += increment;
                        if (count < target) {
                            counter.textContent = `${Math.ceil(count)}+`;
                            requestAnimationFrame(updateCount);
                        } else {
                            counter.textContent = `${target}+`;
                        }
                    };

                    updateCount();
                });
            }
        });



    // Load Hero Section
    fetch("partials/hero.html")
        .then(res => res.text())
        .then(data => {
            const hero = document.getElementById("hero-placeholder");
            if (hero) {
                hero.innerHTML = data;
            }
        });

});
