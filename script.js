document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('cta-btn');
  btn.addEventListener('click', () => {
    alert('Welcome! Start building something amazing.');
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});