// explore.js
// const synth = window.speechSynthesis;
// let voices = [];
window.addEventListener('DOMContentLoaded', init);


function init() {
  // TODO
  const smileImgE = document.querySelector('header + img');
  const textInputE = document.querySelector('#text-to-speak');
  const voiceSelectE = document.querySelector('#voice-select');
  const talkButtonE = document.querySelector('select + button');


  let utterance = new SpeechSynthesisUtterance('Hellow world!');
  speechSynthesis.speak(utterance);
  const voices = speechSynthesis.getVoices();
  alert(`${voices[1].name}`);



  const synth = window.speechSynthesis;
  synth.getVoices();
  // alert(synth.getVoices())
  for (let i =0; i< voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = 'hello@';//`${voices.at(i).name}(${voices.at(i).lang})`;
    if (voices.at(i).default) {
      option.textContent += ' - DEFAULT';
    }
    option.setAttribute('data-lang', voices.at(i).lang);
    option.setAttribute('data-name', voices.at(i).name);
    voiceSelectE.appendChild(option);
    alert(voiceSelectE);
  }



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