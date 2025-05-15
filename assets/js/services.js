// assets/js/services.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Services page loaded');
    
    // Handle main services filter tabs
    const filterBtns = document.querySelectorAll('.filter-btn');
    const contentSections = document.querySelectorAll('.content-section');
    
    // Add click event listener to each filter button
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Filter button clicked:', this.dataset.filter);
            
            // Remove active class from all buttons
            filterBtns.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filter = this.dataset.filter;
            
            // Hide all content sections
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show the selected content section
            const targetSection = document.getElementById(filter);
            if (targetSection) {
                targetSection.classList.add('active');
            } else {
                console.error('Section not found:', filter);
            }
        });
    });
    
    // Handle sub-category filter buttons
    const contentFilterBtns = document.querySelectorAll('.content-filter-btn');
    
    contentFilterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Content filter button clicked:', this.dataset.category);
            
            // Find the parent content section
            const parentSection = this.closest('.content-section');
            
            // Remove active class from all buttons in this section
            parentSection.querySelectorAll('.content-filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter category
            const category = this.dataset.category;
            
            // Get all service cards in this section
            const serviceCards = parentSection.querySelectorAll('.service-card');
            
            // Show/hide service cards based on category
            serviceCards.forEach(card => {
                if (category === 'all-activities' || category === 'all-tours' || category === 'all-transportation') {
                    card.style.display = 'flex';
                } else if (card.classList.contains(category)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Initialize page based on URL hash if present
    const initializePageFromHash = () => {
        const hash = window.location.hash.substring(1); // Remove the # symbol
        if (hash) {
            // Find the button that corresponds to this hash
            const targetBtn = document.querySelector(`.filter-btn[data-filter="${hash}"]`);
            if (targetBtn) {
                targetBtn.click();
            }
        }
    };
    
    // Initialize on page load
    initializePageFromHash();
    
    // WhatsApp Button
    const whatsappButton = document.querySelector('.whatsapp-button');
    if (whatsappButton) {
        whatsappButton.addEventListener('mouseenter', () => {
            whatsappButton.style.transform = 'translateY(-10px)';
        });
        
        whatsappButton.addEventListener('mouseleave', () => {
            whatsappButton.style.transform = 'translateY(0)';
        });
    }
    
    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
