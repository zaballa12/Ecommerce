// Busca dentro da classe .filtros todos os botões que estão dentro de elementos dt
var botoes = document.querySelectorAll(".filtros dt button");

// Para cada botão que encontrar adicona um evento de clique
// Feito assim para manter um o padrão moderno de desenvolvimento, ajuda em performance, acessibilidade e manutenção.
for (var i = 0; i < botoes.length; i++) {
  var botaoAtual = botoes[i];

  //adiciona o listener para o evento click
  botaoAtual.addEventListener("click", function () {
    // pega o pai do botão (que é o <dt>)
    var dtPai = this.parentNode;

    // pega o próximo elemento irmão do <dt>, que é o <dd>
    var ddOpcoes = dtPai.nextElementSibling;

    // alterna mostrar/esconder o dd
    ddOpcoes.hidden = !ddOpcoes.hidden;

    // alterna a classe ativo para girar a seta
    this.classList.toggle("ativo");
  });
}