const aTag = document.getElementById("coefficientA");
const bTag = document.getElementById("coefficientB"); 
const cTag = document.getElementById("coefficientC");
const solutionToggleTag = document.getElementById("solTog");
const answerTag = document.getElementById("answer");

function solveForX(){
   let a = Number(aTag.value);
   let b = Number(bTag.value);
   let c = Number(cTag.value);
   let solutionToggle = parseFloat(solutionToggleTag.value);

   let result1 = (-1 * b + math.sqrt((b ** 2) - 4 * a * c))/(2 * a);
   let result2 = (-1 * b - math.sqrt((b ** 2) - 4 * a * c))/(2 * a);

   if(solutionToggle == 2){
    answerTag.textContent = "Result: " + result2;
   }
   else if(solutionToggle == 1){
    answerTag.textContent = "Result: " + result1;
   }
   else{
    answerTag.textContent = "Result: " + result1 + " and " + result2;
   }
}