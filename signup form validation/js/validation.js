// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const confirmPasswordFeedback = document.getElementById('confirmPasswordFeedback');

    // Custom validation for password match
    function validatePasswordMatch() {
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity("Passwords do not match");
            confirmPasswordFeedback.textContent = "Passwords do not match.";
        } else {
            confirmPassword.setCustomValidity(""); // Valid
            confirmPasswordFeedback.textContent = "Please confirm your password."; // Reset to default required message
        }
    }

    password.addEventListener('input', validatePasswordMatch);
    confirmPassword.addEventListener('input', validatePasswordMatch);

    // Toggle Password Visibility Logic
    function setupPasswordToggle(toggleId, inputId) {
        const toggleBtn = document.getElementById(toggleId);
        const inputField = document.getElementById(inputId);

        if (toggleBtn && inputField) {
            toggleBtn.addEventListener('click', function () {
                // Toggle the type attribute
                const type = inputField.getAttribute('type') === 'password' ? 'text' : 'password';
                inputField.setAttribute('type', type);

                // Toggle the eye icon
                const icon = this.querySelector('i');
                icon.classList.toggle('bi-eye');
                icon.classList.toggle('bi-eye-slash');
            });
        }
    }

    setupPasswordToggle('togglePassword', 'password');
    setupPasswordToggle('toggleConfirmPassword', 'confirmPassword');

    // Bootstrap validation loop
    form.addEventListener('submit', function (event) {
        // Run custom password check one last time before submit
        validatePasswordMatch();

        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            // If valid, you might show a success message
            alert('Form submitted successfully!\nName: Ashfaaq Feroz Muhammad\nAssignment: Entri Elevate Modul End Assignment (11)');
            // event.preventDefault(); // Uncomment this if you don't want the page to reload
        }

        form.classList.add('was-validated');
    }, false);
});
