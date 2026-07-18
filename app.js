// --- INITIAL DATA & SEEDING ---

const DEFAULT_ITINERARY = [
    {
        date: '2026-08-05',
        dayLabel: 'Dia 1',
        weekday: 'Dimecres',
        title: 'Sortida cap al Japó (Tòquio)',
        activities: [
            'Vol de sortida des de Barcelona (BCN) cap a Tòquio (entrada per Tòquio - Narita o Haneda, segons l\'estratègia open-jaw).',
            'Nit a bord. Comença el viatge!'
        ],
        accommodation: '✈️ Vol internacional (a bord)',
        type: 'kumano',
        badge: 'uri',
        coords: [35.7767, 140.3864] // Tokyo Narita
    },
    {
        date: '2026-08-06',
        dayLabel: 'Dia 2',
        weekday: 'Dijous',
        title: 'Arribada a Tòquio i trasllat a Tanabe',
        activities: [
            'Arribada a Tòquio de bon matí.',
            'Trasllat en Shinkansen cap a Shin-Osaka i connexió amb el tren JR Kuroshio fins a <strong>Kii-Tanabe</strong>, la porta del Kumano Kodo.',
            'Arribada al hostel, brífing del camí i descans.'
        ],
        accommodation: '🏨 Hostel a Tanabe',
        type: 'kumano',
        badge: 'uri',
        coords: [33.7285, 135.3768]
    },
    {
        date: '2026-08-07',
        dayLabel: 'Dia 3',
        weekday: 'Divendres',
        title: 'Kumano Kodo: Takijiri-oji a Tsugizakura-oji',
        activities: [
            'Agafar el bus local cap a <strong>Takijiri-oji</strong> (inici oficial del camí de pelegrinatge).',
            'Primera caminada exigent pel bosc sagrat de Kumano, passant pel poblet de Takahara.',
            'Arribada i descans a Tsugizakura.'
        ],
        accommodation: '🏨 Minshuku local (Tsugizakura)',
        type: 'kumano',
        badge: 'uri',
        coords: [33.8055, 135.6122]
    },
    {
        date: '2026-08-08',
        dayLabel: 'Dia 4',
        weekday: 'Dissabte',
        title: 'Kumano Kodo: Tsugizakura-oji a Kumano Hongu Taisha',
        activities: [
            'Etapa llarga de senderisme per camins de pedra i boscos de cedres gegants.',
            'Arribada al gran santuari <strong>Kumano Hongu Taisha</strong>, el cor espiritual del Kumano.',
            'Visita al Torii monumental d\'Oyunohara.'
        ],
        accommodation: '🏨 Minshuku / Guesthouse a Hongu',
        type: 'kumano',
        badge: 'uri',
        coords: [33.8403, 135.7738]
    },
    {
        date: '2026-08-09',
        dayLabel: 'Dia 5',
        weekday: 'Diumenge',
        title: 'Kumano Kodo: Descans a Yunomine Onsen',
        activities: [
            'Caminada curta o transport fins a <strong>Yunomine Onsen</strong>, un dels pobles termals més antics del Japó.',
            'Possibilitat de banyar-se al cèlebre onsen sagrat de <i>Tsuboyu</i> (Patrimoni de la Humanitat).',
            'Cuinar ous i verdures a les aigües termals del riu.'
        ],
        accommodation: '🏨 Ryokan / Minshuku a Yunomine Onsen',
        type: 'kumano',
        badge: 'uri',
        coords: [33.8315, 135.7578]
    },
    {
        date: '2026-08-10',
        dayLabel: 'Dia 6',
        weekday: 'Dilluns',
        title: 'Kumano Kodo: Koguchi',
        activities: [
            'Desplaçament o senderisme fins a la petita vall de <strong>Koguchi</strong>.',
            'Vistes verges de rius cristal·lins i muntanyes rurals.',
            'Descans en allotjament local de muntanya.'
        ],
        accommodation: '🏨 Lodge / Minshuku a Koguchi',
        type: 'kumano',
        badge: 'uri',
        coords: [33.7228, 135.8450]
    },
    {
        date: '2026-08-11',
        dayLabel: 'Dia 7',
        weekday: 'Dimarts',
        title: 'Kumano Kodo: Koguchi a Nachisan (Cascada Nachi)',
        activities: [
            'L\'etapa final i més exigent de muntanya (creuant el famós pas d\'Ogumotori-goe).',
            'Arribada espectacular a la cascada de <strong>Nachi Falls</strong> i el temple de tres pisos de color vermell.',
            'Trasllat al vespre fins al poble coster de Katsuura.'
        ],
        accommodation: '🏨 Guesthouse a Katsuura',
        type: 'kumano',
        badge: 'uri',
        coords: [33.6750, 135.8856]
    },
    {
        date: '2026-08-12',
        dayLabel: 'Dia 8',
        weekday: 'Dimecres',
        title: 'Viatge en tren cap a Tòquio',
        activities: [
            'Visita opcional al mercat de peix de Katsuura al matí.',
            'Trajecte de tren Shinkansen cap a <strong>Tòquio</strong> per establir el camp base.',
            'Check-in al hostel i primera presa de contacte amb el Tòquio modern.'
        ],
        accommodation: '🏨 IMANO TOKYO HOSTEL (Shinjuku)',
        type: 'kumano',
        badge: 'uri',
        coords: [35.6938, 139.7032]
    },
    {
        date: '2026-08-13',
        dayLabel: 'Dia 9',
        weekday: 'Dijous',
        title: 'Tòquio: Trobada amb en Banana',
        activities: [
            'Arribada d\'en Banana al Japó a la tarda (vol via Seül). Us trobeu al hostel.',
            '<strong>19:30</strong>: Free tour per <strong>Shinjuku</strong> (Estació de Tochomae). Neons, vida nocturna i oci contemporani.'
        ],
        accommodation: '🏨 IMANO TOKYO HOSTEL (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [35.6895, 139.6917]
    },
    {
        date: '2026-08-14',
        dayLabel: 'Dia 10',
        weekday: 'Divendres',
        title: 'Tòquio amb en Banana: Asakusa i Shibuya',
        activities: [
            '<strong>9:30</strong>: Free Tour per <strong>Asakusa</strong> (Senso-ji i barris antics).',
            'Migdia: Parc Ueno i passeig pel barri de la tecnologia de <strong>Akihabara</strong>.',
            '<strong>18:30</strong>: Free Tour per <strong>Shibuya</strong> (l\'encreuament més famós).'
        ],
        accommodation: '🏨 IMANO TOKYO HOSTEL (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [35.7147, 139.7967]
    },
    {
        date: '2026-08-15',
        dayLabel: 'Dia 11',
        weekday: 'Dissabte',
        title: 'Tòquio modern i viatge a Fujinomiya',
        activities: [
            'Matí: Santuari Meiji i barri jove de Harajuku (Parc Yoyogi).',
            'Migdia: Barri retro de Yanaka o vistes de la Torre de Tòquio.',
            'Al vespre, darrer Shinkansen cap a la zona de Fujinomiya per preparar l\'excursió del Fuji.'
        ],
        accommodation: '🏨 Cabin House Yado Fujinomiya (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [35.2238, 138.6133]
    },
    {
        date: '2026-08-16',
        dayLabel: 'Dia 12',
        weekday: 'Diumenge',
        title: 'Mont Fuji (Versió lleugera a Kawaguchiko)',
        activities: [
            '<strong>Uri (Tu)</strong>: Opció lleugera. Viatge cap als llacs de <strong>Kawaguchiko</strong> per veure el Mont Fuji reflectit al llac, estalviant la duresa física i el cost de fer nit a dalt.',
            '<strong>Banana</strong>: Puja en bus a la 5a estació de Fujinomiya per fer el cim i dormir al refugi (Fujikan Hut a 3.740m).'
        ],
        accommodation: '🏨 Cabin House Yado Fujinomiya (Uri)',
        type: 'banana',
        badge: 'uri',
        coords: [35.5010, 138.7583] // Kawaguchiko
    },
    {
        date: '2026-08-17',
        dayLabel: 'Dia 13',
        weekday: 'Dilluns',
        title: 'Viatge cap a Kyoto (Solo)',
        activities: [
            '<strong>Uri (Tu)</strong>: Viatge directe cap a <strong>Kyoto</strong> per començar el tram en solitari (saltant-te Hakone i Nagoya per centrar-te en un ritme més relaxat i cultural).',
            'Check-in al guesthouse i primers passeigs de reconeixement de la capital tradicional.'
        ],
        accommodation: '🏨 Hostel / Guesthouse a Kyoto (Uri)',
        type: 'banana',
        badge: 'uri',
        coords: [35.0116, 135.7681]
    },
    {
        date: '2026-08-18',
        dayLabel: 'Dia 14',
        weekday: 'Dimarts',
        title: 'Kyoto sol: Santuaris i carrerons històrics',
        activities: [
            '<strong>Uri (Tu)</strong>: Exploració de Kyoto al teu propi ritme.',
            'Free tours per a conèixer gent als barris històrics (Gion, Higashiyama) i fer un viatge més social amb altres viatgers.',
            'Tarda-nit: Sopar barat o passeig pels canals il·luminats.'
        ],
        accommodation: '🏨 Hostel / Guesthouse a Kyoto (Uri)',
        type: 'banana',
        badge: 'uri',
        coords: [35.0116, 135.7681]
    },
    {
        date: '2026-08-19',
        dayLabel: 'Dia 15',
        weekday: 'Dimecres',
        title: 'Kyoto sol: Racons tranquils i cultura local',
        activities: [
            '<strong>Uri (Tu)</strong>: Visita a temples menys transitats (com el Tofuku-ji), el bonic camí de la filosofia o el canal de Shirakawa.',
            'Mantenint un pressupost ajustat i cuinant o menjant gyudon o konbini.'
        ],
        accommodation: '🏨 Hostel / Guesthouse a Kyoto (Uri)',
        type: 'banana',
        badge: 'uri',
        coords: [35.0116, 135.7681]
    },
    {
        date: '2026-08-20',
        dayLabel: 'Dia 16',
        weekday: 'Dijous',
        title: 'Rebuda d\'en Banana a Kyoto',
        activities: [
            '<strong>Uri (Tu)</strong>: Ja coneixes Kyoto i fas de "guia" rebent en Banana (ell arriba des de Shirakawa-go).',
            'Check-in al nou allotjament compartit i sopar pel barri de Pontocho.'
        ],
        accommodation: '🏨 Shijo Guesthouse Hive (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [35.0038, 135.7594]
    },
    {
        date: '2026-08-21',
        dayLabel: 'Dia 17',
        weekday: 'Divendres',
        title: 'Kyoto amb en Banana: Temples i Free Tours',
        activities: [
            '<strong>6:00</strong>: Visita matinera a <strong>Kiyomizu-dera</strong> i carrers històrics de Sannenzaka/Ninenzaka (sense aglomeracions).',
            '<strong>10:30</strong>: Free Tour clàssic per Kyoto.',
            '<strong>15:00</strong>: Segon Free Tour pel temple de plata (Ginkaku-ji).'
        ],
        accommodation: '🏨 Shijo Guesthouse Hive (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [35.0267, 135.7982]
    },
    {
        date: '2026-08-22',
        dayLabel: 'Dia 18',
        weekday: 'Dissabte',
        title: 'Kyoto amb en Banana: Arashiyama i Fushimi Inari',
        activities: [
            'Matí: Bosc de bambú de <strong>Arashiyama</strong> i parc dels micos.',
            'Migdia: Temple Daurat (Kinkaku-ji) o Castell de Nijo.',
            '<strong>18:00</strong>: Free Tour al capvespre a les portes vermelles de <strong>Fushimi Inari-Taisha</strong>.'
        ],
        accommodation: '🏨 Shijo Guesthouse Hive (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [34.9671, 135.7727]
    },
    {
        date: '2026-08-23',
        dayLabel: 'Dia 19',
        weekday: 'Diumenge',
        title: 'De Kyoto a Osaka amb en Banana',
        activities: [
            'Matí: Darrers racons de Kyoto (Mercat de Nishiki).',
            'Migdia: Tren cap a <strong>Osaka</strong> (30 minuts).',
            'Tarda-Nit: Explorar Shinsekai, Den Den Town i la bogeria nocturna de neons i street food a <strong>Dotonbori</strong>.'
        ],
        accommodation: '🏨 Acro Capsule Hotel Namba Dotonbori (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [34.6687, 135.5013]
    },
    {
        date: '2026-08-24',
        dayLabel: 'Dia 20',
        weekday: 'Dilluns',
        title: 'Osaka contemporània i oci',
        activities: [
            'Matí: Castell d\'Osaka i Mercat de Kuromon.',
            'Tarda-Nit: Compres o passeig pel barri hipster de Nakazakicho, o ambient juvenil a Amerikamura.'
        ],
        accommodation: '🏨 Acro Capsule Hotel Namba Dotonbori (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [34.7053, 135.4902]
    },
    {
        date: '2026-08-25',
        dayLabel: 'Dia 21',
        weekday: 'Dimarts',
        title: 'Osaka -> Hiroshima i illa de Miyajima',
        activities: [
            '<strong>6:00</strong>: Tren bala Shinkansen cap a Hiroshima.',
            'Matí-Tarda: Ferry cap a l\'illa de <strong>Miyajima</strong> per veure el cèlebre Torii flotant de l\'Itsukushima Shrine i pujar al Mount Misen.',
            'Vespre: Sopar d\'Okonomiyaki tradicional a Hiroshima.'
        ],
        accommodation: '🏨 WeBase Hiroshima (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [34.2965, 132.3206]
    },
    {
        date: '2026-08-26',
        dayLabel: 'Dia 22',
        weekday: 'Dimecres',
        title: 'Hiroshima històrica i tornada a Osaka/Kansai',
        activities: [
            'Matí: Visita al <strong>Parc Memorial de la Pau</strong> i museu de la bomba atòmica per conèixer la història contemporània.',
            'Tarda: Tren de tornada a la zona d\'Osaka/Kansai (establir allotjament proper a l\'aeroport).',
            '<strong>Estalvi clau:</strong> No tornem a Tòquio, evitant un viatge de 119€ i un dia sencer perdut.'
        ],
        accommodation: '🏨 Hostel proper a l\'aeroport de Kansai o Osaka (Uri)',
        type: 'overlap',
        badge: 'uri',
        coords: [34.6687, 135.5013] // Osaka area near Kansai Airport
    },
    {
        date: '2026-08-27',
        dayLabel: 'Dia 23',
        weekday: 'Dijous',
        title: 'Vol de tornada cap a Barcelona (Open-Jaw)',
        activities: [
            '<strong>Uri (Tu)</strong>: Vol de tornada cap a Barcelona (BCN) sortint directament des de l\'Aeroport de Kansai (KIX).',
            'Final de l\'itinerari al Japó, volant de tornada sense haver de tornar a pujar a Tòquio.'
        ],
        accommodation: '✈️ Vol internacional (a bord)',
        type: 'banana',
        badge: 'uri',
        coords: [34.4320, 135.2304] // Kansai Airport
    },
    {
        date: '2026-08-28',
        dayLabel: 'Dia 24',
        weekday: 'Divendres',
        title: 'Arribada a Barcelona',
        activities: [
            '<strong>Uri (Tu)</strong>: Arribada a Barcelona (BCN) i fi del viatge. Retorn a casa.'
        ],
        accommodation: '🏠 Casa teva',
        type: 'overlap',
        badge: 'uri',
        coords: null
    }
];

