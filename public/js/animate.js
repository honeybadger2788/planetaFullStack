let animate = document.querySelectorAll('.animate');

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < animate.length; i++) {
        let alturaAnimate = animate[i].offsetTop;
        if (alturaAnimate - 300 < scrollTop){
            animate[i].style.opacity = 1;
            animate[i].classList.add('mostrarArriba');
        }
    }
}

window.addEventListener('scroll',mostrarScroll)