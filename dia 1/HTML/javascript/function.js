console.log("hello world") 

function playSound(e) {
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
 const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
 if (!audio) return;//detiene la funcion
 audio.currentTime = 0;//volver al principio del sonido
 audio.play();
 key.classList.add('playing');
};


function removeTransition(e){
    if(e.propertyName !== 'transform') return; //omite si no es un transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

window.addEventListener('keydown', playSound);