const DEFAULT_EXPENSES = [
    { id: '1', category: 'Vols', concept: 'Vol Open-Jaw BCN-Tòquio / Kansai-BCN (Estimat)', amount: 850 },
    { id: '2', category: 'Allotjament', concept: 'Kumano Kodo Minshukus (7 nits aprox)', amount: 210 },
    { id: '3', category: 'Allotjament', concept: 'Hostels Tòquio / Kyoto / Osaka / Hiroshima (14 nits)', amount: 350 },
    { id: '4', category: 'Transport', concept: 'Trens regionals i busos de muntanya', amount: 80 },
    { id: '5', category: 'Transport', concept: 'Trens llargs (Tòquio-Kyoto i Osaka-Hiroshima-Osaka)', amount: 130 },
    { id: '6', category: 'Menjar i oci', concept: 'Menjar barat diari (Konbinis / Gyudon)', amount: 200 },
    { id: 'sim-card-exp', category: 'Altres', concept: 'Targeta SIM internet Japó', amount: 100 }
];

const DEFAULT_VIDEOS = [
    {
        id: '1',
        title: 'Guia Completa i Consells per fer el Kumano Kodo',
        url: 'https://www.youtube.com/watch?v=yYJ4zNntDlk',
        timestamp: '10:45',
        notes: 'Explica com funciona el servei de transport de motxilles entre etapes de muntanya. Molt útil per caminar lleuger!'
    },
    {
        id: '2',
        title: 'Kyoto sense turistes: Com visitar el Fushimi Inari de nit',
        url: 'https://www.youtube.com/watch?v=yYJ4zNntDlk',
        timestamp: '03:15',
        notes: 'A partir del minut 3 mostra per què val molt la pena pujar fins a la part de dalt quan ja és fosc. Menys gent i ambient místic.'
    },
    {
        id: 'n26-1',
        title: 'Guia N26: Pagar amb targeta al Japó',
        url: 'https://n26.com/es-es/pagar-con-tarjeta-en-japon',
        timestamp: '',
        notes: 'Informació oficial sobre l\'ús, tipus de canvi i comissions de la targeta N26 al Japó.'
    },
    {
        id: 'n26-2',
        title: 'Japonpedia: Targeta N26 al Japó',
        url: 'https://japonpedia.com/tarjeta-n26-japon/',
        timestamp: '',
        notes: 'Guia pràctica de viatgers sobre l\'ús de N26 en caixers i comerços japonesos.'
    },
    {
        id: 'n26-3',
        title: 'Comiviajeros: Com funciona N26 a l\'estranger',
        url: 'https://comiviajeros.com/tarjeta-n26-pagar-extranjero/',
        timestamp: '',
        notes: 'Comparativa i experiències pràctiques d\'ús de la targeta de viatge N26.'
    }
];

