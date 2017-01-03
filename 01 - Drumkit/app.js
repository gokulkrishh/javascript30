document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keypress', (event) => {
    const audioElement = document.querySelector(`[data-audio='${event.charCode}']`);
    const element = document.querySelector(`[data-key='${event.charCode}']`);
    if (!audioElement) return;
    element.classList.add('playing');
    // currentTime as 0 to play without having to wait for previous to complete
    audioElement.currentTime = 0;
    audioElement.play();
  });

  document.addEventListener('transitionend', (event) => {
    event.target.classList.remove('playing');
  });
});
