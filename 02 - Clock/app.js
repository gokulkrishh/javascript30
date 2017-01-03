
document.addEventListener("DOMContentLoaded", () => {
	const hoursElement = document.querySelector('.clock__hours');
	const minutesElement = document.querySelector('.clock__minutes');
	const secondsElement = document.querySelector('.clock__seconds');

	setInterval(()=> {
		var date = new Date();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		hoursElement.style.transform = `rotate(${((hours/12) * 360) + 90}deg)`;
		minutesElement.style.transform = `rotate(${(minutes * 6) + 90}deg)`;
		secondsElement.style.transform = `rotate(${(seconds * 6) + 90}deg)`;
	}, 1000);
});