const DEFAULT_TASKS = [
    { id: '1', text: 'Buscar i reservar vols BCN - Japó (open-jaw: entrada Tòquio, sortida Osaka)', completed: false },
    { id: '2', text: 'Reservar els allotjaments de muntanya pel Kumano Kodo a la web oficial de Tanabe', completed: false },
    { id: '3', text: 'Confirmar exactament les dates disponibles de la parella per si s\'afegeix en algun punt', completed: false },
    { id: '4', text: 'Comprar assegurança mèdica internacional (imprescindible per al Japó)', completed: false },
    { id: '5', text: 'Mirar i reservar allotjaments barats a Kyoto (solo) i Osaka (compartit)', completed: false },
    { id: '6', text: 'Tramitar el carnet de conduir internacional (per si de cas)', completed: false },
    { id: 'sim-card-task', text: 'Comprar targeta SIM / eSIM per a internet al Japó (~100 €)', completed: false },
    { id: 'luggage-strategy-task', text: 'Decidir combinació de maletes (idealment 1 maleta de cabina + 1 motxilla per caminar)', completed: false },
    { id: 'takkyubin-service-task', text: 'Consultar funcionament i preus del servei d\'enviament de maletes (Takkyubin / Yamato) per al Kumano', completed: false },
    { id: 'bank-commissions-task', text: 'Buscar targeta/banc sense comissions pel viatge (revisar Revolut, Wise o un compte de promoció local)', completed: false }
];

