/* =====================================================
   PORTFOLIO WEBSITE JAVASCRIPT
   Bilal - Web Developer Portfolio
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");
    const header = document.getElementById("header");
    const backTop = document.getElementById("backTop");
    const year = document.getElementById("year");


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", (event) => {

            event.stopPropagation();

            nav.classList.toggle("open");

            const icon = menuBtn.querySelector("i");

            if (icon) {

                if (nav.classList.contains("open")) {

                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");

                } else {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            }

        });


        /* Close menu when clicking navigation links */

        const navLinks = document.querySelectorAll(".nav-link");

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                nav.classList.remove("open");

                const icon = menuBtn.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            });

        });


        /* Close menu when clicking outside */

        document.addEventListener("click", (event) => {

            const clickedInsideNav = nav.contains(event.target);
            const clickedMenu = menuBtn.contains(event.target);

            if (
                nav.classList.contains("open") &&
                !clickedInsideNav &&
                !clickedMenu
            ) {

                nav.classList.remove("open");

                const icon = menuBtn.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            }

        });


        /* Close menu with Escape key */

        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {

                nav.classList.remove("open");

                const icon = menuBtn.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            }

        });

    }


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveLink() {

        if (!sections.length || !navLinks.length) return;

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });


        navLinks.forEach((link) => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === `#${currentSection}`) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    if (backTop) {

        function toggleBackTop() {

            if (window.scrollY > 500) {

                backTop.classList.add("show");

            } else {

                backTop.classList.remove("show");

            }

        }

        window.addEventListener("scroll", toggleBackTop);

        toggleBackTop();


        backTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    if (year) {

        year.textContent = new Date().getFullYear();

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".section-heading, .about-text, .stats, .service-card, .skill, .project-card, .contact-box"
    );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

    });


    /* Check if browser supports IntersectionObserver */

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        revealElements.forEach((element) => {

            revealObserver.observe(element);

        });

    } else {

        /* Fallback for older browsers */

        revealElements.forEach((element) => {

            element.classList.add("visible");

        });

    }


    /* =====================================================
       SMOOTH ANCHOR NAVIGATION
    ===================================================== */

    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach((anchor) => {

        anchor.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {

                return;

            }

            const target = document.querySelector(targetId);

            if (!target) {

                return;

            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "%cBilal Portfolio Loaded Successfully 🚀",
        "font-size:16px;font-weight:bold;"
    );

});