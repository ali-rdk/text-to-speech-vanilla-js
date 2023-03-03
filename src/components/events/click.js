

const click = (element) =>{
    element.addEventListener('click',()=>{
        let speech = new SpeechSynthesisUtterance();
        speech.lang = "en";
        speech.text = document.querySelector("textarea").value;
        window.speechSynthesis.speak(speech);
    })
}

export default click;