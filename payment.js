document.addEventListener('DOMContentLoaded', function () {
    const paymentForm = document.getElementById('payment-form');
    const creditCardOption = document.getElementById('credit-card');
    const creditCardForm = document.getElementById('credit-card-form');
    const cardholderNameInput = document.getElementById('cardholder-name');
    const cardNumberInput = document.getElementById('card-number');

    // Show Credit Card form if Credit Card option is selected
    document.querySelectorAll('input[name="payment-method"]').forEach(function (input) {
        input.addEventListener('change', function () {
            if (this.id === 'credit-card') {
                creditCardForm.style.display = 'block';
            } else {
                creditCardForm.style.display = 'none';
            }
        });
    });

    // Prevent numeric input for cardholder name
    cardholderNameInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    });

    // Prevent alphabetic input for card number
    cardNumberInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '').replace(/(.{4})/g, '$1-').trim();
        if (this.value.length > 19) {
            this.value = this.value.slice(0, 19);
        }
    });

    // Validate and process the payment form
    paymentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const cardholderName = cardholderNameInput.value.trim();
        const cardNumber = cardNumberInput.value.trim();
        const expiryDate = document.getElementById('expiry-date').value.trim();
        const cvv = document.getElementById('cvv').value.trim();

        // Add validation and submission logic here
        alert('Payment processed successfully!');
    });
});

