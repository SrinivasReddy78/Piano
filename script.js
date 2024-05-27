let pianoKeys = document.querySelectorAll('.piano-keys .key');
let volumeSlider = document.querySelector('.volume input');
let showSwitch = document.querySelector('.keys-check input');
let allKeys = [];
let audio = new Audio('./tunes/a.wav');

const playTune = (key) => {
    audio.src = `./tunes/${key}.wav`;
    audio.play();
}

pianoKeys.forEach(key =>{
    allKeys.push(key.dataset.key)
    key.addEventListener('click',()=>{playTune(key.dataset.key)})
})

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle('hide'));
}

const pressedKey = (e) =>{

 if(allKeys.includes(e.key)) { playTune(e.key) }
}

showSwitch.addEventListener('click',showHideKeys)
volumeSlider.addEventListener('input',handleVolume)
document.addEventListener('keydown', pressedKey)
