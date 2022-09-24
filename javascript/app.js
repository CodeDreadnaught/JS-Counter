const modeChanger = document.querySelector(".change-mode-parent");
const modeIcon = document.querySelector(".change-mode");
const logo = document.querySelector(".logo");
const counterWrapper = document.querySelector(".counter-wrapper");
const counter = document.querySelector(".counter-display");
const divider = document.querySelector(".divider");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const footer = document.querySelector("footer");
const range = document.querySelector(".range");
const repeatDisplay = document.querySelector(".repeat-display");
counter.textContent = 0;
repeatDisplay.textContent = 0;


function add(previousValue, maxValue, repeatValue) {
    previousValue = Number(counter.textContent);
    previousRepeatValue = Number(repeatDisplay.textContent);
    // repeatValue = Number(repeatDisplay.textContent);
    maxValue = Number(range.value);
    if (maxValue === Number()) {
        maxValue = 1000000;
    }
    currentValue = previousValue + 1;
    currentRepeatValue = previousRepeatValue + 1;
    if (currentValue > maxValue || currentValue < 0) {
        counter.textContent = 0;
    } else {
        counter.textContent = currentValue;
    }
    if (currentValue === maxValue) {
        counter.classList.add("counter-limit");
    } else {
        counter.classList.remove("counter-limit");
    }
    if (currentValue > maxValue) {
        repeatDisplay.textContent = currentRepeatValue;
    }
    if (currentRepeatValue > 1) {
        repeatDisplay.style.display = "flex";
    } else {
        repeatDisplay.style.display = "none";
    }
}
function minus(previousValue, maxValue) {
    previousValue = Number(counter.textContent);
    maxValue = Number(range.value);
    if (maxValue === Number()) {
        maxValue = 1000000
    }
    currentValue = previousValue - 1;
    if (currentValue > maxValue || currentValue < 0) {
        counter.textContent = 0;
    } else {
        counter.textContent = currentValue;
    }
}
function restart(previousValue) {
    counter.textContent = 0;
    repeatDisplay.textContent = 0;
    repeatDisplay.style.display = "none";
    range.value = "";
    counter.classList.remove("counter-limit");
}
function bodyTransistion() {
    if (document.body.classList.contains("dark") !== true) {
        document.body.style.transition = "var(--js-transition)";
    }
}
function darkMode() {
    document.body.classList.toggle("dark");
    logo.classList.toggle("dark");
    modeChanger.classList.toggle("dark");
    counterWrapper.classList.toggle("dark");
    counter.classList.toggle("dark");
    divider.classList.toggle("dark");
    modeIcon.classList.toggle("dark");
    footer.classList.toggle("dark");
    increase.classList.toggle("dark");
    decrease.classList.toggle("dark");
    range.classList.toggle("dark");
    repeatDisplay.classList.toggle("dark");
    bodyTransistion();
}

increase.addEventListener("click", add);
decrease.addEventListener("click", minus);
reset.addEventListener("click", restart);
modeChanger.addEventListener("click", darkMode);
