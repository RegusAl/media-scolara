"use strict";

let arr = [];

const displayGrades = function (grades) {
  document.querySelector(".grades").textContent = grades;
};

const displayPassed = function (finalgrade) {
  if (finalgrade > 1 && finalgrade < 5) {
    document.querySelector(".passed").textContent = "Nu ai trecut clasa!!!";
    document.querySelector(".passed").style.color = "red";
  } else if (finalgrade >= 5 && finalgrade <= 10) {
    document.querySelector(".passed").textContent = "Ai trecut clasa!!!";
    document.querySelector(".passed").style.color = "green";
  }
};

// Butonul pentru a adauga notele
const inputGrades = function () {
  let grade = Number(document.querySelector(".input-grade").value);
  //console.log(grade, typeof grade);
  if (!grade) {
    displayGrades("!!!Inserati un numar!!!");
  } else if (grade <= 0 || grade > 10) {
    displayGrades("!!!Inserati o nota reala!!!");
  } else {
    arr.push(grade);
    displayGrades(`Notele sunt: ${arr}`);
    document.querySelector(".input-grade").value = "";
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  finalGrade(sum / arr.length);
  displayPassed(sum / arr.length);
  document.querySelector(".input-grade").value = "";
};

document.querySelector(".add").addEventListener("click", function () {
  inputGrades();
});

const finalGrade = function (finalgrade) {
  document.querySelector(".final-grade").textContent = finalgrade;
};

// Butonul pentru a sterge datele(refresh)
document.querySelector(".delete").addEventListener("click", function () {
  arr = [];
  document.querySelector(".grades").textContent = "";
  document.querySelector(".final-grade").textContent = "0";
  document.querySelector(".input-grade").value = "";
  document.querySelector(".passed").textContent = "";
});
