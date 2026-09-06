/* =========================================================
   RITESH.DEV - PREMIUM PORTFOLIO JAVASCRIPT
   Smooth interactions + animations + projects modal
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. NAVBAR SCROLL EFFECT
    ===================================================== */

    const navbar = document.querySelector(".navbar");

    const handleNavbarScroll = () => {

        if (!navbar) return;

        if (window.scrollY > 40) {

            navbar.style.background =
                "rgba(6, 10, 36, 0.94)";

            navbar.style.borderBottom =
                "1px solid rgba(139, 92, 246, 0.22)";

            navbar.style.boxShadow =
                "0 10px 40px rgba(0, 0, 0, 0.20)";

        } else {

            navbar.style.background =
                "linear-gradient(to bottom, rgba(6, 10, 36, 0.88), rgba(6, 10, 36, 0.50))";

            navbar.style.borderBottom =
                "1px solid rgba(139, 92, 246, 0.10)";

            navbar.style.boxShadow = "none";
        }
    };


    window.addEventListener(
        "scroll",
        handleNavbarScroll
    );

    handleNavbarScroll();



    /* =====================================================
       2. SMOOTH SCROLL
    ===================================================== */

    const navigationLinks =
        document.querySelectorAll('a[href^="#"]');


    navigationLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");


                /* Ignore empty # links */

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetId);


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });



    /* =====================================================
       3. ACTIVE NAVIGATION LINK
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-menu a"
        );


    const updateActiveNav = () => {

        let currentSection = "";


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 180;

            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                    sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach((link) => {

            link.classList.remove(
                "active"
            );


            const href =
                link.getAttribute("href");


            if (
                href ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    };


    window.addEventListener(
        "scroll",
        updateActiveNav
    );


    updateActiveNav();



    /* =====================================================
       4. SCROLL REVEAL ANIMATION
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-heading, " +
            ".about-text, " +
            ".stat-card, " +
            ".skill-card, " +
            ".project-card, " +
            ".projects-main-card, " +
            ".timeline-item, " +
            ".contact-box"
        );


    revealElements.forEach((element) => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(35px)";

        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

    });


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    entry.target.style.opacity =
                        "1";


                    entry.target.style.transform =
                        "translateY(0)";


                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {

        revealObserver.observe(
            element
        );

    });



    /* =====================================================
       5. STAGGER CARD ANIMATION
    ===================================================== */

    const cardGroups = [

        ".skills-grid .skill-card",

        ".projects-grid .project-card",

        ".about-stats .stat-card"

    ];


    cardGroups.forEach((selector) => {

        const cards =
            document.querySelectorAll(
                selector
            );


        cards.forEach(
            (card, index) => {

                card.style.transitionDelay =
                    `${index * 0.08}s`;

            }
        );

    });



    /* =====================================================
       6. MOUSE GLOW EFFECT
    ===================================================== */

    const cards =
        document.querySelectorAll(
            ".skill-card, " +
            ".project-card, " +
            ".stat-card, " +
            ".timeline-content"
        );


    cards.forEach((card) => {


        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                card.style.background = `
                    radial-gradient(
                        250px circle at ${x}px ${y}px,
                        rgba(108, 43, 255, 0.16),
                        rgba(19, 25, 69, 0.72) 45%
                    )
                `;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.background =
                    "linear-gradient(145deg, rgba(19, 25, 69, 0.75), rgba(10, 15, 45, 0.65))";

            }
        );

    });



    /* =====================================================
       7. BUTTON RIPPLE EFFECT
    ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".btn, .nav-btn"
        );


    buttons.forEach((button) => {

        button.addEventListener(
            "click",
            function (event) {

                const rect =
                    this.getBoundingClientRect();


                const ripple =
                    document.createElement(
                        "span"
                    );


                const size =
                    Math.max(
                        rect.width,
                        rect.height
                    );


                ripple.style.width =
                    `${size}px`;

                ripple.style.height =
                    `${size}px`;


                ripple.style.left =
                    `${
                        event.clientX -
                        rect.left -
                        size / 2
                    }px`;


                ripple.style.top =
                    `${
                        event.clientY -
                        rect.top -
                        size / 2
                    }px`;


                ripple.style.position =
                    "absolute";


                ripple.style.borderRadius =
                    "50%";


                ripple.style.background =
                    "rgba(255,255,255,0.18)";


                ripple.style.transform =
                    "scale(0)";


                ripple.style.pointerEvents =
                    "none";


                ripple.style.animation =
                    "rippleEffect 0.6s linear";


                this.style.position =
                    "relative";


                this.style.overflow =
                    "hidden";


                this.appendChild(
                    ripple
                );


                setTimeout(
                    () => {
                        ripple.remove();
                    },
                    650
                );

            }
        );

    });



    /* =====================================================
       8. HERO PROFILE PARALLAX EFFECT
    ===================================================== */

    const heroVisual =
        document.querySelector(
            ".hero-visual"
        );


    const profileCard =
        document.querySelector(
            ".profile-card"
        );


    if (
        heroVisual &&
        profileCard
    ) {

        heroVisual.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    heroVisual.getBoundingClientRect();


                const centerX =
                    rect.left +
                    rect.width / 2;


                const centerY =
                    rect.top +
                    rect.height / 2;


                const moveX =
                    (event.clientX -
                        centerX) / 35;


                const moveY =
                    (event.clientY -
                        centerY) / 35;


                profileCard.style.transform =
                    `translate(${moveX}px, ${moveY}px)`;

            }
        );


        heroVisual.addEventListener(
            "mouseleave",
            () => {

                profileCard.style.transform =
                    "translate(0, 0)";

            }
        );

    }



    /* =====================================================
       9. HERO CURSOR EFFECT
    ===================================================== */

    const hero =
        document.querySelector(
            ".hero"
        );


    if (hero) {

        hero.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    hero.getBoundingClientRect();


                const x =
                    ((event.clientX -
                        rect.left) /
                        rect.width) *
                    100;


                const y =
                    ((event.clientY -
                        rect.top) /
                        rect.height) *
                    100;


                hero.style.background = `
                    radial-gradient(
                        450px circle at ${x}% ${y}%,
                        rgba(49, 92, 255, 0.055),
                        transparent 55%
                    )
                `;

            }
        );


        hero.addEventListener(
            "mouseleave",
            () => {

                hero.style.background =
                    "transparent";

            }
        );

    }



    /* =====================================================
       10. PROJECT CARD 3D TILT
       ===================================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) *
                    -2;


                const rotateY =
                    ((x - centerX) /
                        centerX) *
                    2;


                card.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

            }
        );

    });



    /* =====================================================
       11. CURRENT YEAR
    ===================================================== */

    const footerText =
        document.querySelector(
            ".footer p"
        );


    if (footerText) {

        const currentYear =
            new Date().getFullYear();


        footerText.innerHTML =
            `© ${currentYear} Ritesh Kumar. All Rights Reserved.`;

    }



    /* =====================================================
       12. ESC KEY SUPPORT
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
            ) {

                document.activeElement?.blur();

            }

        }
    );



    /* =====================================================
       13. PAGE LOAD ANIMATION
    ===================================================== */

    document.body.style.opacity =
        "0";


    setTimeout(
        () => {

            document.body.style.transition =
                "opacity 0.8s ease";

            document.body.style.opacity =
                "1";

        },
        100
    );



    /* =====================================================
       14. PROJECTS MODAL
    ===================================================== */

    const openProjects =
        document.getElementById(
            "openProjects"
        );


    const closeProjects =
        document.getElementById(
            "closeProjects"
        );


    const projectsModal =
        document.getElementById(
            "projectsModal"
        );


    const projectsOverlay =
        document.querySelector(
            ".projects-modal-overlay"
        );


    /* ================= OPEN MODAL ================= */

    function openProjectsModal() {

        if (!projectsModal) {
            return;
        }


        projectsModal.classList.add(
            "active"
        );


        document.body.style.overflow =
            "hidden";


        /* Focus close button */

        if (closeProjects) {

            setTimeout(
                () => {
                    closeProjects.focus();
                },
                300
            );

        }

    }



    /* ================= CLOSE MODAL ================= */

    function closeProjectsModal() {

        if (!projectsModal) {
            return;
        }


        projectsModal.classList.remove(
            "active"
        );


        document.body.style.overflow =
            "";

    }



    /* ================= OPEN PROJECTS ================= */

    if (openProjects) {

        openProjects.addEventListener(
            "click",
            openProjectsModal
        );

    }



    /* ================= CLOSE BUTTON ================= */

    if (closeProjects) {

        closeProjects.addEventListener(
            "click",
            closeProjectsModal
        );

    }



    /* ================= OVERLAY ================= */

    if (projectsOverlay) {

        projectsOverlay.addEventListener(
            "click",
            closeProjectsModal
        );

    }



    /* ================= ESCAPE KEY ================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                projectsModal &&
                projectsModal.classList.contains(
                    "active"
                )
            ) {

                closeProjectsModal();

            }

        }
    );



    /* =====================================================
       15. PROJECT MODAL CARD HOVER
    ===================================================== */

    const modalProjectCards =
        document.querySelectorAll(
            ".modal-project-card"
        );


    modalProjectCards.forEach(
        (card) => {

            card.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    card.style.background = `
                        radial-gradient(
                            220px circle at ${x}px ${y}px,
                            rgba(108, 43, 255, 0.13),
                            rgba(255, 255, 255, 0.025) 55%
                        )
                    `;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.background =
                        "rgba(255, 255, 255, 0.025)";

                }
            );

        }
    );



    /* =====================================================
       16. PREVENT MODAL CONTENT CLICK FROM CLOSING
    ===================================================== */

    if (projectsModal) {

        const modalContent =
            projectsModal.querySelector(
                ".projects-modal-content"
            );


        if (modalContent) {

            modalContent.addEventListener(
                "click",
                (event) => {

                    event.stopPropagation();

                }
            );

        }

    }



    /* =====================================================
       17. CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "%cRITESH.DEV",
        `
        font-size: 24px;
        font-weight: 800;
        color: #D946EF;
        text-shadow:
        0 0 12px rgba(217,70,239,0.6);
        `
    );


    console.log(
        "%cWelcome to my portfolio 🚀",
        `
        font-size: 14px;
        color: #A7B0C5;
        `
    );


});



/* =========================================================
   DYNAMIC ANIMATION STYLES
   ========================================================= */

