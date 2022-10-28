// expose.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  const hornSelect= document.querySelector('#horn-select');
  const hornImg = document.querySelector('header + img');
  const volumeIcon = document.querySelector('input + img');
  const audioE = document.querySelectorAll('.hidden')[0];
  const volumeControlE = document.querySelector('#volume-controls');
  const volumeInputE = volumeControlE.children[0];
  const volumeIconE = volumeControlE.children[1];
  const playBttnE = document.querySelector('#volume-controls + button');
  var level = 0;
  // const jsConfetti = new jsConfetti();
  const jsConfetti = new JSConfetti();


  hornSelect.addEventListener('change', () => {
    hornImg.src = './assets/images/'+ hornSelect.value +'.svg';
    audioE.src = './assets/audio/'+ hornSelect.value + '.mp3';
    
   });
  playBttnE.addEventListener('click', function playHorn() {
    audioE.play();
    if (hornSelect.value == 'party-horn') { jsConfetti.addConfetti();}
   });
  volumeInputE.addEventListener('input', function inputChage() {
    audioE.volume = volumeInputE.value/100.0;
    if ( audioE.volume == 0 ) {
      level = 0;
    } else if ( audioE.volume < 0.33 ) {
      level = 1;
    } else if ( audioE.volume < .67 ) {
      level = 2;
    } else  {
      level = 3;
    }
    volumeIconE.src = './assets/icons/volume-level-' +level + '.svg';
  });
}
