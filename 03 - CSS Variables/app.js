var htmlElement = document.querySelector('html');
var spacingElement = document.querySelector('#spacing');
var bgElement = document.querySelector('#background');
var blurElement = document.querySelector('#blur');

spacingElement.addEventListener('change', (event) => {
	htmlElement.style.setProperty('--padding', `${event.target.value}px`);
});

bgElement.addEventListener('change', (event) => {
	htmlElement.style.setProperty('--background', `${event.target.value}`);
});

blurElement.addEventListener('change', (event) => {
	htmlElement.style.setProperty('--blur', `${event.target.value}px`);
});