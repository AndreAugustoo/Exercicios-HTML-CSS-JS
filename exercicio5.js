function tabuada()
{
   var n = parseInt(document.getElementById('numero').value);
    
   for(i=1; i<=10; i++){     
      document.write(n + " X " + i + " = " + (i*n)+"<br>");
   }
}