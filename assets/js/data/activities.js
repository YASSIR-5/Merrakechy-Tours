// assets/js/data/activities.js

// Activity data
const activitiesData = {
    'quad-biking': {
        title: 'Agafay Desert Quad Biking Adventure',
        subtitle: 'Experience the thrill of quad biking in the moon-like landscape of Agafay Desert',
        heroImage: '../assets/images/activities/quad-biking-hero.jpg',
        mainImage: '../assets/images/activities/quad-biking-large.jpg',
        price: 65,
        duration: '2 hours',
        location: 'Agafay Desert, near Marrakech',
        groupSize: '1-8 people',
        rating: 4.9,
        reviews: 95,
        description: `
            <h3>Tour Overview</h3>
            <p>Get your adrenaline pumping with our guided quad biking adventure through the unique terrain of the Agafay Desert. Navigate thrilling trails across a lunar-like landscape just outside Marrakech.</p>
            <p>After a thorough safety briefing and practice session, you'll follow your experienced guide through varied terrain - from rocky paths to small dunes and open plains. Stop at panoramic viewpoints to capture stunning photographs of the Atlas Mountains in the distance.</p>
            <p>This exciting activity combines adventure with natural beauty, giving you a unique perspective on Morocco's diverse landscapes. No previous quad biking experience is necessary, making it accessible to beginners while still thrilling for experienced riders.</p>
        `,
        includes: [
            'Quad bike rental and fuel',
            'Safety equipment (helmet, goggles, gloves)',
            'Professional guide',
            'Safety briefing and practice session',
            'Bottled water',
            'Hotel pickup and drop-off (Marrakech area)'
        ],
        bring: [
            'Closed shoes',
            'Sunglasses',
            'Bandana or scarf (for dust)',
            'Long pants recommended',
            'Sunscreen'
        ],
        availability: 'Multiple daily departures',
        additionalInfo: {
            'Difficulty': 'Easy to moderate - no previous experience required',
            'Language': 'English, French, Arabic',
            'Confirmation': 'Immediate',
            'Cancellation': 'Free up to 24h before'
        },
        relatedPrograms: ['camel-ride', 'hot-air-balloon', 'cooking-class']
    },
    
    'camel-ride': {
        title: 'Camel Ride in the Palmeraie',
        subtitle: 'Enjoy a traditional camel trek through Marrakech\'s palm grove oasis',
        heroImage: '../assets/images/activities/camel-ride-hero.jpg',
        mainImage: '../assets/images/activities/camel-ride-large.jpg',
        price: 45,
        duration: '3 hours',
        location: 'Palmeraie, Marrakech',
        groupSize: '1-10 people',
        rating: 4.7,
        reviews: 128,
        description: `
            <h3>Tour Overview</h3>
            <p>Experience the magic of the Palmeraie with our guided camel trek. This immersive palm grove adventure takes you through lush gardens and traditional Berber villages as you enjoy the gentle rhythm of camel travel.</p>
            <p>Led by experienced local guides, you'll learn about desert life and nomadic traditions while enjoying the peaceful atmosphere of this green oasis just outside Marrakech's bustling medina.</p>
            <p>This activity is suitable for all ages and provides excellent photo opportunities of Morocco's iconic landscapes. After your trek, relax with traditional mint tea in a Berber tent while enjoying the serene surroundings.</p>
        `,
        includes: [
            'Professional local guide',
            'Camel ride',
            'Traditional Moroccan refreshments',
            'Mint tea break in Berber tent',
            'Photo stops at scenic viewpoints'
        ],
        bring: [
            'Comfortable clothing',
            'Sunscreen and sunglasses',
            'Hat or head covering',
            'Camera',
            'Water bottle'
        ],
        availability: 'Daily departures at sunrise and 2 hours before sunset',
        additionalInfo: {
            'Difficulty': 'Easy - suitable for all fitness levels',
            'Language': 'English, French, Arabic',
            'Confirmation': 'Immediate',
            'Cancellation': 'Free up to 24h before'
        },
        relatedPrograms: ['quad-biking', 'hot-air-balloon', 'atlas-mountains']
    },
    
    'hot-air-balloon': {
        title: 'Hot Air Balloon Experience',
        subtitle: 'Soar above the Atlas Mountains at dawn for breathtaking views',
        heroImage: '../assets/images/activities/hot-air-balloon-hero.jpg',
        mainImage: '../assets/images/activities/hot-air-balloon-large.jpg',
        price: 195,
        duration: '4 hours (approx. 1 hour in the air)',
        location: 'Atlas Mountains region, near Marrakech',
        groupSize: 'Up to 16 people per balloon',
        rating: 4.8,
        reviews: 78,
        description: `
            <h3>Tour Overview</h3>
            <p>Soar above the Atlas Mountains with breathtaking views on a dawn hot air balloon flight. This unforgettable experience begins in the early morning as you watch the balloon inflation before gently rising into the sky.</p>
            <p>As the sun rises, you'll drift peacefully over traditional Berber villages, mountains, and desert landscapes. Your pilot will point out significant landmarks and share stories about the region while you capture stunning photographs from this unique aerial perspective.</p>
            <p>After landing, enjoy a traditional Berber breakfast in a local tent, complete with mint tea and freshly baked bread. You'll receive a flight certificate before returning to your accommodation with memories to last a lifetime.</p>
        `,
        includes: [
            'Hotel pickup and return',
            'Hot air balloon flight',
            'Professional pilot',
            'Light breakfast before flight',
            'Traditional Berber breakfast after landing',
            'Flight certificate'
        ],
        bring: [
            'Warm clothing (mornings can be cool)',
            'Camera',
            'Sunglasses',
            'Hat'
        ],
        availability: 'Daily departures at dawn (weather permitting)',
        additionalInfo: {
            'Difficulty': 'Easy - no physical requirements',
            'Language': 'English, French, Arabic',
            'Confirmation': 'Immediate',
            'Cancellation': 'Free up to 48h before'
        },
        relatedPrograms: ['quad-biking', 'camel-ride', 'atlas-mountains']
    },
    
    'cooking-class': {
        title: 'Moroccan Cooking Workshop',
        subtitle: 'Learn to prepare authentic Moroccan dishes with local chefs',
        heroImage: '../assets/images/activities/cooking-class-hero.jpg',
        mainImage: '../assets/images/activities/cooking-class-large.jpg',
        price: 75,
        duration: '4 hours',
        location: 'Marrakech Medina',
        groupSize: '2-12 people',
        rating: 4.8,
        reviews: 156,
        description: `
            <h3>Tour Overview</h3>
            <p>Discover the secrets of Moroccan cuisine with our immersive cooking class in Marrakech. This culinary experience begins with a guided visit to a traditional market (souk) where you'll learn about local ingredients and spices that form the foundation of Moroccan cooking.</p>
            <p>Back at our cooking school, located in a traditional riad, our expert chef will guide you through preparing several authentic Moroccan dishes such as tagine, couscous, salads, and pastries. You'll learn traditional techniques handed down through generations while enjoying a relaxed, hands-on experience.</p>
            <p>After the class, sit down to enjoy the delicious meal you've prepared in the beautiful setting of the riad. You'll receive recipe cards to take home so you can recreate these authentic dishes and impress friends and family with your new culinary skills.</p>
        `,
        includes: [
            'Market tour with ingredient shopping',
            'All ingredients and cooking equipment',
            'Hands-on preparation of multiple dishes',
            'Full meal of your own creation',
            'Recipe cards to take home',
            'Tea and refreshments throughout'
        ],
        bring: [
            'Appetite',
            'Camera',
            'Notepad (if you wish to take additional notes)'
        ],
        availability: 'Morning class (9:30am) and afternoon class (3:30pm)',
        additionalInfo: {
            'Difficulty': 'Easy - suitable for all, including beginners',
            'Language': 'English, French, Arabic',
            'Confirmation': 'Immediate',
            'Cancellation': 'Free up to 24h before'
        },
        relatedPrograms: ['camel-ride', 'marrakech-tour', 'hammam-spa']
    }
};