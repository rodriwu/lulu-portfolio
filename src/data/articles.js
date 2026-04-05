const articles = [
  {
    id: "acqualina",
    titleEs: "Sabor y Color",
    titleEn: "Flavor and Color",
    subtitle: "Acqualina, a Rosewood Resort",
    location: "Miami, Florida, EEUU",
    languages: ["es", "en"],
    category: "hotel",
    introEs:
      "Esta pieza fue publicada originalmente en una edición impresa dedicada al lujo costero en la costa este de los Estados Unidos. Me encontraba explorando cómo los nuevos resorts de la región estaban redefiniendo el concepto de hospitalidad frente al mar. El Acqualina capturó mi atención desde el primer momento.",
    introEn:
      "This piece was originally published in a print edition dedicated to coastal luxury on the east coast of the United States. I was exploring how the region's newest resorts were redefining the concept of oceanfront hospitality. Acqualina captured my attention from the very first moment.",
    excerptEs:
      "Florida es hoy uno de los destinos turísticos más codiciados del mundo. De arena blanca, cielos de un azul interminable y aguas cristalinas, la costa de Miami se ha convertido en sinónimo de lujo y confort. El Acqualina Resort, situado en la tranquila playa de Sunny Isles Beach, es el lugar donde la elegancia costera alcanza su máxima expresión.",
    excerptEn:
      "Nowadays, Florida has become one of the most exclusive tourist destinations in the world. The sun-drenched coastline with its white sandy beaches, the crisp turquoise waters, and the gentle breezes of the Atlantic Ocean make Miami a haven of luxury and comfort. Acqualina Resort, nestled along the tranquil shores of Sunny Isles Beach, is where coastal elegance reaches its highest expression.",
    bodyEs:
      "La idea principal fue que tanto las habitaciones como las áreas públicas se complementaran de manera natural, convirtiendo cada rincón del hotel en un refugio de sofisticación. Con 54 habitaciones y 43 suites, los interiores combinan lo moderno con lo clásico, resaltando la calidez del diseño veneciano con toques de modernidad. Cada detalle ha sido cuidadosamente seleccionado: desde los muebles de diseño hasta las telas de alta calidad, todo respira un equilibrio perfecto entre la tradición y la innovación.\n\nEl hotel cuenta con un equipo de audio y video, exquisitos productos de baño y un servicio de mayordomía que garantiza la privacidad, confort y una experiencia de hospedaje total. Un hotel elegante y cosmopolita; un refugio en colores suaves donde el confort está garantizado.\n\nPero sin duda, el Spa de clase mundial es el corazón del resort. Es uno de los más reconocidos e importantes de la costa este de los Estados Unidos, concentrando lo mejor de las técnicas ancestrales y las innovaciones más actuales del bienestar y la relajación.",
    bodyEn:
      "The main idea was that both rooms and public areas complement each other seamlessly, turning every corner of the hotel into a haven of sophistication. With 54 rooms and 43 suites, the very best has been carefully selected by its interior designers, combining modern and classic elements that highlight Venetian warmth with contemporary touches. Every detail—from designer furniture to premium fabrics—breathes a perfect balance between tradition and innovation.\n\nThe hotel features state-of-the-art audio and video equipment, exquisite bath products, and a butler service that guarantees privacy, comfort, and a complete hospitality experience. A timey and cosmopolitan hotel; a refuge in soft tones where comfort is guaranteed.\n\nBut without a doubt, the world-class Spa is the heart of the resort. It is one of the most recognized and important on the east coast of the United States, bringing together the best of ancestral techniques and the latest innovations in wellness and relaxation.",
    outroEs:
      "El Acqualina permanece como uno de esos lugares que demuestran que la verdadera hospitalidad no se improvisa — se construye con intención, detalle y una comprensión profunda de lo que significa hacer sentir a alguien verdaderamente bienvenido.",
    outroEn:
      "Acqualina remains one of those places that prove true hospitality is never improvised — it is built with intention, detail, and a deep understanding of what it means to make someone feel truly welcome.",
  },
  {
    id: "atlantis",
    titleEs: "Igualando una Leyenda",
    titleEn: "Like a Legend",
    subtitle: "Atlantis, Paradise Island",
    location: "Paradise Island, Bahamas",
    languages: ["es", "en"],
    category: "hotel",
    introEs:
      "La Atlántida siempre ha sido más que un mito — es una promesa. Cuando visité Paradise Island para esta pieza editorial, quise explorar hasta qué punto un resort moderno puede materializar esa promesa de esplendor absoluto. Lo que encontré superó mis expectativas.",
    introEn:
      "Atlantis has always been more than a myth — it is a promise. When I visited Paradise Island for this editorial piece, I wanted to explore just how far a modern resort could go in materializing that promise of absolute splendor. What I found exceeded my expectations.",
    excerptEs:
      "Cuenta la leyenda que la Atlántida era una ciudad inmensa que apareció a los ojos del hombre en toda su perfección. Que todo en su particular e inigualable belleza sobre la tierra era tan sagrado que nadie podía evitar sentirse dichoso. Algo similar ocurre cuando uno llega al hotel Atlantis, en la paradisíaca Paradise Island, Bahamas.",
    excerptEn:
      "Legend says that Atlantis was a spectacular city, a place so perfect, so beautiful on Earth, that the smallest surroundings would take your breath away. Something quite similar happens when you arrive at the Atlantis resort on Paradise Island, Bahamas—where myth meets reality in the most extraordinary fashion.",
    bodyEs:
      "Todo resulta insuficiente para describir la majestuosidad de este resort. Cada rincón, cada pasillo, cada habitación cuenta una historia de esplendor que supera toda expectativa. Las fuentes ornamentales, los jardines tropicales y la arquitectura grandiosa transportan al visitante a un mundo donde el lujo no tiene límites.\n\nEl complejo alberga uno de los acuarios al aire libre más grandes del mundo, con más de 50,000 criaturas marinas. Los huéspedes pueden nadar con delfines, explorar ruinas submarinas y descubrir un universo acuático que rivaliza con los mejores oceanarios del planeta.",
    bodyEn:
      "Everything falls short when trying to describe the majesty of this resort. Every corner, every hallway, every room tells a story of splendor that surpasses all expectations. The ornamental fountains, tropical gardens, and grandiose architecture transport visitors to a world where luxury knows no bounds.\n\nThe complex houses one of the world's largest open-air aquariums, with more than 50,000 marine creatures. Guests can swim with dolphins, explore underwater ruins, and discover an aquatic universe that rivals the finest oceanariums on the planet.",
    outroEs:
      "Atlantis no es solo un destino — es una declaración de lo que sucede cuando la imaginación humana se niega a aceptar límites. Cada visita revela algo nuevo, como si la propia leyenda siguiera escribiéndose.",
    outroEn:
      "Atlantis is not just a destination — it is a declaration of what happens when human imagination refuses to accept limits. Every visit reveals something new, as if the legend itself were still being written.",
  },
  {
    id: "dubai",
    titleEs: "Una Experiencia Fuera de Este Mundo",
    titleEn: "An Experience Outside of This World",
    subtitle: "Burj Al Arab",
    location: "Dubai, E.A.U.",
    languages: ["es", "en"],
    category: "hotel",
    introEs:
      "Dubai estaba comenzando a posicionarse como un destino de otro nivel cuando escribí esta pieza. El Burj Al Arab, con su silueta inconfundible, se había convertido en el símbolo de una ciudad que se negaba a ser ordinaria. Quise capturar esa ambición.",
    introEn:
      "Dubai was just beginning to position itself as a destination of another caliber when I wrote this piece. The Burj Al Arab, with its unmistakable silhouette, had become the symbol of a city that refused to be ordinary. I wanted to capture that ambition.",
    excerptEs:
      "Ahora mismo, Dubai se ha convertido en el destino exótico más buscado del mundo. De una arena blanca, cálida e iluminada todo el año, es un concreto seleccionado por el Océano Índico. Y ahora con la presencia de un hito más: la Torre Eiffel de Dubai, y la Torre Eiffel, suspendida a 321 metros sobre una revolución de vida de lujo y de estilo que sigue y que da sentido de todo el planeta.",
    excerptEn:
      "Nowadays, Dubai has become one of the most exclusive destinations in the world. Its stunning architecture, breathtaking luxury, and world-class hospitality make it different from any other modern city. At the top of the list, the Burj Al Arab—the tallest hotel in the world at 321 meters—rises on its own man-made island like a sail billowing against the Arabian sky.",
    bodyEs:
      "El hotel cuenta con 202 suites dúplex, cada una más espectacular que la anterior. Los interiores brillan con pan de oro de 24 quilates, mármol italiano y las más finas telas orientales. El servicio es absolutamente impecable: cada huésped tiene asignado un mayordomo personal disponible las 24 horas.\n\nDesde el helipuerto en la azotea hasta los restaurantes submarinos, cada experiencia en el Burj Al Arab ha sido diseñada para superar los límites de lo imaginable. Es, en toda la extensión de la palabra, una experiencia fuera de este mundo.",
    bodyEn:
      "The hotel features 202 duplex suites, each more spectacular than the last. The interiors gleam with 24-karat gold leaf, Italian marble, and the finest Oriental fabrics. The service is absolutely impeccable: each guest is assigned a personal butler available around the clock.\n\nFrom the rooftop helipad to the underwater restaurants, every experience at the Burj Al Arab has been designed to push the boundaries of the imaginable. It is, in every sense of the word, an experience outside of this world.",
    outroEs:
      "Años después, Dubai ha cumplido cada una de sus promesas. El Burj Al Arab sigue siendo el estándar contra el cual se mide todo lo demás — un recordatorio de que la audacia, cuando se ejecuta con precisión, puede crear lo imposible.",
    outroEn:
      "Years later, Dubai has fulfilled every one of its promises. The Burj Al Arab remains the standard against which everything else is measured — a reminder that audacity, when executed with precision, can create the impossible.",
  },
  {
    id: "el-sueno",
    titleEs: "La Historia de un Sueño",
    titleEn: "History of a Dream",
    subtitle: "El Sueño Hotel & Spa",
    location: "Puebla, México",
    languages: ["es", "en"],
    category: "hotel",
    introEs:
      "Puebla siempre ha sido una de mis ciudades favoritas en México — su arquitectura colonial, su gastronomía y su profunda identidad cultural la hacen un destino incomparable. Esta pieza nació de una visita donde descubrí que un edificio del siglo XVIII podía sentirse completamente contemporáneo.",
    introEn:
      "Puebla has always been one of my favorite cities in Mexico — its colonial architecture, gastronomy, and deep cultural identity make it an incomparable destination. This piece was born from a visit where I discovered that an 18th-century building could feel utterly contemporary.",
    excerptEs:
      "La decisión de volver a destinos cercanos en las ciudades, no sólo es acertada sino un hábito en provecho de la cultura. Desarrollando un interesante estilo de turismo: vivir más de cerca la arquitectura y el patrimonio de los pueblos y grandes ciudades populares, y que nos sorprendan mucho más de lo que nunca imaginamos. Así es el caso de la casa del siglo XVIII en la histórica ciudad de Puebla.",
    excerptEn:
      "The decision of returning to nearby destinations within cities is more than a new trend; it is a journey worth taking for its cultural treasures. A 17th-Century mansion built in the historic center of Puebla, perfectly harmonizes the original colonial style with contemporary art and modern comforts. Each room offers great warmth and a sophisticated atmosphere.",
    bodyEs:
      "Construido hacia el siglo XVIII con hermoso estilo colonial, el edificio combina la perfección del estilo original con elementos contemporáneos de diseño y confort. Las habitaciones prometen atmósferas cálidas y amables, donde cada detalle ha sido pensado para transportar al huésped a una época de esplendor.\n\nEl spa del hotel ofrece tratamientos basados en técnicas prehispánicas, utilizando ingredientes locales como el chocolate, la vainilla y las hierbas medicinales de la región. Una experiencia que honra la rica herencia cultural de Puebla.",
    bodyEn:
      "Built in the 18th century with beautiful colonial style, the building combines the perfection of its original design with contemporary elements of comfort and sophistication. The rooms promise warm and welcoming atmospheres, where every detail has been carefully considered to transport guests to an era of splendor.\n\nThe hotel spa offers treatments based on pre-Hispanic techniques, using local ingredients such as chocolate, vanilla, and medicinal herbs from the region. An experience that honors the rich cultural heritage of Puebla.",
    outroEs:
      "El Sueño es prueba de que la historia y la modernidad no solo pueden convivir — pueden potenciarse mutuamente. Es el tipo de lugar que te recuerda por qué vale la pena detenerse, mirar y dejarse sorprender.",
    outroEn:
      "El Sueño is proof that history and modernity can not only coexist — they can amplify each other. It is the kind of place that reminds you why it is worth pausing, looking, and letting yourself be surprised.",
  },
  {
    id: "musica-sentidos",
    titleEs: "Música para los Sentidos",
    titleEn: "Music for the Senses",
    subtitle: "La Casa que Canta",
    location: "Zihuatanejo, México",
    languages: ["es", "en"],
    category: "hotel",
    introEs:
      "Zihuatanejo tiene algo que pocos destinos en el mundo poseen: una autenticidad que no se puede fabricar. La Casa que Canta encarna esa esencia. Escribí esta pieza después de una estancia que me recordó que el verdadero lujo no siempre es ostentoso — a veces, es simplemente honesto.",
    introEn:
      "Zihuatanejo has something few destinations in the world possess: an authenticity that cannot be manufactured. La Casa que Canta embodies that essence. I wrote this piece after a stay that reminded me that true luxury is not always ostentatious — sometimes, it is simply honest.",
    excerptEs:
      "A partir del inicio del nuevo siglo, el concepto de hotel en el respecto de gran lujo se ha convertido en un refugio diverso para personalidades de grandes negocios e inigualables experiencias para comunión con la naturaleza. La Casa que Canta nació con 13 años de vida en este bello puerto del Pacífico mexicano.",
    excerptEn:
      "When the new Century started, the concept of a new luxury hotel became practically unique. A small dream hotel became something of itself, and today, after 13 years in this beautiful port of the Mexican Pacific, La Casa que Canta remains one of the most intimate and enchanting retreats in the world.",
    bodyEs:
      "Rodeada de mar y cerca de la playa de La Ropa, en Zihuatanejo, este hotel boutique de apenas 25 suites se ha ganado un lugar entre los mejores del mundo por su arquitectura que abraza la naturaleza, sus materiales nobles y su espíritu auténticamente mexicano.\n\nCada suite lleva el nombre de una canción mexicana, y la música del oleaje se convierte en la banda sonora perfecta para una estancia donde los sentidos se despiertan con cada amanecer sobre el Pacífico.",
    bodyEn:
      "Surrounded by the sea and near La Ropa beach in Zihuatanejo, this boutique hotel with just 25 suites has earned a place among the world's finest for its architecture that embraces nature, its noble materials, and its authentically Mexican spirit.\n\nEach suite is named after a Mexican song, and the music of the waves becomes the perfect soundtrack for a stay where the senses awaken with every sunrise over the Pacific.",
    outroEs:
      "La Casa que Canta no necesita gritar para ser escuchada. Su voz es el mar, su melodía es la brisa, y su canción permanece contigo mucho después de que te hayas ido.",
    outroEn:
      "La Casa que Canta does not need to shout to be heard. Its voice is the sea, its melody is the breeze, and its song stays with you long after you have gone.",
  },
  {
    id: "montana",
    titleEs: "Una Aventura en Estilo Retro",
    titleEn: "A Retro-Style Adventure",
    subtitle: "Art Deco Hotel Montana",
    location: "Lucerna, Suiza",
    languages: ["es", "en"],
    category: "hotel",
    introEs:
      "Lucerna es una de esas ciudades europeas que parecen existir fuera del tiempo. El Hotel Montana, con su fidelidad al Art Deco original, me pareció la metáfora perfecta de esa cualidad — un lugar donde el pasado no se conserva como museo, sino como experiencia viva.",
    introEn:
      "Lucerne is one of those European cities that seem to exist outside of time. Hotel Montana, with its fidelity to original Art Deco, struck me as the perfect metaphor for that quality — a place where the past is preserved not as a museum, but as a living experience.",
    excerptEs:
      "Si las empresas la presentan, es al decir, el diseño hotelero es un impresionante viaje por las diferentes corrientes artísticas que se suceden a lo largo del tiempo. El Art Deco Hotel Montana, en la bellísima Lucerna en Suiza central, es un magnífico ejemplo de la arquitectura de los años 1920s.",
    excerptEn:
      "Art, design, photography, and architecture: the history that makes a true hotel is indeed a remarkable journey through all the major movements. The Art Deco Hotel Montana, in the beautiful city of Lucerne in central Switzerland, was built in the early 1920s and has been lovingly restored, maintaining its original splendor and charm.",
    bodyEs:
      "El hotel cuenta con un esplendor original y una decoración Art Deco auténtica que lo convierte en una joya arquitectónica única. Sus interiores preservan todo ese carácter de época, mientras que sus comodidades satisfacen al viajero más exigente del siglo XXI.\n\nDesde sus ventanas se contempla uno de los panoramas más impresionantes de los Alpes suizos, con el lago de los Cuatro Cantones brillando bajo la luz alpina. Es posible utilizar muchos de los elementos originales del hotel, desde los ascensores hasta los apliques de pared.",
    bodyEn:
      "The hotel boasts original Art Deco splendor and authentic decorative elements that make it a unique architectural gem. Its interiors preserve all that period character, while its amenities satisfy the most demanding 21st-century traveler.\n\nFrom its windows, one can contemplate one of the most impressive panoramas of the Swiss Alps, with Lake Lucerne shining under the Alpine light. Many of the hotel's original elements remain in use, from the elevators to the wall sconces.",
    outroEs:
      "El Montana demuestra que la elegancia verdadera no necesita reinventarse — solo necesita ser preservada con respeto y compartida con generosidad.",
    outroEn:
      "Montana proves that true elegance does not need to reinvent itself — it only needs to be preserved with respect and shared with generosity.",
  },
  {
    id: "morelos",
    titleEs: "Un Refugio Natural",
    titleEn: "A Natural Refuge",
    subtitle: "Casa de los Árboles",
    location: "Morelos, México",
    languages: ["es", "en"],
    category: "hotel",
    introEs:
      "En un mundo cada vez más ruidoso, la Casa de los Árboles representaba algo que me importaba profundamente: la posibilidad de que el lujo y la sostenibilidad caminaran juntos. Este artículo fue mi intento de capturar esa armonía.",
    introEn:
      "In an increasingly noisy world, Casa de los Árboles represented something I cared about deeply: the possibility that luxury and sustainability could walk hand in hand. This article was my attempt to capture that harmony.",
    excerptEs:
      "Continuando el perfil de una nueva generación de destinos de descanso, y con la convicción de personas que aman el equilibrio y la tranquilidad, la Casa de los Árboles se ha convertido en un lugar único. Arquitectura en los más nobles materiales, todo divo entre la naturaleza y la mano del hombre, resulta un lugar que inspira el cuidado por el entorno con este mágico bosque.",
    excerptEn:
      "Located in a lush forest setting in the heart of Morelos, Casa de los Árboles is a place for reconnection. Its eco-friendly architecture, innovative use of organic materials, and the deep serenity of its natural surroundings make it one of the most enchanting escapes from the everyday rush of modern life.",
    bodyEs:
      "Apostando por lo ecológico y la suma sencillez de haber arribado a este lugar, la Casa de los Árboles ofrece una experiencia donde la arquitectura se funde con la naturaleza de manera orgánica. Los materiales nobles—madera, piedra, barro—son los protagonistas de cada espacio.\n\nEl silencio del bosque, el canto de los pájaros al amanecer y la brisa que se cuela entre los árboles crean una atmósfera de paz absoluta que invita a la reflexión y al descanso profundo.",
    bodyEn:
      "Embracing an ecological philosophy and the simple beauty of this remarkable setting, Casa de los Árboles offers an experience where architecture merges organically with nature. Noble materials—wood, stone, clay—are the protagonists of every space.\n\nThe silence of the forest, the birdsong at dawn, and the breeze that slips between the trees create an atmosphere of absolute peace that invites deep reflection and rest.",
    outroEs:
      "Hay lugares que te cambian sin que lo notes. La Casa de los Árboles es uno de ellos — un espacio donde el silencio habla más fuerte que cualquier palabra.",
    outroEn:
      "There are places that change you without you noticing. Casa de los Árboles is one of them — a space where silence speaks louder than any word.",
  },
  {
    id: "nafplia",
    titleEs: "Una Obra Maestra",
    titleEn: "A Masterpiece",
    subtitle: "Nafplia Palace",
    location: "Peloponeso, Grecia",
    languages: ["es", "en"],
    category: "hotel",
    introEs:
      "Grecia siempre me ha fascinado — su historia, su luz, su relación con el mar. El Nafplia Palace me dio la oportunidad de escribir sobre un lugar donde cada piedra cuenta una historia de siglos, y donde la hospitalidad se siente como un acto de herencia cultural.",
    introEn:
      "Greece has always fascinated me — its history, its light, its relationship with the sea. Nafplia Palace gave me the opportunity to write about a place where every stone tells a story spanning centuries, and where hospitality feels like an act of cultural inheritance.",
    excerptEs:
      "Sumergirse en la historia con Nafplio, enclavado en la más bella costa al sur del país, fue la primera capital de Grecia. Ocupada desde hace milenios, la acrópolis de Acronafplia es su principal legado del periodo bizantino. Al centro de su propia historia se encuentra el Nafplia Palace, un hotel que promete y cautiva al viajero más exigente.",
    excerptEn:
      "The love story with Nafplio—a romantic city on the very first capital of Greece, huddled since the Acropolis atop the peninsula of Acronafplia. Over the ages it evolved through Byzantine, Frankish, Venetian, and Ottoman rulers, and now it has emerged magnificently as the charming town of Nafplio. The Nafplia Palace sits majestically above it all.",
    bodyEs:
      "Con más de 84 habitaciones y suites de cada una, bungalows, con vistas sobre el golfo de Argos, Nafplia Palace es un refugio que combina la historia milenaria de Grecia con el lujo contemporáneo. Cada rincón del hotel respira historia, desde los muros de piedra hasta las terrazas que miran al mar Egeo.\n\nLa gastronomía del hotel rinde homenaje a la tradición culinaria griega con ingredientes locales frescos, aceite de oliva virgen y los vinos de las colinas del Peloponeso.",
    bodyEn:
      "With more than 84 rooms and suites, each with breathtaking views over the Gulf of Argos, Nafplia Palace is a refuge that combines Greece's millennia-old history with contemporary luxury. Every corner of the hotel breathes history, from the stone walls to the terraces overlooking the Aegean Sea.\n\nThe hotel's gastronomy pays tribute to Greek culinary tradition with fresh local ingredients, virgin olive oil, and wines from the hills of the Peloponnese.",
    outroEs:
      "El Peloponeso guarda secretos que solo se revelan a quienes se toman el tiempo de escuchar. El Nafplia Palace es la puerta de entrada a esos secretos.",
    outroEn:
      "The Peloponnese holds secrets that reveal themselves only to those who take the time to listen. Nafplia Palace is the gateway to those secrets.",
  },
  {
    id: "new-york-palace",
    titleEs: "Un Palacio Dentro de Otro Palacio",
    titleEn: "A Palace Within a Palace",
    subtitle: "The New York Palace",
    location: "Nueva York, Estados Unidos",
    languages: ["es", "en"],
    category: "hotel",
    introEs:
      "Nueva York siempre será Nueva York — una ciudad que no pide disculpas. El New York Palace me interesó porque representaba algo raro en Manhattan: un hotel que no intenta ser moderno a toda costa, sino que abraza su herencia con orgullo.",
    introEn:
      "New York will always be New York — a city that makes no apologies. The New York Palace intrigued me because it represented something rare in Manhattan: a hotel that does not try to be modern at all costs, but instead embraces its heritage with pride.",
    excerptEs:
      "Qué interés en contar la Catedral de San Patricio, el Centro Rockefeller, los teatros de Broadway y la Quinta Avenida forman parte del centro metálico de Manhattan, en su peor punto pone la mágica metrópoli. El New York Palace Hotel convierte a la Avenida Madison, una de las más importantes y lujosas de toda la ciudad, en un punto de protocolo y lujo incomparables.",
    excerptEn:
      "Where Broadway sparkles and the Rockefeller Center stands behind St. Patrick's Cathedral and the Fifth Avenue—this is the very heart of Manhattan. The New York Palace Hotel occupies one of the most privileged spots in the city, transforming Madison Avenue into a landmark of unparalleled protocol and luxury.",
    bodyEs:
      "Cercano a 55 pisos del suelo, con más de 900 habitaciones y suites que ofrecen las vistas más espectaculares de toda la ciudad, el New York Palace es una institución de la hospitalidad neoyorquina. La gran torre y sus salones históricos con todos los servicios más sofisticados hacen de este hotel una experiencia inolvidable.\n\nLas habitaciones reflejan la elegancia clásica con un toque contemporáneo, donde el mármol, los tapices y las lámparas de araña conviven con la tecnología más avanzada del siglo XXI.",
    bodyEn:
      "Rising nearly 55 stories, with more than 900 rooms and suites offering the most spectacular views of the entire city, the New York Palace is an institution of New York hospitality. The grand tower and its historic salons with the most sophisticated services make this hotel an unforgettable experience.\n\nThe rooms reflect classic elegance with a contemporary touch, where marble, tapestries, and chandeliers coexist with the most advanced technology of the 21st century.",
    outroEs:
      "En una ciudad que nunca deja de reinventarse, el New York Palace es un ancla — un lugar que te recuerda que algunas cosas son mejores cuando permanecen fieles a lo que siempre fueron.",
    outroEn:
      "In a city that never stops reinventing itself, the New York Palace is an anchor — a place that reminds you that some things are better when they remain true to what they always were.",
  },
  {
    id: "oasis-caribe",
    titleEs: "Un Oasis en el Caribe",
    titleEn: "A Caribbean Oasis",
    subtitle: "Sandy Lane",
    location: "St. James, Barbados",
    languages: ["es", "en"],
    category: "hotel",
    introEs:
      "Barbados tiene una sofisticación tranquila que la distingue del resto del Caribe. Sandy Lane encarna esa cualidad. Escribí esta pieza fascinada por cómo un hotel puede ser simultáneamente un refugio del mundo y una ventana hacia él.",
    introEn:
      "Barbados has a quiet sophistication that sets it apart from the rest of the Caribbean. Sandy Lane embodies that quality. I wrote this piece fascinated by how a hotel can simultaneously be a refuge from the world and a window onto it.",
    excerptEs:
      "Descubierta en 2002 con su exclusivo lugar en las Barbados, en el mundo, Sandy Lane, uno de los más especiales hoteles recogidos en todo el hemisferio. Sandy Lane, bella construcción de estilo diplomático del viejo siglo, se concibió como un punto de partida: su elegancia y su posición resaltaron desde un primer momento.",
    excerptEn:
      "Discovered in 2002 as a gem in Barbados, Sandy Lane is one of the most particular hotels in the world. Its gorgeous architecture draws inspiration from the rich colonial heritage, while its modern amenities and world-class service create an unforgettable Caribbean experience.",
    bodyEs:
      "La propiedad se extiende por una finca de 16 hectáreas de jardines tropicales maduros, con una playa de arena blanca como telón de fondo. Las 112 habitaciones y suites están diseñadas con un gusto exquisito, combinando la elegancia colonial caribeña con todas las comodidades modernas.\n\nEl hotel alberga uno de los mejores campos de golf del Caribe y un spa de 47,000 pies cuadrados que es considerado uno de los mejores del mundo.",
    bodyEn:
      "The property extends across a 16-hectare estate of mature tropical gardens, with a pristine white sand beach as its backdrop. The 112 rooms and suites are designed with exquisite taste, combining Caribbean colonial elegance with every modern convenience.\n\nThe hotel features one of the finest golf courses in the Caribbean and a 47,000-square-foot spa considered one of the best in the world.",
    outroEs:
      "Sandy Lane no es solo un hotel — es una filosofía de vida: que el verdadero privilegio no está en el exceso, sino en la quietud bien cuidada.",
    outroEn:
      "Sandy Lane is not just a hotel — it is a philosophy of life: that true privilege lies not in excess, but in well-tended tranquility.",
  },
  {
    id: "sabor-caribe",
    titleEs: "Sabor a Caribe y Trópico",
    titleEn: "Caribbean and Tropical Flavor",
    subtitle: "Bahamas",
    location: "Bahamas",
    languages: ["es", "en"],
    category: "travel",
    introEs:
      "Las Bahamas son uno de esos destinos que parecen existir en un estado perpetuo de postal perfecta. Pero más allá de las aguas turquesa y la arena blanca, hay una cultura rica y vibrante esperando ser descubierta. Esta pieza fue mi intento de ir más allá de la superficie.",
    introEn:
      "The Bahamas is one of those destinations that seem to exist in a perpetual state of picture-perfect postcard. But beyond the turquoise waters and white sand, there is a rich and vibrant culture waiting to be discovered. This piece was my attempt to go beyond the surface.",
    excerptEs:
      "Ubicados en el Océano Atlántico, entre Estados Unidos, Cuba, Haití y la República Dominicana, el archipiélago de las Bahamas se ha convertido en un destino turístico de primer orden. Con más de 700 islas y cayos, sus aguas cristalinas y su arena blanca son una invitación permanente al paraíso.",
    excerptEn:
      "Located in the Atlantic Ocean, amid the United States, Cuba, Haiti, and the Dominican Republic, the Bahamas archipelago has grown to become a world-class tourist destination. With over 700 islands, its crystal-clear waters and white sand beaches are a permanent invitation to paradise.",
    bodyEs:
      "Bahamas, vocablo proveniente de la lengua española para definir al pueblo, como de 'bajamar', ofrece en el siglo XXI todas las comodidades y alternativas para una aventura vacacional inolvidable. Comida, cultura, entretenimiento, tiempo al sol en sus playas de arena fina, actividades acuáticas y una hospitalidad que define el carácter de un destino que lo tiene todo.\n\nSus colores pastel que decoran ciudades coloniales, las artesanías tradicionales y la calidez de su gente convierten cada visita en una experiencia profundamente humana.",
    bodyEn:
      "Bahamas, a word that defines the country as one of 'low tides,' offers in this 21st Century all comforts and alternatives to make a real adventure of a holiday. Food, culture, entertainment, sun-drenched beaches, water activities, and a hospitality that defines the character of a destination that truly has it all.\n\nThe pastel colors decorating colonial cities, traditional crafts, and the warmth of its people turn every visit into a profoundly human experience.",
    outroEs:
      "Las Bahamas son más que un destino de playa — son un recordatorio de que los lugares más bellos del mundo son también los que tienen las historias más profundas esperando ser contadas.",
    outroEn:
      "The Bahamas is more than a beach destination — it is a reminder that the most beautiful places in the world are also the ones with the deepest stories waiting to be told.",
  },
  {
    id: "taj-lake-palace",
    titleEs: "Reflejo de Esplendor y Maravilla",
    titleEn: "A Reflex of Splendour and Wonder",
    subtitle: "Taj Lake Palace",
    location: "Udaipur, India",
    languages: ["es", "en"],
    category: "hotel",
    introEs:
      "India es un lugar que te transforma. No hay forma de visitar Udaipur y regresar siendo la misma persona. El Taj Lake Palace, flotando sobre el Lago Pichola como un sueño de mármol blanco, fue quizás el espacio más poético que he tenido el privilegio de documentar.",
    introEn:
      "India is a place that transforms you. There is no way to visit Udaipur and return as the same person. The Taj Lake Palace, floating on Lake Pichola like a dream of white marble, was perhaps the most poetic space I have ever had the privilege of documenting.",
    excerptEs:
      "Si alguna vez se visitan las hermosas ciudades de la India, donde la tradición, arquitectura y el color se vuelven un lugar tan maravilloso que se puede volver cada vez más romántico, siempre Udaipur será como su nombre lo indica un precioso hotel: el Taj Lake Palace.",
    excerptEn:
      "If ever you go and travel through all of the beautiful cities in India, where tradition meets architecture and dazzling color at every turn, Udaipur can never disappoint. The Taj Lake Palace—floating like a white marble dream on the waters of Lake Pichola—is as magical as its name suggests.",
    bodyEs:
      "Situado en el Lago Pichola, como su nombre lo indica, a 40 minutos del aeropuerto, este precioso hotel está situado como un reflejo del Aravalli. Se dice que este palacio flotante es una de las construcciones más románticas del mundo, construido originalmente en 1746 como residencia real de la dinastía Mewar.\n\nCada una de sus 83 habitaciones y suites ha sido individualmente decorada con arte y antigüedades del Rajastán, creando un ambiente de lujo atemporal que honra la herencia cultural de la India.",
    bodyEn:
      "Set on Lake Pichola, just 40 minutes from the airport, this exquisite hotel sits like a reflection of the Aravalli Hills. This floating palace is said to be one of the most romantic constructions in the world, originally built in 1746 as a royal residence of the Mewar dynasty.\n\nEach of its 83 rooms and suites has been individually decorated with Rajasthani art and antiques, creating an atmosphere of timeless luxury that honors India's cultural heritage.",
    outroEs:
      "El Taj Lake Palace no es solo un hotel — es un poema escrito en mármol, agua y luz. Es el tipo de lugar que te hace creer que la belleza absoluta es posible.",
    outroEn:
      "The Taj Lake Palace is not just a hotel — it is a poem written in marble, water, and light. It is the kind of place that makes you believe absolute beauty is possible.",
  },
  {
    id: "valley-ho",
    titleEs: "Moda Atemporal",
    titleEn: "Timeless Fashion",
    subtitle: "Hotel Valley Ho",
    location: "Scottsdale, Arizona, EEUU",
    languages: ["es", "en"],
    category: "hotel",
    introEs:
      "El diseño mid-century modern siempre me ha parecido una de las expresiones más honestas de la arquitectura americana. El Hotel Valley Ho es un tributo viviente a esa era — restaurado con un respeto que pocas renovaciones logran alcanzar.",
    introEn:
      "Mid-century modern design has always struck me as one of the most honest expressions of American architecture. Hotel Valley Ho is a living tribute to that era — restored with a level of respect that few renovations manage to achieve.",
    excerptEs:
      "Es cuando a cada inicio de cada época los ha demostrado que dejar como era viernes, y que lo hace nunca enfrenta, es mejor ejemplo que en el caso del Hotel Valley Ho. En esplendor, hace más de un año y luego a imagen de sus portales con una agresiva gracia de punto. En sus habitaciones y suites, este esplendido hotel de 194 habitaciones fue restaurado para ser el lugar favorito para una escapada privada e inolvidable.",
    excerptEn:
      "A few fashion-savvy travelers have always known what has only just become clear to the rest of us: mid-century modern architecture and the iconic Hotel Valley Ho were made for each other. In Scottsdale, Arizona, this recently renovated gem of 194 rooms and suites has become a favorite escape for those seeking timeless style.",
    bodyEs:
      "Restaurado con un ojo fiel a su herencia mid-century modern, el Hotel Valley Ho captura la esencia del glamour de los años 50 y 60 con todas las comodidades contemporáneas. Sus líneas limpias, colores vibrantes y espacios abiertos rinden homenaje a una era de optimismo y elegancia desenfadada.\n\nLa piscina, rodeada de cabañas privadas y tumbonas de diseño retro, es el centro social del hotel, donde huéspedes de todas partes del mundo se reúnen bajo el sol del desierto de Arizona.",
    bodyEn:
      "Restored with a faithful eye to its mid-century modern heritage, Hotel Valley Ho captures the essence of 1950s and 60s glamour with every contemporary convenience. Its clean lines, vibrant colors, and open spaces pay tribute to an era of optimism and effortless elegance.\n\nThe pool, surrounded by private cabanas and retro-designed loungers, is the hotel's social hub, where guests from around the world gather under the Arizona desert sun.",
    outroEs:
      "El Valley Ho nos recuerda que el estilo verdadero no tiene fecha de caducidad. Lo que fue elegante en los años cincuenta sigue siéndolo hoy — porque la honestidad en el diseño nunca pasa de moda.",
    outroEn:
      "Valley Ho reminds us that true style has no expiration date. What was elegant in the 1950s remains so today — because honesty in design never goes out of fashion.",
  },
  {
    id: "marina-mandarin",
    titleEs: "Un Icono del Pacífico",
    titleEn: "A Pacific Icon",
    subtitle: "Marina Mandarin",
    location: "Singapur",
    languages: ["es", "en"],
    category: "hotel",
    introEs:
      "Singapur es una ciudad que desafía toda expectativa. El Marina Mandarin, con su atrio monumental diseñado por John Portman, me ofreció la oportunidad de explorar cómo la arquitectura puede crear una experiencia emocional antes incluso de que deshagas las maletas.",
    introEn:
      "Singapore is a city that defies every expectation. The Marina Mandarin, with its monumental atrium designed by John Portman, offered me the opportunity to explore how architecture can create an emotional experience before you even unpack your bags.",
    excerptEs:
      "Singapur, cruce de caminos entre Oriente y Occidente, es una de las ciudades más cosmopolitas y fascinantes del mundo. El Marina Mandarin, con su impresionante atrio de 21 pisos diseñado por John Portman, se erige como un icono arquitectónico en el corazón de Marina Bay.",
    excerptEn:
      "Singapore, a crossroads between East and West, is one of the most cosmopolitan and fascinating cities in the world. The Marina Mandarin, with its stunning 21-story atrium designed by John Portman, stands as an architectural icon in the heart of Marina Bay.",
    bodyEs:
      "El hotel ofrece 575 habitaciones y suites con vistas panorámicas a la bahía de Marina o a la vibrante ciudad. Su diseño interior combina la sofisticación asiática con el confort occidental, creando espacios que invitan tanto al descanso como a la contemplación.\n\nLa oferta gastronómica del hotel refleja la diversidad culinaria de Singapur, con restaurantes que van desde la alta cocina china hasta la innovadora fusión asiática contemporánea.",
    bodyEn:
      "The hotel offers 575 rooms and suites with panoramic views of Marina Bay or the vibrant city skyline. Its interior design combines Asian sophistication with Western comfort, creating spaces that invite both rest and contemplation.\n\nThe hotel's culinary offerings reflect Singapore's diverse food culture, with restaurants ranging from fine Chinese cuisine to innovative contemporary Asian fusion.",
    outroEs:
      "El Marina Mandarin es prueba de que cuando Oriente y Occidente convergen con intención y respeto mutuo, el resultado puede ser extraordinario.",
    outroEn:
      "The Marina Mandarin is proof that when East and West converge with intention and mutual respect, the result can be extraordinary.",
  },
];

export default articles;
