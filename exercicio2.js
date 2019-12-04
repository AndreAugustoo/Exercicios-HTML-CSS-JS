function maiorNumero()
{
	var n1 = parseInt(document.getElementById('numero1').value);    
	var n2 = parseInt(document.getElementById('numero2').value);
	var maior;
  
	if(n1 > n2){
    	maior = n1;
    	alert('Maior número: ' + maior);
	}if(n2 > n1){
		maior = n2;
		alert('Maior número: ' + maior);
	}if(n1 == n2){
		alert('Os valores digitados são iguais.');
	}
}




