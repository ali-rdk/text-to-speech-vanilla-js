const populate = (element) =>{
    let voices = speechSynthesis.getVoices();
    voices.forEach((voice, i)=> {element.options[i] = new Option(voice.name, i)})
}

export default populate;