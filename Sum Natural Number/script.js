function myfunction ()
{
  var num=("Positive Integer");
  var sum=0;
  var i=0;
  if (num>0) {

    for(i=0;i<num;i++) {
      sum=sum+i;
  }
  document.write(sum);
}
else {
  document.write("positive");
}
