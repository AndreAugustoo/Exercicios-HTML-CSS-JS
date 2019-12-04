function maiorNumero2()
{
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);
    var n3 = parseFloat(document.getElementById('numero3').value);
    var maior;
    
    if((n1 > n2) && (n1 > n3)){
        maior = n1;
        alert('Maior numero é: ' + maior);
    }
    if((n2 > n1) && (n2 > n3)){
        maior = n2;
        alert('Maior numero é: ' + maior);
    }
    if((n3 > n1) && (n3 > n2)){
        maior = n3;
        alert('Maior numero é: ' + maior);
    }
    if((n1 == n2) && (n1 == n3)){
        maior = n3;
        alert('Todos os valores são iguais.');
    }
  
}

