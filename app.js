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
            text: "Oof, bad choice bro...", destination: "Phase 2"
        }
        // What else should go here?
    }
}

// Phase 2
const phaseTwo = {
    decisionTwo: {
        goodDecision: {
            text: "You've made a good decision!", destination: "Phase 3"
        },
        badDecision: {
            text: "Oof, bad choice bro...", destination: "Phase 3"
        }
        // What else should go here?
    }
}

// Phase 3
const phaseThree = {
    decisionThree: {
        goodDecision: {
            text: "You've made a good decision!", destination: "Phase 3"
        },
        badDecision: {
            text: "Oof, bad choice bro...", destination: "Phase 4"
        }
        // What else should go here?
    }
}

// Phase 4
const phaseFour = {
    decisionFour: {
        goodDecision: {
            text: "You've made a good decision!", destination: "Phase 3"
        },
        badDecision: {
            text: "Oof, bad choice bro...", destination: "Phase 5"
        }
        // What else should go here?
    }
}

// Phase 5
const phaseFive = {
    decisionFive: {
        goodDecision: {
            text: "You've made a good decision!", destination: "Phase 3"
        },
        badDecision: {
            text: "Oof, bad choice bro...", destination: "Phase 6"
        }
        // What else should go here?
    }
}

console.log(phaseOne.decisionOne.goodDecision.text)