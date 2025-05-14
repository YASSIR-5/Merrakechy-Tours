// assets/js/details.js

document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const id = urlParams.get('id');
    
    // Get data based on category
    let programData;
    
    switch(category) {
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
        case 'destination':
            if (typeof destinationsData !== 'undefined' && destinationsData[id]) {
                programData = destinationsData[id];
            }
            break;
        default:
            console.error('Invalid category or category not specified');
    }
    
    // If program data is found, populate the page
    if (programData) {
        loadProgramDetails(programData, category, id);
    } else {
        handleProgramNotFound();
    }
    
    // Function to load program details into the page
    function loadProgramDetails(data, category, id) {
        // Set hero section
        document.getElementById('program-hero').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${data.heroImage}')`;
        document.getElementById('program-title').textContent = data.title;
        document.getElementById('program-subtitle').textContent = data.subtitle;
        
        // Set main program image
        document.getElementById('program-image').src = data.mainImage;
        document.getElementById('program-image').alt = data.title;
        
        // Set meta information
        const metaHtml = `
            <div class="meta-item"><i class="far fa-clock"></i> Duration: ${data.duration}</div>
            <div class="meta-item"><i class="fas fa-map-marker-alt"></i> Location: ${data.location}</div>
            <div class="meta-item"><i class="fas fa-users"></i> Group Size: ${data.groupSize}</div>
            <div class="meta-item"><i class="fas fa-star"></i> Rating: ${data.rating} (${data.reviews} reviews)</div>
        `;
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
        } else {
            // Hide itinerary section if no itinerary
            document.getElementById('program-itinerary').style.display = 'none';
        }
        
        // Set inclusions
        let includesHtml = '';
        data.includes.forEach(item => {
            includesHtml += `<li><i class="fas fa-check"></i> ${item}</li>`;
        });
        document.getElementById('program-includes').innerHTML = includesHtml;
        
        // Set what to bring
        let bringHtml = '';
        data.bring.forEach(item => {
            bringHtml += `<li><i class="fas fa-check"></i> ${item}</li>`;
        });
        document.getElementById('program-bring').innerHTML = bringHtml;
        
        // Set price
        document.getElementById('program-price').textContent = data.price;
        
        // Set price unit if it exists
        if (data.priceUnit) {
            document.getElementById('price-unit').textContent = data.priceUnit;
        }
        
        // Set booking link
        document.getElementById('booking-link').href = `checkout.html?category=${category}&id=${id}`;
        
        // Set availability
        document.getElementById('program-availability').textContent = data.availability;
        
        // Set additional information
        let additionalHtml = '';
        for (const [key, value] of Object.entries(data.additionalInfo)) {
            additionalHtml += `
                <div class="sidebar-meta-item">
                    <span>${key}:</span>
                    <span>${value}</span>
                </div>
            `;
        }
        document.getElementById('program-additional').innerHTML = additionalHtml;
        
        // Set related programs
        loadRelatedPrograms(data.relatedPrograms, category);
    }
    
    // Function to load related programs
    function loadRelatedPrograms(relatedIds, currentCategory) {
        let relatedHtml = '';
        
        // Get the appropriate data source based on category
        let dataSource;
        switch(currentCategory) {
            case 'activity':
                dataSource = activitiesData;
                break;
            case 'tour':
                dataSource = toursData;
                break;
            case 'transportation':
                dataSource = transportationData;
                break;
            case 'destination':
                dataSource = destinationsData;
                break;
        }
        
        // Create HTML for each related program
        if (dataSource) {
            relatedIds.forEach(relatedId => {
                if (dataSource[relatedId]) {
                    const related = dataSource[relatedId];
                    relatedHtml += `
                        <div class="tour-card">
                            <div class="tour-img">
                                <img src="${related.mainImage}" alt="${related.title}">
                            </div>
                            <div class="tour-content">
                                <div class="tour-info">
                                    <span><i class="far fa-clock"></i> ${related.duration}</span>
                                    <span><i class="fas fa-tag"></i> From $${related.price}</span>
                                </div>
                                <h3>${related.title}</h3>
                                <p>${related.subtitle}</p>
                                <a href="details.html?category=${currentCategory}&id=${relatedId}" class="btn btn-outline">View Details</a>
                            </div>
                        </div>
                    `;
                }
            });
        }
        
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