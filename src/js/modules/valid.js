export const validateForm  = () => {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        const phoneInput = document.getElementById('phone');
        const errorMessage = document.getElementById('error-message');

        const pattern = /^\+?6\d{12}$|^\+?7\d{10}$/;
        if (!pattern.test(phoneInput.value)) {
            phoneInput.setCustomValidity('Please enter a valid phone number starting with +6 (12 digits) or +7 (10 digits).');
            errorMessage.textContent = phoneInput.validationMessage;
            event.preventDefault();
        } else {
            phoneInput.setCustomValidity('');
            errorMessage.textContent = '';
        }
    });

    document.getElementById('phone').addEventListener('input', function () {
        const phoneInput = document.getElementById('phone');
        const errorMessage = document.getElementById('error-message');

        phoneInput.setCustomValidity('');
        errorMessage.textContent = '';
    });
}