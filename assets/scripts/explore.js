// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;
var voices = [];
function populateVoiceList() {
  if (typeof speechSynthesis === 'undefined') {
    return;
  }
  setTimeout(() => {
    voices = window.speechSynthesis.getVoices();
    for( let i = 0; i< voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      if( voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute*("data-name", voices[i].name);
      document.getElementById('voice-select').appendChild(option);
    }
  }, 500);
}

function speak() {
  if (synth.speaking) {
    console.log('speaking');
    return;
  } 
  const smileImgE = document.querySelector('header + img');
  smileImgE.src = "/assets/images/smiling-open.png";
  const textInputE = document.querySelector('#text-to-speak');
  const voiceSelectE = document.querySelector('#voice-select');
  if (textInputE.value !== "") {
    const utterThis = new SpeechSynthesisUtterance(textInputE.value);
    utterThis.onend = function (event) {
      console.log("speech onend");
      smileImgE.src = "/assets/images/smiling.png";
    };
    utterThis.onerror = function (event) {
      console.error('speech onerror');
    };
    const selectedVoiceName = (voiceSelectE.selectedOptions[0].value.replace(/ *\([^)]*\) */g, ''));
    for(let i=0; i< voices.length; i++) {
      if (voices[i].name ===selectedVoiceName) {
        console.log(voiceSelectE.selectedOptions[0].value)
        utterThis.voice=voices[i];
        break;
      }
    }
    synth.speak(utterThis);
  }
}

function speakingCheck() {
  const smileImgE = document.querySelector('header + img');
  console.log(synth.speaking);
  smileImgE.src = (synth.speaking)? "/assets/images/smiling-open.png":"/assets/images/smiling.png";
}

function init() {
  // TODO
  // const smileImgE = document.querySelector('header + img');
  // // const textInputE = document.querySelector('#text-to-speak');
  const voiceSelectE = document.querySelector('#voice-select');
  const talkButtonE = document.querySelector('select + button');
  populateVoiceList();

  talkButtonE.addEventListener('click',speak)
}
speakingCheck();
// smileImgE.src = "smiling" + '-open' + '.svg';