const smallerValue = 1;
const greaterValue = 150;
const numberSecret = parseInt(Math.random() * greaterValue + 1);

const valueElementSmaller = document.getElementById("smaller-value");
const valueElementGreater = document.getElementById("greater-value");
console.log(numberSecret);

valueElementSmaller.textContent = smallerValue;
valueElementGreater.textContent = greaterValue;
