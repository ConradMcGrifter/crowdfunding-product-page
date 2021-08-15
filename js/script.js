import {
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
} from "./functions.js";

let counter = 89914;
let totalBackersCounter = 5007;
let totalBackers = document.querySelector(".total-backers");

let bambooAmount = document.getElementById("bamboo-stand--ammount-left");
let blackEditionAmount = document.getElementById("black-edition--amount-left");
let bambooAmountSmall = document.getElementById(
    "bamboo-stand--amount-left-small"
);
let blackEditionAmountSmall = document.getElementById(
    "black-edition--amounnt-left-small"
);

let bambooCounter = 101;
let blackEditionCounter = 64;

let selectRewardBamboo = document.getElementById("select-Bamboo");
let selectRewardBlackEdition = document.getElementById("select-BlackEdition");

let callToActionBtn = document.getElementById("call-to-action__btn");
let thankYouBtn = document.querySelector(".thank-you__button");

let body = document.querySelector("body");
let xButton = document.getElementById("x-btn");
let meter = document.querySelector(".meter");
let bookmark = document.querySelector(".bookmarked");
let bookmarkIcon = document.querySelector(".bookmark-icon");

const radioButtons = document.querySelectorAll(".radio");
// const hamburger = document.getElementById("hamburger");
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

//
//
//
// setting base conditions
//
radio1.checked = false;
radio2.checked = false;
radio3.checked = false;
//
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
//
// input1.value = null;
// input2.value = null;
//
// this sets the innerHTML of the ammount of money raised on page load
number.innerHTML = "$" + counter.toLocaleString();
totalBackers.innerHTML = totalBackersCounter.toLocaleString();
//-----------------------------------
// this sets the number left of things on page load
bambooAmount.innerHTML = bambooCounter.toLocaleString();
bambooAmountSmall.innerHTML = bambooCounter.toLocaleString();
blackEditionAmount.innerHTML = blackEditionCounter.toLocaleString();
blackEditionAmountSmall.innerHTML = blackEditionCounter.toLocaleString();
//
//
//
//
//                              EVENT LISTENRS - start
//
//
// Event listeners for the "back this project" button and the "X" button that closes the window
callToActionBtn.addEventListener("click", openCloseProjectCard);
callToActionBtn.addEventListener("click", scrollIntoView);
xButton.addEventListener("click", openCloseProjectCard);
// Event Listener on all the radio buttons
for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("click", radioButtonClick);
}
//
// this function adds an event listener to the header element and sets the correct radio button to be selected
headerClick(header1, true, false, false);
headerClick(header2, false, true, false);
headerClick(header3, false, false, true);
//
//
//
//
// continue buttons after a pledge is made
continue1.addEventListener("click", () => {
    totalBackersCounter += 1;
    totalBackers.innerHTML = totalBackersCounter.toLocaleString();

    continueThankYou();
});

continue2.addEventListener("click", () => {
    // check if the input value is less than $25
    if (input1.value < 25) {
        return alert("Please enter the minimum amount");
    }

    // convert the string value to a number and add it to the counter variable
    counter += parseInt(input1.value);

    // turn the counter variable into a string with commas and insert it into the HTML
    number.innerHTML = "$" + counter.toLocaleString();

    // increase the number of total backers
    totalBackersCounter += 1;
    totalBackers.innerHTML = totalBackersCounter.toLocaleString();

    bambooCounter -= 1;
    bambooAmount.innerHTML = bambooCounter.toLocaleString();
    bambooAmountSmall.innerHTML = bambooCounter.toLocaleString();

    // check the number of backers and adjust the progress bar
    progressBar(counter, meter, number);

    // close the popup
    continueThankYou();

    // reset the inner values of the inputs to blank
    input1.value = 25;
    input2.value = 75;
});

continue3.addEventListener("click", () => {
    if (input2.value < 75) {
        return alert("Please enter the minimum amount");
    }

    counter += parseInt(input2.value);
    number.innerHTML = "$" + counter.toLocaleString();

    totalBackersCounter += 1;
    totalBackers.innerHTML = totalBackersCounter.toLocaleString();

    blackEditionCounter -= 1;
    blackEditionAmount.innerHTML = blackEditionCounter.toLocaleString();
    blackEditionAmountSmall.innerHTML = blackEditionCounter.toLocaleString();

    // check the number of backers and adjust the progress bar
    progressBar(counter, meter, number);

    // close the popup
    continueThankYou();

    // reset the inner values of the inputs to blank
    input1.value = 25;
    input2.value = 75;
});
//
// continue button event listener on the thank you pop up after a reward is selected
//
thankYouBtn.addEventListener("click", () => {
    document.querySelector(".thank-you--container").classList.toggle("display");

    lightBox.classList.toggle("display");
});

//
// select reward bamboo button
//
selectRewardBamboo.addEventListener("click", () => {
    radio1.checked = false;
    radio2.checked = true;
    radio3.checked = false;

    input1.value = 25;
    input2.value = 75;

    backThisProjectCard.classList.toggle("display");
    lightBox.classList.toggle("display");

    noReward.classList.remove("display");
    noRewardPledge.classList.remove("display");

    bambooPledge.classList.remove("display");
    bambooBorder.classList.remove("display");

    blackEdition.classList.remove("display");
    blackEditionPledge.classList.remove("display");
    scrollIntoView();

    radioButtonClick();
});

//
// select reward black edition button
//
selectRewardBlackEdition.addEventListener("click", () => {
    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = true;

    input1.value = 25;
    input2.value = 75;

    backThisProjectCard.classList.toggle("display");
    lightBox.classList.toggle("display");

    noReward.classList.remove("display");
    noRewardPledge.classList.remove("display");

    bambooPledge.classList.remove("display");
    bambooBorder.classList.remove("display");

    blackEdition.classList.remove("display");
    blackEditionPledge.classList.remove("display");
    scrollIntoView();

    radioButtonClick();

    scrollIntoView();
});

//
// bookmark button event listener
//
bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("display");
    bookmarkIcon.setAttribute("src", "images/icon-bookmark-green.svg");
    document.querySelector(".bookmark__p").innerHTML = "Bookmarked";
    document.querySelector(".bookmark__p").classList.toggle("display");

    if (!bookmark.classList.contains("display")) {
        console.log("no");
        bookmarkIcon.setAttribute("src", "images/icon-bookmark.svg");
        document.querySelector(".bookmark__p").innerHTML = "Bookmark";
        document.querySelector(".bookmark__p").classList.remove("display");
    }
});
//                              EVENT LISTENERS - end
//---------------------------------------------------------
