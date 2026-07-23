// --- INITIAL DATA & SEEDING ---

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
        type: 'uri',
        badge: 'uri',
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
        type: 'uri',
        badge: 'uri',
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
        type: 'uri',
        badge: 'uri',
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
        type: 'uri',
        badge: 'uri',
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
        type: 'uri',
        badge: 'uri',
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
        type: 'uri',
        badge: 'uri',
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
        type: 'uri',
        badge: 'uri',
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
        type: 'uri',
        badge: 'uri',
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
            'Uri: Viatge a Takayama. Enviament de maleta gran a Kyoto via Ta-Q-Bin.',
            'Banana: Viatja sol cap a Odawara.'
        ],
        accommodation: '🏨 GUESTHOUSE OUKA (Uri)',
        type: 'uri',
        badge: 'uri',
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
        accommodation: '🏨 GUESTHOUSE OUKA (Uri)',
        type: 'uri',
        badge: 'uri',
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
            'Banana arriba a Takayama per retrobar-se amb Uri.',
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
            'Separació a les 15:00 h: Uri cap a Kanazawa, Banana cap a Kyoto.'
        ],
        accommodation: '🏨 BLUE HOUR KANAZAWA (Uri)',
        type: 'uri',
        badge: 'uri',
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
        type: 'uri',
        badge: 'uri',
        coords: [34.4320, 135.2304] // KIX
    }
];
;

const DEFAULT_EXPENSES = [
    { id: '1', category: 'Vols', concept: 'Vol Open-Jaw BCN-Tòquio / Kansai-BCN (Estimat)', amount: 850 },
    { id: 'h-ueno', category: 'Allotjament', concept: 'Hostel Ueno / Asakusa', amount: 55 },
    { id: 'h-utsunomiya', category: 'Allotjament', concept: 'Guesthouse Utsunomiya', amount: 89 },
    { id: 'h-shinjuku', category: 'Allotjament', concept: 'Hostel Shinjuku (Tòquio)', amount: 52 },
    { id: 'h-fuji', category: 'Allotjament', concept: 'Hostel Fuji', amount: 53 },
    { id: 'h-takayama', category: 'Allotjament', concept: 'Hostel Takayama', amount: 55 },
    { id: 'h-kanazawa', category: 'Allotjament', concept: 'Hostel Kanazawa', amount: 17 },
    { id: 'h-kyoto', category: 'Allotjament', concept: 'Hostel Kyoto', amount: 34 },
    { id: 'h-osaka', category: 'Allotjament', concept: 'Hostel Osaka', amount: 27 },
    { id: 'h-hiroshima', category: 'Allotjament', concept: 'Hostel Hiroshima', amount: 36 },
    { id: '4', category: 'Transport', concept: 'Trens regionals i de muntanya', amount: 80 },
    { id: '5', category: 'Transport', concept: 'Trens llargs Shinkansen', amount: 130 },
    { id: '6', category: 'Menjar i oci', concept: 'Menjar diari (Konbinis / Gyudon)', amount: 250 }
];

const DEFAULT_VIDEOS = [
    {
        id: '1',
        title: 'Consells per a l\'ascensió al Mont Nantai (Nikko)',
        url: 'https://www.youtube.com/watch?v=XXXXXXX',
        timestamp: '02:15',
        notes: 'Explica per on agafar el bus al Llac Chuzenji i el punt clau de les escales de pedra.'
    },
    {
        id: '2',
        title: 'Enviament de maletes Ta-Q-Bin al Japó',
        url: 'https://www.youtube.com/watch?v=XXXXXXX',
        timestamp: '05:30',
        notes: 'Guia pas a pas de com emplenar el formulari de Yamato Transport per enviar la maleta de Takayama a Kyoto.'
    }
];

const DEFAULT_TASKS = [
    { id: '1', text: 'Reservar els vols definitius BCN - Japó (open-jaw o anada/tornada KIX/NRT)', completed: true },
    { id: '2', text: 'Reservar Hostel a Ueno o Asakusa (06 - 09 Agost)', completed: false },
    { id: '3', text: 'Posar alarma per comprar bitllet Nohi Bus (Takayama -> Shirakawa-go -> Kanazawa) un mes abans', completed: false },
    { id: '4', text: 'Comprar assegurança mèdica internacional', completed: false },
    { id: '5', text: 'Contractar eSIM de dades per al mòbil (ex: Ubigi o Holafly)', completed: false }
];

