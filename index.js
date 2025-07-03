const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const remainingCount = document.getElementById("remainingCount");
const resetBtn = document.getElementById("resetBtn");
const counterDiv = document.querySelector(".counter");

textInput.addEventListener("input", () => {
    const length = textInput.value.length;
    charCount.textContent = length;
    const remaining = 50 - length;
    remainingCount.textContent = remaining;

    // Warning style when near limit
    if (remaining <= 5) {
        counterDiv.classList.add("red");
    } else {
        counterDiv.classList.remove("red");
    }

    // Disable input when limit reached
    if (length >= 50) {
        textInput.disabled = true;
    }
});

// Reset functionality
resetBtn.addEventListener("click", () => {
    textInput.value = "";
    charCount.textContent = "0";
    remainingCount.textContent = "50";
    textInput.disabled = false;
    counterDiv.classList.remove("red");
    textInput.focus();
});