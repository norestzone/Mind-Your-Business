document.addEventListener("DOMContentLoaded", (e) => {
    closeButton.addEventListener("click", closePopUp)

})

function closePopUp(){
    introPopup.style.display="none";
}

// Phase 1
const phaseOne = {
    decisionOne: {
        goodDecision: {
            text: "You've made a good decision!", destination: "Phase 3"
        },
        badDecision: "Oof, bad choice bro...",
        // What else should go here?
    }
}

console.log(phaseOne.decisionOne.goodDecision.text)