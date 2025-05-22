// assets/js/data/tours.js

// Tours data
const toursData = {
    'zagora-2-days': {
        title: '2-Day Zagora Desert Tour',
        subtitle: 'Experience the magic of the Zagora Desert with an overnight stay in a Berber camp',
        heroImage: '../assets/images/tours/zagora-desert.jpeg',
        mainImage: '../assets/images/tours/zagora-desert.jpg',
        price: 295,
        duration: '2 days / 1 night',
        location: 'Zagora Desert',
        groupSize: '2-16 people',
        rating: 4.8,
        reviews: 145,
        description: `
            <h3>Tour Overview</h3>
            <p>This 2-day adventure takes you from Marrakech to the magical Zagora Desert, crossing the majestic High Atlas Mountains and exploring the ancient Kasbah of Aït Benhaddou along the way.</p>
            <p>Experience an overnight stay in a traditional Berber desert camp, enjoy camel trekking across golden dunes, and witness the spectacular sunset and sunrise over the desert landscape. The journey provides authentic cultural experiences with opportunities to connect with local Berber people and learn about their way of life.</p>
            <p>Throughout the tour, you'll be accompanied by an experienced guide who will share insights into the region's rich history, culture, and natural beauty, making this desert adventure both educational and unforgettable.</p>
        `,
        itinerary: [
            
        ],
        includes: [
            'Transportation in comfortable air-conditioned vehicle',
            'English/French/Spanish speaking guide',
            'Overnight accommodation in desert camp',
            'Camel trekking with experienced camel handlers',
            'Dinner and breakfast',
            'All entrance fees to monuments and attractions',
            'Bottled water during the journey'
        ],
        bring: [
            'Comfortable clothing and walking shoes',
            'Warm jacket (desert nights can be cold)',
            'Sun protection (hat, sunglasses, sunscreen)',
            'Camera',
            'Personal toiletries',
            'Cash for personal expenses'
        ],
        availability: 'Daily departures, year-round',
        additionalInfo: {
            'Difficulty': 'Easy - moderate',
            'Language': 'English, French, Arabic, Spanish',
            'Confirmation': 'Immediate',
            'Cancellation': 'Free up to 48h before'
        },
        relatedPrograms: ['ourika-valley', 'imlil-atlas', 'merzouga-3-days']
    },
    
    'ourika-valley': {
        title: 'Ourika Valley Day Trip',
        subtitle: 'Discover lush landscapes and Berber villages in the Atlas Mountains foothills',
        heroImage: '../assets/images/tours/ourika-valley-hero.jpg',
        mainImage: '../assets/images/tours/ourika-valley.jpg',
        price: 55,
        duration: '1 day (8 hours)',
        location: 'Ourika Valley, Atlas Mountains',
        groupSize: '2-16 people',
        rating: 4.7,
        reviews: 187,
            
        description: `
            <h3>Tour Overview</h3>
            <p>Escape the city heat and discover the natural beauty of Ourika Valley, located just 30 kilometers from Marrakech in the foothills of the Atlas Mountains. This refreshing day trip takes you through scenic landscapes, traditional Berber villages, and along the refreshing Ourika River.</p>
            <p>Visit an authentic Berber home where you'll enjoy traditional Moroccan hospitality with mint tea and homemade bread. Learn about the traditional lifestyle of the indigenous Berber people who have inhabited these mountains for thousands of years.</p>
            <p>The highlight of the tour is a guided hike to the spectacular Setti Fatma waterfalls, where you can cool off in the clear mountain waters. Throughout the day, you'll have plenty of opportunities to capture stunning photographs of the valley's verdant landscapes and mountain vistas.</p>
        `,
        routeMap: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d109662.83290037788!2d-7.98581486706543!3d31.51350079309674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0xdafeed09ac1783b%3A0x8d3ac2ebcc6c1d6f!2sMarrakech%2C%20Morocco!3m2!1d31.6294723!2d-7.9810845!4m5!1s0xdaffc9f7b62c221%3A0x6b1f2c3a4b5d6e7f!2sOurika%2C%20Morocco!3m2!1d31.3975!2d-7.6653!5e0!3m2!1sen!2s!4v1635789012345!5m2!1sen!2s',
        itinerary: [
            
        ],
        includes: [
            'Round-trip transportation from your Marrakech accommodation',
            'English/French/Arabic speaking guide',
            'Visit to a traditional Berber home with tea ceremony',

            'Bottled water',
        ],
        bring: [
            'Comfortable walking shoes',
            'Sun protection (hat, sunglasses, sunscreen)',
            'Camera',
            'Cash for lunch and optional purchases',
            'Swimwear and towel (if you wish to swim at the waterfalls)'
        ],
        availability: 'Daily departures',
        additionalInfo: {
            'Difficulty': 'Easy to moderate (waterfall hike is moderate)',
            'Language': 'English, French, Arabic',
            'Confirmation': 'Immediate',
            'Cancellation': 'Free up to 24h before'
        },
        relatedPrograms: ['imlil-atlas', 'zagora-2-days', 'camel-ride']
    },
    
    'imlil-atlas': {
        title: 'Imlil Atlas Mountains Tour',
        subtitle: 'Hike through stunning mountain landscapes and traditional Berber villages',
        heroImage: '../assets/images/tours/imlil-atlas-hero.jpg',
        mainImage: '../assets/images/tours/imlil-atlas.jpg',
        price: 85,
        duration: '1 day (9 hours)',
        location: 'Imlil, High Atlas Mountains',
        groupSize: '2-12 people',
        rating: 4.9,
        reviews: 109,
        description: `
            <h3>Tour Overview</h3>
            <p>Discover the breathtaking beauty of the High Atlas Mountains on this day trip to Imlil, a charming Berber village nestled at the foot of North Africa's highest peak, Mount Toubkal (4,167m). This tour offers a perfect blend of natural scenery, cultural immersion, and light adventure.</p>
            <p>From Marrakech, you'll journey through picturesque landscapes and traditional mountain villages, witnessing the authentic rural lifestyle of the Berber people who have inhabited these mountains for generations. Upon reaching Imlil, you'll enjoy a guided hike through terraced fields, walnut groves, and stunning viewpoints.</p>
            <p>The hiking route is tailored to your fitness level and preferences, with options ranging from easy walks to more challenging trails. Throughout the day, your knowledgeable guide will share insights about Berber culture, local flora and fauna, and the fascinating history of the region.</p>
        `,
        itinerary: [
            
        ],
        includes: [
            'Round-trip transportation from your Marrakech accommodation',
            'Professional English/French/Arabic speaking driver',
            'Local mountain guide in Imlil',
            'Traditional Moroccan lunch',
            'Mint tea and water',
            'All local taxes and fees'
        ],
        bring: [
            'Hiking or sturdy walking shoes',
            'Layered clothing (temperatures can vary in the mountains)',
            'Sun protection (hat, sunglasses, sunscreen)',
            'Camera',
            'Cash for souvenirs or additional refreshments',
            'Small backpack for personal items'
        ],
        availability: 'Daily departures, year-round',
        additionalInfo: {
            'Difficulty': 'Easy to moderate (hiking difficulty can be adjusted)',
            'Language': 'English, French, Arabic, Berber',
            'Confirmation': 'Immediate',
            'Cancellation': 'Free up to 24h before'
        },
        relatedPrograms: ['ourika-valley', 'zagora-2-days', 'hot-air-balloon']
    },
    
    'merzouga-3-days': {
        title: '3-Day Desert Tour to Merzouga',
        subtitle: 'Journey through diverse landscapes to the majestic Erg Chebbi sand dunes',
        heroImage: '../assets/images/tours/zagora-desert-hero.jpg', // Use similar image for now
        mainImage: '../assets/images/tours/zagora-desert.jpg', // Use similar image for now
        price: 375,
        duration: '3 days / 2 nights',
        location: 'Atlas Mountains, Dades Valley, Merzouga Desert',
        groupSize: '2-16 people',
        rating: 4.9,
        reviews: 92,
        description: `
            <h3>Tour Overview</h3>
            <p>This comprehensive 3-day tour takes you on an unforgettable journey from Marrakech to the spectacular Erg Chebbi dunes of Merzouga, home to the most spectacular sand dunes in Morocco. Along the way, you'll experience the diversity of Morocco's landscapes and the richness of its cultural heritage.</p>
            <p>Cross the High Atlas Mountains via the stunning Tizi n'Tichka pass, explore the UNESCO World Heritage site of Aït Benhaddou, and travel through the Valley of a Thousand Kasbahs. Experience the dramatic scenery of Todra Gorge and Dades Valley before reaching the golden sand dunes of Erg Chebbi.</p>
            <p>The highlight of the tour is spending a night in a desert camp nestled among the towering dunes of Merzouga. Enjoy a camel trek at sunset, traditional Berber dinner, and music around the campfire under the star-filled desert sky. This tour offers a perfect blend of adventure, culture, and natural beauty.</p>
        `,
        itinerary: [
            
        ],
        includes: [
            'Transportation in comfortable air-conditioned vehicle',
            'English/French/Spanish speaking guide',
            'Accommodation: 1 night in hotel/riad, 1 night in desert camp',
            'Camel trekking in Merzouga',
            '2 breakfasts and 2 dinners',
            'All entrance fees to monuments and attractions mentioned',
            'Bottled water during the journey'
        ],
        bring: [
            'Comfortable clothing and walking shoes',
            'Warm jacket (desert nights can be cold)',
            'Sun protection (hat, sunglasses, sunscreen)',
            'Camera',
            'Personal toiletries',
            'Cash for lunches and personal expenses',
            'Flashlight for the desert camp'
        ],
        availability: 'Daily departures, year-round',
        additionalInfo: {
            'Difficulty': 'Easy - moderate',
            'Language': 'English, French, Arabic, Spanish',
            'Confirmation': 'Immediate',
            'Cancellation': 'Free up to 72h before'
        },
        relatedPrograms: ['zagora-2-days', 'ourika-valley', 'imlil-atlas']
    },


"ouzoud-waterfalls": {
    title: "Ouzoud Waterfalls Day Trip",
    subtitle: "Discover Morocco's most spectacular waterfalls surrounded by lush greenery",
    heroImage: "../assets/images/tours/ourika-valley-hero.jpg", // Using existing image as placeholder
    mainImage: "../assets/images/tours/ourika-valley.jpg", // Using existing image as placeholder
    price: 65,
    duration: "10 hours",
    location: "Middle Atlas Mountains",
    groupSize: "4-16 people",
    rating: 4.8,
    reviews: 156,
    description: `
        <h3>Tour Overview</h3>
        <p>Experience the natural wonder of the Ouzoud Waterfalls on this full-day excursion from Marrakech. Standing at an impressive 110 meters (360 feet) tall, these cascading falls are the highest in North Africa and one of Morocco's most spectacular natural attractions.</p>
        
        <p>Your journey begins with a scenic drive through olive groves and traditional Berber villages in the Middle Atlas region. Upon arrival at Ouzoud, you'll be captivated by the magnificent waterfalls plunging dramatically into the river below, creating constant rainbows in the mist and a thundering soundtrack to your experience.</p>
        
        <p>With your knowledgeable guide, follow paths down to the basin of the falls where you can take a refreshing boat ride to get closer to the cascades (optional extra). Along the way, watch for the mischievous Barbary macaques, the only monkeys native to North Africa, that inhabit the area.</p>
        
        <p>After working up an appetite, enjoy lunch at a local restaurant overlooking the falls. The afternoon offers free time to further explore the area at your own pace, perhaps taking a swim in the natural pools (seasonal), visiting small local shops, or simply relaxing in this idyllic setting before returning to Marrakech.</p>
    `,
    itinerary: [
        
    ],
    includes: [
        "Round-trip transportation from Marrakech in air-conditioned vehicle",
        "Professional English-speaking guide",
        "Guided walking tour of the falls area",
        "Bottled water",
        "All taxes and fees"
    ],
    bring: [
        "Comfortable walking shoes",
        "Sun protection (hat, sunglasses, sunscreen)",
        "Swimwear and towel (if you wish to swim, seasonal)",
        "Camera",
        "Cash for lunch, boat ride, and souvenirs",
        "Light jacket (can be cool near the falls, especially in winter)"
    ],
    availability: "Daily, year-round",
    additionalInfo: {
        "Difficulty": "Moderate - includes walking on uneven terrain and steps",
        "Minimum Age": "None - suitable for all ages",
        "Languages": "English, French, Arabic",
        "Confirmation": "Immediate confirmation",
        "Cancellation": "Free cancellation up to 24 hours before",
        "Not Included": "Lunch (approximately 80-150 MAD per person), boat ride (approximately 20 MAD per person), gratuities"
    },
    relatedPrograms: ["ourika-valley", "essaouira", "imlil-atlas"]
},

"essaouira": {
    title: "Essaouira Day Trip",
    subtitle: "Explore the charming coastal city with its blue and white medina and fresh sea breeze",
    heroImage: "../assets/images/tours/ourika-valley-hero.jpg", // Using existing image as placeholder
    mainImage: "../assets/images/tours/ourika-valley.jpg", // Using existing image as placeholder
    price: 75,
    duration: "10 hours",
    location: "Atlantic Coast",
    groupSize: "4-16 people",
    rating: 4.7,
    reviews: 142,
    description: `
        <h3>Tour Overview</h3>
        <p>Escape the heat and bustle of Marrakech for a refreshing day trip to Essaouira, a charming coastal city on Morocco's Atlantic shore. With its fortified medina, bustling fishing port, broad beaches, and refreshing sea breeze, Essaouira offers a perfect contrast to the inland cities.</p>
        
        <p>The journey to Essaouira takes you through the Moroccan countryside and the unique argan forests, where you might spot goats climbing the trees to eat the fruit. A stop at a local women's cooperative provides insight into traditional argan oil production and the opportunity to purchase authentic products.</p>
        
        <p>Upon arrival in Essaouira, you'll be captivated by the city's distinct character - a unique blend of Portuguese, Berber, and French influences visible in its architecture and culture. The UNESCO-listed medina with its blue and white color scheme, impressive ramparts, and artisan workshops is a photographer's dream.</p>
        
        <p>Enjoy a guided tour of the main attractions including the historic port where blue fishing boats dock with their daily catch, the bustling fish market, the artisan quarter, and the impressive 18th-century sea fortifications. After lunch, you'll have free time to explore independently - perhaps strolling along the beach, shopping for unique handicrafts, or simply relaxing in a seafront café before returning to Marrakech.</p>
    `,
    itinerary: [
        
    ],
    includes: [
        "Round-trip transportation from Marrakech in air-conditioned vehicle",
        "Professional English-speaking guide",
        "Guided tour of Essaouira",
        "Visit to argan oil cooperative",
        "Bottled water",
        "All taxes and fees"
    ],
    bring: [
        "Comfortable walking shoes",
        "Sun protection (hat, sunglasses, sunscreen)",
        "Light jacket or windbreaker (it can be windy on the coast)",
        "Camera",
        "Cash for lunch and souvenirs",
        "Beach gear if you plan to enjoy the beach (seasonal)"
    ],
    availability: "Daily, year-round",
    additionalInfo: {
        "Difficulty": "Easy - mostly flat terrain with some walking",
        "Minimum Age": "None - suitable for all ages",
        "Languages": "English, French, Arabic",
        "Confirmation": "Immediate confirmation",
        "Cancellation": "Free cancellation up to 24 hours before",
        "Not Included": "Lunch (approximately 100-200 MAD per person), optional activities, gratuities"
    },
    relatedPrograms: ["marrakech-tour", "ouzoud-waterfalls", "agafay-desert"]
},

"agafay-desert": {
    title: "Agafay Desert Day Trip",
    subtitle: "Experience the lunar-like landscape just outside Marrakech",
    heroImage: "../assets/images/tours/zagora-desert-hero.jpg", // Using existing image as placeholder
    mainImage: "../assets/images/tours/zagora-desert.jpg", // Using existing image as placeholder
    price: 90,
    duration: "8 hours",
    location: "Agafay Desert",
    groupSize: "2-12 people",
    rating: 4.8,
    reviews: 98,
    description: `
        <h3>Tour Overview</h3>
        <p>Discover the captivating beauty of the Agafay Desert on this full-day excursion from Marrakech. Often called the "desert at the gates of Marrakech," the Agafay offers a desert experience without the long journey to the Sahara, located just 30 kilometers from the city.</p>
        
        <p>Unlike the sand dunes of the Sahara, the Agafay presents a different kind of desert beauty - a lunar-like rocky landscape of rolling hills and plateaus that stretches as far as the eye can see. Against the backdrop of the snow-capped Atlas Mountains, this stark yet stunning terrain creates unforgettable panoramic views.</p>
        
        <p>Your day includes a guided exploration of the desert by 4x4 vehicle, visiting scenic viewpoints and stopping at a traditional Berber village where you'll learn about local life and enjoy mint tea with residents. The highlight of the day is a delicious traditional lunch served in a luxury desert camp where you can relax in comfortable settings surrounded by the wilderness.</p>
        
        <p>In the afternoon, choose between relaxing at the camp or taking a gentle camel ride across the desert landscape. As the day winds down, you'll return to Marrakech with amazing photos and memories of Morocco's diverse natural beauty.</p>
    `,
    itinerary: [
        
    ],
    includes: [
        "Round-trip transportation from Marrakech in 4x4 vehicle",
        "Professional English-speaking guide/driver",
        "Visit to a Berber village with mint tea",
        "Traditional Moroccan lunch at desert camp",
        "Camel ride (approximately 30 minutes)",
        "Bottled water",
        "All taxes and fees"
    ],
    bring: [
        "Comfortable clothing and walking shoes",
        "Sun protection (hat, sunglasses, sunscreen)",
        "Light jacket (can be cool in winter months)",
        "Camera",
        "Cash for souvenirs or extra drinks",
        "Scarf or bandana (useful for protection from dust)"
    ],
    availability: "Daily, year-round",
    additionalInfo: {
        "Difficulty": "Easy - minimal walking required",
        "Minimum Age": "None - suitable for all ages",
        "Languages": "English, French, Arabic",
        "Confirmation": "Immediate confirmation",
        "Cancellation": "Free cancellation up to 24 hours before",
        "Not Included": "Additional beverages beyond water provided, gratuities"
    },
    relatedPrograms: ["quad-biking", "camel-ride", "zagora-2-days"]
},

};