import "./style.css";
import App from "./src/App.js"
import click from "./src/components/events/click";
import change_voice from "./src/components/events/voice";
import populate from "./src/components/events/populate";

const root = document.getElementById('app');

root.appendChild(App());

const text_area = document.querySelector('textarea');
const play = document.querySelector('#btn');
const voices = document.querySelector('#voices');
const volume = document.querySelector('#volume');
const vol_label = document.querySelector('#vol-lable');
const speed = document.querySelector('#speed');
const speed_lable = document.querySelector('#speed-lable');

let speech = new SpeechSynthesisUtterance();

let voice_list = [];
window.speechSynthesis.onvoiceschanged = () => {
    voice_list = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voice_list.forEach((voice, i) => (voices.options[i] = new Option(voice.name, i)));
};

voices.addEventListener("change", () => {
    speech.voice = voice_list[voices.value];
});

play.addEventListener('click', ()=>{
    speech.text = text_area.value;
    speech.addEventListener('end', ()=>{
        text_area.disabled = false;
    })
    text_area.disabled = true
    window.speechSynthesis.speak(speech);
})

volume.addEventListener('input', ()=>{
    speech.volume = volume.value;
    vol_label.innerHTML = volume.value;
})

speed.addEventListener('input', ()=>{
    speech.rate = speed.value;
    speed_lable.innerHTML = speed.value;
})