const DEFAULT_LUGGAGE = [
    { id: 'l1', text: 'Motxilla de senderisme principal (30-40L)', completed: false },
    { id: 'l2', text: 'Calçat de trekking / trail running ja usat (crucial pel Kumano)', completed: false },
    { id: 'l3', text: 'Paravents / Impermeable lleuger (plou sovint a Kumano)', completed: false },
    { id: 'l4', text: 'Roba tècnica transpirable (per a la calor i humitat de l\'agost)', completed: false },
    { id: 'l5', text: 'Tovallola de microfibra de secat ràpid', completed: false },
    { id: 'l6', text: 'Farmaciola bàsica (tiretes, antiinflamatoris, vaselina pels peus)', completed: false },
    { id: 'l7', text: 'Adaptador d\'endoll tipus A (Japó)', completed: false },
    { id: 'l8', text: 'Passaport en vigor i còpia física/digital', completed: false },
    { id: 'l9', text: '1 o 2 maletes de cabina petites (idealment només 1 si és possible)', completed: false },
    { id: 'l10', text: 'Motxilla petita de dia (15-20L) per al senderisme a Kumano', completed: false },
    { id: 'l11', text: 'Cantimplora o bossa d\'aigua (mínim 1.5L, fa molta calor)', completed: false },
    { id: 'l12', text: 'Bastons de trekking per a les baixades de pedra a Kumano', completed: false },
    { id: 'l13', text: 'Roba interior i samarretes de secat ràpid per rentar a mà', completed: false },
    { id: 'l14', text: 'Gorra i ulleres de sol pel sol intens d\'agost', completed: false },
    { id: 'l15', text: 'Protector solar resistent a la suor i repel·lent de mosquits fort', completed: false }
];

