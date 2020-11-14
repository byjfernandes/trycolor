const bolas = document.getElementsByClassName('ball');

function numeroAleatorio() {
    const numero = Math.floor(Math.random() * 256);
    return numero;    
}

function corAleatoria() {
    const rgb = `rgb(${numeroAleatorio()}, ${numeroAleatorio()}, ${numeroAleatorio()})`;
    return rgb;
}

for (let bola = 0; bola < bolas.length; bola += 1) {
    bolas[bola].style.backgroundColor = corAleatoria()
}
