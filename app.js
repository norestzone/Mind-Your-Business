document.addEventListener("DOMContentLoaded", (e) => {
    closeButton.addEventListener("click", closePopUp)
    startGame.addEventListener("click", showPopUp)
})

function closePopUp(){
    introPopup.style.display="none";
}

// Begin both paths on Phase One when Let's Build is clicked

function showPopUp(){
    let phaseOne = document.getElementById("phaseOne");
    console.log(phaseOne);
    phaseOne.style.visibility="visible";
    console.log("I clicked to Phase 1!");
    phaseOneDecision();
}

// Good decision & bad decision selections will lead down different paths

// Each phase will add or decrease the company valuation (STRETCH GOAL)

// ** Track player actions to prevent going through same scenario twice **

// Have a starting investment capital of $______ (STRETCH GOAL)

// Phase 1
const phaseOneDecision = () => {
    let decisionOne = document.getElementById("goodDecisionOne");
    function gdOne (){
        console.log("button clicked");
        phaseTwoA();
        // phaseTwoA.style.visibility="visible";
    }
    decisionOne.addEventListener("click", gdOne)
    
    let decisionOneB = document.getElementById("badDecisionOne");
    function bdOne (){
        console.log("button clicked");
        phaseTwoB();
        // phaseTwoA.style.visibility="visible";
    }
    decisionOneB.addEventListener("click", bdOne)


    // decisionOne: {
    //     goodDecisionOne: {
    //         text: console.log("We made a decision!"),
    //         text: "You've made a good decision!", destination: "phaseTwoA"
    //     },
    //     badDecisionOne: {
    //         text: "Oof, bad choice bro...", destination: "phaseTwoB"
    //     }
        
        // Hide phaseOne and make phaseTwo visible on button click -- Refer to example function below
        // If else statement? Use boolean for true or false based on selection?
        // Include valuation increase or decrease in each phase
        // Deduct business expenses with each decision
    }

// Phase 2A
const phaseTwoA = () => {
    // console.log("reached 2A")
    let phaseTwoA = document.getElementById("phaseTwoA")
    phaseTwoA.style.visibility="visible"
    let decisionTwoA = document.getElementById("goodDecisionTwoA")
    const gdTwo = () => {
        console.log("button clicked");
        phaseThreeA();
        // phaseThreeA.style.visibility="visible";
    }
    decisionTwoA.addEventListener("click", gdTwo)
    
    // let phaseTwoB = document.getElementById("phaseTwoB")
    // phaseTwoB.style.visibility="visible"
    let decisionTwoB = document.getElementById("badDecisionTwoA")
    const bdTwo = () => {
        console.log("button clicked");
        phaseTwoB();
        // phaseThreeA.style.visibility="visible";
    }
    decisionTwoB.addEventListener("click", bdTwo)

    // decisionTwoA: {
        //     goodDecision: {
            //         text: "You've made a good decision!", destination: "phaseThreeA"
            //     },
            //     badDecision: {
                //         text: "Oof, bad choice bro...", destination: "phaseTwoB"
                //     }
                // Include valuation increase or decrease in each phase
                // Deduct business expenses with each decision (STRETCH GOAL)
                // Add business capital as company profits (STRETCH GOAL)
                
}
            
// Phase 2B
const phaseTwoB = () => {
    console.log("reached 2B")
    let phaseTwoB = document.getElementById("phaseTwoB")
    phaseTwoB.style.visibility="visible"
    let decisionTwoC = document.getElementById("goodDecisionTwoB")
    const gdTwoB = () => {
        console.log("button clicked");
        phaseTwoA();
    }
    decisionTwoC.addEventListener("click", gdTwoB)
    
    let decisionTwoD = document.getElementById("badDecisionTwoB")
    const bdTwoB = () => {
        console.log("button clicked");
        phaseThreeB();
    }
    decisionTwoD.addEventListener("click", bdTwoB)
}