const DEFAULT_LUGGAGE = [
    { id: 'l1', text: 'Motxilla de senderisme principal (30-40L)', completed: false },
    { id: 'l2', text: 'Cal├ºat de trekking / trail running ja usat (crucial pel Kumano)', completed: false },
    { id: 'l3', text: 'Paravents / Impermeable lleuger (plou sovint a Kumano)', completed: false },
    { id: 'l4', text: 'Roba t├¿cnica transpirable (per a la calor i humitat de l\'agost)', completed: false },
    { id: 'l5', text: 'Tovallola de microfibra de secat r├ápid', completed: false },
    { id: 'l6', text: 'Farmaciola b├ásica (tiretes, antiinflamatoris, vaselina pels peus)', completed: false },
    { id: 'l7', text: 'Adaptador d\'endoll tipus A (Jap├│)', completed: false },
    { id: 'l8', text: 'Passaport en vigor i c├▓pia f├¡sica/digital', completed: false },
    { id: 'l9', text: '1 o 2 maletes de cabina petites (idealment nom├®s 1 si ├®s possible)', completed: false },
    { id: 'l10', text: 'Motxilla petita de dia (15-20L) per al senderisme a Kumano', completed: false },
    { id: 'l11', text: 'Cantimplora o bossa d\'aigua (m├¡nim 1.5L, fa molta calor)', completed: false },
    { id: 'l12', text: 'Bastons de trekking per a les baixades de pedra a Kumano', completed: false },
    { id: 'l13', text: 'Roba interior i samarretes de secat r├ápid per rentar a m├á', completed: false },
    { id: 'l14', text: 'Gorra i ulleres de sol pel sol intens d\'agost', completed: false },
    { id: 'l15', text: 'Protector solar resistent a la suor i repel┬Àlent de mosquits fort', completed: false }
];

const DEFAULT_SHOPPING = [
    { id: 's1', text: 'Goshuincho i segells cal┬Àligr├áfics (Shuin) als temples (~15 Ôé¼ llibreta, ~3-4 Ôé¼ cada segell)', completed: false },
    { id: 's2', text: 'Tenugui (Mocador de cot├│ tradicional molt vers├átil, ~5-10 Ôé¼)', completed: false },
    { id: 's3', text: 'Hashi (Bastonets de fusta personalitzats gravats amb el teu nom, ~10-15 Ôé¼)', completed: false },
    { id: 's4', text: 'Furin (Campaneta de vent tradicional japonesa de vidre o ferro, ~5-10 Ôé¼)', completed: false },
    { id: 's5', text: 'Llibretes o quaderns de papereria japonesa (Midori, Apica, ~3-7 Ôé¼)', completed: false },
    { id: 's6', text: 'Pegats de mentol per als peus (Kyusoku Jikan, molt ├║til pel Kumano Kodo, ~5 Ôé¼)', completed: false },
    { id: 's7', text: 'T├® verd o Matcha local comprat directament en cooperatives rurals (~5-10 Ôé¼)', completed: false }
];

const DEFAULT_PLACES = [
    { id: 'p1', text: '­ƒÖïÔÇìÔÖé´©Å [Uri] Nara: Parc ple de c├®rvols lliures (els c├®rvols sagrats que demanen menjar reverenciant-te) i el temple Todai-ji.', completed: false },
    { id: 'p-osaka', text: '­ƒÖïÔÇìÔÖé´©Å [Uri] Osaka: Banys termals / Onsen on et pots vestir amb yukata o kimono (ex: parc tem├átic de banys Spa World o onsens tradicionals per comprovar si mola).', completed: false },
    { id: 'p2', text: '­ƒÆí [IA] Kamakura: El Gran Buda de bronze a l\'aire lliure (Daibutsu) i temples hist├▓rics de bosc (excursi├│ f├ácil des de T├▓quio).', completed: false },
    { id: 'p3', text: '­ƒÆí [IA] Nikko: Mausoleus daurats dels shoguns Tokugawa, cascada Kegon i naturalesa alpina espectacular (excursi├│ des de T├▓quio).', completed: false },
    { id: 'p4', text: '­ƒÆí [IA] Himeji: El c├¿lebre castell de la Gar├ºa Blanca, el castell feudal original m├®s espectacular i millor conservat de tot el Jap├│.', completed: false },
    { id: 'p5', text: '­ƒÆí [IA] Uji: Bressol del te verd matcha hist├▓ric i el temple Byodoin (l\'edifici impr├¿s a la moneda de 10 iens). Prop de Kyoto.', completed: false },
    { id: 'p6', text: '­ƒÆí [IA] Koyasan: El mont sagrat budista, dormir en un temple gestionat pels monjos (shukubo) i rec├│rrer el cementiri m├¡stic d\'Okunoin.', completed: false }
];

