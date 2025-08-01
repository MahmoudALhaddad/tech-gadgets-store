document.getElementById('newsletterForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('newsletterEmail').value.trim();
  const message = document.getElementById('newsletterMsg');

  if (email && email.includes('@')) {
    message.className = 'mt-3 fs-6 fw-medium text-success';
    message.textContent = "✅ Thank you for subscribing!";
    this.reset();
  } else {
    message.className = 'mt-3 fs-6 fw-medium text-warning';
    message.textContent = "⚠️ Please enter a valid email address.";
  }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = event.target;
  let valid = true;

  function validateField(id) {
    const field = form.querySelector(`#${id}`);
    if (!field.value.trim()) {
      field.classList.add('is-invalid');
      valid = false;
    } else {
      field.classList.remove('is-invalid');
    }
  }

  validateField('name');

  const emailField = form.querySelector('#email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailField.value.trim())) {
    emailField.classList.add('is-invalid');
    valid = false;
  } else {
    emailField.classList.remove('is-invalid');
  }

  validateField('message');

  if (valid) {
    // Instead of sending an email, just show a success alert and reset the form
    alert('Thank you for contacting us! We will get back to you soon.');
    form.reset();
  }
});
