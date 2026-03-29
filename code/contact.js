emailjs.init("TO4uVTNl0kbASV-eN");

document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_8qf81ca", "template_8xqc1a2", this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    })
    .catch((error) => {
      alert("Failed to send. Please try again.");
      console.error(error);
    });
});

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
});

// close nav when a link is clicked
document.querySelectorAll('nav li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
    });
});