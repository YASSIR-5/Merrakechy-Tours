// Fixed checkout.js - matches your HTML structure

document.addEventListener('DOMContentLoaded', function() {
    console.log('=== CHECKOUT DEBUG ===');
    
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const id = urlParams.get('id');
    
    console.log('URL:', window.location.href);
    console.log('Params:', { category, id });
    
    // Load program data
    loadProgramData(category, id);
    
    // Initialize form handlers
    initializeForm();
});

function loadProgramData(category, id) {
    let programData = null;
    
    // Find program data based on category
    try {
        if (category === 'activity' && typeof activitiesData !== 'undefined') {
            programData = activitiesData[id];
        } else if (category === 'tour' && typeof toursData !== 'undefined') {
            programData = toursData[id];
        } else if (category === 'transportation' && typeof transportationData !== 'undefined') {
            programData = transportationData[id];
        }
        
        if (programData) {
            console.log('Program found:', programData.title);
            displayProgramInfo(programData, category, id);
        } else {
            console.log('Program not found!');
            showError();
        }
        
    } catch (error) {
        console.error('Error loading program:', error);
        showError();
    }
}

function displayProgramInfo(data, category, id) {
    // Update program name in header
    const programNameEl = document.getElementById('program-name');
    if (programNameEl) {
        programNameEl.textContent = data.title;
        console.log('Updated program name');
    }
    
    // Update program image
    const programImageEl = document.getElementById('program-image');
    if (programImageEl && data.mainImage) {
        programImageEl.src = data.mainImage;
        programImageEl.alt = data.title;
        programImageEl.style.display = 'block';
        console.log('Updated program image:', data.mainImage);
    } else if (programImageEl) {
        // Fallback image if no image is available
        programImageEl.src = '../assets/images/hero/slide1.jpg';
        programImageEl.alt = 'Morocco Tour';
        programImageEl.style.display = 'block';
    }
    
    // Update hidden form fields
    document.getElementById('category').value = category;
    document.getElementById('program-id').value = id;
    document.getElementById('program-price').value = data.price || 0;
    
    // Update booking summary
    const summaryProgram = document.getElementById('summary-program');
    if (summaryProgram) {
        summaryProgram.textContent = data.title;
    }
    
    const summaryPrice = document.getElementById('summary-price');
    if (summaryPrice) {
        summaryPrice.textContent = data.price || 0;
    }
    
    // Calculate initial total
    updateTotalPrice(data.price || 0);
    
    console.log('Program info displayed successfully');
}

function showError() {
    const programNameEl = document.getElementById('program-name');
    const summaryProgram = document.getElementById('summary-program');
    
    if (programNameEl) {
        programNameEl.textContent = 'Program Not Found';
    }
    
    if (summaryProgram) {
        summaryProgram.textContent = 'Program Not Found';
    }
}

function initializeForm() {
    // Initialize enhanced date picker FIRST
    addDatePickerCSS();
    initializeDatePicker();
    
    // Handle participant count changes
    const adultsSelect = document.getElementById('adults');
    const childrenSelect = document.getElementById('children');
    
    if (adultsSelect) {
        adultsSelect.addEventListener('change', updateParticipants);
    }
    
    if (childrenSelect) {
        childrenSelect.addEventListener('change', updateParticipants);
    }
    
    // Handle date changes (keep your existing code)
    const dateInput = document.getElementById('date');
    if (dateInput) {
        dateInput.addEventListener('change', function() {
            const summaryDate = document.getElementById('summary-date');
            if (summaryDate) {
                summaryDate.textContent = this.value || 'Select a date';
            }
        });
    }
    
    // Initial participant update
    updateParticipants();
}

function updateParticipants() {
    const adultsSelect = document.getElementById('adults');
    const childrenSelect = document.getElementById('children');
    const summaryParticipants = document.getElementById('summary-participants');
    
    if (adultsSelect && childrenSelect && summaryParticipants) {
        const adults = parseInt(adultsSelect.value) || 2;
        const children = parseInt(childrenSelect.value) || 0;
        
        summaryParticipants.textContent = `${adults} adult${adults !== 1 ? 's' : ''}, ${children} child${children !== 1 ? 'ren' : ''}`;
        
        // Update total price
        const basePrice = parseFloat(document.getElementById('program-price').value) || 0;
        updateTotalPrice(basePrice);
    }
}

