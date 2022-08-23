/* Funcionamento do typeWriter em passos:
    1. A function typeWriter transforma o innerText do elemento escolhido em uma array e o .split divide o texto colocando cada caractere como uma posição diferente da array (incluindo espaços);
    2. Inicialmente, apagamos o texto original do elemento para que o efeito de escrita possa acontecer;
    3. A função pega cada caractere dentro da array e marca um tempo específico para ela aparecer na tela usando o setTimeout. Cada caractere aparece em um tempo determinado pelo index multiplicado. Isso gera o efeito de uma letrinha aparecendo após a outra;
    5. Para que o efeito se repita infinitamente, usamos o setInterval para repetir a função typeWriter dentro de um determinado tempo.
    */

function typeWriter(element, timing) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = ''
    textArray.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, timing * i)
    });
}

const title = document.querySelector('.egTitle');
typeWriter(title, 200);
window.setInterval(() => typeWriter(title, 200), 15000);

const subtitle = document.querySelector('#mainSubtitle');
typeWriter(subtitle, 90);
window.setInterval(() => typeWriter(subtitle, 90), 10000);



