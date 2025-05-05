document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.createElement("button");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "☰"; // Hamburger icon
    // document.querySelector("nav").appendChild(menuToggle);

    // const navUl = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function() {
        navUl.classList.toggle("active");
    });
});
