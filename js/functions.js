let radio1 = document.getElementById("radio-1");
let radio2 = document.getElementById("radio-2");
let radio3 = document.getElementById("radio-3");

let backThisProjectCard = document.getElementById("back-this-project-card");
let lightBox = document.getElementById("lightbox");

let noReward = document.querySelector(".no-reward-pledge");
let noRewardPledge = document.querySelector(".no-reward__enter-pledge");
let bambooPledge = document.querySelector(".bamboo-stand__enter-pledge");
let bambooBorder = document.querySelector(".bamboo-stand");
let blackEdition = document.querySelector(".black-edition");
let blackEditionPledge = document.querySelector(".black-edition__enter-pledge");

function openCloseProjectCard() {
    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;

    // body.style.overflow = "visible";

    backThisProjectCard.classList.toggle("display");
    lightBox.classList.toggle("display");
    // body.classList.toggle("display");

    noReward.classList.remove("display");
    noRewardPledge.classList.remove("display");

    bambooPledge.classList.remove("display");
    bambooBorder.classList.remove("display");

    blackEdition.classList.remove("display");
    blackEditionPledge.classList.remove("display");
}

function continueThankYou() {
    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;

    backThisProjectCard.classList.toggle("display");
    // lightBox.classList.toggle("display");
    // body.classList.toggle("display");

    noReward.classList.remove("display");
    noRewardPledge.classList.remove("display");

    bambooPledge.classList.remove("display");
    bambooBorder.classList.remove("display");

    blackEdition.classList.remove("display");
    blackEditionPledge.classList.remove("display");

    document.querySelector(".thank-you--container").classList.toggle("display");
    // body.classList.toggle("display");

    scrollIntoView();
}

function headerClick(header, boolean1, boolean2, boolean3) {
    header.addEventListener("click", () => {
        radio1.checked = boolean1;
        radio2.checked = boolean2;
        radio3.checked = boolean3;

        radioButtonClick();
    });
}

function radioButtonClick() {
    if (radio1.checked) {
        noReward.classList.add("display");
        noRewardPledge.classList.add("display");
    } else {
        noReward.classList.remove("display");
        noRewardPledge.classList.remove("display");
    }

    if (radio2.checked) {
        bambooPledge.classList.add("display");
        bambooBorder.classList.add("display");
    } else {
        bambooPledge.classList.remove("display");
        bambooBorder.classList.remove("display");
    }

    if (radio3.checked) {
        blackEditionPledge.classList.add("display");
        blackEdition.classList.add("display");
    } else {
        blackEdition.classList.remove("display");
        blackEditionPledge.classList.remove("display");
    }
}

function scrollIntoView() {
    scroll(0, 0);
}

export {
    openCloseProjectCard,
    radio1,
    radio2,
    radio3,
    backThisProjectCard,
    lightBox,
    noReward,
    noRewardPledge,
    bambooPledge,
    bambooBorder,
    blackEdition,
    blackEditionPledge,
    continueThankYou,
    scrollIntoView,
    headerClick,
    radioButtonClick,
};
