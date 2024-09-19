window.addEventListener('scroll', function(){
    let animacion = this.document.getElementById('servicios');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamanoDePantalla = this.window.innerHeight;

    if(posicionObj1 < tamanoDePantalla){
        animacion.style.animation= 'mover 1s ease-out'
    }
})
var check= document.querySelector(".check");
check.addEventListener('click', idioma);


window.addEventListener('scroll', function(){
    let animacion = this.document.getElementById('lados');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamanoDePantalla = this.window.innerHeight;

    if(posicionObj1 < tamanoDePantalla){
        animacion.style.animation= 'mover 1s ease-in'
    }
})

window.addEventListener('scroll', function(){
    let animacion = this.document.getElementById('ladosDos');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamanoDePantalla = this.window.innerHeight;

    if(posicionObj1 < tamanoDePantalla){
        animacion.style.animation= 'mover 1s ease-in'
    }
})

window.addEventListener('scroll', function(){
    let animacion = this.document.getElementById('ladosTres');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamanoDePantalla = this.window.innerHeight;

    if(posicionObj1 < tamanoDePantalla){
        animacion.style.animation= 'mover 1s ease-in'
    }
})

window.addEventListener('scroll', function(){
    let animacion = this.document.getElementById('ladosCuatro');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamanoDePantalla = this.window.innerHeight;

    if(posicionObj1 < tamanoDePantalla){
        animacion.style.animation= 'mover 1s ease-in'
    }
})