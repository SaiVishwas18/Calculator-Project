function Solve(val) {
    document.getElementById("display").value+=val;
 }
 function Clear(){
    document.getElementById("display").value="";
 }
 function Delete(){
    display.value = display.value.slice(0,-1);
 }
 function Square(){
    let currentValue=parseFloat(display.value);
    display.value=currentValue*currentValue;
 }
 function Equal(){
    let expression = document.getElementById("display").value;
    if (expression){
        try{
            document.getElementById("display").value=eval(expression);
        }
        catch{
            document.getElementById("display").value="Error";
        }
    }
 }
 function Delete(){
    display.value = display.value.slice(0,-1);
 }