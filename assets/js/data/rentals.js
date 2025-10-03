const rentalsData = {
    'car-rental-marrakech': {
        type: 'cars',
        title: 'Car Rental in Marrakech',
        subtitle: 'Explore Marrakech and beyond at your own pace with our reliable car rental service.',
        heroImage: '../assets/images/tours/marrakech.jpeg',
        mainImage: '../assets/images/tours/marrakech1.jpeg',
        galleryImages: [
            '../assets/images/tours/marrakech.jpeg',
            '../assets/images/tours/marrakech1.jpeg',
            '../assets/images/tours/marrakech3.jpeg'
        ],
        pricing: {
            daily: 50,
            weekly: 300
        },
        price: 50,
        duration: 'Per day',
        location: 'Marrakech',
        groupSize: 'Various car types',
        rating: 4.8,
        reviews: 75,
        description: `
            <h3>Overview</h3>
            <p>Our car rental service in Marrakech offers a wide range of vehicles to suit your travel needs, from compact cars for city exploration to SUVs for family adventures. Enjoy the freedom to discover Morocco at your own rhythm.</p>
            <p>All our vehicles are well-maintained, air-conditioned, and come with comprehensive insurance. We offer flexible pickup and drop-off options, including at Marrakech Menara Airport.</p>
            <p>Whether you're planning a desert excursion, a trip to the Atlas Mountains, or simply want to navigate the city comfortably, our car rental service provides convenience and peace of mind.</p>
        `,
        includes: [
            'Unlimited mileage',
            'Comprehensive insurance',
            '24/7 roadside assistance',
            'Free cancellation up to 24 hours'
        ],
        bring: [
            'Valid driving license',
            'Passport or ID card',
            'Credit card for deposit'
        ],
        availability: 'Daily',
        additionalInfo: {
            'Minimum Age': '21 years old',
            'Driver Requirements': 'Minimum 2 years driving experience',
            'Language': 'English, French, Arabic',
            'Confirmation': 'Immediate'
        },
        relatedPrograms: ['atlas-mountains', 'essaouira', 'zagora-desert']
    },
    'scooter-rental-essaouira': {
        type: 'bikes',
        title: 'Scooter Rental in Essaouira',
        subtitle: 'Zip through the charming streets of Essaouira and along its scenic coastline on a scooter.',
        heroImage: '../assets/images/destinations/essaouira-large.jpg',
        mainImage: '../assets/images/destinations/essaouira-large.jpg',
        galleryImages: [
            '../assets/images/destinations/essaouira-large.jpg',
            '../assets/images/activities/quad.jpg',
            '../assets/images/activities/camel.jpeg'
        ],
        pricing: {
            daily: 30,
            halfDay: 20
        },
        price: 30,
        duration: 'Per day',
        location: 'Essaouira',
        groupSize: '1-2 people per scooter',
        rating: 4.7,
        reviews: 50,
        description: `
            <h3>Overview</h3>
            <p>Discover the coastal beauty of Essaouira with our convenient scooter rental service. Perfect for exploring the medina, reaching distant beaches, or simply enjoying the sea breeze.</p>
            <p>Our scooters are easy to ride and come with helmets for your safety. Experience the freedom of two wheels and uncover hidden gems around this picturesque city.</p>
            <p>Whether you're looking for a quick ride to a surf spot or a leisurely tour of the surroundings, a scooter is an ideal way to get around Essaouira.</p>
        `,
        includes: [
            'Helmet',
            'Full tank of fuel (return full)',
            'Basic insurance'
        ],
        bring: [
            'Valid driving license (motorcycle endorsement may be required depending on scooter size)',
            'Passport or ID card'
        ],
        availability: 'Daily',
        additionalInfo: {
            'Minimum Age': '18 years old',
            'Driver Requirements': 'Experience with scooters recommended',
            'Language': 'English, French, Arabic',
            'Confirmation': 'Immediate'
        },
        relatedPrograms: ['essaouira', 'camel-ride', 'quad-biking']
    },
    'city-bike-marrakech': {
        type: 'bikes',
        title: 'City Bike Rental Marrakech',
        subtitle: 'Explore the vibrant streets of Marrakech on a comfortable city bike.',
        heroImage: '../assets/images/activities/cooking-class.jpg',
        mainImage: '../assets/images/activities/cooking-class.jpg',
        galleryImages: [
            '../assets/images/activities/cooking-class.jpg',
            '../assets/images/activities/quad.jpg',
            '../assets/images/activities/camel.jpeg'
        ],
        pricing: {
            daily: 15,
            halfDay: 10
        },
        price: 15,
        duration: 'Per day',
        location: 'Marrakech',
        groupSize: '1 person per bike',
        rating: 4.5,
        reviews: 30,
        description: `
            <h3>Overview</h3>
            <p>Rent a city bike and discover Marrakech at your own pace. Our comfortable bikes are perfect for navigating the city's bustling streets and exploring its hidden gems.</p>
            <p>Includes helmet, lock, and a map of popular cycling routes. Enjoy the freedom and flexibility of cycling through the Red City.</p>
        `,
        includes: [
            'City bike rental',
            'Helmet and lock',
            'Map of Marrakech cycling routes'
        ],
        bring: [
            'Valid ID',
            'Comfortable clothing and shoes'
        ],
        availability: 'Daily',
        additionalInfo: {
            'Minimum Age': '12 years old',
            'Language': 'English, French, Arabic',
            'Confirmation': 'Immediate'
        },
        relatedPrograms: ['marrakech-city-tour']
    },
    'luxury-villa-palmeraie': {
        type: 'homes',
        title: 'Luxury Villa Rental Palmeraie',
        subtitle: 'Indulge in a luxurious stay at a private villa in Marrakech\'s exclusive Palmeraie.',
        heroImage: '../assets/images/rentals/villa-sample.jpg',
        mainImage: '../assets/images/rentals/villa-sample.jpg',
        galleryImages: [
            '../assets/images/rentals/villa-sample.jpg',
            '../assets/images/rentals/riad-sample.jpg',
            '../assets/images/activities/desert_camping.jpg'
        ],
        pricing: {
            nightly: 250,
            weekly: 1500
        },
        price: 250,
        duration: 'Per night',
        location: 'Palmeraie, Marrakech',
        groupSize: 'Up to 10 guests',
        rating: 5.0,
        reviews: 45,
        description: `
            <h3>Overview</h3>
            <p>Experience unparalleled luxury in one of our exquisite private villas located in the serene Palmeraie area of Marrakech. Perfect for families or groups seeking privacy, comfort, and world-class amenities.</p>
            <p>Each villa features a private swimming pool, lush gardens, spacious living areas, and dedicated staff including a chef and housekeeper. Enjoy bespoke services and a tranquil retreat just minutes from the city center.</p>
        `,
        includes: [
            'Private villa with pool',
            'Daily housekeeping',
            'Concierge service',
            'Breakfast included'
        ],
        bring: [
            'Personal belongings',
            'Swimwear'
        ],
        availability: 'Year-round',
        additionalInfo: {
            'Check-in': '3:00 PM',
            'Check-out': '11:00 AM',
            'Language': 'English, French, Arabic',
            'Confirmation': 'Immediate'
        },
        relatedPrograms: ['marrakech-city-tour', 'cooking-class']
    }
};

// Export the data
// This allows other scripts to import and use this data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = rentalsData;
} else {
    window.rentalsData = rentalsData;
}