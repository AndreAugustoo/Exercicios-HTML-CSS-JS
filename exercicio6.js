function primo(num)
{
  if(num!=1){
  for (var i = 2; i < num; i++)
  if (num % i == 0) return false;
  
  return num !== 1;
  }
}

function verificaPrimo()
{
  var num = document.getElementById("numero").value;
  var resl="";
      
  if(num == ''){
    document.getElementById("mensagem").innerHTML = 'Nenhum número foi digitado.';
  }else if (primo(num)) {
    resl = "O número " + (num) + " é primo";
  } else {
    resl = "O número " + (num) + " não é primo";
  }
    document.getElementById("mensagem").innerHTML = resl;
}

function limparPrimo()
{
    if(document.getElementById('mensagem').value != '')
    {
      document.getElementById('mensagem').innerHTML = '';
    }
}
