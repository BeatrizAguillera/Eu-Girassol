/* Funcionamento do typeWriter em passos:
    1. A function typeWriter transforma o innerText do elemento escolhido em uma array e o .split divide o texto colocando cada caractere como uma posição diferente da array (incluindo espaços);
    2. Inicialmente, apagamos o texto original do elemento para que o efeito de escrita possa acontecer;
    3. A função pega cada caracter dentro da array e marca um tempo específico para ela aparecer na tela usando o setTimeout. Cada caracter aparece em um tempo determinado pelo index multiplicado. Isso gera o efeito de uma letrinha aparecendo após a outra;
    5. Para que o efeito se repita infinitamente, usamos uma função que simula o setInterval, mas antes aplica um callback por precaução, para que as letras não se embaralhem na tela em detetrimento de um bug do setInterval (que não respeita o ciclo de funcionamento da função antes de repeti-la)
    */

function typeWriter(element, timing) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = ''
    textArray.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, timing * i)
    });
}

const title = document.querySelector('.egTitle');
const subtitle = document.querySelector('#mainSubtitle');

function manualSetInterval(callback, duration, callbackArguments) {
    callback.apply(this, callbackArguments);
    var args = arguments,
        scope = this;

    setTimeout(function () {
        manualSetInterval.apply(scope, args);
    }, duration);
}

function typeWriterTitle() {
    typeWriter(title, 200);
}

function typeWriterSubtitle() {
    typeWriter(subtitle, 90);
}

manualSetInterval(typeWriterTitle, 15000);

manualSetInterval(typeWriterSubtitle, 13000); 