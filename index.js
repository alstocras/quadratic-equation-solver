const aTag = document.getElementById("coefficientA");
const bTag = document.getElementById("coefficientB"); 
const cTag = document.getElementById("coefficientC");
const solutionToggleTag = document.getElementById("solTog");

function solveForX(){
   let a = parseFloat(aTag.value); 
   let b = parseFloat(bTag.value); 
   let c = parseFloat(cTag.value);
   let solutionToggle = parseFloat(solutionToggleTag.value);

   let result1 = (-1 * b + math.sqrt((b ** 2) - 4 * a * c))/(2 * a);
   let result2 = (-1 * b - math.sqrt((b ** 2) - 4 * a * c))/(2 * a);

   if(solutionToggle == 2){
    alert(result2);
   }
   else if(solutionToggle == 1){
    alert(result1);
   }
   else{
    alert(result1 + " and " + result2);
   }
}