// Configuração customizada do Tailwind (caso não use o arquivo CSS puro)
tailwind.config = {
    theme: {
        extend: {
            colors: {
                rosabebê: '#FDF2F8',
                rosaprincipal: '#FBCFE8',
                rosaforte: '#F472B6',
            },
            fontFamily: {
                'serif': ['Playfair Display', 'serif'],
                'sans': ['Poppins', 'sans-serif'],
            }
        }
    }
}

// Log para confirmar que o sistema está rodando
console.log("Dra. Nicolly Andrade - Site carregado com sucesso!");

let currentSlide = 0;
const slides = document.querySelectorAll('#carousel > div');
const totalSlides = slides.length;

function updateCarousel() {
    const offset = currentSlide * -100;
    document.getElementById('carousel').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Auto-play opcional (muda a cada 5 segundos)
setInterval(nextSlide, 5000);

window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('py-2');
    } else {
        header.classList.remove('py-2');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Ajuste aqui o valor do "respiro" (ex: 100px para o header + 20px de margem)
            const headerHeight = 100; 
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});