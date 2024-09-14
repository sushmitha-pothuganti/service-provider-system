document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the selected item from the previous page (simulating the booking)
    const selectedItemElement = document.getElementById('selected-item');
    const selectedItem = localStorage.getItem('selectedItem');
    
    // If an item was selected, display it
    if (selectedItem) {
        selectedItemElement.textContent = selectedItem;
    } else {
        selectedItemElement.textContent = 'No item selected';
    }

    // Handle form submission for booking
    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const address = document.getElementById('address').value.trim();
        
        // Basic validation
        if (name === '' || address === '') {
            alert('Please fill in all the details.');
            return;
        }

        // Simulate saving booking details to local storage (or it could be sent to a server in a real scenario)
        localStorage.setItem('customerName', name);
        localStorage.setItem('deliveryAddress', address);

        // Redirect to payment page
        window.location.href = 'payment.html';
    });
});
