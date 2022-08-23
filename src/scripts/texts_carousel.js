/* Funcionamento do Carousel em passos:
    1. Criamos um contador para os outdoors. O JS fica monitorando os cliques nas setinhas de "voltar" e "avançar";
    2. Quando uma delas é clicada, o contador aumenta ou diminui 1 número na contagem dos outdoors;
    3. A partir do clique e da mudança do contador, o próximo outdoor da lista (que possui aquele número que o contador adquiriu com o clique) ganha a classe .showing e o outdoor anterior perde essa classe;
    4. A classe .showing faz o outdoor aparecer para o usuário enquanto a falta dela nos outros outdoors os faz sumirem.
*/

const outdoors = document.querySelectorAll('.outdoors');
const arrowBack = document.getElementById('btnBack');
const arrowForward = document.getElementById('btnForward');
let showingOutdoor = 0;


function hideOutdoors() {
    outdoors.forEach(outdoor => {
        outdoor.classList.remove('showing')
    });
}

function showOutdoor() {
    outdoors[showingOutdoor].classList.add('showing');
}

arrowBack.addEventListener('click', function () {
    if (showingOutdoor === 0) {
        showingOutdoor = 2
        hideOutdoors()
        showOutdoor()
        return
    } else {
        showingOutdoor--;
        hideOutdoors()
        showOutdoor()
    }
})

arrowForward.addEventListener('click', function () {
    const outdoorLength = outdoors.length - 1;
    if (showingOutdoor === outdoorLength) {
        showingOutdoor = 0
        hideOutdoors()
        showOutdoor()
        return;
    }
    showingOutdoor++;
    hideOutdoors()
    showOutdoor()
});
