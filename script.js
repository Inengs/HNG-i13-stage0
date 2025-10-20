const timeElement = document.getElementById("currentTime");
const form = document.getElementById("contactForm");

function updateTime() {
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

updateTime();
setInterval(updateTime, 1000);

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop default submission
    console.log("Submit clicked, page should NOT refresh");
    let valid = true;

    // Get field values
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    // Get error spans
    const nameError = document.getElementById("error-name");
    const emailError = document.getElementById("error-email");
    const subjectError = document.getElementById("error-subject");
    const messageError = document.getElementById("error-message");
    const successMsg = document.getElementById("success");

    // Reset previous messages
    [nameError, emailError, subjectError, messageError].forEach(
      (e) => (e.textContent = "")
    );
    successMsg.classList.add("hidden");

    // Validate name
    if (!name.value.trim()) {
      nameError.textContent = "Full name is required.";
      valid = false;
    }

    // Validate email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.trim()) {
      emailError.textContent = "Email is required.";
      valid = false;
    } else if (!email.value.match(emailPattern)) {
      emailError.textContent = "Enter a valid email address.";
      valid = false;
    }

    // Validate subject
    if (!subject.value.trim()) {
      subjectError.textContent = "Subject is required.";
      valid = false;
    }

    // Validate message
    if (!message.value.trim()) {
      messageError.textContent = "Message is required.";
      valid = false;
    } else if (message.value.length < 10) {
      messageError.textContent = "Message must be at least 10 characters.";
      valid = false;
    }

    // If valid, show success message
    if (valid) {
      successMsg.classList.remove("hidden");
      form.reset();
    }
  });
}
