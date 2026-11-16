// Select Contact Form
const contactForm = document.getElementById("contactForm");

const formStatus = document.getElementById("formStatus");

// Form Submit Event
contactForm.addEventListener("submit", function(event) {

    // Stop Default Form Submission
    event.preventDefault();

    // Get Input Values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check Empty Fields
    if (!name || !email || !subject || !message) {
        formStatus.textContent = "Please fill in all fields!";
        formStatus.style.color = "#ff6b6b";
        return;
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formStatus.textContent = "Please enter a valid email address!";
        formStatus.style.color = "#ff6b6b";
        return;
    }

    // Success Message
    formStatus.textContent = "Form validated successfully!";
    formStatus.style.color = "#00ff99";

    // Clear Form
    contactForm.reset();

});