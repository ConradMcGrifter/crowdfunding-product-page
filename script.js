let counter = 89914;

let callToActionBtn = document.getElementById("call-to-action__btn");
let backThisProjectCard = document.getElementById("back-this-project-card");
let lightBox = document.getElementById("lightbox");
let body = document.querySelector("body");
let xButton = document.getElementById("x-btn");
let meter = document.querySelector(".meter");

let radio1 = document.getElementById("radio-1");
let radio2 = document.getElementById("radio-2");
let radio3 = document.getElementById("radio-3");

const radioButtons = document.querySelectorAll(".radio");
const rewardH4 = document.querySelectorAll(".reward__h4");

const number = document.querySelector(".number");
const continue1 = document.getElementById("no-reward--continue");
const header1 = document.querySelector(".header-1");

const header2 = document.querySelector(".header-2");
const input1 = document.getElementById("input-ammount-1");
const continue2 = document.getElementById("bamboo-stand--continue");

const header3 = document.querySelector(".header-3");
const input2 = document.getElementById("input-ammount-2");
const continue3 = document.getElementById("black-edition--continue");

const header4 = document.querySelector(".header-4");

callToActionBtn.addEventListener("click", openCloseProjectCard);
callToActionBtn.addEventListener("click", scrollIntoView);
xButton.addEventListener("click", openCloseProjectCard);

function openCloseProjectCard() {
    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;
    document.querySelector(".no-reward-pledge").style.border =
        "solid rgba(161, 161, 161, 0.295) 2px;";

    backThisProjectCard.classList.toggle("display");
    lightBox.classList.toggle("display");
    body.classList.toggle("display");

    document.querySelector(".no-reward-pledge").classList.remove("display");

    document
        .querySelector(".no-reward__enter-pledge")
        .classList.remove("display");

    document
        .querySelector(".bamboo-stand__enter-pledge")
        .classList.remove("display");
    document.querySelector(".bamboo-stand").classList.remove("display");

    document.querySelector(".black-edition").classList.remove("display");
    document
        .querySelector(".black-edition__enter-pledge")
        .classList.remove("display");
}

function scrollIntoView() {
    scroll(0, 0);
}

radio1.checked = false;
radio2.checked = false;
radio3.checked = false;

if (counter >= 100000) {
    meter.style.width = "100%";
    number.innerHTML = "Goal met!";
} else if (counter >= 90000) {
    meter.style.width = "90%";
} else if (counter >= 80000) {
    meter.style.width = "80%";
} else if (counter >= 70000) {
    meter.style.width = "70%";
} else if (counter >= 60000) {
    meter.style.width = "60%";
} else if (counter >= 50000) {
    meter.style.width = "50%";
} else if (counter >= 40000) {
    meter.style.width = "40%";
} else if (counter >= 30000) {
    meter.style.width = "30%";
} else if (counter >= 20000) {
    meter.style.width = "20%";
} else if (counter >= 10000) {
    meter.style.width = "10%";
}
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

input1.value = "";
input2.value = "";

number.innerHTML = counter.toLocaleString();

continue1.addEventListener("click", () => {
    backThisProjectCard.classList.toggle("display");
    lightBox.classList.toggle("display");
    body.classList.toggle("display");
});

continue2.addEventListener("click", () => {
    if (input1.value < 25) {
        alert("error");
    }

    counter += parseInt(input1.value);
    number.innerHTML = counter.toLocaleString();

    if (counter >= 100000) {
        meter.style.width = "100%";
        number.innerHTML = "Goal met!";
    } else if (counter >= 90000) {
        meter.style.width = "90%";
    } else if (counter >= 80000) {
        meter.style.width = "80%";
    } else if (counter >= 70000) {
        meter.style.width = "70%";
    } else if (counter >= 60000) {
        meter.style.width = "60%";
    } else if (counter >= 50000) {
        meter.style.width = "50%";
    } else if (counter >= 40000) {
        meter.style.width = "40%";
    } else if (counter >= 30000) {
        meter.style.width = "30%";
    } else if (counter >= 20000) {
        meter.style.width = "20%";
    } else if (counter >= 10000) {
        meter.style.width = "10%";
    }

    backThisProjectCard.classList.toggle("display");
    lightBox.classList.toggle("display");
    body.classList.toggle("display");

    input1.value = "";
    input2.value = "";
});

continue3.addEventListener("click", () => {
    if (input2.value < 75) {
        alert("error");
    }

    counter += parseInt(input2.value);
    number.innerHTML = counter.toLocaleString();

    if (counter >= 100000) {
        meter.style.width = "100%";
        number.innerHTML = "Goal met!";
    } else if (counter >= 90000) {
        meter.style.width = "90%";
    } else if (counter >= 80000) {
        meter.style.width = "80%";
    } else if (counter >= 70000) {
        meter.style.width = "70%";
    } else if (counter >= 60000) {
        meter.style.width = "60%";
    } else if (counter >= 50000) {
        meter.style.width = "50%";
    } else if (counter >= 40000) {
        meter.style.width = "40%";
    } else if (counter >= 30000) {
        meter.style.width = "30%";
    } else if (counter >= 20000) {
        meter.style.width = "20%";
    } else if (counter >= 10000) {
        meter.style.width = "10%";
    }

    console.log("not working");
    backThisProjectCard.classList.toggle("display");
    lightBox.classList.toggle("display");
    body.classList.toggle("display");

    input1.value = "";
    input2.value = "";
});
