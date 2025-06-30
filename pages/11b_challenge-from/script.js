import gsap from 'gsap';

const card = document.getElementById('card');

// Entrance animation
gsap.from(card, {
	y: 60,
	opacity: 0,
	scale: 0.95,
	duration: 2,
	ease: 'power2.out',
});

// Flip on hover using rotateY
card.addEventListener('mouseenter', () => {
	setTimeout(() => {
		gsap.to(card, {
			rotateY: 180,
			duration: 0.6,
			ease: 'power2.out',
		});
	}, 250); // Delay to allow for hover effect
});

card.addEventListener('mouseleave', () => {
	gsap.to(card, {
		rotateY: 0,
		duration: 0.6,
		ease: 'power2.inOut',
	});
});
