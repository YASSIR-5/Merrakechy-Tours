// assets/js/checkout.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Checkout page loaded'); // Debugging
    
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const id = urlParams.get('id');
    
    // Set initial price value for testing (in case data loading fails)
    const defaultPrice = 65; // Default price if data loading fails
    
    // Get program data
    let programData;
    let programPrice = defaultPrice;
    
    try {
        switch (category) {
            case 'activity':
                if (typeof activitiesData !== 'undefined' && activitiesData[id]) {
                    programData = activitiesData[id];
                    programPrice = programData.price || defaultPrice;
                    console.log('Found activity data:', programData);
                }
                break;
            case 'tour':
                if (typeof toursData !== 'undefined' && toursData[id]) {
                    programData = toursData[id];
                    programPrice = programData.price || defaultPrice;
                    console.log('Found tour data:', programData);
                }
                break;
            case 'transportation':
                if (typeof transportationData !== 'undefined' && transportationData[id]) {
                    programData = transportationData[id];
                    programPrice = programData.price || defaultPrice;
                    console.log('Found transportation data:', programData);
                }
                break;
            default:
                console.error('Invalid category or category not specified');
        }
    } catch (error) {
        console.error('Error loading program data:', error);
    }
    
    // Directly set the price regardless of data loading
    document.getElementById('program-price').value = programPrice;
    document.getElementById('summary-price').textContent = programPrice;
    console.log('Set price to:', programPrice);
    
    // Initialize date picker
    try {
        flatpickr(".datepicker", {
            minDate: "today",
            dateFormat: "Y-m-d",
            onChange: function(selectedDates, dateStr) {
                document.getElementById('summary-date').textContent = dateStr;
                console.log('Date selected:', dateStr);
                calculateTotalPrice();
            }
        });
    } catch (error) {
        console.error('Error initializing date picker:', error);
    }
    
    // Setup participant change handlers
    const adultsSelect = document.getElementById('adults');
    const childrenSelect = document.getElementById('children');
    
    if (adultsSelect && childrenSelect) {
        adultsSelect.addEventListener('change', function() {
            updateParticipantsSummary();
            console.log('Adults changed:', adultsSelect.value);
        });
        
        childrenSelect.addEventListener('change', function() {
            updateParticipantsSummary();
            console.log('Children changed:', childrenSelect.value);
        });
        
        // Initial update
        updateParticipantsSummary();
    }
    
    // Direct calculation function
    function calculateTotalPrice() {
        try {
            const basePrice = parseFloat(document.getElementById('program-price').value) || defaultPrice;
            const adults = parseInt(adultsSelect.value) || 0;
            const children = parseInt(childrenSelect.value) || 0;
            const childDiscount = 0.5; // 50% discount for children
            
            const adultTotal = basePrice * adults;
            const childrenTotal = basePrice * children * childDiscount;
            const totalPrice = adultTotal + childrenTotal;
            
            console.log('Calculation:', basePrice, adults, children, adultTotal, childrenTotal, totalPrice);
            
            // Update the total price display
            document.getElementById('summary-total').textContent = totalPrice.toFixed(2);
        } catch (error) {
            console.error('Error calculating price:', error);
        }
    }
    
    // Function to update participants summary
    function updateParticipantsSummary() {
        try {
            const adults = parseInt(adultsSelect.value) || 0;
            const children = parseInt(childrenSelect.value) || 0;
            
            document.getElementById('summary-participants').textContent = 
                `${adults} adult${adults !== 1 ? 's' : ''}, ${children} child${children !== 1 ? 'ren' : ''}`;
                
            // Calculate total price after changing participants
            calculateTotalPrice();
        } catch (error) {
            console.error('Error updating participants:', error);
        }
    }
    
    // Form submission
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        // Update form action to booking-confirmation.html directly for now
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get final price
            const finalPrice = document.getElementById('summary-total').textContent;
            
            // Generate booking number
            const bookingNumber = 'MRT-' + Math.floor(100000 + Math.random() * 900000);
            
            // Prepare booking information
            const bookingInfo = {
                bookingNumber: bookingNumber,
                category: category || 'activity',
                programId: id || 'quad-biking',
                programName: programData ? programData.title : 'Agafay Desert Quad Biking Adventure',
                date: document.getElementById('date').value || '2025-05-15',
                adults: adultsSelect.value,
                children: childrenSelect.value,
                price: finalPrice,
                customerName: document.getElementById('name').value || 'Guest',
                customerEmail: document.getElementById('email').value || 'guest@example.com',
                customerPhone: document.getElementById('phone').value || '+123456789',
                nationality: document.getElementById('nationality').value || '',
                hotel: document.getElementById('hotel').value || '',
                specialRequests: document.getElementById('special-requests').value || ''
            };
            
            // Store booking info for confirmation page
            localStorage.setItem('bookingInfo', JSON.stringify(bookingInfo));
            console.log('Stored booking info:', bookingInfo);
            
            // Redirect to confirmation page
            window.location.href = 'booking-confirmation.html';
        });
    }
    
    // Manually calculate price at startup
    calculateTotalPrice();
    console.log('Initial price calculation done');
});