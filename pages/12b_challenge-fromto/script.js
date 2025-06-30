import gsap from 'gsap';

const container = document.querySelector('.demo');

document.querySelectorAll('.reactions button').forEach((button) => {
	button.addEventListener('click', (e) => {
		const emoji = button.dataset.emoji;

		// Create the bubble
		const bubble = document.createElement('span');
		bubble.classList.add('bubble');
		bubble.textContent = emoji;

		// Position it near the button
		const rect = button.getBoundingClientRect();
		const containerRect = container.getBoundingClientRect();

		bubble.style.left = `${rect.left - containerRect.left + rect.width / 2}px`;
		bubble.style.top = `${rect.top - containerRect.top + rect.height / 2}px`;

		container.appendChild(bubble);

		// Animate the bubble
		gsap.fromTo(
			bubble,
			{
				y: 0,
				scale: 0.8,
				opacity: 1,
				rotate: 0,
			},
			{
				y: -100,
				scale: 1.3,
				opacity: 0,
				rotate: gsap.utils.random(-45, 45),
				duration: 1.2,
				ease: 'power1.out',
				onComplete: () => {
					bubble.remove();
				},
			},
		);
	});
});
