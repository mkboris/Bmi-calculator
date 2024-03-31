"use strict";

const metricBtn = document.getElementById("metric");
const imperialBtn = document.getElementById("imperial");
const metricInput = document.querySelector(".metric");
const imperialInput = document.querySelector(".imperial");
const hero = document.querySelector(".hero");

// Switcing between metric or imperial when the respective radio buttons are clicked
metricBtn.addEventListener("click", function () {
  imperialBtn.checked = false;
  metricInput.style.display = "inline-flex";
  imperialInput.style.display = "none";
});

imperialBtn.addEventListener("click", function () {
  metricBtn.checked = false;
  metricInput.style.display = "none";
  imperialInput.style.display = "block";
});

const bmiResult = document.querySelector(".output");
const resultContainer = document.querySelector(".result-container");
const welcomeContainer = document.querySelector(".welcome-container");

let score = document.querySelector(".score");
let classification = document.querySelector(".classification");
let range = document.querySelector(".range");

// Metric BMI Calculation
const metricHeight = document.getElementById("cm");
const metricWeight = document.getElementById("kg");

function calcBmiMetric() {
  const heightCm = parseFloat(metricHeight.value) || 0;
  const weightKg = parseFloat(metricWeight.value) || 0;

  const bmi = weightKg / Math.pow(heightCm / 100, 2);

  welcomeContainer.style.display = "none";
  resultContainer.style.display = "flex";

  score.textContent = `${bmi.toFixed(1)}`;

  if (bmi < 18.5) {
    classification.textContent = "Underweight";
    range.textContent = "less than 53.5kgs";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    classification.textContent = "a Healthy weight";
    range.textContent = "between 56kgs - 72kgs";
  } else if (bmi >= 25 && bmi <= 29.9) {
    classification.textContent = "Overweight";
    range.textContent = "between 73kgs - 87kgs";
  } else if (bmi >= 30) {
    classification.textContent = "Obese";
    range.textContent = "88kgs or greater";
  }
}

metricHeight.addEventListener("input", calcBmiMetric);
metricWeight.addEventListener("input", calcBmiMetric);

// Imperial BMI Calculation
const heightFtInput = document.getElementById("feet");
const heightInInput = document.getElementById("inches");
const weightStInput = document.getElementById("stone");
const weightLbsInput = document.getElementById("lbs");

function calcBmiImperial() {
  const heightFt = parseInt(heightFtInput.value) || 0;
  const heightIn = parseInt(heightInInput.value) || 0;
  const weightSt = parseInt(weightStInput.value) || 0;
  const weightLbs = parseInt(weightLbsInput.value) || 0;

  const heightInTotal = heightFt * 12 + heightIn;
  const weightLbsTotal = weightSt * 14 + weightLbs;

  const bmi = (weightLbsTotal / (heightInTotal * heightInTotal)) * 703;

  welcomeContainer.style.display = "none";
  resultContainer.style.display = "flex";

  score.textContent = `${bmi.toFixed(1)}`;

  if (bmi < 18.5) {
    classification.textContent = "Underweight";
    range.textContent = "less than 8st 10lbs";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    classification.textContent = "a Healthy weight";
    range.textContent = "between 9st 4lbs - 12st 0lbs";
  } else if (bmi >= 25 && bmi <= 29.9) {
    classification.textContent = "Overweight";
    range.textContent = "between 11st 6lbs - 14st 2lbs";
  } else if (bmi >= 30) {
    classification.textContent = "Obese";
    range.textContent = "14st 2lbs or greater";
  }
}

heightFtInput.addEventListener("input", calcBmiImperial);
heightInInput.addEventListener("input", calcBmiImperial);
weightStInput.addEventListener("input", calcBmiImperial);
weightLbsInput.addEventListener("input", calcBmiImperial);
