function myfunction(){
var num1= prompt("Please enter the first value");
var num2= prompt("Please enter the second value");
var num3= prompt("Please enter the third value");

if ((num1 + num2 > num3)&&(num2 + num3 > num1)&&(num1 + num3 > num2))
{
document.write ("Good Job");
}
else document.write ("Sorry")
}
