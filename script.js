// Declare variables
var featuresDropdownToggle;
var featuresDropdown;
var featuresIconArrowUp;
var featureIconArrowDown;
var companyDropdownToggle;
var companyDropdown;
var companyIconArrowUp;
var companyIconArrowDown;
var hamburgerMenuButton;
var hamburgerMenu;
var closeIcon;
var mobileNav;
document.addEventListener("DOMContentLoaded", function () {
    // initialize variables
    featuresDropdownToggle = document.querySelector("#features-dropdown-toggle");
    featuresDropdown = document.querySelector("#features-dropdown");
    featuresIconArrowUp = document.querySelector("#icon-arrow-up-features");
    featureIconArrowDown = document.querySelector("#icon-arrow-down-features");
    companyDropdownToggle = document.querySelector("#company-dropdown-toggle");
    companyIconArrowUp = document.querySelector("#icon-arrow-up-company");
    companyIconArrowDown = document.querySelector("#icon-arrow-down-company");
    companyDropdown = document.querySelector("#company-dropdown");
    hamburgerMenuButton = document.querySelector("#hamburger-menu-button");
    hamburgerMenu = document.querySelector("#hamburger-menu");
    closeIcon = document.querySelector("#close-icon");
    mobileNav = document.querySelector("ul.nav-links");
    featuresDropdownToggle.addEventListener("click", function () {
        featuresDropdownToggle.getAttribute("aria-expanded") == "false" ? featuresDropdownToggle.setAttribute("aria-expanded", "true") : featuresDropdownToggle.setAttribute("aria-expanded", "false"); // toggle aria-expanded attribute on button
        // toggle icon arrow's display property
        featuresDropdownToggle.getAttribute("aria-expanded") == "false" ? featuresIconArrowUp.style.display = "none" : featuresIconArrowUp.style.display = "inline";
        featuresDropdownToggle.getAttribute("aria-expanded") == "false" ? featureIconArrowDown.style.display = "inline" : featureIconArrowDown.style.display = "none";
        // toggle dropdown's display property
        featuresDropdownToggle.getAttribute("aria-expanded") == "true" ? featuresDropdown.style.display = "flex" : featuresDropdown.style.display = "none";
    });
    companyDropdownToggle.addEventListener("click", function () {
        companyDropdownToggle.getAttribute("aria-expanded") == "false" ? companyDropdownToggle.setAttribute("aria-expanded", "true") : companyDropdownToggle.setAttribute("aria-expanded", "false"); // toggle aria-expanded attribute on button
        // toggle icon arrow's display property
        companyDropdownToggle.getAttribute("aria-expanded") == "false" ? companyIconArrowUp.style.display = "none" : companyIconArrowUp.style.display = "inline";
        companyDropdownToggle.getAttribute("aria-expanded") == "false" ? companyIconArrowDown.style.display = "inline" : companyIconArrowDown.style.display = "none";
        // toggle dropdown's display property
        companyDropdownToggle.getAttribute("aria-expanded") == "true" ? companyDropdown.style.display = "flex" : companyDropdown.style.display = "none";
    });
    hamburgerMenuButton.addEventListener("click", function () {
        hamburgerMenuButton.getAttribute("aria-expanded") == "false" ? hamburgerMenuButton.setAttribute("aria-expanded", "true") : hamburgerMenuButton.setAttribute("aria-expanded", "false");
        hamburgerMenuButton.getAttribute("aria-expanded") == "true" ? closeIcon.style.display = "flex" : closeIcon.style.display = "none";
        hamburgerMenuButton.getAttribute("aria-expanded") == "true" ? hamburgerMenu.style.display = "none" : hamburgerMenu.style.display = "flex";
        hamburgerMenuButton.getAttribute("aria-expanded") == "true" ? mobileNav.style.display = "flex" : mobileNav.style.display = "none";
    });
});
