console.log("script.js connected!");
let userAnswers = {};
let questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach(function(questionBlock) {
    let buttons = questionBlock.querySelectorAll(".answer-btn");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            buttons.forEach(function(btn) {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");

            let buttonID = button.dataset.buttonid;
            let answer = button.dataset.answer;
            userAnswers[buttonID] = answer;
            console.log(userAnswers);
        });
    });
});

function displayResult() {
    let totalQuestions = questionBlocks.length;
    let dogCount = 0;
    let message = "";

    if (Object.keys(userAnswers).length < totalQuestions) {
        message = "Please answer all 5 questions before viewing your result.";
    } else {
        for (let i = 1; i <= totalQuestions; i++) {
            if (userAnswers[i] === "dog") {
                dogCount += 1;
            }
        }

        if (dogCount >= 3) {
            message = "You are a dog! You are friendly, playful, and full of energy.";
        } else {
            message = "You are a cat! You are calm, curious, and enjoy your own space.";
        }
    }

    let resultContainer = document.getElementById("result-container");
    let resultText = document.getElementById("result-text");

    resultText.textContent = message;
    resultContainer.style.display = "block";
}

let resultButton = document.getElementById("show-result");
resultButton.addEventListener("click", function() {
    displayResult();
});