const DEFAULT_SHOPPING = [
    { id: 's1', text: 'Goshuincho i segells cal·ligràfics (Shuin) als temples (~15 € llibreta, ~3-4 € cada segell)', completed: false },
    { id: 's2', text: 'Tenugui (Mocador de cotó tradicional molt versàtil, ~5-10 €)', completed: false },
    { id: 's3', text: 'Hashi (Bastonets de fusta personalitzats gravats amb el teu nom, ~10-15 €)', completed: false },
    { id: 's4', text: 'Furin (Campaneta de vent tradicional japonesa de vidre o ferro, ~5-10 €)', completed: false },
    { id: 's5', text: 'Llibretes o quaderns de papereria japonesa (Midori, Apica, ~3-7 €)', completed: false },
    { id: 's6', text: 'Pegats de mentol per als peus (Kyusoku Jikan, molt útil pel Kumano Kodo, ~5 €)', completed: false },
    { id: 's7', text: 'Té verd o Matcha local comprat directament en cooperatives rurals (~5-10 €)', completed: false }
];

const DEFAULT_PLACES = [
    { id: 'p1', text: '🙋‍♂️ [Uri] Nara: Parc ple de cérvols lliures (els cérvols sagrats que demanen menjar reverenciant-te) i el temple Todai-ji.', completed: false },
    { id: 'p-osaka', text: '🙋‍♂️ [Uri] Osaka: Banys termals / Onsen on et pots vestir amb yukata o kimono (ex: parc temàtic de banys Spa World o onsens tradicionals per comprovar si mola).', completed: false },
    { id: 'p2', text: '💡 [IA] Kamakura: El Gran Buda de bronze a l\'aire lliure (Daibutsu) i temples històrics de bosc (excursió fàcil des de Tòquio).', completed: false },
    { id: 'p3', text: '💡 [IA] Nikko: Mausoleus daurats dels shoguns Tokugawa, cascada Kegon i naturalesa alpina espectacular (excursió des de Tòquio).', completed: false },
    { id: 'p4', text: '💡 [IA] Himeji: El cèlebre castell de la Garça Blanca, el castell feudal original més espectacular i millor conservat de tot el Japó.', completed: false },
    { id: 'p5', text: '💡 [IA] Uji: Bressol del te verd matcha històric i el temple Byodoin (l\'edifici imprès a la moneda de 10 iens). Prop de Kyoto.', completed: false },
    { id: 'p6', text: '💡 [IA] Koyasan: El mont sagrat budista, dormir en un temple gestionat pels monjos (shukubo) i recórrer el cementiri místic d\'Okunoin.', completed: false }
];

