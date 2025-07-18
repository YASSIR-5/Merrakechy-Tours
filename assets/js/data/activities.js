// assets/js/data/activities.js

// Activity data
const activitiesData = {
    'quad-biking': {
        title: 'Agafay Desert Quad Biking Adventure',
        subtitle: 'Experience the thrill of quad biking in the moon-like landscape of Agafay Desert',
        heroImage: '../assets/images/activities/quad-biking-hero.jpg',
        mainImage: '../assets/images/activities/quad.jpg',
        galleryImages: [
            '../assets/images/activities/quad.jpg',
            '../assets/images/activities/',
            '../assets/images/activities/hot-air-balloon-3.jpg'
        ],
        pricing: {
            adult: 45,     
            child: 23       
        },
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
        mainImage: '../assets/images/activities/camel.jpeg',
        price: 45,
        pricing: {
            adult: 45,     
            child: 23       
        },
        duration: '3 hours',
        location: 'Palmeraie, Marrakech',
        groupSize: '1-10 people',
        rating: 4.7,
        galleryImages: [
            '../assets/images/activities/camel.jpeg',
            '../assets/images/activities/',
            '../assets/images/activities/hot-air-balloon-3.jpg'
        ],
        reviews: 128,
        description: `
            <h3>Tour Overview</h3>
            <p>Experience the magic of the Palmeraie with our guided camel trek. This immersive palm grove adventure takes you through lush gardens and traditional Berber villages as you enjoy the gentle rhythm of camel travel.</p>
            <p>Led by experienced local guides, you'll learn about desert life and nomadic traditions while enjoying the peaceful atmosphere of this green oasis just outside Marrakech's bustling medina.</p>
            <p>This activity is suitable for all ages and provides excellent photo opportunities of Morocco's iconic landscapes. After your trek, relax with traditional mint tea in a Berber tent while enjoying the serene surroundings.</p>
        `,
        includes: [
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
        heroImage: '../assets/images/activities/hot-air-ballon-hero.jpg',
        mainImage: '../assets/images/activities/ballon.jpg',
        galleryImages: [
            '../assets/images/activities/camel.jpeg',
            '../assets/images/activities/',
            '../assets/images/activities/hot-air-balloon-3.jpg'
        ],
        pricing: {
            adult: 160,     
            child: 75       
        },
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
        mainImage: '../assets/images/activities/cooking-class.jpg',
        galleryImages: [
            '../assets/images/activities/quad.jpg',
            '../assets/images/activities/',
            '../assets/images/activities/hot-air-balloon-3.jpg'
        ], 
        price: 75,
        pricing: {
            adult: 45,     
            child: 23       
        },
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
    },
    "hammam-spa": {
    title: "Hammam & Spa Experience",
    subtitle: "Indulge in a traditional Moroccan bath and relaxing massage treatment",
    heroImage: "../assets/images/activities/cooking-class-hero.jpg", // Using existing image as placeholder
    mainImage: "../assets/images/activities/hammam.jpg", // Using existing image as placeholder
    galleryImages: [
            '../assets/images/activities/quad.jpg',
            '../assets/images/activities/',
            '../assets/images/activities/hot-air-balloon-3.jpg'
        ],
    price: 85,
    pricing: {
            adult: 45,     
            child: 23       
        },
    duration: "2 hours",
    location: "Marrakech Medina",
    groupSize: "1-6 people",
    rating: 4.7,
    reviews: 112,
    description: `
        <h3>Experience Overview</h3>
        <p>Treat yourself to one of Morocco most cherished traditions - the hammam bath ritual. This centuries-old practice combines deep cleansing, exfoliation, and relaxation in a steam-filled environment, leaving you refreshed and rejuvenated.</p>
        
        <p>Your experience begins in a warm steam room where your skin is allowed to soften. Then, a skilled attendant will apply traditional black soap made from olive oil and eucalyptus, followed by a vigorous exfoliation with a special Kessa glove that removes dead skin cells and impurities.</p>
        
        <p>After rinsing, you will receive a purifying clay mask treatment using ghassoul, a natural mineral clay from the Atlas Mountains. This is followed by a moisturizing process using pure argan oil, known for its nourishing properties.</p>
        
        <p>The experience concludes with a 30-minute relaxing massage using aromatic oils, leaving you in a state of complete relaxation. Throughout the process, you will be treated with the utmost respect for your privacy and comfort.</p>
    `,
   
    includes: [
        "Guided tour of artisan workshops",
        "Hands-on workshop with master artisan",
        "All materials and tools needed",
        "Your own handcrafted item to take home",
        "Mint tea and Moroccan pastries",
        "English-speaking guide",
        "All taxes and fees"
    ],
    bring: [
        "Comfortable clothing that you do not mind getting dirty",
        "Camera",
        "Small bag for your created item"
    ],
    availability: "Daily at 10:00 AM and 2:00 PM",
    additionalInfo: {
        "Difficulty": "Easy - no experience necessary",
        "Minimum Age": "8 years (children must be accompanied by an adult)",
        "Languages": "English, French, Arabic",
        "Confirmation": "Immediate confirmation",
        "Cancellation": "Free cancellation up to 24 hours before",
        "Workshop Options": "Choose from pottery making, leather working, or carpet weaving when booking"
    },
    relatedPrograms: ["cooking-class", "camel-ride", "marrakech-tour"]
},



'agafay-overnight': {
    title: 'Overnight in the Agafay Desert',
    subtitle: 'Magical evening with camel ride, dinner under the stars, and luxury camping experience',
    heroImage: '../assets/images/activities/agafay-overnight-hero.jpg',
    mainImage: '../assets/images/activities/desert_camping.jpg',
    galleryImages: [
        '../assets/images/activities/desert_camping.jpg',
        '../assets/images/activities/agafay-sunset-camel.jpg',
        '../assets/images/activities/agafay-luxury-tent.jpg',
    ],
    pricing: {
            adult: 60,     
            child: 30       
        },
    price: 185,
    duration: '24 hours (overnight experience)',
    location: 'Agafay Desert, near Marrakech',
    groupSize: '2-20 people',
    rating: 4.9,
    galleryImages: [
            '../assets/images/activities/quad.jpg',
            '../assets/images/activities/',
            '../assets/images/activities/hot-air-balloon-3.jpg'
        ],
    reviews: 124,
    description: `
        <h3>Experience Overview</h3>
        <p>Escape to the calm of the Agafay Desert, just a short drive from Marrakech. This magical overnight experience combines the beauty of Morocco's lunar-like desert landscape with luxury camping and authentic cultural experiences.</p>
        <p>Your adventure begins with a scenic camel ride at sunset, where you'll witness the desert transform as golden light bathes the rolling hills. As night falls, enjoy a traditional Moroccan dinner under a canopy of stars, accompanied by live Berber music around a crackling campfire.</p>
        <p>Sleep comfortably in a luxury tent equipped with real beds and quality linens, far from the noise of the city but close to the essential beauty of the desert. Wake up to a peaceful sunrise and enjoy a fresh open-air breakfast facing the desert hills, creating memories that will last a lifetime.</p>
    `,

    includes: [
        'Round-trip transportation from Marrakech',
        'Welcome tea upon arrival',
        'Sunset camel ride (approximately 1 hour)',
        'Luxury tent accommodation with real beds',
        'Traditional Moroccan dinner',
        'Fresh breakfast with desert views',
        'Live Berber music and entertainment',
        'Campfire experience with stargazing',
        'Bottled water throughout the experience'
    ],
    bring: [
        'Comfortable clothing for evening and morning',
        'Warm jacket or sweater (desert nights can be cool)',
        'Comfortable walking shoes',
        'Sun protection (hat, sunglasses, sunscreen)',
        'Camera for sunset and sunrise photos',
        'Personal toiletries',
        'Flashlight or phone light for nighttime',
        'Cash for tips and personal expenses'
    ],
    availability: 'Daily departures, year-round (weather permitting)',
    additionalInfo: {
        'Difficulty': 'Easy - suitable for all ages and fitness levels',
        'Language': 'English, French, Arabic, Berber',
        'Confirmation': 'Immediate confirmation upon booking',
        'Cancellation': 'Free cancellation up to 48 hours before',
        'Best Time': 'Year-round, particularly magical during spring and autumn',
        'Group Size': 'Private and group options available',
        'Facilities': 'Shared bathroom facilities, luxury tents with comfortable beds'
    },
    relatedPrograms: ['quad-biking', 'camel-ride', 'agafay-desert', 'hot-air-balloon']
},
'marrakech-city-tour': {
    title: 'Marrakech City Tour',
    subtitle: 'Dive into the heart of Marrakech with a passionate local guide through vibrant souks and historic sites',
    heroImage: '../assets/images/tours/marrakech-medina.jpg',
    mainImage: '../assets/images/tours/marrakech.jpeg',
    galleryImages: [
        '../assets/images/tours/marrakech.jpeg',
        '../assets/images/tours/marrakech1.jpeg',
        '../assets/images/tours/marrakech-souks-spices.jpg',
    ],
    price: 45,
    duration: '6-7 hours',
    location: 'Marrakech Medina and New City',
    groupSize: '2-15 people',
    rating: 4.8,
    reviews: 289,
    description: `
        <h3>Tour Overview</h3>
        <p>Dive into the heart of Marrakech with a passionate local guide who will reveal the soul of this magical city. This comprehensive walking tour takes you through the labyrinthine streets of the ancient medina, where every alley tells a story and every door hides a secret.</p>
        <p>Wander through vibrant souks bursting with colors, aromas, and sounds that awaken all your senses. Discover historic palaces with intricate architecture, hidden gardens that offer peaceful respites, and the legendary Djemaa el-Fna square where Morocco's rich cultural heritage comes alive through storytellers, musicians, and performers.</p>
        <p>This isn't just a tour—it's a journey through colors, culture, and authentic Moroccan life. Your expert local guide will share insider knowledge, historical anecdotes, and cultural insights that you'd never discover on your own, making this an unforgettable immersion into the real Marrakech.</p>
    `,
   
    includes: [
        'Walking tour of Marrakech medina and main attractions',
        'Entry fees to Bahia Palace and Saadian Tombs',
        'Visit to Ben Youssef Madrasa',
        'Guided exploration of souks and artisan quarters',
        'Cultural insights and historical commentary',
        'Navigation through the medina\'s maze-like streets',
        'Local tips and recommendations',
        'Small group experience for personalized attention'
    ],
    bring: [
        'Comfortable walking shoes (essential)',
        'Sun protection (hat, sunglasses, sunscreen)',
        'Camera for capturing colorful scenes',
        'Cash for lunch and optional purchases in souks',
        'Light backpack for personal items',
        'Respectful clothing (covering shoulders and knees)',
        'Water bottle to stay hydrated',
        'Open mind and sense of adventure'
    ],
    availability: 'Daily departures at 9:00 AM, year-round',
    additionalInfo: {
        'Difficulty': 'Moderate - involves 4-5 hours of walking on uneven surfaces',
        'Language': 'English, French, Arabic, Spanish (specify preference)',
        'Group Size': 'Small groups for intimate experience',
        'Confirmation': 'Immediate confirmation upon booking',
        'Cancellation': 'Free cancellation up to 24 hours before',
        'Duration': 'Approximately 6-7 hours with lunch break',
        'Meeting Point': 'Central Marrakech location (details provided upon booking)',
        'Weather': 'Tour operates in all weather conditions'
    },
    relatedPrograms: ['cooking-class', 'hammam-spa', 'majorelle-garden', 'quad-biking']
},
// Add this to your activities.js file

'majorelle-garden': {
    title: 'Majorelle Garden Tour',
    subtitle: 'A haven of peace in the heart of Marrakech with vibrant colors and tranquil atmosphere',
    heroImage: '../assets/images/activities/majorelle-garden-hero.jpg',
    mainImage: '../assets/images/activities/majorel.webp',
    galleryImages: [
            '../assets/images/activities/majorel.webp',
            '../assets/images/activities/',
            '../assets/images/activities/hot-air-balloon-3.jpg'
        ],
    price: 35,
    duration: '2-3 hours',
    location: 'Marrakech, Gueliz District',
    groupSize: '1-15 people',
    rating: 4.6,
    reviews: 189,
    description: `
        <h3>Experience Overview</h3>
        <p>Escape the bustling streets of Marrakech and step into the serene world of Majorelle Garden, one of Morocco's most visited attractions. This enchanting botanical garden is a living masterpiece that combines exotic plant collections, stunning architecture, and artistic heritage in a peaceful oasis.</p>
        
        <p>Created by French artist Jacques Majorelle in the 1920s and 1930s, the garden became world-famous after being restored by fashion designer Yves Saint Laurent and his partner Pierre Bergé in 1980. The garden's signature cobalt blue, known as "Majorelle Blue," creates a striking contrast against the lush greenery and colorful flowers.</p>
        
        <p>Your visit includes exploration of the beautifully landscaped gardens with their shaded paths, tranquil ponds, and exotic plants from around the world. The garden houses over 300 plant species from five continents, including towering palm trees, vibrant bougainvillea, and rare cacti collections.</p>
        
        <p>Don't miss the fascinating Berber Museum housed within the garden, which showcases the rich cultural heritage of Morocco's indigenous people through traditional jewelry, textiles, and artifacts. The museum provides valuable insights into Berber history and their contributions to Moroccan culture.</p>
    `,
    
    bring: [
        'Comfortable walking shoes',
        'Camera (photography is allowed in most areas)',
        'Sun protection (hat, sunglasses, sunscreen)',
        'Water bottle',
        'Light clothing suitable for walking',
        'Small backpack for personal items'
    ],
    availability: 'Daily from 8:00 AM to 6:00 PM (8:00 AM to 5:00 PM in winter)',
    additionalInfo: {
        'Difficulty': 'Easy - suitable for all ages and fitness levels',
        'Duration': 'Self-guided visit, typically 2-3 hours',
        'Best Time': 'Early morning (8-10 AM) or late afternoon (4-6 PM) for best light and fewer crowds',
        'Languages': 'Information available in English, French, Arabic',
        'Confirmation': 'Tickets can be purchased at entrance or pre-booked',
        'Cancellation': 'Flexible - visit any time during opening hours',
        'Photography': 'Allowed throughout the garden (some restrictions in museum)',
        'Accessibility': 'Partially wheelchair accessible - main paths are paved'
    },
    highlights: [
        {
            title: 'Majorelle Blue Architecture',
            description: 'The iconic cobalt blue buildings and structures that give the garden its distinctive character and photogenic appeal.'
        },
        {
            title: 'Exotic Plant Collections',
            description: 'Over 300 plant species from five continents, including rare cacti, towering palms, and colorful flowering plants.'
        },
        {
            title: 'Berber Museum',
            description: 'Fascinating collection of traditional Berber artifacts, jewelry, and textiles showcasing Morocco\'s indigenous culture.'
        },
        {
            title: 'Tranquil Water Features',
            description: 'Peaceful ponds, fountains, and water channels creating a cooling and meditative atmosphere throughout the garden.'
        },
        {
            title: 'Yves Saint Laurent Memorial',
            description: 'A touching tribute to the famous designer who helped preserve this beautiful garden for future generations.'
        }
    ],
    relatedPrograms: ['cooking-class', 'marrakech-tour', 'hammam-spa']
}
};
