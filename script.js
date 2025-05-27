const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate form sending
    formMessage.style.color = 'green';
    formMessage.textContent = 'Thank you for your message! I will get back to you soon.';

    contactForm.reset();
  });
}



