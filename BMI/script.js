const form = document.querySelector("form");
// this use case will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if (height < 0 || height === "" || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight < 0 || weight === "" || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (results.innerHTML = (
      weight /
      ((height * height) / 10000)
    ).toFixed(2));
    if (bmi < 18.6) {
      results.innerHTML = ` under weight ${bmi}`;
    } else if (bmi > 24.9) {
      results.innerHTML = ` Overweight ${bmi}`;
    } else {
      results.innerHTML = `Normal weight ${bmi}`;
    }
  }
});

// form gets submitted in two types .. 1. get 2. post
