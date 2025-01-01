const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const itemsToShow = 3;
const totalItems = document.querySelectorAll('.city-card').length;
const itemWidth = document.querySelector('.city-card').offsetWidth + 30; // Inclui a margem
let currentIndex = 0;

function updateCarousel() {
  // Atualiza a posição do carrossel
  track.style.transform = `translateX(-${currentIndex * itemsToShow * itemWidth}px)`;

  // Habilita/desabilita botões
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = (currentIndex + 1) * itemsToShow >= totalItems;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener('click', () => {
  if ((currentIndex + 1) * itemsToShow < totalItems) {
    currentIndex++;
    updateCarousel();
  }
});

// Inicialização
updateCarousel();