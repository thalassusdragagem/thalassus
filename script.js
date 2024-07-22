let currentIndex = 0;
const images = document.querySelectorAll('.image');

function changeImage(n) {
    currentIndex += n;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateGallery();
}

function updateGallery() {
    const offset = -100 * currentIndex;
    document.querySelector('.gallery').style.transform = `translateX(${offset}%)`;
}

updateGallery(); // Inicializa a galeria com a primeira imagem

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    function showSlide() {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        index = (index + 1) % slides.length;
    }

    setInterval(showSlide, 1000); // Alteração do intervalo para 5 segundos

    const images = document.querySelectorAll('.image');
    let currentIndex = 0;

    function changeImage(n) {
        currentIndex += n;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        updateGallery();
    }

    function updateGallery() {
        const offset = -100 * currentIndex;
        document.querySelector('.gallery').style.transform = `translateX(${offset}%)`;
    }

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', function() {
        changeImage(-1);
    });

    nextButton.addEventListener('click', function() {
        changeImage(1);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
  
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('ativo'); // Alterna a classe 'ativo' para mostrar ou esconder o menu
    });
  });