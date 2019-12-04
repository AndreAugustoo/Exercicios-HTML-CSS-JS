function fatorial()
{
    var num = document.getElementById('numero');
    var resp = document.getElementById('mensagem');
    
    if (num.value < 0){        
        window.alert('Digite números apenas positivos.');
    }else if (num.value == 0){
        window.alert('Número deve ser positivo e diferente de zero.');
    } else {
        var num = parseInt(num.value)
        var r = num;
        for (let i = 1; i < num; i++){
          r = r * i;
        }
        resp.innerHTML = ('O fatorial de '+ num + ' é: '+ r + '.');
    }
}

function limparFatorial()
{
    if(document.getElementById('mensagem').value != '')
    {
      document.getElementById('mensagem').innerHTML = '';
    }
}
