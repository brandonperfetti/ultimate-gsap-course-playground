import gsap from 'gsap';

const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const resume = document.querySelector('.resume');
const restart = document.querySelector('.restart');
const reverse = document.querySelector('.reverse');
const repeat = document.querySelector('.repeat');
const kill = document.querySelector('.kill');
const yoyo = document.querySelector('.yoyo');

const animation = gsap.to('.box', {
	opacity: 1,
	rotation: 360,
	borderRadius: '50%',
	scale: 1.25,
	duration: 2,
});

play.addEventListener('click', () => {
});
pause.addEventListener('click', () => {
});
resume.addEventListener('click', () => {
});
restart.addEventListener('click', () => {
});
reverse.addEventListener('click', () => {
});
kill.addEventListener('click', () => {
});
yoyo.addEventListener('click', () => {
});
repeat.addEventListener('click', () => {
});
