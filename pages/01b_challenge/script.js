// Pulsing glow animation
gsap.to('.card', {
  boxShadow: '0 20px 80px rgba(29, 209, 161, 0.6)',
  repeat: -1,
  yoyo: true,
  duration: 1,
});

// Targeting Elements Challenge

// Target all three shapes at once
gsap.to('.circle, #square, .triangle', {});

// Target each shape individually
gsap.to('.circle', {});
gsap.to('#square', {});
gsap.to('.triangle', {});

// Target nested elements
gsap.to('.card .title', {});
gsap.to('.card .description', {});