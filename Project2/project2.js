
/* Raul Morales Alcazar
Project 2
October 23 2024
*/

// Q1
let myName = 'Raul Morales Alcazar';
let para1 = document.getElementById("p1");
para1.textContent = myName;

//Q2
let n1, n2;
n1 = 25;
n2 = 1999;
let numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

//Q3
let numberMult;
numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

//Q4
let myNameAddNum = myName + n1;
document.getElementById("p4").textContent = myNameAddNum;

//Q5
let myNameMult = myName * n1;
document.getElementById("p5").textContent = myNameMult;

//Q6
let ageCompare = 25 < n1 * n2;
document.getElementById("p6").textContent = ageCompare;

n1 = 10;
n2 = 11;