// Carrossel de imagens automático
var radio = document.querySelector('.manual-btn');
var cont = 1;

document.getElementById('radio1').checked = true;

setInterval(() => {
    proximaImg();
}, 5000);

function proximaImg() {
    cont++;

    if (cont > 4) {
        cont = 1;
    }

    document.getElementById('radio' + cont).checked = true;
}

// Efeito de scroll no header


// Toggle do menu hambúrguer
let menuToggle = document.querySelector(".menuToggle");
let menu = document.querySelector(".menu");

menuToggle.onclick = function () {
    menu.classList.toggle("active");
};


