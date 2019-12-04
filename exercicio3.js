function meses()
{   
    var n = parseInt(document.getElementById('numero').value);
     
    if(n == 1){
        alert('Janeiro');
    }
    if(n == 2){
        alert('Fevereiro');
    }
    if(n == 3){
        alert('Março');
    }
    if(n == 4){
        alert('Abril');
    }
    if(n == 5){
        alert('Maio');
    }
    if(n == 6){
        alert('Junho');
    }
    if(n == 7){
        alert('Julho');
    }
    if(n == 8){
        alert('Agosto');
    }
    if(n == 9){
        alert('Setembro');
    }
    if(n == 10){
        alert('Outubro');
    }
    if(n == 11){
        alert('Novermbro');
    }
    if(n == 12){
        alert('Dezembro');
    }
    if(n < 1 || n > 12){
        alert('Número deve ser de 1 até 12.');
    }
}