const DEFAULT_OBSERVATIONS = [
    { id: 'o1', text: 'ÔÜá´©Å No et deixis enredar per botigues/museus de figuretes i merxandatge (anime/manga), que n\'hi ha milers a tot arreu. El primer v├¡deo llarg de T├▓quio n\'estava ple. Tot i aix├¡, segur que t\'hi acabar├ás trobant igualment!', completed: false },
    { id: 'o2', text: '­ƒÆí Consell: No cal deixar propina als restaurants al Jap├│; de fet, est├á mal vist i et perseguiran si te la deixes.', completed: false },
    { id: 'o3', text: '­ƒÆí Consell: Porta sempre una bossa petita a sobre per guardar les teves escombraries (gaireb├® no hi ha papereres p├║bliques al carrer).', completed: false },
    { id: 'o4', text: '­ƒÆí Consell: Respecta el silenci al transport p├║blic (posa el tel├¿fon en silenci├│s i evita parlar fort).', completed: false },
    { id: 'o5', text: '­ƒÆí Consell: Porta sempre diners en efectiu a sobre, ja que molts llocs rurals, temples o petits onsens no accepten targeta.', completed: false }
];

// --- APP STATE ---

let state = {
    currentTab: 'itinerary',
    itineraryFilter: 'all',
    expenses: [],
    videos: [],
    tasks: [],
    luggage: [],
    shopping: [],
    places: [],
    observations: []
};

// Map variable
let map = null;
let mapMarkers = [];
let routePolyline = null;

// --- STATE MANAGEMENT (LOCAL STORAGE) ---

function loadState() {
    state.expenses = JSON.parse(localStorage.getItem('japo_expenses')) || DEFAULT_EXPENSES;
    state.videos = JSON.parse(localStorage.getItem('japo_videos')) || DEFAULT_VIDEOS;
    state.tasks = JSON.parse(localStorage.getItem('japo_tasks')) || DEFAULT_TASKS;
    state.luggage = JSON.parse(localStorage.getItem('japo_luggage')) || DEFAULT_LUGGAGE;
    state.shopping = JSON.parse(localStorage.getItem('japo_shopping')) || DEFAULT_SHOPPING;
    state.places = JSON.parse(localStorage.getItem('japo_places')) || DEFAULT_PLACES;
    state.observations = JSON.parse(localStorage.getItem('japo_observations')) || DEFAULT_OBSERVATIONS;

    // Assegurar que la SIM card est├á present si l'usuari ja tenia dades guardades
    const hasSimExpense = state.expenses.some(exp => exp.concept.toLowerCase().includes('sim'));
    if (!hasSimExpense) {
        state.expenses.push({ id: 'sim-card-exp', category: 'Altres', concept: 'Targeta SIM internet Jap├│', amount: 100 });
        saveState('expenses');
    }

    const hasSimTask = state.tasks.some(task => task.text.toLowerCase().includes('sim'));
    if (!hasSimTask) {
        state.tasks.push({ id: 'sim-card-task', text: 'Comprar targeta SIM / eSIM per a internet al Jap├│ (~100 Ôé¼)', completed: false });
        saveState('tasks');
    }

    // Afegir les noves tasques de maleta si no hi s├│n
    const hasLuggageStrategy = state.tasks.some(task => task.id === 'luggage-strategy-task');
    if (!hasLuggageStrategy) {
        state.tasks.push({ id: 'luggage-strategy-task', text: 'Decidir combinaci├│ de maletes (idealment 1 maleta de cabina + 1 motxilla per caminar)', completed: false });
        state.tasks.push({ id: 'takkyubin-service-task', text: 'Consultar funcionament i preus del servei d\'enviament de maletes (Takkyubin / Yamato) per al Kumano', completed: false });
        saveState('tasks');
    }

    // Afegir la tasca dels bancs si no hi ├®s
    const hasBankTask = state.tasks.some(task => task.id === 'bank-commissions-task');
    if (!hasBankTask) {
        state.tasks.push({ id: 'bank-commissions-task', text: 'Buscar targeta/banc sense comissions pel viatge (revisar Revolut, Wise o un compte de promoci├│ local)', completed: false });
        saveState('tasks');
    }

    // Afegir recursos de N26 si no hi s├│n
    const hasN26Resources = state.videos.some(vid => vid.id === 'n26-1');
    if (!hasN26Resources) {
        const n26Items = [
            {
                id: 'n26-1',
                title: 'Guia N26: Pagar amb targeta al Jap├│',
                url: 'https://n26.com/es-es/pagar-con-tarjeta-en-japon',
                timestamp: '',
                notes: 'Informaci├│ oficial sobre l\'├║s, tipus de canvi i comissions de la targeta N26 al Jap├│.'
            },
            {
                id: 'n26-2',
                title: 'Japonpedia: Targeta N26 al Jap├│',
                url: 'https://japonpedia.com/tarjeta-n26-japon/',
                timestamp: '',
                notes: 'Guia pr├áctica de viatgers sobre l\'├║s de N26 en caixers i comer├ºos japonesos.'
            },
            {
                id: 'n26-3',
                title: 'Comiviajeros: Com funciona N26 a l\'estranger',
                url: 'https://comiviajeros.com/tarjeta-n26-pagar-extranjero/',
                timestamp: '',
                notes: 'Comparativa i experi├¿ncies pr├áctiques d\'├║s de la targeta de viatge N26.'
            }
        ];
        state.videos.push(...n26Items);
        saveState('videos');
    }

    // Afegir els nous elements de maleta si no hi s├│n
    const hasNewLuggageItems = state.luggage.some(item => item.id === 'l9');
    if (!hasNewLuggageItems) {
        const itemsToAdd = [
            { id: 'l9', text: '1 o 2 maletes de cabina petites (idealment nom├®s 1 si ├®s possible)', completed: false },
            { id: 'l10', text: 'Motxilla petita de dia (15-20L) per al senderisme a Kumano', completed: false },
            { id: 'l11', text: 'Cantimplora o bossa d\'aigua (m├¡nim 1.5L, fa molta calor)', completed: false },
            { id: 'l12', text: 'Bastons de trekking per a les baixades de pedra a Kumano', completed: false },
            { id: 'l13', text: 'Roba interior i samarretes de secat r├ápid per rentar a m├á', completed: false },
            { id: 'l14', text: 'Gorra i ulleres de sol pel sol intens d\'agost', completed: false },
            { id: 'l15', text: 'Protector solar resistent a la suor i repel┬Àlent de mosquits fort', completed: false }
        ];
        state.luggage.push(...itemsToAdd);
        saveState('luggage');
    }

    // For├ºar l'actualitzaci├│ dels llocs per diferenciar recomanacions i afegir l'Osaka onsen
    const hasOsakaOnsen = state.places.some(item => item.id === 'p-osaka');
    const hasUriPrefix = state.places.some(item => item.text.includes('[Uri]'));
    if (!hasOsakaOnsen || !hasUriPrefix) {
        state.places = DEFAULT_PLACES;
        saveState('places');
    }
}

