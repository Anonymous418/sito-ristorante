const siteData = {
    info: {
        phone: "+39 0174 000000",
        email: "info@famigliarolando.it",
        address: "Via Centrale 18, 12079 Caprauna (CN)",
    },
    // THE 3 SEASONAL DISHES
    menuHighlights: [
        {
            category: "L'Inizio",
            name: "L'Uovo di Montagna 62°",
            process: "Cotto a bassa temperatura per 50 minuti esatti a 62 gradi. Adagiato su una spuma di patate d'alpeggio affumicate al legno di faggio e completato con lamelle di Tartufo Nero pregiato."
        },
        {
            category: "La Pasta",
            name: "Plin ai 40 Tuorli",
            process: "Sfoglia tirata a mano ogni mattina con 40 tuorli per chilo. Il ripieno è il classico arrosto di tre carni, cotto lentamente per 12 ore nel vino rosso, poi 'pizzicato' nel tovagliolo."
        },
        {
            category: "Il Secondo",
            name: "Cervo al Ginepro",
            process: "Filetto marinato 24 ore con bacche di ginepro selvatico. Scottato in padella di ferro per sigillare i succhi e servito rosa al cuore con una riduzione di frutti di bosco."
        }
    ],
    // THE WINE CABINET (Transparent PNGs)
    cellarWines: [
        { id: 1, name: "Barolo Monfortino", producer: "Giacomo Conterno", img: "https://png.pngtree.com/png-vector/20231102/ourmid/pngtree-red-wine-bottle-isolated-on-white-background-png-image_10398642.png", notes: "La leggenda delle Langhe. Struttura potente, tannini nobili." },
        { id: 2, name: "Solaia 2018", producer: "Antinori", img: "https://png.pngtree.com/png-vector/20240129/ourmid/pngtree-bottle-of-red-wine-png-image_11563539.png", notes: "Un Supertuscan iconico. Note di cassis, menta e cioccolato." },
        { id: 3, name: "Pergole Torte", producer: "Montevertine", img: "https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-red-wine-bottle-png-image_10006764.png", notes: "Sangiovese in purezza. Verticale, vibrante, indimenticabile." },
        { id: 4, name: "Sassicaia 2016", producer: "Tenuta San Guido", img: "https://png.pngtree.com/png-vector/20231102/ourmid/pngtree-red-wine-bottle-isolated-on-white-background-png-image_10398642.png", notes: "L'equilibrio perfetto. Ha fatto la storia dell'enologia." },
        { id: 5, name: "Amarone Riserva", producer: "Quintarelli", img: "https://png.pngtree.com/png-vector/20240129/ourmid/pngtree-bottle-of-red-wine-png-image_11563539.png", notes: "Un gigante gentile. Frutta matura e spezie dolci." },
        { id: 6, name: "Barbaresco Sorì", producer: "Gaja", img: "https://png.pngtree.com/png-vector/20231102/ourmid/pngtree-red-wine-bottle-isolated-on-white-background-png-image_10398642.png", notes: "Eleganza speziata e profondità." },
        { id: 7, name: "Brunello Riserva", producer: "Biondi-Santi", img: "https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-red-wine-bottle-png-image_10006764.png", notes: "Austero e aristocratico." },
        { id: 8, name: "Tignanello", producer: "Antinori", img: "https://png.pngtree.com/png-vector/20240129/ourmid/pngtree-bottle-of-red-wine-png-image_11563539.png", notes: "Moderno e seducente." },
        { id: 9, name: "Masseto", producer: "Ornellaia", img: "https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-red-wine-bottle-png-image_10006764.png", notes: "Merlot in purezza, velluto." },
        { id: 10, name: "Vintage Tunina", producer: "Jermann", img: "https://png.pngtree.com/png-vector/20231102/ourmid/pngtree-red-wine-bottle-isolated-on-white-background-png-image_10398642.png", notes: "Il bianco che sfida il tempo." },
    ],
    // REVIEWS
    reviews: [
        { text: "Un'esperienza sensoriale che trascende il semplice nutrirsi. Arte pura.", author: "Guida Michelin" },
        { text: "Il silenzio della sala e la potenza dei sapori creano una magia rara.", author: "Gambero Rosso" },
        { text: "Servizio impeccabile, cantina da sogno. Il Plin è commovente.", author: "Marco B." },
        { text: "Lusso discreto, mai ostentato. Ci si sente accolti come in famiglia.", author: "Elena S." },
        { text: "La migliore espressione della cucina di montagna contemporanea.", author: "L'Espresso" }
    ]
};