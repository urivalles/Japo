const DEFAULT_ITINERARY = [
    {
        date: '2026-08-05',
        dayLabel: 'Dia 0',
        weekday: 'Dimecres',
        title: 'Sortida cap al Japó',
        activities: [
            'Vol de sortida des de Barcelona (BCN) cap a Tòquio (Shenzhen Airlines, 12:20h).',
            'Nit a bord.'
        ],
        accommodation: '✈️ Vol internacional (a bord)',
        type: 'titon',
        badge: 'titon',
        coords: [41.2974, 2.0833] // BCN
    },
    {
        date: '2026-08-06',
        dayLabel: 'Dia 1',
        weekday: 'Dijous',
        title: 'Arribada a Narita i establiment a Ueno',
        activities: [
            'Arribada a Narita a les 18:00h.',
            'Tren Keisei Skyliner directe a Ueno (41 minuts).',
            'Check-in, sopar de ramen i primer descans.'
        ],
        accommodation: '🏨 Hostel Ueno / Asakusa',
        type: 'titon',
        badge: 'titon',
        coords: [35.7111, 139.7770] // Ueno
    },
    {
        date: '2026-08-07',
        dayLabel: 'Dia 2',
        weekday: 'Divendres',
        title: 'Tòquio: Asakusa i Matsuri',
        activities: [
            'Exploració dels mercats d\'Ueno (Ameyoko) i temple Sensō-ji d\'Asakusa.',
            'Al vespre: Festival Hachioji Matsuri (carrosses, fanals i tambors Taiko).'
        ],
        accommodation: '🏨 Hostel Ueno / Asakusa',
        type: 'titon',
        badge: 'titon',
        coords: [35.7147, 139.7967] // Asakusa
    },
    {
        date: '2026-08-08',
        dayLabel: 'Dia 3',
        weekday: 'Dissabte',
        title: 'Excursió: Platja i Mar (Kamakura)',
        activities: [
            'Tren directe JR Tokaido Line des d\'Ueno fins a la costa de Kamakura / Illa d\'Enoshima.',
            'Passejada vora la platja, bosc humit i peix fresc.'
        ],
        accommodation: '🏨 Hostel Ueno / Asakusa',
        type: 'titon',
        badge: 'titon',
        coords: [35.3192, 139.5467] // Kamakura
    },
    {
        date: '2026-08-09',
        dayLabel: 'Dia 4',
        weekday: 'Diumenge',
        title: 'Cap a Utsunomiya (El Hub del Nord)',
        activities: [
            'Matí de passeig relaxat per Asakusa.',
            'Migdia: tren local JR Utsunomiya Line directe a Utsunomiya.',
            'Tarda: Check-in a la guesthouse. Visita al Bosc de Bambú de Wakayama Farm i la Cova Subterrània d\'Oya.'
        ],
        accommodation: '🏨 Guesthouse Estació Utsunomiya',
        type: 'titon',
        badge: 'titon',
        coords: [36.5551, 139.8826] // Utsunomiya
    },
    {
        date: '2026-08-10',
        dayLabel: 'Dia 5',
        weekday: 'Dilluns',
        title: 'Ascensió al Mont Nantai (Nikko)',
        activities: [
            'Tren local a Nikko + bus al Llac Chuzenji.',
            'Ascensió al Mont Nantai (2.486 m). Volcà sagrat, estil Pedraforca.'
        ],
        accommodation: '🏨 Guesthouse Estació Utsunomiya',
        type: 'titon',
        badge: 'titon',
        coords: [36.7645, 139.4912] // Mt Nantai
    },
    {
        date: '2026-08-11',
        dayLabel: 'Dia 6',
        weekday: 'Dimarts',
        title: 'Okunikko: Natura i Termes',
        activities: [
            'Senderisme per la marjal de Senjogahara i cascades de Kegon.',
            'Tarda de relaxació en un onsen a Yunomoto.',
            'Sopar de gyozas tradicionals a Utsunomiya.'
        ],
        accommodation: '🏨 Guesthouse Estació Utsunomiya',
        type: 'titon',
        badge: 'titon',
        coords: [36.7845, 139.4448] // Senjogahara
    },
    {
        date: '2026-08-12',
        dayLabel: 'Dia 7',
        weekday: 'Dimecres',
        title: 'Nikko Patrimoni de la Humanitat',
        activities: [
            'Recorregut cultural per l\'àrea dels temples (Toshogu) entre xipressos centenaris.',
            'Camí de les estàtues Jizo de Kanmangafuchi.'
        ],
        accommodation: '🏨 Guesthouse Estació Utsunomiya',
        type: 'titon',
        badge: 'titon',
        coords: [36.7581, 139.5989] // Nikko Toshogu
    },
    {
        date: '2026-08-13',
        dayLabel: 'Dia 8',
        weekday: 'Dijous',
        title: 'Tòquio: Trobada amb en Banana',
        activities: [
            'Checkout a Utsunomiya i tren local cap a Tòquio (Shinjuku).',
            '17:30 h: Retrobament amb en Banana. Free tours per Shinjuku, Asakusa i Shibuya.'
        ],
        accommodation: '🏨 IMANO TOKYO HOSTEL (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [35.6938, 139.7032] // Shinjuku
    },
    {
        date: '2026-08-14',
        dayLabel: 'Dia 9',
        weekday: 'Divendres',
        title: 'Tòquio compartit',
        activities: [
            'Free Tour i visites guiades per la ciutat amb en Banana.',
            'Continuació de visites per barris icònics.'
        ],
        accommodation: '🏨 IMANO TOKYO HOSTEL (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [35.6580, 139.7016] // Shibuya
    },
    {
        date: '2026-08-15',
        dayLabel: 'Dia 10',
        weekday: 'Dissabte',
        title: 'Cap al Mont Fuji',
        activities: [
            'Aproximació a Fujinomiya.',
            'Preparació per a l\'ascens de l\'endemà. Base camp.'
        ],
        accommodation: '🏨 CABIN HOUSE YADO FUJINOMIYA (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [35.2238, 138.6133] // Fujinomiya
    },
    {
        date: '2026-08-16',
        dayLabel: 'Dia 11',
        weekday: 'Diumenge',
        title: 'Cim del Mont Fuji',
        activities: [
            'Ascensió conjunta i descens al Mont Fuji (Ruta Fujinomiya).'
        ],
        accommodation: '🏨 CABIN HOUSE YADO FUJINOMIYA (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [35.3606, 138.7274] // Mt Fuji
    },
    {
        date: '2026-08-17',
        dayLabel: 'Dia 12',
        weekday: 'Dilluns',
        title: 'Arribada a Takayama i Ta-Q-Bin',
        activities: [
            'Titon: Viatge a Takayama. Enviament de maleta gran a Kyoto via Ta-Q-Bin.',
            'Banana: Viatja sol cap a Odawara.'
        ],
        accommodation: '🏨 GUESTHOUSE OUKA (Titon)',
        type: 'titon',
        badge: 'titon',
        coords: [36.1461, 137.2520] // Takayama
    },
    {
        date: '2026-08-17',
        dayLabel: 'Banana 1',
        weekday: 'Dilluns',
        title: 'Banana a Odawara',
        activities: ['Banana fa nit a Odawara.'],
        accommodation: 'Hostel a Odawara',
        type: 'banana',
        badge: 'banana',
        coords: [35.2536, 139.1553] // Odawara
    },
    {
        date: '2026-08-18',
        dayLabel: 'Dia 13',
        weekday: 'Dimarts',
        title: 'Relax a Takayama',
        activities: [
            'Pau, mercats matinals i natura pels voltants de Takayama.'
        ],
        accommodation: '🏨 GUESTHOUSE OUKA (Titon)',
        type: 'titon',
        badge: 'titon',
        coords: [36.1461, 137.2520]
    },
    {
        date: '2026-08-18',
        dayLabel: 'Banana 2',
        weekday: 'Dimarts',
        title: 'Banana a Nagoya',
        activities: ['Banana viatja a Nagoya.'],
        accommodation: 'Hostel a Nagoya',
        type: 'banana',
        badge: 'banana',
        coords: [35.1815, 136.9066] // Nagoya
    },
    {
        date: '2026-08-19',
        dayLabel: 'Dia 14',
        weekday: 'Dimecres',
        title: 'Retrobament a Takayama',
        activities: [
            'Banana arriba a Takayama per retrobar-se amb Titon.',
            'Visita conjunta per la ciutat.'
        ],
        accommodation: '🏨 GUESTHOUSE OUKA (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [36.1461, 137.2520]
    },
    {
        date: '2026-08-20',
        dayLabel: 'Dia 15',
        weekday: 'Dijous',
        title: 'Shirakawa-go i Separació',
        activities: [
            'Bus a Shirakawa-go junts (1h de trajecte).',
            'Separació a les 15:00 h: Titon cap a Kanazawa, Banana cap a Kyoto.'
        ],
        accommodation: '🏨 BLUE HOUR KANAZAWA (Titon)',
        type: 'titon',
        badge: 'titon',
        coords: [36.5613, 136.6562] // Kanazawa
    },
    {
        date: '2026-08-20',
        dayLabel: 'Banana 3',
        weekday: 'Dijous',
        title: 'Banana arriba a Kyoto',
        activities: ['Banana fa el check-in a Kyoto.'],
        accommodation: 'Hostel a Kyoto',
        type: 'banana',
        badge: 'banana',
        coords: [35.0116, 135.7681] // Kyoto
    },
    {
        date: '2026-08-21',
        dayLabel: 'Dia 16',
        weekday: 'Divendres',
        title: 'Cap a Kyoto i retrobament',
        activities: [
            'Tren Thunderbird des de Kanazawa cap a Kyoto.',
            'Recull de la maleta gran a l\'hostel enviada via Ta-Q-Bin.',
            'Retrobament amb Banana.'
        ],
        accommodation: '🏨 SHIJO GUESTHOUSE HIVE (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [35.0116, 135.7681] // Kyoto
    },
    {
        date: '2026-08-22',
        dayLabel: 'Dia 17',
        weekday: 'Dissabte',
        title: 'Kyoto Compartit',
        activities: [
            'Visites conjuntes per Kyoto: temples, mercats i passejos.'
        ],
        accommodation: '🏨 SHIJO GUESTHOUSE HIVE (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [34.9671, 135.7727] // Fushimi
    },
    {
        date: '2026-08-23',
        dayLabel: 'Dia 18',
        weekday: 'Diumenge',
        title: 'Cap a Osaka',
        activities: [
            'Tren cap a Osaka.',
            'Dotonbori, vida nocturna i gastronomia de carrer.'
        ],
        accommodation: '🏨 ACRO CAPSULE NAMBA (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [34.6687, 135.5013] // Namba
    },
    {
        date: '2026-08-24',
        dayLabel: 'Dia 19',
        weekday: 'Dilluns',
        title: 'Osaka Urbana',
        activities: [
            'Exploració del barri de Shinsekai, el mercat Kuromon i zones d\'oci.'
        ],
        accommodation: '🏨 ACRO CAPSULE NAMBA (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [34.6525, 135.5063] // Shinsekai
    },
    {
        date: '2026-08-25',
        dayLabel: 'Dia 20',
        weekday: 'Dimarts',
        title: 'Hiroshima i Miyajima',
        activities: [
            'Shinkansen cap a Hiroshima.',
            'Ferry a l\'Illa de Miyajima (cérvols i ascens al Mont Misen).'
        ],
        accommodation: '🏨 WEBASE HIROSHIMA (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [34.2965, 132.3206] // Miyajima
    },
    {
        date: '2026-08-26',
        dayLabel: 'Dia 21',
        weekday: 'Dimecres',
        title: 'Hiroshima de la Pau',
        activities: [
            'Visita profunda al Parc i Museu de la Pau per tancar el viatge.'
        ],
        accommodation: '🏨 WEBASE HIROSHIMA (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [34.3927, 132.4526] // Hiroshima Peace Park
    },
    {
        date: '2026-08-27',
        dayLabel: 'Dia 22',
        weekday: 'Dijous',
        title: 'Tornada (Vol des de Kansai)',
        activities: [
            'Shinkansen Hiroshima → Shin-Osaka + Haruka Express → Aeroport KIX.',
            'Vol de tornada cap a BCN a les 15:15 h (Shenzhen Airlines).'
        ],
        accommodation: '✈️ Vol',
        type: 'titon',
        badge: 'titon',
        coords: [34.4320, 135.2304] // KIX
    }
];
