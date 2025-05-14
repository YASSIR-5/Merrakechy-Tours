// assets/js/checkout.js

document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const id = urlParams.get('id');
    
    // Set hidden form values
    document.getElementById('category').value = category;
    document.getElementById('program-id').value = id;
    
    // Get program data
    let programData;
    switch (category) {
        case 'activity':
            if (typeof activitiesData !== 'undefined' && activitiesData[id]) {
                programData = activitiesData[id];
            }
            break;
        case 'tour':
            if (typeof toursData !== 'undefined' && toursData[id]) {
                programData = toursData[id];
            }
            break;
        case 'transportation':
            if (typeof transportationData !== 'undefined' && transportationData[id]) {
                programData = transportationData[id];
            }
            break;
        default:
            console.error('Invalid category or category not specified');
    }
    
    // If program data found, populate checkout form
    if (programData) {
        populateCheckout(programData);
    } else {
        handleProgramNotFound();
    }
    
    // Initialize date picker
    flatpickr(".datepicker", {
        minDate: "today",
        dateFormat: "Y-m-d",
        onChange: function(selectedDates, dateStr) {
            document.getElementById('summary-date').textContent = dateStr;
            updateTotalPrice();
        }
    });
    
    // Setup participant change handlers
    const adultsSelect = document.getElementById('adults');
    const childrenSelect = document.getElementById('children');
    
    if (adultsSelect && childrenSelect) {
        adultsSelect.addEventListener('change', updateParticipantsSummary);
        childrenSelect.addEventListener('change', updateParticipantsSummary);
    }
    
    // Form submission
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Generate booking number
            const bookingNumber = 'MRT-' + Math.floor(100000 + Math.random() * 900000);
            
            // Prepare booking information
            const bookingInfo = {
                bookingNumber: bookingNumber,
                category: category,
                programId: id,
                programName: programData ? programData.title : 'Unknown Program',
                date: document.getElementById('date').value,
                adults: adultsSelect.value,
                children: childrenSelect.value,
                price: document.getElementById('summary-total').textContent,
                customerName: document.getElementById('name').value,
                customerEmail: document.getElementById('email').value,
                customerPhone: document.getElementById('phone').value,
                nationality: document.getElementById('nationality').value,
                hotel: document.getElementById('hotel').value,
                specialRequests: document.getElementById('special-requests').value
            };
            
            // Store booking info for confirmation page
            localStorage.setItem('bookingInfo', JSON.stringify(bookingInfo));
            
            // Show loading state on button
            const submitBtn = checkoutForm.querySelector('button[type="submit"]');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            submitBtn.disabled = true;
            
            // Redirect to confirmation page after brief delay
            setTimeout(() => {
                window.location.href = 'booking-confirmation.html';
            }, 1500);
        });
    }
    
    // Function to populate checkout with program data
    function populateCheckout(data) {
        document.getElementById('program-name').textContent = data.title;
        document.getElementById('summary-program').textContent = data.title;
        document.getElementById('program-price').value = data.price;
        document.getElementById('summary-price').textContent = data.price;
        
        // Set initial values
        updateParticipantsSummary();
    }
    
    // Function to update participants summary
    function updateParticipantsSummary() {
        const adults = parseInt(adultsSelect.value) || 0;
        const children = parseInt(childrenSelect.value) || 0;
        
        document.getElementById('summary-participants').textContent = 
            `${adults} adult${adults !== 1 ? 's' : ''}, ${children} child${children !== 1 ? 'ren' : ''}`;
            
        updateTotalPrice();
    }
    
    // Function to update total price
    function updateTotalPrice() {
        const basePrice = parseFloat(document.getElementById('program-price').value) || 0;
        const adults = parseInt(adultsSelect.value) || 0;
        const children = parseInt(childrenSelect.value) || 0;
        const childDiscount = 0.5; // 50% discount for children
        
        const adultTotal = basePrice * adults;
        const childrenTotal = basePrice * children * childDiscount;
        const totalPrice = adultTotal + childrenTotal;
        
        document.getElementById('summary-total').textContent = totalPrice.toFixed(2);
    }
    
    // Function to handle program not found
    function handleProgramNotFound() {
        document.getElementById('program-name').textContent = 'Program Not Found';
        document.getElementById('summary-program').textContent = 'Program Not Found';
        
        // Disable form
        const form = document.getElementById('checkout-form');
        const inputs = form.querySelectorAll('input, select, textarea, button');
        inputs.forEach(input => {
            input.disabled = true;
        });
        
        // Show error message
        form.innerHTML = `
            <div class="error-message">
                <h3>Program Not Found</h3>
                <p>We're sorry, but the program you are trying to book does not exist or has been removed.</p>
                <p>Please return to our <a href="services.html">services</a> page to select a valid program.</p>
                <a href="services.html" class="btn btn-primary">Browse Programs</a>
            </div>
        `;
    }
});