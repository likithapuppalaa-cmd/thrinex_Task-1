"use strict";

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#main-menu");

if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        const isOpen =
            menuButton.getAttribute("aria-expanded") === "true";

        menuButton.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Open navigation menu"
                : "Close navigation menu"
        );

        navigation.classList.toggle("open");

    });
}


/* Contact form */

const contactForm =
    document.querySelector(".contact-form");

const formStatus =
    document.querySelector("#form-status");

if (contactForm && formStatus) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!contactForm.checkValidity()) {

            formStatus.textContent =
                "Please complete all required fields correctly.";

            return;
        }

        formStatus.textContent =
            "Thank you! Your message has been prepared successfully.";

        contactForm.reset();

    });

}