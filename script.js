"use strict";

//let finalGrade =

const displayGrades = function (grades) {
  document.querySelector(".grades").textContent = grades;
};

let arr = [];
// Butonul pentru a adauga notele
document.querySelector(".add").addEventListener("click", function () {
  let grade = document.querySelector(".input-grade").value;
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

//console.log(arr);
