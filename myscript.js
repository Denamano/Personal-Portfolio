document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      successMessage.style.display = "block";
    }
  });

  function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    if (name.trim() === "") {
      nameError.textContent = "Name field is required";
      isValid = false;
    }

    if (!emailPattern.test(email)) {
      emailError.textContent = "Please enter a valid email address";
      isValid = false;
    }

    if (message.trim() === "") {
      messageError.textContent = "Message field is required";
      isValid = false;
    }

    return isValid;
  }
});