function saveState(key) {
    if (key === 'expenses' || !key) localStorage.setItem('japo_expenses', JSON.stringify(state.expenses));
    if (key === 'videos' || !key) localStorage.setItem('japo_videos', JSON.stringify(state.videos));
    if (key === 'tasks' || !key) localStorage.setItem('japo_tasks', JSON.stringify(state.tasks));
    if (key === 'luggage' || !key) localStorage.setItem('japo_luggage', JSON.stringify(state.luggage));
    if (key === 'shopping' || !key) localStorage.setItem('japo_shopping', JSON.stringify(state.shopping));
    if (key === 'places' || !key) localStorage.setItem('japo_places', JSON.stringify(state.places));
    if (key === 'observations' || !key) localStorage.setItem('japo_observations', JSON.stringify(state.observations));
}

// --- RENDERING FUNCTIONS ---

// Tab Switching
function initTabSwitching() {
    const navButtons = document.querySelectorAll('.nav-btn, .mobile-nav-btn');
    const sections = document.querySelectorAll('.content-section');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            state.currentTab = target;

            // Update UI buttons active state
            navButtons.forEach(b => {
                if (b.getAttribute('data-target') === target) {
                    b.classList.add('active');
                } else {
                    b.classList.remove('active');
                }
            });

            // Show active section
            sections.forEach(section => {
                const secId = section.getAttribute('id');
                if (secId === `section-${target}`) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });

            // Special initializations on tab open
            if (target === 'map') {
                setTimeout(() => {
                    if (map) {
                        map.invalidateSize();
                    } else {
                        initMap();
                    }
                }, 100);
            }
        });
    });
}

// Countdown timer
function initCountdown() {
    const targetDate = new Date('2026-08-05T00:00:00');
    const today = new Date();
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const countText = document.getElementById('countdown-days');
    const badge = document.getElementById('countdown-container');
    
    if (diffDays > 0) {
        countText.innerText = diffDays;
    } else if (diffDays === 0) {
        badge.innerHTML = "🎉 Avui marxes al Japó!";
        badge.style.background = "rgba(255, 121, 198, 0.15)";
        badge.style.borderColor = "var(--accent-pink)";
        badge.style.color = "var(--accent-pink)";
        badge.style.boxShadow = "var(--glow-pink)";
    } else {
        badge.innerHTML = "🇯🇵 Gaudint del viatge!";
        badge.style.background = "rgba(80, 250, 123, 0.15)";
        badge.style.borderColor = "var(--accent-green)";
        badge.style.color = "var(--accent-green)";
        badge.style.boxShadow = "var(--glow-green)";
    }
}

