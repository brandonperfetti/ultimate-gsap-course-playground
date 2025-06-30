import gsap from 'gsap';

const toasts = document.querySelectorAll('.toast');

const animateToast = (index) => {
	if (index >= toasts.length) return; // End recursion

	const toast = toasts[index];

	gsap.to(toast, {
		y: -120,
		opacity: 1,
		scale: 1,
		duration: 0.8,
		ease: 'power4.out',
		onComplete: () => {
			gsap.to(toast, {
				delay: 2.5,
				y: 0,
				opacity: 0,
				scale: 0.95,
				duration: 0.7,
				ease: 'power.in',
				onComplete: () => {
					// Move to the next toast
					animateToast(index + 1);
				},
			});
		},
	});
};

animateToast(0);
