const sectionOne = document.getElementById("section1");
const sectionTwo = document.getElementById("section2");

const containerNumbers = document.getElementById("numbers");
var allowSubmit = false;

const btnSubmit = document.getElementById("btn-submit");

const numberSelected = document.getElementById("number");

function setActive(element) {
    var otherButtons = containerNumbers.querySelectorAll("div");
    otherButtons.forEach(element => {
        if (element.classList.contains("active")) {
            element.classList.remove("active");
        }
    });
    element.classList.add("active");
    allowSubmit = true;
}

btnSubmit.addEventListener("click", function() {
    if (allowSubmit) {
        var rateDiv = containerNumbers.querySelector(".active");
        var rateValue = rateDiv.textContent;
        numberSelected.textContent = rateValue;
        sectionOne.classList.add("d-none");
        sectionTwo.classList.remove("d-none");
    }
});