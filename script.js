const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('navMenu');
const contactForm = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

function toggleMenu() { nav.classList.toggle('open'); }
if (menuBtn) { menuBtn.addEventListener('click', toggleMenu); }

function validateForm(fullName, email, subject, message) {
  if (fullName.length < 3) return "Full name must be at least 3 characters.";
  if (!email.includes('@') || !email.includes('.')) return "Please enter a valid email address.";
  if (subject.length < 5) return "Subject must be at least 5 characters.";
  if (message.length < 10) return "Message must be at least 10 characters.";
  return "valid";
}

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const result = validateForm(fullName, email, subject, message);
    if (result === "valid") {
      feedback.style.color = "#0f3d2e";
      feedback.textContent = "Thank you " + fullName + "! Your inquiry has been received. We'll call you within 30 mins.";
      contactForm.reset();
    } else {
      feedback.style.color = "#c0392b";
      feedback.textContent = result;
    }
  });
}