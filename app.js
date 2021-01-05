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

        // Include valuation increase or decrease in each phase
        // Deduct business expenses with each decision (STRETCH GOAL)
        // Add business capital as company profits (STRETCH GOAL)
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
    
    let decisionThreeA = document.getElementById("badDecisionThreeA")
    const bdThreeA = () => {
        console.log("button clicked");
        phaseThreeB();
    }
    decisionThreeA.addEventListener("click", bdThreeA)
}

// Phase 3B
const phaseThreeB = {
    console.log("reached 3B")
}

// Phase 4A
const phaseFourA = {
    console.log("reached 4A")
}

// Phase 4B
const phaseFourB = {
    console.log("reached 4B")
}

// Phase 5A
const phaseFiveA = {
    console.log("reached 5A")
}

// Phase 5B
const phaseFiveB = {
    console.log("reached 5B")
}

// Determine End Game and show endResultWin or endResultLose after going through game phases

let endResultWin = {
   // if else statement 
        // Show ending valuation and success level based on game stats
}

let endResultLose = {
    // Show ending valuation and criticism from investors
}

// Allow option to restart game 