// 1. Itinerary Renderer
function renderItinerary() {
    const container = document.getElementById('timeline-container');
    container.innerHTML = '';

    const filteredData = DEFAULT_ITINERARY.filter(day => {
        if (state.itineraryFilter === 'all') return true;
        if (state.itineraryFilter === 'overlap') return day.type === 'overlap';
        if (state.itineraryFilter === 'uri') return day.type === 'uri';
        return true;
    });

    filteredData.forEach(day => {
        const item = document.createElement('div');
        item.className = `timeline-item ${day.type}`;

        const badgeHtml = day.badge === 'shared' 
            ? `<span class="badge badge-shared"><i class="fa-solid fa-users"></i> Compartit</span>`
            : day.badge === 'uri'
                ? `<span class="badge badge-uri"><i class="fa-solid fa-user"></i> Uri (Tu)</span>`
                : `<span class="badge badge-banana"><i class="fa-solid fa-user-astronaut"></i> Banana</span>`;

        let activitiesHtml = '';
        day.activities.forEach(act => {
            activitiesHtml += `<li class="day-activity-item">${act}</li>`;
        });

        item.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="day-card glass-panel">
                <div class="day-header">
                    <span class="day-number">${day.dayLabel}</span>
                    <div class="day-date">${formatDateLabel(day.date)}</div>
                    <div class="day-weekday">${day.weekday}</div>
                </div>
                <div class="day-body">
                    <div class="route-badges">${badgeHtml}</div>
                    <h3 class="day-title">${day.title}</h3>
                    <ul class="day-activity-list">${activitiesHtml}</ul>
                    ${day.accommodation ? `<div class="day-accommodation"><i class="fa-solid fa-hotel"></i> ${day.accommodation}</div>` : ''}
                </div>
            </div>
        `;
        container.appendChild(item);
    });
}

function formatDateLabel(dateStr) {
    const d = new Date(dateStr);
    return `${d.getDate()}/${d.getMonth() + 1}`;
}

function initItineraryFilters() {
    const filters = document.querySelectorAll('.filter-btn');
    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.itineraryFilter = btn.getAttribute('data-filter');
            renderItinerary();
        });
    });
}

// 2. Leaflet Map Renderer
function initMap() {
    if (map) return;

    // Center in Japan main island area
    map = L.map('map-element', {
        zoomControl: true,
        scrollWheelZoom: false
    }).setView([35.2, 137.5], 6);

    // Premium dark tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // Filter out coordinates for plotting lines
    const coordsList = DEFAULT_ITINERARY
        .filter(day => day.coords && day.coords.length === 2)
        .map(day => ({
            coords: day.coords,
            title: day.title,
            date: day.date,
            type: day.type,
            dayLabel: day.dayLabel
        }));

    // Draw markers
    coordsList.forEach(point => {
        let color = '#ff79c6'; // Shared
        if (point.type === 'uri') color = '#50fa7b';
        if (point.type === 'banana') color = '#06b6d4';

        const marker = L.circleMarker(point.coords, {
            radius: 8,
            fillColor: color,
            color: '#ffffff',
            weight: 2,
            opacity: 0.9,
            fillOpacity: 0.8
        }).addTo(map);

        marker.bindPopup(`
            <div class="map-popup-content">
                <h3>${point.dayLabel}: ${point.title}</h3>
                <p><strong>Data:</strong> ${point.date}</p>
                <p>Tipus de ruta: <span style="color:${color}; font-weight:bold;">${point.type.toUpperCase()}</span></p>
            </div>
        `);
        mapMarkers.push(marker);
    });

    // Draw lines joining path
    const titonPath = coordsList.filter(p => p.type === 'uri' || p.type === 'overlap').map(p => p.coords);
    const bananaPath = coordsList.filter(p => p.type === 'banana' || p.type === 'overlap').map(p => p.coords);

    if (titonPath.length > 0) {
        L.polyline(titonPath, { color: '#50fa7b', weight: 3, opacity: 0.7 }).addTo(map);
    }
    if (bananaPath.length > 0) {
        L.polyline(bananaPath, { color: '#06b6d4', weight: 3, opacity: 0.7, dashArray: '5, 8' }).addTo(map);
    }

    // Zoom map fit bounds
    const allCoords = coordsList.map(p => p.coords);
    if (allCoords.length > 0) {
        const bounds = L.polyline(allCoords).getBounds();
        map.fitBounds(bounds, { padding: [30, 30] });
    }
}

// 3. Budget Module
function renderBudget() {
    const tableBody = document.getElementById('expense-table-body');
    tableBody.innerHTML = '';

    let totalSpent = 0;

    state.expenses.forEach(exp => {
        totalSpent += parseFloat(exp.amount);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><span class="expense-category-cell">${getCategoryEmoji(exp.category)} ${exp.category}</span></td>
            <td>${exp.concept}</td>
            <td style="font-weight: 600;">${exp.amount} €</td>
            <td>
                <button class="btn-delete-expense" data-id="${exp.id}" title="Eliminar despesa">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    // Update spent text and progress bar
    document.getElementById('budget-spent-text').innerText = `${totalSpent.toLocaleString('ca-ES')} € gastats`;
    
    const limit = 1500;
    let percentage = (totalSpent / limit) * 100;
    if (percentage > 100) percentage = 100;
    
    const progressBar = document.getElementById('budget-progress-bar');
    progressBar.style.width = `${percentage}%`;

    const statusMessage = document.getElementById('budget-status-message');
    if (totalSpent > limit) {
        progressBar.style.background = 'var(--accent-red)';
        progressBar.style.boxShadow = '0 0 10px rgba(239, 68, 68, 0.5)';
        statusMessage.innerHTML = `⚠️ Compte! Has superat el pressupost per <strong>${(totalSpent - limit)} €</strong>.`;
        statusMessage.className = 'budget-status-message warning';
    } else {
        progressBar.style.background = 'linear-gradient(90deg, var(--accent-green), var(--accent-purple))';
        progressBar.style.boxShadow = 'var(--glow-green)';
        statusMessage.innerHTML = `Estàs dins del pressupost estimat! Et queden <strong>${(limit - totalSpent)} €</strong>.`;
        statusMessage.className = 'budget-status-message';
    }

    // Attach delete listeners
    document.querySelectorAll('.btn-delete-expense').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            state.expenses = state.expenses.filter(e => e.id !== id);
            saveState('expenses');
            renderBudget();
        });
    });
}

function getCategoryEmoji(cat) {
    if (cat === 'Vols') return '✈️';
    if (cat === 'Allotjament') return '🏨';
    if (cat === 'Transport') return '🚄';
    if (cat === 'Menjar i oci') return '🍜';
    return '🎒';
}

function initBudgetForm() {
    const form = document.getElementById('expense-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const category = document.getElementById('expense-category').value;
        const concept = document.getElementById('expense-concept').value;
        const amount = parseFloat(document.getElementById('expense-amount').value);

        if (!concept || isNaN(amount)) return;

        const newExpense = {
            id: Date.now().toString(),
            category,
            concept,
            amount
        };

        state.expenses.push(newExpense);
        saveState('expenses');
        renderBudget();

        // Reset form
        form.reset();
    });

    const resetBtn = document.getElementById('btn-reset-expenses');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('Estàs segur que vols restablir les despeses per defecte? Es perdran els canvis manualment fets.')) {
                state.expenses = [...DEFAULT_EXPENSES];
                saveState('expenses');
                renderBudget();
            }
        });
    }
}

// 4. Videos Module
function renderVideos() {
    const container = document.getElementById('video-cards-container');
    container.innerHTML = '';

    state.videos.forEach(vid => {
        const card = document.createElement('div');
        card.className = 'video-card glass-panel resource-card';
        
        // Extract YouTube ID for potential thumbnail
        const ytId = getYoutubeId(vid.url);
        const thumbHtml = ytId 
            ? `<div style="background-image: url('https://img.youtube.com/vi/${ytId}/hqdefault.jpg'); height: 120px; background-size: cover; background-position: center; border-radius: 8px; margin-bottom: 12px; border: 1px solid var(--border-glass)"></div>`
            : '';

        card.innerHTML = `
            <div>
                ${thumbHtml}
                <div class="resource-top">
                    <h4>${vid.title}</h4>
                    ${vid.timestamp ? `<span class="resource-timestamp"><i class="fa-regular fa-clock"></i> Minut: ${vid.timestamp}</span>` : ''}
                </div>
                <p class="resource-notes">${vid.notes || 'Sense anotacions.'}</p>
            </div>
            <div class="resource-actions">
                <a href="${vid.url}" target="_blank" class="resource-link">
                    <i class="fa-brands fa-youtube"></i> Veure vídeo
                </a>
                <button class="btn-delete-resource" data-id="${vid.id}" title="Eliminar recurs">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        `;
        container.appendChild(card);
    });

    // Attach delete listeners
    document.querySelectorAll('.btn-delete-resource').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            state.videos = state.videos.filter(v => v.id !== id);
            saveState('videos');
            renderVideos();
        });
    });
}

function getYoutubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

function initVideoForm() {
    const form = document.getElementById('video-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('video-title').value;
        const url = document.getElementById('video-url').value;
        const timestamp = document.getElementById('video-timestamp').value;
        const notes = document.getElementById('video-notes').value;

        if (!title || !url) return;

        const newVideo = {
            id: Date.now().toString(),
            title,
            url,
            timestamp,
            notes
        };

        state.videos.push(newVideo);
        saveState('videos');
        renderVideos();

        form.reset();
    });
}

// 5. Tasks Module
function renderTasks() {
    const container = document.getElementById('tasks-list-container');
    container.innerHTML = '';

    // Sort tasks: uncompleted first
    const sortedTasks = [...state.tasks].sort((a, b) => a.completed - b.completed);

    sortedTasks.forEach(task => {
        const item = document.createElement('li');
        item.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        item.innerHTML = `
            <div class="task-checkbox-container" data-id="${task.id}">
                <div class="task-checkbox">
                    <i class="fa-solid fa-check"></i>
                </div>
                <span class="task-text">${task.text}</span>
            </div>
            <button class="btn-delete-task" data-id="${task.id}" title="Eliminar tasca">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        `;
        container.appendChild(item);
    });

    // Toggle complete status
    document.querySelectorAll('.task-checkbox-container').forEach(el => {
        el.addEventListener('click', () => {
            const id = el.getAttribute('data-id');
            const task = state.tasks.find(t => t.id === id);
            if (task) {
                task.completed = !task.completed;
                saveState('tasks');
                renderTasks();
            }
        });
    });

    // Delete task
    document.querySelectorAll('.btn-delete-task').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Avoid triggering check toggle
            const id = btn.getAttribute('data-id');
            state.tasks = state.tasks.filter(t => t.id !== id);
            saveState('tasks');
            renderTasks();
        });
    });
}

function initTaskForm() {
    const input = document.getElementById('new-task-input');
    const btn = document.getElementById('btn-add-task');

    const handleAddTask = () => {
        const text = input.value.trim();
        if (!text) return;

        const newTask = {
            id: Date.now().toString(),
            text,
            completed: false
        };

        state.tasks.push(newTask);
        saveState('tasks');
        renderTasks();

        input.value = '';
    };

    btn.addEventListener('click', handleAddTask);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAddTask();
    });
}

// --- INIT APP ---

document.addEventListener('DOMContentLoaded', () => {
    loadState();
    
    // Core Layout
    initTabSwitching();
    initCountdown();
    
    // Modules
    renderItinerary();
    initItineraryFilters();
    
    renderBudget();
    initBudgetForm();
    
    renderVideos();
    initVideoForm();
    
    renderTasks();
    initTaskForm();
});


// 6. Luggage Module
function renderLuggage() {
    const container = document.getElementById('luggage-list-container');
    if (!container) return;
    container.innerHTML = '';

    // Sort luggage: uncompleted first
    const sortedLuggage = [...state.luggage].sort((a, b) => a.completed - b.completed);

    sortedLuggage.forEach(item => {
        const li = document.createElement('li');
        li.className = `task-item ${item.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <div class="task-checkbox-container" data-id="${item.id}">
                <div class="task-checkbox">
                    <i class="fa-solid fa-check"></i>
                </div>
                <span class="task-text">${item.text}</span>
            </div>
            <button class="btn-delete-task btn-delete-luggage" data-id="${item.id}" title="Eliminar de la maleta">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        `;
        container.appendChild(li);
    });

    // Toggle complete status
    container.querySelectorAll('.task-checkbox-container').forEach(el => {
        el.addEventListener('click', () => {
            const id = el.getAttribute('data-id');
            const item = state.luggage.find(t => t.id === id);
            if (item) {
                item.completed = !item.completed;
                saveState('luggage');
                renderLuggage();
            }
        });
    });

    // Delete luggage item
    container.querySelectorAll('.btn-delete-luggage').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Avoid triggering check toggle
            const id = btn.getAttribute('data-id');
            state.luggage = state.luggage.filter(t => t.id !== id);
            saveState('luggage');
            renderLuggage();
        });
    });
}

function initLuggageForm() {
    const input = document.getElementById('new-luggage-input');
    const btn = document.getElementById('btn-add-luggage');
    if (!input || !btn) return;

    const handleAddLuggage = () => {
        const text = input.value.trim();
        if (!text) return;

        const newItem = {
            id: Date.now().toString(),
            text,
            completed: false
        };

        state.luggage.push(newItem);
        saveState('luggage');
        renderLuggage();

        input.value = '';
    };

    btn.addEventListener('click', handleAddLuggage);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAddLuggage();
    });
}

// 7. Shopping Module
function renderShopping() {
    const container = document.getElementById('shopping-list-container');
    if (!container) return;
    container.innerHTML = '';

    // Sort shopping: uncompleted first
    const sortedShopping = [...state.shopping].sort((a, b) => a.completed - b.completed);

    sortedShopping.forEach(item => {
        const li = document.createElement('li');
        li.className = `task-item ${item.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <div class="task-checkbox-container" data-id="${item.id}">
                <div class="task-checkbox">
                    <i class="fa-solid fa-check"></i>
                </div>
                <span class="task-text">${item.text}</span>
            </div>
            <button class="btn-delete-task btn-delete-shopping" data-id="${item.id}" title="Eliminar de la llista">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        `;
        container.appendChild(li);
    });

    // Toggle complete status
    container.querySelectorAll('.task-checkbox-container').forEach(el => {
        el.addEventListener('click', () => {
            const id = el.getAttribute('data-id');
            const item = state.shopping.find(t => t.id === id);
            if (item) {
                item.completed = !item.completed;
                saveState('shopping');
                renderShopping();
            }
        });
    });

    // Delete shopping item
    container.querySelectorAll('.btn-delete-shopping').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Avoid triggering check toggle
            const id = btn.getAttribute('data-id');
            state.shopping = state.shopping.filter(t => t.id !== id);
            saveState('shopping');
            renderShopping();
        });
    });
}

function initShoppingForm() {
    const input = document.getElementById('new-shopping-input');
    const btn = document.getElementById('btn-add-shopping');
    if (!input || !btn) return;

    const handleAddShopping = () => {
        const text = input.value.trim();
        if (!text) return;

        const newItem = {
            id: Date.now().toString(),
            text,
            completed: false
        };

        state.shopping.push(newItem);
        saveState('shopping');
        renderShopping();

        input.value = '';
    };

    btn.addEventListener('click', handleAddShopping);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAddShopping();
    });
}

// 8. Places Module
function renderPlaces() {
    const container = document.getElementById('places-list-container');
    if (!container) return;
    container.innerHTML = '';

    // Sort places: uncompleted first
    const sortedPlaces = [...state.places].sort((a, b) => a.completed - b.completed);

    sortedPlaces.forEach(item => {
        const li = document.createElement('li');
        li.className = `task-item ${item.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <div class="task-checkbox-container" data-id="${item.id}">
                <div class="task-checkbox">
                    <i class="fa-solid fa-check"></i>
                </div>
                <span class="task-text">${item.text}</span>
            </div>
            <button class="btn-delete-task btn-delete-place" data-id="${item.id}" title="Eliminar de la llista">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        `;
        container.appendChild(li);
    });

    // Toggle complete status
    container.querySelectorAll('.task-checkbox-container').forEach(el => {
        el.addEventListener('click', () => {
            const id = el.getAttribute('data-id');
            const item = state.places.find(t => t.id === id);
            if (item) {
                item.completed = !item.completed;
                saveState('places');
                renderPlaces();
            }
        });
    });

    // Delete place item
    container.querySelectorAll('.btn-delete-place').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Avoid triggering check toggle
            const id = btn.getAttribute('data-id');
            state.places = state.places.filter(t => t.id !== id);
            saveState('places');
            renderPlaces();
        });
    });
}

function initPlacesForm() {
    const input = document.getElementById('new-place-input');
    const btn = document.getElementById('btn-add-place');
    if (!input || !btn) return;

    const handleAddPlace = () => {
        const text = input.value.trim();
        if (!text) return;

        const newItem = {
            id: Date.now().toString(),
            text,
            completed: false
        };

        state.places.push(newItem);
        saveState('places');
        renderPlaces();

        input.value = '';
    };

    btn.addEventListener('click', handleAddPlace);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAddPlace();
    });
}

// 9. Observations Module
function renderObservations() {
    const container = document.getElementById('observations-list-container');
    if (!container) return;
    container.innerHTML = '';

    // Sort observations: uncompleted first
    const sortedObservations = [...state.observations].sort((a, b) => a.completed - b.completed);

    sortedObservations.forEach(item => {
        const li = document.createElement('li');
        li.className = `task-item ${item.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <div class="task-checkbox-container" data-id="${item.id}">
                <div class="task-checkbox">
                    <i class="fa-solid fa-check"></i>
                </div>
                <span class="task-text">${item.text}</span>
            </div>
            <button class="btn-delete-task btn-delete-observation" data-id="${item.id}" title="Eliminar de la llista">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        `;
        container.appendChild(li);
    });

    // Toggle complete status
    container.querySelectorAll('.task-checkbox-container').forEach(el => {
        el.addEventListener('click', () => {
            const id = el.getAttribute('data-id');
            const item = state.observations.find(t => t.id === id);
            if (item) {
                item.completed = !item.completed;
                saveState('observations');
                renderObservations();
            }
        });
    });

    // Delete observation item
    container.querySelectorAll('.btn-delete-observation').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Avoid triggering check toggle
            const id = btn.getAttribute('data-id');
            state.observations = state.observations.filter(t => t.id !== id);
            saveState('observations');
            renderObservations();
        });
    });
}

function initObservationsForm() {
    const input = document.getElementById('new-observation-input');
    const btn = document.getElementById('btn-add-observation');
    if (!input || !btn) return;

    const handleAddObservation = () => {
        const text = input.value.trim();
        if (!text) return;

        const newItem = {
            id: Date.now().toString(),
            text,
            completed: false
        };

        state.observations.push(newItem);
        saveState('observations');
        renderObservations();

        input.value = '';
    };

    btn.addEventListener('click', handleAddObservation);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAddObservation();
    });
}

// --- INIT APP ---

document.addEventListener('DOMContentLoaded', () => {
    loadState();
    
    // Core Layout
    initTabSwitching();
    initCountdown();
    
    // Modules
    renderItinerary();
    initItineraryFilters();
    
    renderBudget();
    initBudgetForm();
    
    renderVideos();
    initVideoForm();
    
    renderTasks();
    initTaskForm();

    renderLuggage();
    initLuggageForm();

    renderShopping();
    initShoppingForm();

    renderPlaces();
    initPlacesForm();

    renderObservations();
    initObservationsForm();
});


