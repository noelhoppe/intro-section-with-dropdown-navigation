// Declare variables
let featuresDropdownToggle: HTMLButtonElement;
let featuresDropdown: HTMLUListElement
let featuresIconArrowUp: HTMLImageElement;
let featureIconArrowDown: HTMLImageElement;
let companyDropdownToggle: HTMLButtonElement;
let companyDropdown: HTMLUListElement;
let companyIconArrowUp: HTMLImageElement;
let companyIconArrowDown: HTMLImageElement;
let hamburgerMenuButton: HTMLButtonElement;
let hamburgerMenu;
let closeIcon;
let mobileNav;


document.addEventListener("DOMContentLoaded", () => {
    // initialize variables
    featuresDropdownToggle = document.querySelector("#features-dropdown-toggle") as HTMLButtonElement;
    featuresDropdown = document.querySelector("#features-dropdown") as HTMLUListElement;
    featuresIconArrowUp = document.querySelector("#icon-arrow-up-features") as HTMLImageElement;
    featureIconArrowDown = document.querySelector("#icon-arrow-down-features") as HTMLImageElement;
    companyDropdownToggle = document.querySelector("#company-dropdown-toggle") as HTMLButtonElement;
    companyIconArrowUp = document.querySelector("#icon-arrow-up-company") as HTMLImageElement;
    companyIconArrowDown = document.querySelector("#icon-arrow-down-company") as HTMLImageElement;
    companyDropdown = document.querySelector("#company-dropdown") as HTMLUListElement;
    hamburgerMenuButton = document.querySelector("#hamburger-menu-button") as HTMLButtonElement;
    hamburgerMenu = document.querySelector("#hamburger-menu");
    closeIcon = document.querySelector("#close-icon");
    mobileNav = document.querySelector("ul.nav-links");

    featuresDropdownToggle.addEventListener("click", () => {
        featuresDropdownToggle.getAttribute("aria-expanded") == "false" ? featuresDropdownToggle.setAttribute("aria-expanded", "true") : featuresDropdownToggle.setAttribute("aria-expanded", "false"); // toggle aria-expanded attribute on button
        // toggle icon arrow's display property
        featuresDropdownToggle.getAttribute("aria-expanded") == "false" ? featuresIconArrowUp.style.display = "none" : featuresIconArrowUp.style.display = "inline";
        featuresDropdownToggle.getAttribute("aria-expanded") == "false" ? featureIconArrowDown.style.display = "inline" : featureIconArrowDown.style.display = "none";
        // toggle dropdown's display property
        featuresDropdownToggle.getAttribute("aria-expanded") == "true" ? featuresDropdown.style.display = "flex" : featuresDropdown.style.display = "none";
    })
    companyDropdownToggle.addEventListener("click", () => {
        companyDropdownToggle.getAttribute("aria-expanded") == "false" ? companyDropdownToggle.setAttribute("aria-expanded", "true") : companyDropdownToggle.setAttribute("aria-expanded", "false"); // toggle aria-expanded attribute on button
        // toggle icon arrow's display property
        companyDropdownToggle.getAttribute("aria-expanded") == "false" ? companyIconArrowUp.style.display = "none" : companyIconArrowUp.style.display = "inline";
        companyDropdownToggle.getAttribute("aria-expanded") == "false" ? companyIconArrowDown.style.display = "inline" : companyIconArrowDown.style.display = "none";
        // toggle dropdown's display property
        companyDropdownToggle.getAttribute("aria-expanded") == "true" ? companyDropdown.style.display = "flex" : companyDropdown.style.display = "none";
    })
    hamburgerMenuButton.addEventListener("click", () => {
        hamburgerMenuButton.getAttribute("aria-expanded") == "false" ? hamburgerMenuButton.setAttribute("aria-expanded", "true") : hamburgerMenuButton.setAttribute("aria-expanded", "false");
        hamburgerMenuButton.getAttribute("aria-expanded") == "true" ? closeIcon.style.display = "flex" : closeIcon.style.display = "none";
        hamburgerMenuButton.getAttribute("aria-expanded") == "true" ? hamburgerMenu.style.display = "none" : hamburgerMenu.style.display = "flex";
        hamburgerMenuButton.getAttribute("aria-expanded") == "true" ? mobileNav.style.display = "flex" : mobileNav.style.display = "none";
    })
})