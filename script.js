/* --------------------------------------------------------------
  ATUALIZAR ESTRELA CONFORME VALOR DA NOTA [0-1]
-------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
  const starRatings = document.querySelectorAll(".nota"); // Seleciona todos os elementos com a classe .nota

  starRatings.forEach((starRating) => {
    const avaliacaoMedia = starRating.getAttribute("valor"); // Obtém o valor da nota do atributo "valor"
    const rating = parseFloat(avaliacaoMedia); // Converte o valor para número

    if (!isNaN(rating)) {
      // Verifica se o valor é um número válido
      const convertedRating = Math.min(5, (rating / 10) * 5); // Converte a nota de 10 para 5 estrelas
      const width = (convertedRating / 5) * 100; // Calcula a largura percentual para a estrela
      starRating.style.setProperty("--rating-width", `${width}%`); // Define a largura das estrelas
    }
  });
});

/* --------------------------------------------------------------
  SLIDES DA PAGINA DE PROPRIEDADE
-------------------------------------------------------------- */

const slides = document.querySelectorAll(".propriedade-imagens .slide"); // Seleciona todos os slides
const btnAntes = document.getElementById("botao-antes"); // Seleciona o botão de voltar
const btnDepois = document.getElementById("botao-depois"); // Seleciona o botão de avançar

let slideAtual = 0; // Armazena o índice do slide atual

// Remove a classe "on" de todos os slides
function esconderSlide() {
  slides.forEach((slide) => slide.classList.remove("on"));
}

// Adiciona a classe "on" ao slide atual
function mostrarSlide() {
  slides[slideAtual].classList.add("on");
}

// Avança para o próximo slide
function passarSlide() {
  esconderSlide(); // Remove a classe "on" do slide atual
  slideAtual = (slideAtual + 1) % slides.length; // Atualiza o índice do slide
  mostrarSlide(); // Mostra o próximo slide
}

// Volta para o slide anterior
function voltarSlide() {
  esconderSlide(); // Remove a classe "on" do slide atual
  slideAtual = (slideAtual - 1 + slides.length) % slides.length; // Atualiza o índice do slide
  mostrarSlide(); // Mostra o slide anterior
}

// Adiciona eventos de clique aos botões
btnAntes.addEventListener("click", voltarSlide);
btnDepois.addEventListener("click", passarSlide);

// Inicializa mostrando o primeiro slide
mostrarSlide();
