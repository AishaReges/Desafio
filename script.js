const cartao1 = {
    imagem: document.querySelector('#cartao1-imagem'),
    nome: document.querySelector('#cartao1-nome')
};

const cartao2 = {
    imagem: document.querySelector('#cartao2-imagem'),
    nome: document.querySelector('#cartao2-nome')
};

const cartao3 = {
    imagem: document.querySelector('#cartao3-imagem'),
    nome: document.querySelector('#cartao3-nome')
};

const cartao4 = {
    imagem: document.querySelector('#cartao4-imagem'),
    nome: document.querySelector('#cartao4-nome')
};

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = (cartao) => {
    let numeroAleatorio = gerarValorAleatorio();

    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        cartao.imagem.src = data.image;
        cartao.nome.innerHTML = data.name;
    });
}

pegarPersonagem(cartao1);
pegarPersonagem(cartao2);
pegarPersonagem(cartao3);
pegarPersonagem(cartao4);