// assets/js/data/transportation.js

// Transportation services data
const transportationData = {
    'airport-transfer': {
        title: 'Airport Transfer Service',
        subtitle: 'Comfortable and reliable transfers between Marrakech Menara Airport and your accommodation',
        heroImage: '../assets/images/tours/zagora-desert-hero.jpg', // Use a placeholder image for now
        mainImage: '../assets/images/tours/zagora-desert.jpg', // Use a placeholder image for now
        price: 25,
        duration: 'Approximately 20-30 minutes',
        location: 'Marrakech',
        groupSize: '1-4 people per standard vehicle',
        rating: 4.8,
        reviews: 215,
        description: `
            <h3>Service Overview</h3>
            <p>Avoid the hassle and uncertainty of finding transportation upon arrival in Marrakech with our reliable airport transfer service. We provide comfortable, air-conditioned vehicles and professional English-speaking drivers who will ensure a smooth and stress-free journey between Marrakech Menara Airport and your accommodation.</p>
            <p>Our service includes meet and greet at the airport, with your driver waiting in the arrivals hall holding a sign with your name. For departures, your driver will pick you up from your accommodation at the agreed time, ensuring you reach the airport with plenty of time for your flight.</p>
            <p>All our vehicles are modern, well-maintained, and equipped with air conditioning for your comfort. We offer 24/7 service, so no matter when your flight arrives or departs, we have you covered.</p>
        `,
        includes: [
            'Meet and greet service at the airport (for arrivals)',
            'Private transportation in air-conditioned vehicle',
            'Professional English-speaking driver',
            'Bottle of water per passenger',
            'All taxes and service fees'
        ],
        bring: [
            'Your flight details (for airport pickup)',
            'Your accommodation address in Marrakech',
            'A working mobile phone for communication if needed'
        ],
        availability: '24/7, 365 days a year',
        additionalInfo: {
            'Vehicle Types': 'Standard sedan, minivan, or minibus depending on group size',
            'Luggage Allowance': '1 checked bag and 1 carry-on per person (additional luggage may require larger vehicle)',
            'Waiting Time': 'Up to 1 hour after flight landing at no extra charge',
            'Cancellation': 'Free up to 24h before'
        },
        priceUnit: '/vehicle (up to 4 people)',
        relatedPrograms: ['private-driver', 'intercity-transfer', 'camel-ride']
    },
    
    'private-driver': {
        title: 'Private Car with Driver',
        subtitle: 'Explore Morocco at your own pace with a professional driver and comfortable vehicle',
        heroImage: '../assets/images/tours/ourika-valley-hero.jpg', // Use a placeholder image for now
        mainImage: '../assets/images/tours/ourika-valley.jpg', // Use a placeholder image for now
        price: 85,
        duration: 'Full day (up to 10 hours)',
        location: 'Marrakech and surrounding areas',
        groupSize: '1-4 people per standard vehicle',
        rating: 4.9,
        reviews: 78,
        description: `
            <h3>Service Overview</h3>
            <p>Explore Morocco at your own pace with our private car and professional driver service. This flexible transportation option gives you the freedom to create your own itinerary while enjoying the comfort of a modern, air-conditioned vehicle and the knowledge of an experienced local driver.</p>
            <p>Whether you want to discover Marrakech's hidden gems, visit multiple attractions in one day, or venture to nearby towns and natural landmarks, our service provides a convenient and stress-free way to travel. Your driver can suggest routes and stops based on your interests, or simply follow your pre-planned itinerary.</p>
            <p>All our drivers speak fluent English and have extensive knowledge of Morocco's geography, culture, and attractions. They can provide insights about the places you visit and assist with practical matters such as finding restaurants, shopping opportunities, or photo stops.</p>
        `,
        includes: [
            'Private transportation in air-conditioned vehicle',
            'Professional English-speaking driver',
            'Pickup and drop-off at your accommodation',
            'Fuel and all transportation costs',
            'Bottled water',
            'All taxes and service fees'
        ],
        bring: [
            'Comfortable clothing appropriate for your planned activities',
            'Sun protection (hat, sunglasses, sunscreen)',
            'Camera',
            'Cash for meals, entrance fees, and personal expenses'
        ],
        availability: 'Daily, subject to availability',
        additionalInfo: {
            'Vehicle Types': 'Standard sedan, minivan, or minibus depending on group size',
            'Operating Hours': 'Flexible start time, up to 10 hours of service',
            'Customization': 'Fully customizable itinerary',
            'Cancellation': 'Free up to 48h before'
        },
        priceUnit: '/day',
        relatedPrograms: ['airport-transfer', 'intercity-transfer', 'imlil-atlas']
    },
    
    'intercity-transfer': {
        title: 'City-to-City Transfer Service',
        subtitle: 'Comfortable and direct transportation between Morocco\'s major cities and destinations',
        heroImage: '../assets/images/tours/imlil-atlas-hero.jpg', // Use a placeholder image for now
        mainImage: '../assets/images/tours/imlil-atlas.jpg', // Use a placeholder image for now
        price: 40,
        duration: 'Varies by destination',
        location: 'Various cities in Morocco',
        groupSize: '1-4 people per standard vehicle',
        rating: 4.7,
        reviews: 93,
        description: `
            <h3>Service Overview</h3>
            <p>Travel comfortably between Morocco's major cities and destinations with our reliable intercity transfer service. We provide private, direct transportation in modern, air-conditioned vehicles with professional drivers, allowing you to relax and enjoy the journey while we handle the logistics.</p>
            <p>Our service offers a convenient alternative to public transportation, giving you the flexibility to depart at your preferred time and to travel directly to your accommodation at your destination. Your driver can make short stops upon request for bathroom breaks, photo opportunities, or quick refreshments.</p>
            <p>Popular routes include Marrakech to Essaouira, Marrakech to Casablanca, Marrakech to Fes, and many more. All our vehicles are well-maintained and equipped for long-distance travel, ensuring your journey is as comfortable as possible.</p>
        `,
        itinerary: [
            {
                time: 'Example: Marrakech to Essaouira',
                title: '2.5 hours, 190 km',
                description: 'Direct route through beautiful countryside and argan tree forests.'
            },
            {
                time: 'Example: Marrakech to Casablanca',
                title: '3 hours, 240 km',
                description: 'Highway route with option for stops along the way.'
            },
            {
                time: 'Example: Marrakech to Fes',
                title: '7 hours, 530 km',
                description: 'Long-distance journey with option for lunch break and scenic stops.'
            }
        ],
        includes: [
            'Private transportation in air-conditioned vehicle',
            'Professional English-speaking driver',
            'Pickup from your accommodation at origin city',
            'Drop-off at your accommodation at destination city',
            'Fuel and all transportation costs',
            'Bottled water',
            'Short breaks upon request',
            'All taxes and service fees'
        ],
        bring: [
            'Comfortable clothing for the journey',
            'Sun protection (hat, sunglasses)',
            'Snacks for longer journeys',
            'Entertainment (books, music, etc.)',
            'Cash for meals and personal expenses'
        ],
        availability: 'Daily, 24/7, subject to availability',
        additionalInfo: {
            'Vehicle Types': 'Standard sedan, minivan, or minibus depending on group size',
            'Custom Routes': 'Available upon request',
            'Journey Time': 'Varies by destination - contact us for specific routes',
            'Cancellation': 'Free up to 48h before'
        },
        priceUnit: '/person (minimum 2 people)',
        relatedPrograms: ['airport-transfer', 'private-driver', 'zagora-2-days']
    }
};