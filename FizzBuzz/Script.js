function myfunction(){
var i=1;
var temp=0;
var num = document.getElementById("num").value;
  if (num > 0) {
   for (i=1; i<=num; i++) {
     if (i%15==0){
       document.write ("FizzBuzz"+"<br>");
     }
     else if (i%5==0){
       document.write ("Buzz"+"<br>");
     }
     else if (i%3==0){
       document.write ("Fizz" + "<br>");
     }
     else document.write (i + "<br>");
   }
  }
   else {
     document.write ("Please enter a number greater than 0");
   }
