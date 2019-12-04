function controleConsorcio()
{      
    var nPrest = parseInt(document.getElementById('nPrest').value);   
    var nPrestPag = parseInt(document.getElementById('nPrestPag').value); 
    var valPrest = parseFloat(document.getElementById('valPrest').value);   
    var v1 = document.getElementById('v1');   
    var v2 = document.getElementById('v2');   
    v1.innerHTML = ('Valor total: ' + (nPrest * valPrest));
    v2.innerHTML = ('Valor total pago: ' + (nPrestPag * valPrest));
    v3.innerHTML = ('Valor em aberto: ' + ((nPrest * valPrest) - (nPrestPag * valPrest)));       
}

function limparConsorcio()
{
    if(document.getElementById('nPrest').value != '')
    {
        document.getElementById('nPrest').value = '';
        document.getElementById('nPrestPag').value = '';
        document.getElementById('valPrest').value = '';
        v1.innerHTML = ('Valor total: ');
        v2.innerHTML = ('Valor total pago: ');   
        v3.innerHTML = ('Valor em aberto: ');     
    }
}