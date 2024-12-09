document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Validation
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const successMessage = document.getElementById("successMessage");
    let valid = true;

    if (name.value.trim() === "") {
        showError(name, "Name is required");
        valid = false;
    } else {
        hideError(name);
    }

    if (!validateEmail(email.value.trim())) {
        showError(email, "Valid email is required");
        valid = false;
    } else {
        hideError(email);
    }

    if (message.value.trim() === "") {
        showError(message, "Message cannot be empty");
        valid = false;
    } else {
        hideError(message);
    }

    // Show success message if valid
    if (valid) {
        successMessage.style.display = "block";
        setTimeout(() => {
            successMessage.style.display = "none";
            document.getElementById("contactForm").reset();
        }, 3000);
    }
});

// Helper Functions
function showError(input, message) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector(".error-message");
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}

function hideError(input) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector(".error-message");
    errorMessage.style.display = "none";
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
