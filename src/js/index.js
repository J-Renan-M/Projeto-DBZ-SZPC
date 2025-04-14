// Seleciona todos os botões de personagens
const botoes = document.querySelectorAll('.botao');
// Seleciona todos os elementos de personagens
const personagens = document.querySelectorAll('.personagem');

/**
 * Remove a classe "selecionado" do botão atualmente selecionado
 */
function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove('selecionado');
    }
}

/**
 * Adiciona a classe "selecionado" ao botão clicado
 * @param {Element} botao - o botão que foi clicado
 */
function marcarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

/**
 * Remove a classe "selecionado" do personagem atualmente visível
 */
function esconderPersonagemSelecionado() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove('selecionado');
    }
}

/**
 * Mostra o personagem correspondente ao botão clicado
 * @param {number} indice - índice do personagem correspondente
 */
function mostrarPersonagem(indice) {
    personagens[indice].classList.add('selecionado');
}

/**
 * Função principal que trata o clique em um botão
 * @param {Element} botao - botão clicado
 * @param {number} indice - índice do botão clicado
 */
function aoClicarNoBotao(botao, indice) {
    desmarcarBotaoSelecionado();
    marcarBotaoSelecionado(botao);

    esconderPersonagemSelecionado();
    mostrarPersonagem(indice);
}

// Adiciona o event listener para cada botão de personagem
botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => aoClicarNoBotao(botao, indice));
});