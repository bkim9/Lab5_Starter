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
  hornSelect.addEventListener('change', () => {
    hornImg.src = './assets/images/'+ hornSelect.value +'.svg';
    audioE.src = './assets/audio/'+ hornSelect.value + '.mp3';
    
   });
  playBttnE.addEventListener('click', function w() {
    audioE.play();
   });
}
