const form = document.getElementById('cadastro');

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.trim().split(/\s+/);
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    let formValido = false;
    e.preventDefault();
            
    const emailCadastro = document.getElementById('email');
    const telefoneCadastro = document.getElementById('telefone');
    const nomeCadastro = document.getElementById('nome');
    formValido = validaNome(nomeCadastro.value);
    if(formValido){
        alert('Cadastro concluido!');

        nomeCadastro.value = '';
        emailCadastro.value = '';
        telefoneCadastro.value = '';
    }else{
        alert('O nome não está completo!');
    }

});

console.log(form)