// Phase 3A
const phaseThreeA = () => {
    console.log("reached 3A")
    let phaseThreeA = document.getElementById("phaseThreeA")
    phaseThreeA.style.visibility="visible"
    let decisionThreeA = document.getElementById("goodDecisionThreeA")
    const gdThreeA = () => {
        console.log("button clicked");
        phaseFourA();
    }
    decisionThreeA.addEventListener("click", gdThreeA)
    
    let decisionThreeB = document.getElementById("badDecisionThreeA")
    const bdThreeA = () => {
        console.log("button clicked");
        phaseThreeB();
    }
    decisionThreeB.addEventListener("click", bdThreeA)
}

// Phase 3B
const phaseThreeB = () => {
    console.log("reached 3B")
    let phaseThreeB = document.getElementById("phaseThreeB")
    phaseThreeB.style.visibility="visible"
    let decisionThreeC = document.getElementById("goodDecisionThreeB")
    const gdThreeC = () => {
        console.log("button clicked");
        phaseFourB();
    }
    decisionThreeC.addEventListener("click", gdThreeC)
    
    let decisionThreeD = document.getElementById("badDecisionThreeB")
    const bdThreeD = () => {
        console.log("button clicked");
        endGameLose();
    }
    decisionThreeD.addEventListener("click", bdThreeD)
}

// Phase 4A
const phaseFourA = () => {
    console.log("reached 4A")
    let phaseFourA = document.getElementById("phaseFourA")
    phaseFourA.style.visibility="visible"
    let decisionFourA = document.getElementById("goodDecisionFourA")
    const gdFourA = () => {
        console.log("button clicked");
        phaseFiveA();
    }
    decisionFourA.addEventListener("click", gdFourA)
    
    let decisionFourB = document.getElementById("badDecisionFourA")
    const bdFourA = () => {
        console.log("button clicked");
        phaseThreeB();
    }
    decisionFourB.addEventListener("click", bdFourA)
}

// Phase 4B
const phaseFourB = () => {
    console.log("reached 4B")
    let phaseFourB = document.getElementById("phaseFourB")
    phaseFourB.style.visibility="visible"
    let decisionFourC = document.getElementById("goodDecisionFourB")
    const gdFourB = () => {
        console.log("button clicked");
        phaseFourA();
    }
    decisionFourC.addEventListener("click", gdFourB)
    
    let decisionFourD = document.getElementById("badDecisionFourB")
    const bdFourB = () => {
        console.log("button clicked");
        phaseFiveB();
    }
    decisionFourD.addEventListener("click", bdFourB)
}

// Phase 5A
const phaseFiveA = () => {
    console.log("reached 5A")
    let phaseFiveA = document.getElementById("phaseFiveA")
    phaseFiveA.style.visibility="visible"
    let decisionFiveA = document.getElementById("goodDecisionFiveA")
    const gdFiveA = () => {
        console.log("button clicked");
        endGameWin();
    }
    decisionFiveA.addEventListener("click", gdFiveA)
    
    let decisionFiveB = document.getElementById("badDecisionFiveA")
    const bdFiveA = () => {
        console.log("button clicked");
        endGameWin();
    }
    decisionFiveB.addEventListener("click", bdFiveA)
}

// Phase 5B
const phaseFiveB = () => {
    console.log("reached 5B")
    let phaseFiveB = document.getElementById("phaseFiveB")
    phaseFiveB.style.visibility="visible"
    let decisionFiveC = document.getElementById("goodDecisionFiveB")
    const gdFiveB = () => {
        console.log("button clicked");
        endGameWin();
    }
    decisionFiveC.addEventListener("click", gdFiveB)
    
    let decisionFiveD = document.getElementById("badDecisionFiveB")
    const bdFiveB = () => {
        console.log("button clicked");
        endGameWin();
    }
    decisionFiveD.addEventListener("click", bdFiveB)
}

// Determine End Game and show endResultWin or endResultLose after going through game phases

const endGameWin = () => {
    console.log("reached Win Game")
    let endGameWin = document.getElementById("endGameWin")
    endGameWin.style.visibility="visible"
   // if else statement (STRETCH GOAL)
        // Show ending valuation and success level based on game stats
}

const endGameLose = () => {
    console.log("reached Lose Game")
    let endGameLose = document.getElementById("endGameLose")
    endGameLose.style.visibility="visible"
}

// Allow option to restart game 