const monkey = document.getElementById('monkey');
const rightArm = document.getElementById('right-arm');
const rightHand = document.getElementById('right-arm').querySelector('.right-hand');
const middleFinger = document.getElementById('middle');

monkey.addEventListener('click', () => {
	rightArm.classList.toggle('active');
	rightHand.classList.toggle('active');
	middleFinger.classList.toggle('active');
	
	// Add a funny sound effect would be cool here!
	playSound();
});

function playSound() {
	audio = new Audio('monkey-sound.mp3'); // Make sure to have a sound file named 'monkey-sound.mp3' in the same directory
	audio.play();
}