function updateTotalPrice(basePrice) {
    const adultsSelect = document.getElementById('adults');
    const childrenSelect = document.getElementById('children');
    const summaryTotal = document.getElementById('summary-total');
    
    if (adultsSelect && childrenSelect && summaryTotal) {
        const adults = parseInt(adultsSelect.value) || 2;
        const children = parseInt(childrenSelect.value) || 0;
        
        // Calculate total (children get 50% discount)
        const adultTotal = basePrice * adults;
        const childrenTotal = basePrice * children * 0.5;
        const totalPrice = adultTotal + childrenTotal;
        
        summaryTotal.textContent = totalPrice.toFixed(2);
        
        console.log('Price calculation:', {
            basePrice,
            adults,
            children,
            adultTotal,
            childrenTotal,
            totalPrice
        });
    }
}

// ===== ADD THESE TWO NEW FUNCTIONS =====

function initializeDatePicker() {
    const dateInput = document.getElementById('date');
    if (!dateInput) return;
    
    console.log('Initializing date picker...');
    
    // Set minimum date to today
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    dateInput.min = todayString;
    
    // Ensure it's a date input
    dateInput.type = 'date';
    
    // Add enhanced styling
    dateInput.classList.add('enhanced-date-input');
    
    // Wrap in container for icon (only if not already wrapped)
    if (!dateInput.parentElement.classList.contains('date-input-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'date-input-wrapper';
        dateInput.parentNode.insertBefore(wrapper, dateInput);
        wrapper.appendChild(dateInput);
        
        // Add calendar icon
        const calendarIcon = document.createElement('i');
        calendarIcon.className = 'fas fa-calendar-alt date-input-icon';
        wrapper.appendChild(calendarIcon);
        
        // Make icon clickable
        calendarIcon.addEventListener('click', function() {
            dateInput.focus();
            if (dateInput.showPicker) {
                dateInput.showPicker();
            }
        });
        
        console.log('Date picker wrapper and icon added');
    }
    
    // Add validation
    dateInput.addEventListener('change', function() {
        const selectedDate = new Date(this.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            alert('Please select a future date');
            this.value = '';
            return;
        }
        
        // Update summary with formatted date
        const summaryDate = document.getElementById('summary-date');
        if (summaryDate) {
            const formattedDate = selectedDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            summaryDate.textContent = formattedDate;
        }
        
        console.log('Date selected:', this.value);
    });
    
    // Focus event - try to show picker on supported browsers
    dateInput.addEventListener('focus', function() {
        if (this.showPicker && !this.value) {
            setTimeout(() => {
                if (this.showPicker) {
                    this.showPicker();
                }
            }, 100);
        }
    });
}

function addDatePickerCSS() {
    // Check if styles already added
    if (document.getElementById('date-picker-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'date-picker-styles';
    style.textContent = `
        .date-input-wrapper {
            position: relative;
            display: block;
            width: 100%;
        }
        
        .enhanced-date-input {
            width: 100%;
            padding: 12px 40px 12px 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
            font-family: inherit;
            background-color: #fff;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .enhanced-date-input:focus {
            outline: none;
            border-color: #E57C23;
            box-shadow: 0 0 0 3px rgba(229, 124, 35, 0.2);
        }
        
        .date-input-icon {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: #E57C23;
            cursor: pointer;
            font-size: 16px;
            transition: color 0.3s ease;
        }
        
        .date-input-icon:hover {
            color: #d06a1e;
        }
        
        /* Hide default calendar icon in WebKit browsers */
        .enhanced-date-input::-webkit-calendar-picker-indicator {
            opacity: 0;
            position: absolute;
            right: 0;
            width: 40px;
            height: 100%;
            cursor: pointer;
        }
        
        /* Mobile responsive */
        @media (max-width: 768px) {
            .enhanced-date-input {
                padding: 14px 45px 14px 15px;
                font-size: 16px; /* Prevents zoom on iOS */
            }
            
            .date-input-icon {
                right: 15px;
                font-size: 18px;
            }
        }
    `;
    
    document.head.appendChild(style);
    console.log('Date picker CSS added');
}