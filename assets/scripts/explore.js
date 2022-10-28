// explore.js
let synth = window.speechSynthesis;
window.addEventListener('DOMContentLoaded', init);
function populateVoiceList() {

  
  
  for (let i =0; i< voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name}(${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' - DEFAULT';
    }
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelectE.appendChild(option);
    alert(voiceSelectE);
  }
}

function init() {
  // TODO
  const smileImgE = document.querySelector('header + img');
  const textInputE = document.querySelector('#text-to-speak');
  const voiceSelectE = document.querySelector('#voice-select');
  const talkButtonE = document.querySelector('select + button');
  let synth = window.speechSynthesis;
  let voices = synth.getVoices();
  alert(voices);
  for (let i =0; i< voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name}(${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' - DEFAULT';
    }
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelectE.appendChild(option);
    alert(voiceSelectE);
  }
  talkButtonE.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance("Hello world!");
    speechSynthesis.speak(utterance)
  })
  // voices = speechSynthesis.getVoices()
}