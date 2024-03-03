var girando = false;

function iniciarRoleta() {
    girando = true;
    girarRoleta();
}

function pararRoleta() {
    girando = false;
}

function girarRoleta() {
    if (girando) {
        // Fazer uma solicitação ao servidor para obter uma imagem aleatória
        fetch('/girar_roleta')
            .then(response => response.json())
            .then(data => {
                exibirImagem(data.imagem_girada);
                setTimeout(girarRoleta, 100);  // Ajuste conforme necessário
            });
    }
}

function exibirImagem(imagemSrc) {
    // Criar um novo elemento de imagem
    var novaImagem = document.createElement('img');
    
    // Atribuir a src da nova imagem
    novaImagem.src = imagemSrc;

    // Definir o estilo da nova imagem (ajuste conforme necessário)
    novaImagem.style.width = '100%';
    novaImagem.style.maxWidth = '425px';
    novaImagem.style.position = 'absolute';
    novaImagem.style.left = '50%';
    novaImagem.style.transformOrigin = '50% 50% -500px';
    novaImagem.style.outline = '1px solid transparent';

    // Adicionar a nova imagem ao elemento #spinner
    var spinner = document.querySelector('#spinner');
    spinner.appendChild(novaImagem);
}
