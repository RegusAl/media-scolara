"use strict";
let arr = [];

const displayGrades = function (grades) {
  document.querySelector(".grades").textContent = grades;
};

// Butonul pentru a adauga notele
document.querySelector(".add").addEventListener("click", function () {
  let grade = Number(document.querySelector(".input-grade").value);
  //console.log(grade, typeof grade);
  if (!grade) {
    displayGrades("!!!Inserati un numar!!!");
  } else if (grade <= 0 || grade > 10) {
    displayGrades("Inserati o nota reala");
  } else {
    arr.push(grade);
    displayGrades(arr);
  }
});

const finalGrade = function (finalgrade) {
  document.querySelector(".final-grade").textContent = finalgrade;
};

document.querySelector(".calc").addEventListener("click", function () {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  finalGrade(sum / arr.length);
});
