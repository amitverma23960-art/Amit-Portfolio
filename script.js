// Contact Form
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const submitButton = contactForm.querySelector('button[type="submit"]');

// Form Submit
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Empty Fields
    if (!name || !email || !subject || !message) {
        formStatus.textContent = "Please fill in all fields.";
        formStatus.style.color = "#ff6b6b";
        return;
    }

    // Length Check
    if (name.length < 2 || name.length > 100) {
        formStatus.textContent = "Name must be between 2 and 100 characters.";
        formStatus.style.color = "#ff6b6b";
        return;
    }

    if (subject.length > 150) {
        formStatus.textContent = "Subject is too long.";
        formStatus.style.color = "#ff6b6b";
        return;
    }

    if (message.length < 10 || message.length > 2000) {
        formStatus.textContent = "Message must be between 10 and 2000 characters.";
        formStatus.style.color = "#ff6b6b";
        return;
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formStatus.textContent = "Please enter a valid email address.";
        formStatus.style.color = "#ff6b6b";
        return;
    }

    // Form Status
    formStatus.textContent = "Your form is valid! Email sending is not configured yet.";
    formStatus.style.color = "#00d9ff";

    submitButton.textContent = "Validated";
    submitButton.disabled = true;

    // Reset Form
    contactForm.reset();

    setTimeout(function () {
        submitButton.textContent = "Send Message";
        submitButton.disabled = false;
    }, 2000);
});