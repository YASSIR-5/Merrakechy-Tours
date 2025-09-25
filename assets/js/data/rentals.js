// assets/js/data/rentals.js

const rentalsData = {
    // Bike Rentals
    'mountain-bike': {
        id: 'mountain-bike',
        category: 'rental',
        type: 'bike',
        title: 'Mountain Bike',
        price: 25,
        duration: 'per day',
        location: 'Marrakech',
        image: '../assets/images/rentals/mountain-bike.jpg',
        description: 'High-quality mountain bikes perfect for exploring the Atlas Mountains and countryside around Marrakech.',
        features: [
            '21-speed gear system',
            'Helmet included',
            'Lock and basic tools provided',
            'GPS route suggestions'
        ],
        rating: 4.6,
        reviews: 89,
        includes: [
            'Mountain bike rental',
            'Safety helmet',
            'Bike lock',
            'Basic repair kit',
            'Route map'
        ],
        requirements: [
            'Valid ID required',
            'Security deposit: €50',
            'Minimum age: 16 years'
        ]
    },
    'city-bike': {
        id: 'city-bike',
        category: 'rental',
        type: 'bike',
        title: 'City Bike',
        price: 15,
        duration: 'per day',
        location: 'Marrakech',
        image: '../assets/images/rentals/city-bike.jpg',
        description: 'Comfortable city bikes ideal for exploring Marrakech medina and modern districts.',
        features: [
            'Comfortable seating',
            'Basket included',
            'Easy gear system',
            'City-friendly design'
        ],
        rating: 4.4,
        reviews: 156,
        includes: [
            'City bike rental',
            'Safety helmet',
            'Bike lock',
            'Front basket',
            'City map'
        ],
        requirements: [
            'Valid ID required',
            'Security deposit: €30',
            'Minimum age: 14 years'
        ]
    },

    // Car Rentals
    'economy-car': {
        id: 'economy-car',
        category: 'rental',
        type: 'car',
        title: 'Economy Car',
        price: 35,
        duration: 'per day',
        location: 'Marrakech',
        image: '../assets/images/rentals/economy-car.jpg',
        description: 'Fuel-efficient economy cars perfect for city driving and short trips around Marrakech.',
        features: [
            'Air conditioning',
            'Manual transmission',
            'Fuel efficient',
            'Compact size'
        ],
        rating: 4.3,
        reviews: 203,
        includes: [
            'Car rental',
            'Basic insurance',
            'Unlimited mileage (local)',
            '24/7 roadside assistance'
        ],
        requirements: [
            'Valid driving license',
            'International driving permit',
            'Security deposit: €200',
            'Minimum age: 21 years'
        ]
    },
    'suv-4x4': {
        id: 'suv-4x4',
        category: 'rental',
        type: 'car',
        title: 'SUV 4x4',
        price: 85,
        duration: 'per day',
        location: 'Marrakech',
        image: '../assets/images/rentals/suv-4x4.jpg',
        mainImage: '../assets/images/rentals/suv-4x4.jpg',
        heroImage: '../assets/images/rentals/suv-4x4.jpg',
        subtitle: 'Perfect for desert and mountain adventures',
        description: 'Powerful 4x4 SUVs perfect for desert adventures and mountain excursions.',
        features: [
            '4-wheel drive',
            'Air conditioning',
            'GPS navigation',
            'High clearance'
        ],
        rating: 4.8,
        reviews: 127,
        includes: [
            'SUV 4x4 rental',
            'Comprehensive insurance',
            'GPS navigation system',
            '24/7 roadside assistance',
            'Desert driving tips'
        ],
        requirements: [
            'Valid driving license',
            'International driving permit',
            'Security deposit: €500',
            'Minimum age: 25 years'
        ],
        availability: 'Available daily with advance booking',
        groupSize: '1-7 passengers'
    },

    // Home Rentals
    'traditional-riads': {
        id: 'traditional-riads',
        category: 'rental',
        type: 'accommodation',
        title: 'Traditional Riads',
        price: 120,
        duration: 'per night',
        location: 'Marrakech Medina',
        image: '../assets/images/rentals/riad-sample.jpg',
        description: 'Authentic traditional riads in the heart of Marrakech medina, featuring beautiful courtyards and Moroccan architecture.',
        features: [
            'Traditional architecture',
            'Central courtyard',
            'Rooftop terrace',
            'Authentic decor'
        ],
        rating: 4.9,
        reviews: 43,
        includes: [
            'Accommodation',
            'Traditional breakfast',
            'Welcome tea ceremony',
            'Concierge service',
            'WiFi access'
        ],
        requirements: [
            'Valid ID/passport',
            'Security deposit: €100',
            'Minimum stay: 2 nights'
        ]
    },
    'luxury-villas': {
        id: 'luxury-villas',
        category: 'rental',
        type: 'accommodation',
        title: 'Luxury Villas',
        price: 250,
        duration: 'per night',
        location: 'Palmeraie',
        image: '../assets/images/rentals/villa-sample.jpg',
        description: 'Stunning private villas with pools, gardens, and staff. Perfect for families or groups seeking luxury and privacy.',
        features: [
            'Private pool',
            'Garden area',
            'Staff service',
            'Modern amenities'
        ],
        rating: 5.0,
        reviews: 37,
        includes: [
            'Villa accommodation',
            'Private pool access',
            'Daily housekeeping',
            'Garden maintenance',
            'Concierge service',
            'WiFi and entertainment'
        ],
        requirements: [
            'Valid ID/passport',
            'Security deposit: €300',
            'Minimum stay: 3 nights'
        ]
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = rentalsData;
}
