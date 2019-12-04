function caixa()
{
    var val = document.getElementById('capt'); 
    var min = document.getElementById('capm');
    var res = document.getElementById('res');

    if (val.value == 0 || min.value == 0 || val.value < 1 || min.value < 1){
        window.alert('Dados incorretos.')
    }else{
        let cp = Number(val.value)
        let cpm = Number(min.value)
        var lit = parseInt(cp / cpm)
        res.innerHTML = ('Ficará cheia em '+ lit +  ' minuto(s).')

    }
}

function limparCaixa()
{
    if(document.getElementById('capt').value != '')
    {
        document.getElementById('capt').value = '';
        document.getElementById('capm').value = '';
        document.getElementById('res').value = '';
        res.innerHTML = ('');   
    }
}