let callToActionBtn = document.getElementById("call-to-action__btn");
let backThisProjectCard = document.getElementById("back-this-project-card");
let lightBox = document.getElementById("lightbox");
let body = document.querySelector("body");
let xButton = document.getElementById("x-btn");

let radio1 = document.getElementById("radio-1");
let radio2 = document.getElementById("radio-2");
let radio3 = document.getElementById("radio-3");

const radioButtons = document.querySelectorAll(".radio");
const rewardH4 = document.querySelectorAll(".reward__h4");

const header1 = document.querySelector(".header-1");
const header2 = document.querySelector(".header-2");
const header3 = document.querySelector(".header-3");
const header4 = document.querySelector(".header-4");

callToActionBtn.addEventListener("click", openCloseProjectCard);
callToActionBtn.addEventListener("click", scrollIntoView);

function openCloseProjectCard() {
    radio1.checked = false;
    document.querySelector(".no-reward-pledge").style.border =
        "solid rgba(161, 161, 161, 0.295) 2px;";

    backThisProjectCard.classList.toggle("display");
    lightBox.classList.toggle("display");
    body.classList.toggle("display");
}

function scrollIntoView() {
    scroll(0, 0);
}

radio1.checked = false;
radio2.checked = false;
// radio1.addEventListener("click", () => {
//     if (radio1.checked == true) {
//         document.querySelector(".no-reward-pledge").style.border =
//             "solid hsl(176, 72%, 28%) 2px";
//     } else {
//         document.querySelector(".no-reward-pledge").style.border =
//             "solid rgba(161, 161, 161, 0.295) 2px";
//     }
// });

// radio2.addEventListener("click", () => {
//     document.querySelector(".enter-pledge").classList.add("display");

//     if (!radio2.checked) {
//         document.querySelector(".enter-pledge").classList.remove("display");
//     }
// });

header1.addEventListener("click", () => {
    radio1.checked = true;
    radio2.checked = false;
    radio3.checked = false;

    document
        .querySelector(".bamboo-stand__enter-pledge")
        .classList.remove("display");
    document.querySelector(".bamboo-stand").classList.remove("display");

    document.querySelector(".black-edition").classList.remove("display");
    document
        .querySelector(".black-edition__enter-pledge")
        .classList.remove("display");

    if (radio1.checked) {
        document.querySelector(".no-reward-pledge").classList.add("display");

        document
            .querySelector(".no-reward__enter-pledge")
            .classList.add("display");
    } else {
        document.querySelector(".no-reward-pledge").classList.remove("display");

        document
            .querySelector(".no-reward__enter-pledge")
            .classList.remove("display");
    }
});

header2.addEventListener("click", () => {
    radio2.checked = true;
    radio1.checked = false;
    radio3.checked = false;

    document.querySelector(".no-reward-pledge").classList.remove("display");
    document
        .querySelector(".no-reward__enter-pledge")
        .classList.remove("display");

    document.querySelector(".black-edition").classList.remove("display");
    document
        .querySelector(".black-edition__enter-pledge")
        .classList.remove("display");

    if (radio2.checked) {
        document
            .querySelector(".bamboo-stand__enter-pledge")
            .classList.add("display");
        document.querySelector(".bamboo-stand").classList.add("display");
    } else {
        document
            .querySelector(".bamboo-stand__enter-pledge")
            .classList.remove("display");
        document.querySelector(".bamboo-stand").classList.remove("display");
    }
});

header3.addEventListener("click", () => {
    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = true;

    document.querySelector(".no-reward-pledge").classList.remove("display");

    document
        .querySelector(".no-reward__enter-pledge")
        .classList.remove("display");

    document
        .querySelector(".bamboo-stand__enter-pledge")
        .classList.remove("display");
    document.querySelector(".bamboo-stand").classList.remove("display");

    if (radio3.checked) {
        document
            .querySelector(".black-edition__enter-pledge")
            .classList.add("display");
        document.querySelector(".black-edition").classList.add("display");
    } else {
        document.querySelector(".black-edition").classList.remove("display");
        document
            .querySelector(".black-edition__enter-pledge")
            .classList.remove("display");
    }
});

//
//
//
function radioSelect() {
    if (radio1.checked) {
        document.querySelector(".no-reward-pledge").classList.add("display");

        document
            .querySelector(".no-reward__enter-pledge")
            .classList.add("display");
    } else {
        document.querySelector(".no-reward-pledge").classList.remove("display");

        document
            .querySelector(".no-reward__enter-pledge")
            .classList.remove("display");
    }

    if (radio2.checked) {
        document
            .querySelector(".bamboo-stand__enter-pledge")
            .classList.add("display");
        document.querySelector(".bamboo-stand").classList.add("display");
    } else {
        document
            .querySelector(".bamboo-stand__enter-pledge")
            .classList.remove("display");
        document.querySelector(".bamboo-stand").classList.remove("display");
    }

    if (radio3.checked) {
        document
            .querySelector(".black-edition__enter-pledge")
            .classList.add("display");
        document.querySelector(".black-edition").classList.add("display");
    } else {
        document.querySelector(".black-edition").classList.remove("display");
        document
            .querySelector(".black-edition__enter-pledge")
            .classList.remove("display");
    }
}

for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("click", radioSelect);
}

// rewardH4.forEach((h4) => {
//     h4.addEventListener("click", () => {

//     });
// });
