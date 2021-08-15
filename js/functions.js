let radio1 = document.getElementById("radio-1");
let radio2 = document.getElementById("radio-2");
let radio3 = document.getElementById("radio-3");

const input1 = document.getElementById("input-ammount-1");
const input2 = document.getElementById("input-ammount-2");

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

    input1.value = 25;
    input2.value = 75;

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

function progressBar(counterVar, meterEle, numberVar) {
    if (counterVar >= 100000) {
        meterEle.style.width = "100%";
        numberVar.innerHTML = "Goal met!";
    } else if (counterVar >= 95000) {
        meterEle.style.width = "95%";
    } else if (counterVar >= 90000) {
        meterEle.style.width = "90%";
    } else if (counterVar >= 85000) {
        meterEle.style.width = "85";
    } else if (counterVar >= 80000) {
        meterEle.style.width = "80%";
    } else if (counterVar >= 70000) {
        meterEle.style.width = "70%";
    } else if (counterVar >= 60000) {
        meterEle.style.width = "60%";
    } else if (counterVar >= 50000) {
        meterEle.style.width = "50%";
    } else if (counterVar >= 40000) {
        meterEle.style.width = "40%";
    } else if (counterVar >= 30000) {
        meterEle.style.width = "30%";
    } else if (counterVar >= 20000) {
        meterEle.style.width = "20%";
    } else if (counterVar >= 10000) {
        meterEle.style.width = "10%";
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
    progressBar,
    input1,
    input2,
};
