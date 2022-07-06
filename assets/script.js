const API_GATOS = 'https://api.thecatapi.com/v1/images/search'; //aqui é armazenado a URL da API em uma constante para utilizar mais rápido, de forma reduzida
const botaoGato = document.getElementById('trocar-gato');

const pegaGatos = async() => { //essa função pega os gatinhos na API através do metodo fetch, converte em um JSON e retorna o webpurl do JSON
    const data = await fetch(API_GATOS);
    const json = await data.json();

    return json[0].url; //retorna o conteúdo da variável json, array no indice 0, chave do objeto URL que é onde irá conter o URL da imagem
}

const carregaImagem = async() => { //função que recebe o URL dos gatinhos e escreve no atributo SRC da imagem no HTML
    const imagemGato = document.getElementById('gatoimg');
    imagemGato.src= await pegaGatos();
}

botaoGato.addEventListener('click', carregaImagem); //habilita o evento que fica "ouvindo" o botão para executar a função toda vez que é clicado

carregaImagem();