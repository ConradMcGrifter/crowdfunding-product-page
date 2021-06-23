const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    document.querySelector(".ul--wrap").classList.toggle("display");
    document.querySelector(".darken").classList.toggle("display");
    document.getElementById("navUl").classList.toggle("display");

    document.querySelector("body").classList.toggle("display");

    document
        .querySelector(".hamburger-icon")
        .setAttribute("src", "images/icon-close-menu.svg");

    if (!document.querySelector(".ul--wrap").classList.contains("display")) {
        document
            .querySelector(".hamburger-icon")
            .setAttribute("src", "images/icon-hamburger.svg");
    }
});
