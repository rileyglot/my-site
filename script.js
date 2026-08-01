let bun_clicked = 0

function bunnyClicked() {
    if (bun_clicked === 0) {
    document.getElementById("bunny-image").style.opacity = '100%';
    bun_clicked = 1;
    } else {
        document.getElementById("bunny-image").style.opacity = '0%';
    bun_clicked = 0;
    };
}