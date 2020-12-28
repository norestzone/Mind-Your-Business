document.addEventListener("DOMContentLoaded", (e) => {
    closeButton.addEventListener("click", closePopUp)

})

function closePopUp(){
    introPopup.style.display="none";
}

// Begin both paths on Phase One when Let's Build is clicked

// Good decision & bad decision selections will lead down different paths

// Each phase will add or decrease the company valuation

// Company valuation determines success level

// Track player actions to prevent going through same scenario twice

// Have a starting investment capital of $______


// Phase 1
const phaseOne = {
    decisionOne: {
        goodDecision: {
            text: "You've made a good decision!", destination: "Phase 2A"
        },
        badDecision: {
            text: "Oof, bad choice bro...", destination: "Phase 2B"
        }
        // Include valuation increase or decrease in each phase
        // Deduct business expenses with each decision
    }
}

// Phase 2A
const phaseTwoA = {
    decisionTwoA: {
        goodDecision: {
            text: "You've made a good decision!", destination: "Phase 3A"
        },
        badDecision: {
            text: "Oof, bad choice bro...", destination: "Phase 2B"
        }
        // Include valuation increase or decrease in each phase
        // Deduct business expenses with each decision
        // Add business capital as company profits

    }
}

// Phase 2B
const phaseTwoB = {
    decisionTwoB: {
        goodDecision: {
            text: "You've made a good decision!", destination: "Phase 2A"
        },
        badDecision: {
            text: "Oof, bad choice bro...", destination: "Phase 3B"
        }
        // Include valuation increase or decrease in each phase
        // Deduct business expenses with each decision
        // Add business capital as company profits
    }
}

// Phase 3A
const phaseThreeA = {
    decisionThreeA: {
        goodDecision: {
            text: "You've made a good decision!", destination: "Phase 4A"
        },
        badDecision: {
            text: "Oof, bad choice bro...", destination: "Phase 3B"
        }
        // Include valuation increase or decrease in each phase
        // Deduct business expenses with each decision
        // Add business capital as company profits
    }
}

// Phase 3B
const phaseThreeB = {
    decisionThreeB: {
        goodDecision: {
            text: "You've made a good decision!", destination: "Phase 3A"
        },
        badDecision: {
            text: "Oof, bad choice bro...", destination: "End Result Lose"
        }
        // Include valuation increase or decrease in each phase
        // Deduct business expenses with each decision
        // Add business capital as company profits
    }
}

// Phase 4A
const phaseFourA = {
    decisionFourA: {
        goodDecision: {
            text: "You've made a good decision!", destination: "Phase 5A"
        },
        badDecision: {
            text: "Oof, bad choice bro...", destination: "Phase 3B"
        }
        // Include valuation increase or decrease in each phase
        // Deduct business expenses with each decision
        // Add business capital as company profits
    }
}

// Phase 4B
const phaseFourB = {
    decisionFourB: {
        goodDecision: {
            text: "You've made a good decision!", destination: "Phase 4A"
        },
        badDecision: {
            text: "Oof, bad choice bro...", destination: "Phase 5B"
        }
        // Include valuation increase or decrease in each phase
        // Deduct business expenses with each decision
        // Add business capital as company profits
    }
}

// Phase 5A
const phaseFiveA = {
    decisionFiveA: {
        goodDecision: {
            text: "You've made a good decision!", destination: "endResultWin"
        },
        badDecision: {
            text: "Oof, bad choice bro...", destination: "endResultWin"
        }
        // Include valuation increase or decrease in each phase
        // Deduct business expenses with each decision
        // Add business capital as company profits
    }
}

// Phase 5B
const phaseFiveB = {
    decisionFiveB: {
        goodDecision: {
            text: "You've made a good decision!", destination: "endResultWin"
        },
        badDecision: {
            text: "Oof, bad choice bro...", destination: "endResultLose"
        }
        // Include valuation increase or decrease in each phase
        // Deduct business expenses with each decision
        // Add business capital as company profits
    }
}

console.log(phaseOne.decisionOne.goodDecision.text)

// Determine End Game and show endResultWin or endResultLose after going through game phases

// Show ending evaluation and success level based on game stats

// Allow option to restart game