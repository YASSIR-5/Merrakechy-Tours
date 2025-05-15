// assets/js/details.js - Make sure all data types are loaded

document.addEventListener('DOMContentLoaded', function() {
    console.log('Details page loaded');
    
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const id = urlParams.get('id');
    
    console.log('Category:', category, 'ID:', id);
    
    // Get data based on category
    let programData;
    
    try {
        switch(category) {
            case 'activity':
                if (typeof activitiesData !== 'undefined' && activitiesData[id]) {
                    programData = activitiesData[id];
                    console.log('Found activity data');
                }
                break;
            case 'tour':
                if (typeof toursData !== 'undefined' && toursData[id]) {
                    programData = toursData[id];
                    console.log('Found tour data');
                }
                break;
            case 'transportation':
                if (typeof transportationData !== 'undefined' && transportationData[id]) {
                    programData = transportationData[id];
                    console.log('Found transportation data');
                }
                break;
            case 'destination':
                if (typeof destinationsData !== 'undefined' && destinationsData[id]) {
                    programData = destinationsData[id];
                    console.log('Found destination data');
                }
                break;
            default:
                console.error('Invalid category or category not specified');
        }
    } catch (error) {
        console.error('Error loading program data:', error);
    }
    
    // If program data is found, populate the page
    if (programData) {
        loadProgramDetails(programData, category, id);
    } else {
        handleProgramNotFound();
    }
    
    // Function to load program details into the page
    function loadProgramDetails(data, category, id) {
        // Set page title
        document.title = `${data.title} | Merrakechy Tour`;
        
        // Set hero section
        document.getElementById('program-hero').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${data.heroImage}')`;
        document.getElementById('program-title').textContent = data.title;
        document.getElementById('program-subtitle').textContent = data.subtitle;
        
        // Set main program image
        document.getElementById('program-image').src = data.mainImage;
        document.getElementById('program-image').alt = data.title;
        
        // Set meta information
        let metaHtml = `
            <div class="meta-item"><i class="far fa-clock"></i> Duration: ${data.duration}</div>
            <div class="meta-item"><i class="fas fa-map-marker-alt"></i> Location: ${data.location}</div>
        `;
        
        // Only add group size and rating if applicable (e.g., not for destinations)
        if (data.groupSize) {
            metaHtml += `<div class="meta-item"><i class="fas fa-users"></i> Group Size: ${data.groupSize}</div>`;
        }
        
        if (data.rating) {
            metaHtml += `<div class="meta-item"><i class="fas fa-star"></i> Rating: ${data.rating} (${data.reviews} reviews)</div>`;
        }
        
        document.getElementById('program-meta').innerHTML = metaHtml;
        
        // Set description
        document.getElementById('program-description').innerHTML = data.description;
        
        // Set itinerary if it exists
        if (data.itinerary) {
            let itineraryHtml = '<h3>Itinerary</h3>';
            
            data.itinerary.forEach(item => {
                itineraryHtml += `
                    <div class="itinerary-item">
                        <div class="itinerary-time">${item.time}</div>
                        <div class="itinerary-content">
                            <h4>${item.title}</h4>
                            <p>${item.description}</p>
                        </div>
                    </div>
                `;
            });
            
            document.getElementById('program-itinerary').innerHTML = itineraryHtml;
        } else if (data.highlights) {
            // For destinations, show highlights instead of itinerary
            let highlightsHtml = '<h3>Highlights</h3>';
            
            data.highlights.forEach(item => {
                highlightsHtml += `
                    <div class="itinerary-item">
                        <div class="itinerary-time">${item.title}</div>
                        <div class="itinerary-content">
                            <p>${item.description}</p>
                        </div>
                    </div>
                `;
            });
            
            document.getElementById('program-itinerary').innerHTML = highlightsHtml;
        } else {
            // Hide itinerary section if no itinerary
            document.getElementById('program-itinerary').style.display = 'none';
        }
        
        // Set inclusions if applicable (not for destinations)
        if (data.includes) {
            let includesHtml = '';
            data.includes.forEach(item => {
                includesHtml += `<li><i class="fas fa-check"></i> ${item}</li>`;
            });
            document.getElementById('program-includes').innerHTML = includesHtml;
        } else {
            // For destinations or other types without inclusions
            document.querySelector('.tour-detail-features h3:first-child').style.display = 'none';
            document.getElementById('program-includes').style.display = 'none';
        }
        
        // Set what to bring if applicable
        if (data.bring) {
            let bringHtml = '';
            data.bring.forEach(item => {
                bringHtml += `<li><i class="fas fa-check"></i> ${item}</li>`;
            });
            document.getElementById('program-bring').innerHTML = bringHtml;
        } else if (data.bestTimeToVisit) {
            // For destinations, show best time to visit instead
            document.querySelector('.tour-detail-features h3:last-child').textContent = 'Best Time to Visit';
            document.getElementById('program-bring').innerHTML = `<li><i class="fas fa-calendar-alt"></i> ${data.bestTimeToVisit}</li>`;
        } else {
            // Hide section if not applicable
            document.querySelector('.tour-detail-features h3:last-child').style.display = 'none';
            document.getElementById('program-bring').style.display = 'none';
        }
        
        // Set price if applicable (not for destinations)
        if (data.price) {
            document.getElementById('program-price').textContent = data.price;
            
            // Set price unit if it exists
            if (data.priceUnit) {
                document.getElementById('price-unit').textContent = data.priceUnit;
            }
            
            // For bookable items, show the booking button
            document.getElementById('booking-link').href = `checkout.html?category=${category}&id=${id}`;
        } else {
            // For destinations, hide the price and booking section
            document.querySelector('.sidebar-box:first-child').style.display = 'none';
        }
        
        // Set availability if applicable
        if (data.availability) {
            document.getElementById('program-availability').textContent = data.availability;
        } else if (category === 'destination') {
            document.querySelector('.sidebar-box:nth-child(2) h3').textContent = 'Travel Info';
            document.getElementById('program-availability').textContent = 'Contact us for customized tours to this destination';
        } else {
            // Hide section if not applicable
            document.querySelector('.sidebar-box:nth-child(2)').style.display = 'none';
        }
        
        // Set additional information
        let additionalHtml = '';
        if (data.additionalInfo) {
            for (const [key, value] of Object.entries(data.additionalInfo)) {
                additionalHtml += `
                    <div class="sidebar-meta-item">
                        <span>${key}:</span>
                        <span>${value}</span>
                    </div>
                `;
            }
        }
        document.getElementById('program-additional').innerHTML = additionalHtml;
        
        // Set related programs
        if (data.relatedPrograms && data.relatedPrograms.length > 0) {
            loadRelatedPrograms(data.relatedPrograms, category);
        } else {
            document.querySelector('.related-tours').style.display = 'none';
        }
    }
    
    // Function to load related programs
    function loadRelatedPrograms(relatedIds, currentCategory) {
        let relatedHtml = '';
        
        // Create HTML for each related program
        relatedIds.forEach(relatedId => {
            let relatedData = null;
            let relatedCategory = currentCategory;
            
            // Check all data sources to find the related program
            if (typeof activitiesData !== 'undefined' && activitiesData[relatedId]) {
                relatedData = activitiesData[relatedId];
                relatedCategory = 'activity';
            } else if (typeof toursData !== 'undefined' && toursData[relatedId]) {
                relatedData = toursData[relatedId];
                relatedCategory = 'tour';
            } else if (typeof transportationData !== 'undefined' && transportationData[relatedId]) {
                relatedData = transportationData[relatedId];
                relatedCategory = 'transportation';
            } else if (typeof destinationsData !== 'undefined' && destinationsData[relatedId]) {
                relatedData = destinationsData[relatedId];
                relatedCategory = 'destination';
            }
            
            if (relatedData) {
                const priceText = relatedData.price ? `From $${relatedData.price}` : '';
                const priceDisplay = priceText ? `<span><i class="fas fa-tag"></i> ${priceText}</span>` : '';
                
                relatedHtml += `
                    <div class="tour-card">
                        <div class="tour-img">
                            <img src="${relatedData.mainImage}" alt="${relatedData.title}">
                        </div>
                        <div class="tour-content">
                            <div class="tour-info">
                                <span><i class="far fa-clock"></i> ${relatedData.duration}</span>
                                ${priceDisplay}
                            </div>
                            <h3>${relatedData.title}</h3>
                            <p>${relatedData.subtitle}</p>
                            <a href="details.html?category=${relatedCategory}&id=${relatedId}" class="btn btn-outline">View Details</a>
                        </div>
                    </div>
                `;
            }
        });
        
        document.getElementById('related-programs').innerHTML = relatedHtml;
    }
    
    // Function to handle program not found
    function handleProgramNotFound() {
        document.getElementById('program-title').textContent = 'Program Not Found';
        document.getElementById('program-subtitle').textContent = 'The program you are looking for could not be found.';
        
        // Hide main content sections
        document.querySelector('.tour-detail-container').innerHTML = `
            <div class="not-found-message">
                <h2>We couldn't find this program</h2>
                <p>We're sorry, but the program you are looking for does not exist or has been removed.</p>
                <p>Please browse our <a href="services.html">services</a> to find another program that interests you.</p>
            </div>
        `;
        
        // Hide related programs section
        document.querySelector('.related-tours').style.display = 'none';
    }
});