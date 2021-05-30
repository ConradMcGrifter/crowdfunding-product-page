let callToActionBtn = document.getElementById("call-to-action__btn")
let backThisProjectCard = document.getElementById("back-this-project-card");
let lightBox = document.getElementById("lightbox");
let body = document.querySelector("body");
let xButton = document.getElementById("x-btn");

let radio1 = document.getElementById("radio-1");
let radio2 = document.getElementById("radio-2");
let radio3 = document.getElementById("radio-3");

callToActionBtn.addEventListener("click", openCloseProjectCard)
callToActionBtn.addEventListener("click", scrollIntoView)

function openCloseProjectCard() {
    radio1.checked = false;
    document.querySelector(".no-reward-pledge").style.border = "solid rgba(161, 161, 161, 0.295) 2px;";
    
    backThisProjectCard.classList.toggle("display");
    lightBox.classList.toggle("display");
    body.classList.toggle("display")
}


function scrollIntoView() {
    
    scroll(0,0)
}



radio1.checked = false;
radio1.addEventListener("click", ()=> {
    
    if (radio1.checked == true) {
        document.querySelector(".no-reward-pledge").style.border = "solid hsl(176, 72%, 28%) 2px";
    } else if (radio2.checked == true) {
        document.querySelector(".no-reward-pledge").style.border = "solid hsl(176, 72%, 28%) 2px";
    }
})

