function categoria()
{
    var ano = 2019;
    var id = parseInt(document.getElementById('idade').value);
    var nome = document.getElementById("nome").value;
    var soma = parseInt(ano - id);
    
    if (soma < 14){
        alert(nome + ', sua categoria  e Mirim !');
    }
    else if(soma == 14 || soma <= 15){    
        alert(nome + ', sua categoria é Infantil.'); 
    }
    else if(soma == 16 || soma <= 17){ 
        alert(nome + ', sua categoria é Juvenil.');
    }
    else if(soma >= 18 && soma <= 20){ 
        alert(nome + ', sua categoria é Junior.');
    }
    else if(soma == 21 || soma > 21){
        alert(nome + ', sua categoria é Profissional.');  
    }
    
}