const dynamicStyles =
    document.createElement(
        "style"
    );


dynamicStyles.textContent = `

    /* ===============================
       ACTIVE NAVIGATION
    =============================== */

    .nav-menu a.active {
        color: #F8FAFC;
    }


    .nav-menu a.active::after {
        width: 100%;
    }



    /* ===============================
       RIPPLE
    =============================== */

    @keyframes rippleEffect {

        to {
            transform: scale(4);
            opacity: 0;
        }

    }



    /* ===============================
       BLINKING CURSOR
    =============================== */

    @keyframes blinkCursor {

        0%,
        45% {
            opacity: 1;
        }

        50%,
        100% {
            opacity: 0;
        }

    }



    /* ===============================
       MODAL OPEN ANIMATION
    =============================== */

    @keyframes modalGlow {

        0% {
            box-shadow:
                0 40px 120px rgba(0,0,0,0.55),
                0 0 30px rgba(108,43,255,0.08);
        }

        50% {
            box-shadow:
                0 40px 120px rgba(0,0,0,0.55),
                0 0 70px rgba(108,43,255,0.18);
        }

        100% {
            box-shadow:
                0 40px 120px rgba(0,0,0,0.55),
                0 0 30px rgba(108,43,255,0.08);
        }

    }



    /* ===============================
       PROJECT MODAL
    =============================== */

    .projects-modal.active
    .projects-modal-content {

        animation:
            modalGlow 3s ease-in-out infinite;

    }



    /* ===============================
       MODAL PROJECT NUMBER
    =============================== */

    .modal-project-number {
        background:
            linear-gradient(
                135deg,
                #315CFF,
                #D946EF
            );

        -webkit-background-clip: text;
        background-clip: text;

        -webkit-text-fill-color:
            transparent;

    }



    /* ===============================
       ACCESSIBILITY
    =============================== */

    .projects-close:focus-visible,
    .btn:focus-visible,
    .nav-btn:focus-visible,
    .nav-menu a:focus-visible,
    .social-links a:focus-visible {

        outline:
            2px solid #FF4FD8;

        outline-offset:
            4px;

    }

`;


document.head.appendChild(
    dynamicStyles
);