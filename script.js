document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const consent = document.getElementById("consent");
    const queryType = document.querySelector("input[name='query']:checked");

    const fields = [firstName, lastName, email, message];

    // Reset Errors
    document
      .querySelectorAll(".error-message")
      .forEach((e) => (e.innerText = ""));

    // Validate Fields
    fields.forEach((field) => {
      if (field.value.trim() === "") {
        field.nextElementSibling.innerText = "This field is required.";
        isValid = false;
      }
    });

    // Validate Email
    if (email.value.trim() !== "" && !/^\S+@\S+\.\S+$/.test(email.value)) {
      email.nextElementSibling.innerText = "Enter a valid email.";
      isValid = false;
    }

    // Validate Radio Buttons
    if (!queryType) {
      document.querySelector(
        "input[name='query']"
      ).parentNode.nextElementSibling.innerText = "Please select a query type.";
      isValid = false;
    }

    // Validate Checkbox
    if (!consent.checked) {
      consent.nextElementSibling.innerText = "You must agree to be contacted.";
      isValid = false;
    }

    // Show Success Message
    if (isValid) {
      document.getElementById("success-message").classList.remove("hidden");
      this.reset();
      setTimeout(() => {
        document.getElementById("success-message").classList.add("hidden");
      }, 5000);
    }
  });
