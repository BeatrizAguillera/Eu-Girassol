var logoImage = document.querySelector('.logoImage')

function startAnimation(image) {
    image.animate([

        { transform: 'rotate(0)' },

        { transform: 'rotate(90deg)' },

        { transform: 'rotate(180deg)' },

        { transform: 'rotate(270deg)' },

        { transform: 'rotate(360deg)' },
    ], 2500)
}

startAnimation(logoImage);
window.setInterval(() => startAnimation(logoImage), 15000)