const DEFAULT_OBSERVATIONS = [
    { id: 'o1', text: '⚠️ No et deixis enredar per botigues/museus de figuretes i merxandatge (anime/manga), que n\'hi ha milers a tot arreu. El primer vídeo llarg de Tòquio n\'estava ple. Tot i així, segur que t\'hi acabaràs trobant igualment!', completed: false },
    { id: 'o2', text: '💡 Consell: No cal deixar propina als restaurants al Japó; de fet, està mal vist i et perseguiran si te la deixes.', completed: false },
    { id: 'o3', text: '💡 Consell: Porta sempre una bossa petita a sobre per guardar les teves escombraries (gairebé no hi ha papereres públiques al carrer).', completed: false },
    { id: 'o4', text: '💡 Consell: Respecta el silenci al transport públic (posa el telèfon en silenciós i evita parlar fort).', completed: false },
    { id: 'o5', text: '💡 Consell: Porta sempre diners en efectiu a sobre, ja que molts llocs rurals, temples o petits onsens no accepten targeta.', completed: false }
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

    // Assegurar que la SIM card està present si l'usuari ja tenia dades guardades
    const hasSimExpense = state.expenses.some(exp => exp.concept.toLowerCase().includes('sim'));
    if (!hasSimExpense) {
        state.expenses.push({ id: 'sim-card-exp', category: 'Altres', concept: 'Targeta SIM internet Japó', amount: 100 });
        saveState('expenses');
    }

    const hasSimTask = state.tasks.some(task => task.text.toLowerCase().includes('sim'));
    if (!hasSimTask) {
        state.tasks.push({ id: 'sim-card-task', text: 'Comprar targeta SIM / eSIM per a internet al Japó (~100 €)', completed: false });
        saveState('tasks');
    }

    // Afegir les noves tasques de maleta si no hi són
    const hasLuggageStrategy = state.tasks.some(task => task.id === 'luggage-strategy-task');
    if (!hasLuggageStrategy) {
        state.tasks.push({ id: 'luggage-strategy-task', text: 'Decidir combinació de maletes (idealment 1 maleta de cabina + 1 motxilla per caminar)', completed: false });
        state.tasks.push({ id: 'takkyubin-service-task', text: 'Consultar funcionament i preus del servei d\'enviament de maletes (Takkyubin / Yamato) per al Kumano', completed: false });
        saveState('tasks');
    }

    // Afegir la tasca dels bancs si no hi és
    const hasBankTask = state.tasks.some(task => task.id === 'bank-commissions-task');
    if (!hasBankTask) {
        state.tasks.push({ id: 'bank-commissions-task', text: 'Buscar targeta/banc sense comissions pel viatge (revisar Revolut, Wise o un compte de promoció local)', completed: false });
        saveState('tasks');
    }

    // Afegir recursos de N26 si no hi són
    const hasN26Resources = state.videos.some(vid => vid.id === 'n26-1');
    if (!hasN26Resources) {
        const n26Items = [
            {
                id: 'n26-1',
                title: 'Guia N26: Pagar amb targeta al Japó',
                url: 'https://n26.com/es-es/pagar-con-tarjeta-en-japon',
                timestamp: '',
                notes: 'Informació oficial sobre l\'ús, tipus de canvi i comissions de la targeta N26 al Japó.'
            },
            {
                id: 'n26-2',
                title: 'Japonpedia: Targeta N26 al Japó',
                url: 'https://japonpedia.com/tarjeta-n26-japon/',
                timestamp: '',
                notes: 'Guia pràctica de viatgers sobre l\'ús de N26 en caixers i comerços japonesos.'
            },
            {
                id: 'n26-3',
                title: 'Comiviajeros: Com funciona N26 a l\'estranger',
                url: 'https://comiviajeros.com/tarjeta-n26-pagar-extranjero/',
                timestamp: '',
                notes: 'Comparativa i experiències pràctiques d\'ús de la targeta de viatge N26.'
            }
        ];
        state.videos.push(...n26Items);
        saveState('videos');
    }

    // Afegir els nous elements de maleta si no hi són
    const hasNewLuggageItems = state.luggage.some(item => item.id === 'l9');
    if (!hasNewLuggageItems) {
        const itemsToAdd = [
            { id: 'l9', text: '1 o 2 maletes de cabina petites (idealment només 1 si és possible)', completed: false },
            { id: 'l10', text: 'Motxilla petita de dia (15-20L) per al senderisme a Kumano', completed: false },
            { id: 'l11', text: 'Cantimplora o bossa d\'aigua (mínim 1.5L, fa molta calor)', completed: false },
            { id: 'l12', text: 'Bastons de trekking per a les baixades de pedra a Kumano', completed: false },
            { id: 'l13', text: 'Roba interior i samarretes de secat ràpid per rentar a mà', completed: false },
            { id: 'l14', text: 'Gorra i ulleres de sol pel sol intens d\'agost', completed: false },
            { id: 'l15', text: 'Protector solar resistent a la suor i repel·lent de mosquits fort', completed: false }
        ];
        state.luggage.push(...itemsToAdd);
        saveState('luggage');
    }

    // Forçar l'actualització dels llocs per diferenciar recomanacions i afegir l'Osaka onsen
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
        if (state.itineraryFilter === 'kumano') return day.type === 'kumano';
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
        if (point.type === 'kumano') color = '#50fa7b';
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
    const polylineCoords = coordsList.map(p => p.coords);
    routePolyline = L.polyline(polylineCoords, {
        color: 'rgba(255, 121, 198, 0.4)',
        weight: 3,
        dashArray: '5, 10'
    }).addTo(map);

    // Zoom map fit bounds
    if (polylineCoords.length > 0) {
        map.fitBounds(routePolyline.getBounds(), { padding: [30, 30] });
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


