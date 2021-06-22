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
let backThisProjectCard = document.getElementById("back-this-project-card");
let lightBox = document.getElementById("lightbox");
let body = document.querySelector("body");
let xButton = document.getElementById("x-btn");
let meter = document.querySelector(".meter");
let bookmark = document.querySelector(".bookmarked");
let bookmarkIcon = document.querySelector(".bookmark-icon");

let radio1 = document.getElementById("radio-1");
let radio2 = document.getElementById("radio-2");
let radio3 = document.getElementById("radio-3");

const radioButtons = document.querySelectorAll(".radio");
const hamburger = document.getElementById("hamburger");
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

//
//
// Event listeners for the "back this project" button and the "X" button that closes the window
callToActionBtn.addEventListener("click", openCloseProjectCard);
callToActionBtn.addEventListener("click", scrollIntoView);
xButton.addEventListener("click", openCloseProjectCard);

// setting base conditions
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
//
//
//
input1.value = null;
input2.value = null;
//
//

// this sets the innerHTML of the ammount of money raised on page load
number.innerHTML = "$" + counter.toLocaleString();
totalBackers.innerHTML = totalBackersCounter.toLocaleString();

// this sets the number left of things on page load
bambooAmount.innerHTML = bambooCounter.toLocaleString();
bambooAmountSmall.innerHTML = bambooCounter.toLocaleString();
blackEditionAmount.innerHTML = blackEditionCounter.toLocaleString();
blackEditionAmountSmall.innerHTML = blackEditionCounter.toLocaleString();
//
//
//
// Functions
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

function scrollIntoView() {
    scroll(0, 0);
}

//
//
//
let noReward = document.querySelector(".no-reward-pledge");
let noRewardPledge = document.querySelector(".no-reward__enter-pledge");
let bambooPledge = document.querySelector(".bamboo-stand__enter-pledge");
let bambooBorder = document.querySelector(".bamboo-stand");
let blackEdition = document.querySelector(".black-edition");
let blackEditionPledge = document.querySelector(".black-edition__enter-pledge");

function headerClick(header, boolean1, boolean2, boolean3) {
    header.addEventListener("click", () => {
        radio1.checked = boolean1;
        radio2.checked = boolean2;
        radio3.checked = boolean3;

        radioButtonClick();

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
    });
}
// this is the same logic as above but for the radio buttons on click instead of the header
for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("click", radioButtonClick);
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

headerClick(header1, true, false, false);
headerClick(header2, false, true, false);
headerClick(header3, false, false, true);
//
//
//

//
// continue buttons logic after a pledge is made
//
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

    // close the popup
    continueThankYou();

    // reset the inner values of the inputs to blank
    input1.value = null;
    input2.value = null;
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

    continueThankYou();

    input1.value = null;
    input2.value = null;
});
//
// continue button event listener on the thank you pop up after a reward is selected
//
thankYouBtn.addEventListener("click", () => {
    document.querySelector(".thank-you--container").classList.toggle("display");

    // body.classList.toggle("display");
    lightBox.classList.toggle("display");
});

//
// select reward bamboo button
//
selectRewardBamboo.addEventListener("click", () => {
    lightBox.classList.toggle("display");
    document.querySelector(".thank-you--container").classList.toggle("display");
    // body.classList.toggle("display");

    bambooCounter -= 1;
    bambooAmount.innerHTML = bambooCounter;
    bambooAmountSmall.innerHTML = bambooCounter;

    totalBackersCounter += 1;
    totalBackers.innerHTML = totalBackersCounter.toLocaleString();

    counter += 25;
    if (counter >= 100000) {
        number.innerHTML = "Goal met!";
    } else {
        number.innerHTML = "$" + counter.toLocaleString();
    }

    scrollIntoView();
});

//
// select reward black edition button
//
selectRewardBlackEdition.addEventListener("click", () => {
    lightBox.classList.toggle("display");
    document.querySelector(".thank-you--container").classList.toggle("display");
    // body.classList.toggle("display");

    blackEditionCounter -= 1;
    blackEditionAmount.innerHTML = blackEditionCounter;
    blackEditionAmountSmall.innerHTML = blackEditionCounter;

    totalBackersCounter += 1;
    totalBackers.innerHTML = totalBackersCounter.toLocaleString();

    counter += 75;
    if (counter >= 100000) {
        number.innerHTML = "Goal met!";
    } else {
        number.innerHTML = "$" + counter.toLocaleString();
    }

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

//
// mobile navbar
//

hamburger.addEventListener("click", () => {
    document.querySelector(".ul--wrap").classList.toggle("display");
    document.querySelector(".darken").classList.toggle("display");
    document.getElementById("navUl").classList.toggle("display");

    body.classList.toggle("display");

    document
        .querySelector(".hamburger-icon")
        .setAttribute("src", "images/icon-close-menu.svg");

    if (!document.querySelector(".ul--wrap").classList.contains("display")) {
        document
            .querySelector(".hamburger-icon")
            .setAttribute("src", "images/icon-hamburger.svg");
    }
});
