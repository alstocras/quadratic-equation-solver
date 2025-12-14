const aTag = document.getElementById("coefficientA");
const bTag = document.getElementById("coefficientB"); 
const cTag = document.getElementById("coefficientC");
const answerTag = document.getElementById("answer");

function solveForX(){
   let a = Number(aTag.value);
   let b = Number(bTag.value);
   let c = Number(cTag.value);

   let result1 = (-1 * b + math.sqrt((b ** 2) - 4 * a * c))/(2 * a);
   let result2 = (-1 * b - math.sqrt((b ** 2) - 4 * a * c))/(2 * a);

   answerTag.textContent = "Solutions: " + result1 + " and " + result2;
}