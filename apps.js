"use strict";

const metricBtn = document.getElementById("metricRadio");
const imperialBtn = document.getElementById("imperialRadio");
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

  // Adjust margin-bottom of hero based on screen size when imperialBtn is clicked
  const screenWidth = window.innerWidth;
  if (screenWidth >= 975) {
    // min-width: 81.25rem (81.25rem * 16px = 1300px)
    hero.style.marginBottom = "4.0625rem"; // 4.0625rem
  } else if (screenWidth >= 600) {
    // min-width: 37.5rem (37.5rem * 16px = 600px)
    hero.style.marginBottom = "25rem"; // 25rem
  } else {
    hero.style.marginBottom = "36.25rem"; // Default: 36.25rem
  }
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

  const bmi = weightKg / Math.pow(heightCm, 2);

  welcomeContainer.style.display = "none";
  resultContainer.style.display = "flex";

  score.textContent = `${bmi.toFixed(1)}`;

  if (bmi < 18.5) {
    classification.textContent = "Underweight";
    range.textContent = "less than 18.5kgs";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    classification.textContent = "a Healthy weight";
    range.textContent = "between 18.5kgs - 24.9kgs";
  } else if (bmi >= 25 && bmi <= 29.9) {
    classification.textContent = "Overweight";
    range.textContent = "between 25kgs - 29.9kgs";
  } else if (bmi >= 30) {
    classification.textContent = "Obese";
    range.textContent = "30kgs or greater";
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
    range.textContent = "less than 18.5kgs";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    classification.textContent = "a Healthy weight";
    range.textContent = "between 18.5kgs - 24.9kgs";
  } else if (bmi >= 25 && bmi <= 29.9) {
    classification.textContent = "Overweight";
    range.textContent = "between 25kgs - 29.9kgs";
  } else if (bmi >= 30) {
    classification.textContent = "Obese";
    range.textContent = "30kgs or greater";
  }
}

heightFtInput.addEventListener("input", calcBmiImperial);
heightInInput.addEventListener("input", calcBmiImperial);
weightStInput.addEventListener("input", calcBmiImperial);
weightLbsInput.addEventListener("input", calcBmiImperial);
