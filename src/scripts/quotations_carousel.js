/* Funcionamento do Carousel em passos:
    1. Criamos um contador para os outdoors. O JS aumenta e;
    2. Quando uma delas é clicada, o contador aumenta ou diminui 1 número na contagem dos outdoors;
    3. A partir do clique e da mudança do contador, o próximo outdoor da lista (que possui aquele número que o contador adquiriu com o clique) ganha a classe .showing e o outdoor anterior perde essa classe;
    4. A classe .showing faz o outdoor aparecer para o usuário enquanto a falta dela nos outros outdoors os faz sumirem.
*/

const q_outdoors = document.querySelectorAll('.q_outdoors');
const q_carousel = document.getElementById('quotations_carousel');
let q_showingOutdoor = -1;

function hideQuotationsOutdoors() {
    q_outdoors.forEach(outdoor => {
        outdoor.classList.remove('q_showing')
    });
}

function showQuotationOutdoor() {
    q_outdoors[q_showingOutdoor].classList.add('q_showing');
}

function carouselForward() {
    const q_outdoorLength = q_outdoors.length - 1;
    if (q_showingOutdoor === q_outdoorLength) {
        q_showingOutdoor = 0
        hideQuotationsOutdoors()
        showQuotationOutdoor()
        return;
    }
    q_showingOutdoor++;
    hideQuotationsOutdoors()
    showQuotationOutdoor()
}

window.setInterval(() => carouselForward(), 10000)

q_carousel.addEventListener('onload', carouselForward());





