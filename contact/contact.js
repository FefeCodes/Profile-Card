const form = document.getElementById("contactForm");

if (form) {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const successMessage = document.getElementById("success");

  function validateName() {
    const value = name.value.trim();
    const errorElement = document.getElementById("error-name");

    if (!value) {
      showError(name, errorElement, "Full name is required.");
      return false;
    } else if (value.length < 2) {
      showError(name, errorElement, "Name must be at least 2 characters.");
      return false;
    } else {
      showSuccess(name, errorElement);
      return true;
    }
  }

  function validateEmail() {
    const value = email.value.trim();
    const errorElement = document.getElementById("error-email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {
      showError(email, errorElement, "Email address is required.");
      return false;
    } else if (!emailRegex.test(value)) {
      showError(email, errorElement, "Please enter a valid email address.");
      return false;
    } else {
      showSuccess(email, errorElement);
      return true;
    }
  }

  function validateSubject() {
    const value = subject.value.trim();
    const errorElement = document.getElementById("error-subject");

    if (!value) {
      showError(subject, errorElement, "Subject is required.");
      return false;
    } else if (value.length < 3) {
      showError(
        subject,
        errorElement,
        "Subject must be at least 3 characters."
      );
      return false;
    } else {
      showSuccess(subject, errorElement);
      return true;
    }
  }

  function validateMessage() {
    const value = message.value.trim();
    const errorElement = document.getElementById("error-message");

    if (!value) {
      showError(message, errorElement, "Message is required.");
      return false;
    } else if (value.length < 10) {
      showError(
        message,
        errorElement,
        "Message must be at least 10 characters."
      );
      return false;
    } else {
      showSuccess(message, errorElement);
      return true;
    }
  }

  function showError(input, errorElement, message) {
    input.classList.remove("valid");
    input.classList.add("error");
    errorElement.textContent = message;
    errorElement.style.display = "flex";
  }

  function showSuccess(input, errorElement) {
    input.classList.remove("error");
    input.classList.add("valid");
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }

  function clearField(input) {
    input.classList.remove("error", "valid");
    const errorElement = input.nextElementSibling;
    if (errorElement && errorElement.classList.contains("error")) {
      errorElement.textContent = "";
      errorElement.style.display = "none";
    }
  }

  name.addEventListener("input", validateName);

  email.addEventListener("input", validateEmail);

  subject.addEventListener("input", validateSubject);

  message.addEventListener("input", validateMessage);

  [name, email, subject, message].forEach((input) => {
    input.addEventListener("focus", () => clearField(input));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    successMessage.textContent = "";
    successMessage.style.display = "none";

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();

    const isValid =
      isNameValid && isEmailValid && isSubjectValid && isMessageValid;

    if (isValid) {
      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;

      setTimeout(() => {
        successMessage.textContent =
          "Thank you! Your message has been successfully submitted.";
        successMessage.style.display = "block";
        form.reset();

        submitButton.textContent = originalText;
        submitButton.disabled = false;

        [name, email, subject, message].forEach((input) => {
          clearField(input);
        });
      }, 1500);
    } else {
      const firstInvalid = form.querySelector(".error");
      if (firstInvalid) {
        firstInvalid.focus();
      }
    }
  });
}
