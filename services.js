document.addEventListener('DOMContentLoaded', function() {
    const categorySelect = document.getElementById('category');
    const groceryItemsGroup = document.getElementById('grocery-items-group');
    const groceryItemsSelect = document.getElementById('grocery-items');
    const serviceForm = document.getElementById('service-form');
    const providersList = document.getElementById('providers-list');

    // Show or hide grocery items based on category selection
    categorySelect.addEventListener('change', function() {
        const selectedCategory = categorySelect.value;
        if (selectedCategory === 'groceries') {
            groceryItemsGroup.style.display = 'block'; // Show grocery items
        } else {
            groceryItemsGroup.style.display = 'none'; // Hide grocery items
        }
    });

    // Handle form submission for both services and groceries
    serviceForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const category = categorySelect.value;
        const location = document.getElementById('location').value.trim();
        let selectedGroceryItem = groceryItemsSelect.value;
        
        providersList.innerHTML = ''; // Clear previous results

        if (category === 'groceries') {
            // Show available grocery items
            let items = getAvailableItems(selectedGroceryItem, location);
            items.forEach(item => {
                let li = document.createElement('li');
                li.textContent = `${item.name} - $${item.price}`;
                li.classList.add('provider-item');
                
                // Add "Book Now" button for each item
                let bookBtn = document.createElement('button');
                bookBtn.textContent = 'Book Now';
                bookBtn.classList.add('book-btn');
                bookBtn.addEventListener('click', function() {
                    proceedToBooking(item);
                });
                li.appendChild(bookBtn);
                
                providersList.appendChild(li);
            });
        } else {
            // Handle other services (maids, plumbers, etc.)
            let providers = getAvailableProviders(category, location);
            providers.forEach(provider => {
                let li = document.createElement('li');
                li.textContent = `${provider.name} - Contact: ${provider.phone}`;
                li.classList.add('provider-item');
                
                let bookBtn = document.createElement('button');
                bookBtn.textContent = 'Book Now';
                bookBtn.classList.add('book-btn');
                bookBtn.addEventListener('click', function() {
                    proceedToBooking(provider);
                });
                li.appendChild(bookBtn);

                providersList.appendChild(li);
            });
        }
    });

    // Simulate available grocery items based on selection
    function getAvailableItems(itemType, location) {
        // Simulated data for groceries
        const items = {
            vegetables: [{ name: 'Tomato', price: 1.99 }, { name: 'Potato', price: 0.99 }],
            fruits: [{ name: 'Apple', price: 2.49 }, { name: 'Banana', price: 1.29 }],
            dairy: [{ name: 'Milk', price: 3.49 }, { name: 'Cheese', price: 4.99 }],
            grains: [{ name: 'Rice', price: 1.29 }, { name: 'Wheat Flour', price: 0.89 }]
        };
        return items[itemType];
    }

    // Simulate available providers based on category and location
    function getAvailableProviders(category, location) {
        const providers = {
            maid: [{ name: 'Alice', phone: '123-456-7890' }, { name: 'Sarah', phone: '987-654-3210' }],
            plumber: [{ name: 'Charlie', phone: '555-123-4567' }, { name: 'David', phone: '555-987-6543' }],
            electrician: [{ name: 'Eve', phone: '555-246-8100' }, { name: 'Frank', phone: '555-135-7910' }]
        };
        return providers[category];
    }

    // Proceed to booking page
    function proceedToBooking(item) {
        alert(`You have selected ${item.name}. Proceeding to booking.`);
        // Simulate redirection to booking page
        window.location.href = 'booking.html';
    }
});
