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
            text: "You've made a good decision!", destination: "Phase 2"
        },
        badDecision: {
            text: "Oof, bad choice bro...",destination: "Phase 2"
        }
        // What else should go here?
    }
}
const phaseTwo = {
    decisionTwo: {
        goodDecision: {
            text: "You've made a good decision!", destination: "Phase 3"
        },
        badDecision: "Oof, bad choice bro...",
        // What else should go here?
    }
}
const phaseThree = {
    decisionThree: {
        goodDecision: {
            text: "You've made a good decision!", destination: "Phase 3"
        },
        badDecision: "Oof, bad choice bro...",
        // What else should go here?
    }
}
const phaseFour = {
    decisionFour: {
        goodDecision: {
            text: "You've made a good decision!", destination: "Phase 3"
        },
        badDecision: "Oof, bad choice bro...",
        // What else should go here?
    }
}
const phaseFive = {
    decisionFive: {
        goodDecision: {
            text: "You've made a good decision!", destination: "Phase 3"
        },
        badDecision: "Oof, bad choice bro...",
        // What else should go here?
    }
}

console.log(phaseOne.decisionOne.goodDecision.text)