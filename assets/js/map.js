function addText() {
    $(".name-heading").html("<h3>Explore Poland</h3");
    $("#information").text(`Poland officially the Republic of Poland is a country located in Central Europe. It is divided into 16 
    administrative provinces, covering an area of 312,696 square kilometers (120,733 sq mi), and has a largely temperate seasonal 
    climate. With a population of nearly 38.5 million people, Poland is the fifth most populous member state of the European Union. 
    Poland's capital and largest metropolis are Warsaw. Other major cities include Kraków, Łódź, Wrocław, Poznań, Gdańsk, and Szczecin.
     The history of human activity on Polish soil spans thousands of years. Throughout the late antiquity period, it became 
     extensively diverse, with various cultures and tribes settling on the vast Central European Plain. However, it was the 
     Western Polans who dominated the region and gave Poland its name. The establishment of Polish statehood can be traced to 
     966 when the pagan ruler of a realm coextensive with the territory of present-day Poland embraced Christianity and converted 
     to Catholicism.[16] The Kingdom of Poland was founded in 1025, and in 1569 it cemented its longstanding political association 
     with Lithuania by signing the Union of Lublin. This union formed the Polish–Lithuanian Commonwealth, one of the largest 
     (over 1,000,000 square kilometers – 400,000 square miles) and most populous nations of 16th and 17th century Europe, with a 
     uniquely liberal political system that adopted Europe's first modern constitution, the Constitution of 3 May 1791`);
}
addText();

const poland = {
    "lat": 51.7323731083243,
    "lng": 20.461452079236786 
}

function initMap() {
    const mapProp = {
        zoom: 7,
        streetViewControl: false,
        fullscreenControl: false,
        center: poland,
    };
    const map = new google.maps.Map(document.getElementById("map"), mapProp);

    const krakow = [
        {"lat": 50.05918412440376, "lng": 19.93597496938881, "name": "Old Town", "information": `Krakow’s vibrant old town, 
        is packed with traditional Polish restaurants, hotels and antique and souvenir shops.
        Wawel Royal Castle is a sprawling complex with a museum and cathedral, while bustling,
        13th-century Rynek square is home to Gothic St. Mary’s Basilica, Sukiennice, Jagiellonian University, a Renaissance-era 
        market hall. Bars include low-key pubs, craft beer bars, vodka spots and jazz dens.`, 
        "image":`<img src='assets/img/Krakow/Stare_miasto.jpg' alt='Stare miasto'>`,
    },
        {"lat": 50.05385272092519, "lng": 19.933822028155607, "name": "Dragon cave", "information": ` is a limestone cave in the Wawel Hill 
        in Kraków. Owing to its location in the heart of the former Polish capital and its connection to the legendary Wawel Dragon, 
        it is the best known cave in Poland. `, "image": `<img src='assets/img/Krakow/Smocza_jama.jpg' alt='Dragon Cave'>`
    },
        {"lat": 50.05132020442885, "lng": 19.947365592203894, "name": "Kazimierz", "information": `Kazimierz is a fashionable 
        artistic part of Krakow, located on the site of the former Jewish district, now home to independent galleries, unusual shops, 
        vintage boutiques, and bars - from elegant cocktail venues to shabby-chic venues. On Szeroka Street, it is worth seeing 
        numerous synagogues, including the Old Synagogue from the 16th century, and in the nearby Remuh Cemetery - a wall made of 
        tombstones destroyed during World War II. The Galicia Jewish Museum is a place whose mission is to provide the broadest 
        possible knowledge about Jewish culture. Krakow's Kazimierz is a special place, shaped by the centuries-old Christian-Jewish 
        neighborhood. Jews appeared in Kazimierz in the mid-fourteenth century and until the beginning of the nineteenth century they 
        lived in the "Jewish city". It was an autonomous enclave - Jews ruled over it independently - they had only the king over 
        them, on whose behalf the governor of Kraków exercised power.`, 
        "image":`<img src='assets/img/Krakow/kazimierz.jpg' atl='Jewish quarter'>`, 
    },
        {"lat": 50.01415281923071, "lng": 20.0521943339838, "name": "Wieliczka", "information": `Underground tunnels & mine with chapels,
         chambers & saline lakes, plus themed tours for all ages.`, "image":`<img src='assets/img/Krakow/wieliczka.jpg' alt='Wieliczka'>`,
    },
        {"lat": 50.0585392249607, "lng": 19.173837201928382, "name": "Memorial and Museum Auschwitz II-Birkenau", 
        "information": `Solemn memorial & museum of Nazi concentration & extermination camp where 1.1 million died.`,
         "image": `<img src='assets/img/Krakow/oswiecim.jpg' alt='Auschwitz'>`,
    },
    
        {"lat": 49.890489786458176, "lng": 19.409007553606752, "name": "Inwald Park", "information": `Family-friendly park with miniatures
         of famous monuments, a dinosaur area, gardens of John Paul 2, castle and mini zoo.`, 
         "image": `<img src='assets/img/Krakow/inwald.jpg' alt='Inwald'>`,
    },
        
        {"lat": 50.028979578545034, "lng": 19.419664035121464, "name": "Energylandia", "information": `Large amusement park, featuring 
        roller coasters, water rides & storybook characters.`, "image": `<img src='assets/img/krakow/energylandia.jpg' alt='energylandia'>`,
    },
        {"lat": 50.06161393919834, "lng": 19.937333537749744, "name": "Cloth Hall", "information": ` The Kraków Cloth Hall, in Lesser Poland, dates to 
        the Renaissance and is one of the city's most recognizable icons. It is the central feature of the main market square in the 
        Kraków Old Town (the historic center of Kraków), which since 1978 has been listed as a UNESCO World Heritage.  `, 
        "image": `<img src='assets/img/Krakow/sukiennce.jpg' alt='Cloth Hall'>`
    },
    ];
    const tricity = [
        {"lat": 54.35602959144473, "lng": 18.659979182277745,"name": "The Museum of World War II", "information": `The Museum of the 
        Second World War is a state cultural institution established in 2008 and a museum in Gdańsk, Poland which is devoted to the 
        Second World War. `, "image": `<img src='assets/img/Tricity/WWII.jpg' alt:'Second War museum'>`
    },
        {"lat": 54.36131298020431, "lng": 18.6497292703395,"name": "European Solidarity Centre", "information": `The European Solidarity 
        Centre is a museum and library in Gdańsk, Poland, devoted to the history of Solidarity, the Polish trade union and civil 
        resistance movement, and other opposition movements of Communist Eastern Europe`, "image": `<img src='assets/img/Tricity/ESC.jpg' alt:''>`
    },
        {"lat": 54.39591305189457, "lng": 18.67913106120668,"name": "Wisloujscie Fortress", "information": `Wisloujscie Fortress is a historic fortress located in Gdansk 
        by the Dead Vistula river, by an old estuary of the river Vistula, flowing into the Bay of Gdansk. The fortress is located close 
        to the Wisloujscie borough, Westerplatte, and the Northern Port`, "image": `<img src='assets/img/Tricity/Twierdza.jpg' alt:'Wisloujscie Fortress'>`
    },
        {"lat": 54.40672991256688, "lng": 18.666943103108498,"name": "Westerplatte", "information": `Westerplatte is a peninsula in 
        Gdansk, Poland, located on the Baltic Sea coast mouth of the Dead Vistula (one of the Vistula delta estuaries), in the Gdansk 
        harbor channel. From 1926 to 1939 it was the location of a Polish Military Transit Depot (WST), sanctioned within the 
        territory of the Free City of Danzig It is famous for the Battle of Westerplatte, which was the first clash between Polish 
        and German forces during the invasion of Poland and thus the beginning and the first battle of World War II.`, 
        "image": `<img src='assets/img/Tricity/Westerplatte.jpg' alt:'Westerplatte'>`
    },
        {"lat": 54.4103015981786, "lng":18.634885341428088,"name": "Brzezno beach", "information": `Brzezno is one of the quarters of the city of 
        Gdańsk, Poland with a sandy beach and 130 m long pier. `, "image": `<img src='assets/img/Tricity/Brzezno.jpg' alt:'Brzezno'>`
    },
        {"lat": 54.44412975305636, "lng": 18.56673577436759,"name": "Crooked house", "information": `Crooked House is an unusually 
        shaped building in Sopot, Poland. It was designed by Szotyńscy & Zaleski, who were inspired by the fairytale illustrations 
        and drawings of Jan Marcin Szancer and Per Dahlberg. The Crooked House took first place on the list of the 50 weirdest 
        buildings in the world, published by Portal Village of Joy`, "image": `<img src='assets/img/Tricity/domek.jpg' alt:'Crooked House'>`
    },
        {"lat": 54.44704939873655, "lng": 18.57347348369745,"name": "Sopot Pier", "information": `The Sopot Pier is the pier in the city of Sopot, 
        Poland, built as a pleasure pier and as a mooring point for cruise boats. It first opened in 1827, and at 511.5 meters 
        (1,678 ft), the pier is the longest wooden pier in Europe. It stretches into the sea from the middle of Sopot beach 
        which is a popular venue for recreation and health walks (the concentration of iodine at the tip of the pier is twice as 
        high as on land) or public entertainment events, and it also serves as a mooring point for cruise boats and water taxis`, 
        "image": `<img src='assets/img/Tricity/molo.jpg' alt:'Sopot Pier'>`
    },
        {"lat": 54.45235592652107, "lng":18.565998381327077,"name": "Sopot Beach", "information": `The beach is an integral part of the pier with a 4.3 km long sandy beach of extraordinary width 
        - as much as 110 meters! It is located very close to the city center, and there is one official descent to it. You can swim 
        safely - lifeguards watch over bathing enthusiasts. The descent to the water is gentle. The beach has great tourist facilities 
        - toilets, bars, attractions for children, and sun lounger rental`, "image": `<img src='assets/img/Tricity/beach.jpg' alt:'Sopot Beach'>`
    },
        {"lat": 54.48167034117536, "lng": 18.565192466511217,"name": "Orlowo", "information": `Orlowo - a seaside, southern district 
        of Gdynia with a marina for fishermen (beach strip). It includes the Orłowo Pier, as well as a cliff characteristic of the 
        district's landscape, with the name of the shopping center located in Orłowo. There is also a railway station in Orłowo and a 
        stop for the Szybka Kolej Miejska in the Tri-City Gdynia Orłowo. On the border of Orłów and the Redłowska Plate, you can see 
        many cannons, bunkers, and tranches from the early 1950s.`, "image": `<img src='assets/img/Tricity/orlowo.jpg' alt:'Orlowo'>`
    },
    
    ];
    const wroclaw = [
        {"lat": 51.12031925681726, "lng": 17.02833967476246, "name": "MovieGate", "information": `THE ONLY UNDERGROUND TRIP CONNECTING HISTORY, 
        MODERN CINEMA, AND THE MAGIC OF ILLUSION
        One of our leading projects is the development of the underground, hidden under Solny Square in Wrocław. The mysterious complex 
        at the Main Square is a combination of exceptional entertainment and original education, perfect for the whole family. 
        The planned weekend in Wrocław will become a fascinating adventure after entering the MovieGate gallery.`, 
        "image": `<img src='assets/img/Wroclaw/movieGate.jpg' alt='MovieGate'>` 
    },
        {"lat": 51.11021233778445, "lng": 17.044867630499073, "name": "National Museum", "information": `The National Museum in Wrocław, established 
        28 March 1947 and officially inaugurated on 11 July 1948, is one of Poland's main branches of the National Museum system. 
        It holds one of the largest collections of contemporary art in the country. The holdings of Wrocław Museum are closely 
        connected with the history of border shifts in Central Europe following World War II. After the annexation of Eastern 
        half of the Second Polish Republic by the Soviet Union, main parts of Poland's art collections were transferred from 
        the cities incorporated into the USSR like Lviv.`, "image": `<img src='assets/img/Wroclaw/National_Museum.jpg.jpg' alt='Nationl Museum'>` 
    },
        {"lat": 51.10979880131194, "lng": 17.03273270452827, "name": "Squer", "information":`Rynek of Wrocław has 3.8ha of surface 
        and belongs to the biggest market places in Poland (the bigger ones are in Kraków and Olecko). However, the Late Gothic 
        Town Hall with its 66m tower is the biggest building of this kind in Poland.  In its underground functions Piwnica Świdnicka, 
        one of the oldest restaurants in Europe.`, "image": `<img src='assets/img/Wroclaw/Rynek.jpg' alt='Rynek of Wroclaw'>`
    },
        {"lat": 51.109576337684736, "lng": 17.045276507867857, "name": "Panorama of the Battle of Racławice", "information": `Panorama Raclawicka has 
        been the flagship tourist attraction of Wrocław since 1985. In a specially constructed rotunda building, you can see a painting 
        that is 15 meters high and 114 meters long. It shows the battle of Racławice led by Tadeusz Kościuszko. Thanks to special 
        measures - lighting, winding approach, creating an artificial area in front of the picture, the viewer have the impression 
        that he is moving to the battlefield`, "image": `<img src='assets/img/Wroclaw/Panorama_Raclawicka2.jpg' alt='Panorama Raclawicka'>` 
    },
        {"lat": 51.104389928064585, "lng": 17.07519974870186, "name": "Afrykarium", "information": `it is unique at the expense of 
        the world. Animals from the Black Continent are presented in this aquarium. Here you can see the coral reef of the Red Sea, 
        peek at the bottom of the Nile, the Great African Rift, the Mozambique Channel, the beaches of the Skeleton Coast, and the 
        jungles of the Congo Basin. There are sharks and rays here that you can admire while walking through a transparent tunnel. 
        They flow past us and over our heads. In Africarium we will also see, among others penguins, cats, and river hippos.`, 
        "image": `<img src='assets/img/Wroclaw/afrykanarium.jpg' alt='Afrykanarium'>`
    },
        {"lat": 51.0946628143499, "lng": 17.018847385265733, "name": "Sky Tower", "information": `A residential building in this 
        part of Europe allows you to see Wrocław from a unique perspective. The local point on the 49th-floor skyscraper at an 
        altitude of about 200 meters. Take it with very fast lifts.`, "image": `<img src='assets/img/Wroclaw/Sky_tower.jpg' alt='Sky Tower'>`
    },
        {"lat": 51.10798994652729, "lng": 17.019858194954995, "name": "Kolejkowo", "information": `is the largest railway 
        model in Poland. You can see it at the Świebodzki Railway Station. It is 210 meters of the track on which 9 trains and 
        40 wagons run. And also 103 buildings, 640 human figures. In Kolejkowo, you can see miniatures of the most famous 
        Lower Silesian tourist attractions, such as the meteorological observatory on Sniezka.`, 
        "image": `<img src='assets/img/Wroclaw/kolejkowo.jpg' alt='Kolejkowo'>`
    }
    ];  
    const warsaw = [
        {"lat": 52.24975621855516, "lng": 21.012233510634502,"name": "Old town", "information": `Warsaw Old Town (colloquially as Starówka) is the oldest part of Warsaw, the capital 
        city of Poland. It is bounded by the Wybrzeże Gdańskie (Gdańsk Boulevards), along with the bank of the Vistula river, 
        Grodzka, Mostowa and Podwale Streets. It is one of the most prominent tourist attractions in Warsaw. The heart of the 
        area is the Old Town Market Place, rich in restaurants, cafés and shops. Surrounding streets feature medieval architecture 
        such as the city walls, St. John's Cathedral and the Barbican which links the Old Town with Warsaw New Town. The Old Town was 
        established in the 13th century. Initially surrounded by an earthwork rampart, prior to 1339 it was fortified with brick city 
        walls. The town originally grew up around the castle of the Dukes of Mazovia that later became the Royal Castle. The Market 
        Square (Rynek Starego Miasta) was laid out sometime in the late 13th or early 14th century, along the main road linking the 
        castle with the New Town to the north.  `, "image": `<img src='assets/img/Warsaw/starowka.jpg' alt:'Old town'>`},
        {"lat": 52.24798911711852, "lng": 21.015245270294795,"name": "The Royal Castle", "information": `The Royal Castle in Warsaw is 
        a royal residence that formerly served throughout the centuries as the official home of Polish monarchs. It is situated in Castle 
        Square, at the entrance to the Warsaw Old Town. The personal offices of the king and the administrative offices of the royal 
        court were located in the Castle from the 16th century until the final partition of Poland in 1795. Initially, the fortified 
        complex served as the residence of the Masovian dukes. In the early 1600s, it was designated to replace Wawel Castle in Kraków 
        as the seat of the King, Parliament (Chamber of Deputies and Senate), and the Polish–Lithuanian Commonwealth. The medieval 
        Gothic structure was remodelled into Italian mannerism by architects Matteo Castelli and Giovanni Battista Trevano. The 
        Baroque easternmost wing was designed by Gaetano Chiaveri and completed in 1747. The Royal Castle witnessed many notable 
        events in Poland's history; the Constitution of 3 May 1791, first of its type in Europe and the world's second-oldest codified 
        national constitution, was drafted here by the Four-Year Parliament.[2] Following Poland's loss of sovereignty, the castle was 
        redesigned for the needs of the Imperial Russian and later German administration during the course of World War I. Under the 
        Second Polish Republic (1918–1939), it was the seat of the Polish head of state and president.`, 
        "image": `<img src='assets/img/Warsaw/Zamek.jpg' alt:'Royal Castle in Warsaw'>`},
        {"lat": 52.24781107133661, "lng": 21.013493044364616, "name": "Castle Square", "information": `Castle Square - a square in the center of Warsaw located between the outlets of 
        Krakowskie Przedmieście, Senatorska, Podwala and Świętojańska Streets. It was laid out in the years 1818–1821 according to 
        the design of Jakub Kubicki. The buildings on the square were destroyed in 1939 and 1944. It was rebuilt in 1949–1958 in a 
        uniform architectural style. The eastern frontage of the square is the facade of the Royal Castle. The Royal Route begins 
        in the square.`, "image": `<img src='assets/img/Warsaw/plac_zamkowy.jpg' alt:'Castle Square'>`},
        {"lat": 52.23187087303124, "lng": 21.00598428041378,"name": "Palace of Culture and Science", "information": `Palace of Culture 
        and Science is a notable high-rise building in central Warsaw, Poland. With a total height of 237 meters (778 ft), it is the 
        tallest building in Poland, the 5th-tallest building in the European Union (including spire), and one of the tallest on the 
        European continent. Constructed in 1955, it houses various public and cultural institutions such as cinemas, theatres, libraries, 
        sports clubs, university faculties, and authorities of the Polish Academy of Sciences. The building was originally known as the 
        Joseph Stalin's Palace of Culture and Science, but in the wake of destalinization, the dedication to Stalin was revoked. Stalin's 
        name was removed from the colonnade, interior lobby, and one of the building's sculptures. Since 2007 it has been enlisted in the 
        Registry of Objects of Cultural Heritage. Motivated by Polish historical architecture and American art deco high-rise buildings, 
        the PKiN was designed by Soviet Russian architect Lev Rudnev in "Seven Sisters" style and is informally referred to as the 
        Eighth Sister. The Palace was also the tallest clock tower in the world until the installation of a clock mechanism on the NTT 
        Docomo Yoyogi Building in Tokyo, Japan.`, "image": `<img src='assets/img/Warsaw/palac.jpg' alt:'Palace of Culture and Science'>`},
        {"lat": 52.21495560435733, "lng": 21.034819446402807,"name": "Royal Baths Park", "information": `Łazienki Park or Royal Baths Park (Polish: 
        Park Łazienkowski, Łazienki Królewskie) is the largest park in Warsaw, Poland, occupying 76 hectares of the city center. 
        The park-and-palace complex lies in Warsaw's central district on Ujazdów Avenue, which is part of the Royal Route linking 
        the Royal Castle with Wilanów Palace to the south. North of Łazienki Park, on the other side of Agrykola Street, stands 
        Ujazdów Castle. Originally designed in the 17th century as a baths park for nobleman Stanisław Herakliusz Lubomirski, 
        in the 18th century, Łazienki was transformed by Poland's last monarch, Stanisław II Augustus, into a setting for palaces, 
        villas, classicist follies, and monuments. In 1918 it was officially designated a public park. Łazienki is visited by 
        tourists from all over Poland and the world and serves as a venue for music, the arts, and culture. The park is also home 
        to peacocks and a large number of squirrels.`, "image": `<img src='assets/img/Warsaw/lazienki.jpg' alt:'Lazienki'>`},
        {"lat": 52.23245858836156, "lng": 20.981196913764872,"name": "The Warsaw Uprising Museum", "information": `The Warsaw Uprising Museum (named Warsaw Rising Museum, Polish: Muzeum 
        Powstania Warszawskiego), in the Wola district of Warsaw, Poland, is dedicated to the Warsaw Uprising of 1944. The institution of 
        the museum was established in 1983, but no construction work took place for many years. It opened on July 31, 2004, marking the 
        60th anniversary of the uprising. The museum sponsors research into the history of the uprising, and the history and possessions 
        of the Polish Underground State. It collects and maintains hundreds of artifacts — ranging from weapons used by the insurgents to 
        love letters — to present a full picture of the people involved. The museum's stated goals include the creation of an archive of 
        historical information on the uprising and the recording of the stories and memories of living participants. The museum is a 
        member organization of the Platform of European Memory and Conscience.`, "image": `<img src='assets/img/Warsaw/MuzPowst.jpg' alt:'Warsaw Uprising Museum'>`},
        {"lat": 52.240956449480436, "lng": 21.011296199130935,"name": "Tomb of the Unknown Soldier", "information": `The Tomb of the 
        Unknown Soldier is a monument in Warsaw, Poland, dedicated to the unknown soldiers who have given their lives for Poland. It 
        is one of many such national tombs of unknowns that were erected after World War I, and the most important such monument in 
        Poland. The monument, located at Piłsudski Square, is the only surviving part of the Saxon Palace that occupied the spot 
        until World War II. Since 2 November 1925, the tomb houses the unidentified body of a young soldier who fell during the 
        Defence of Lwów. Since then, earth from numerous battlefields where Polish soldiers have fought has been added to the urns 
        housed in the surviving pillars of the Saxon Palace.`, "image": `<img src='assets/img/Warsaw/Tomb.jpg' alt:'Tomb of the Unknown Soldier'>`},

    ];

    var InfoObj = [];
}

$("#krakowInfo").click(function(){
    clearMarker();
    map.setZoom(10);
    map.setCenter({
        lat: 50.064819627963615, lng: 19.94479058948315
    });

    for(let i=0; i < krakow.lenght; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(krakow[i].lat, krakow[i].lng),
            animation: google.maps.Animation.DROP,
            map: map
        });
    }
    marker.push(marker);
})
    /*let citys = krakow.concat(tricity, wroclaw, warsaw);

    for(let i=0; i < citys.length; i++) {
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(citys[i].lat, citys[i].lng),
            map: map,
        })
    }
}
let citys = krakow.concat(tricity, wroclaw, warsaw);
/* let locWroclaw = ["lat": 51.113144196321784, "lng": 17.038398544851354,"name": "Wroclaw", "Information":
`Wroclaw is the historical capital of Silesia and Lower Silesia. Today, it is the capital of the Lower Silesian Voivodeship. 
The history of the city dates back over a thousand years; at various times, it has been part of the Kingdom of Poland, the Kingdom 
of Bohemia, the Kingdom of Hungary, the Habsburg Monarchy of Austria, the Kingdom of Prussia and Germany. Wrocław became part of 
Poland again in 1945 as part of the so-called Recovered Territories, the result of extensive border changes and expulsions after 
the Second World War. "The Official Travel Guide - https://visitwroclaw.eu/en" `],

let locWarsaw = [ "lat": 52.22982051316745, "lng": 21.0121004101167, "name": "Warsaw", "information": `Warsaw is the capital and 
largest city of Poland. The metropolis stands on the Vistula River in east-central Poland and its population is officially estimated 
at 1.8 million residents within a greater metropolitan area of 3.1 million residents, which makes Warsaw the 7th most-populous capital 
city in the European Union. The city limits cover 517.24 square kilometers (199.71 sq mi), while the metropolitan area covers 6,100.43 
square kilometers (2,355.39 sq mi).[4] Warsaw is an alpha- global city,[5] a major international tourist destination, and a 
significant cultural, political, and economic hub. Its historical Old Town was designated a UNESCO World Heritage Site. https://warsawtour.pl/en/main-page/`],

let locKrakow = ["lat": 50.064819627963615, "lng": 19.94479058948315, "name": "Krakow", "Information": `Cracow is the second-largest 
and one of the oldest cities in Poland. Situated on the Vistula River in Lesser Poland Province, the city dates back to the 7th 
century. Kraków was the official capital of Poland until 1596 and has traditionally been one of the leading centers of Polish 
academic, economic, cultural, and artistic life. Cited as one of Europe's most beautiful cities, its Old Town has declared the 
first UNESCO world Heritage Site in the world. https://www.introducingkrakow.com/`],

let locTrojmiasto = gdansk - 54.39340175144875, 18.540524388814273, sopot - 54.441475365402376, 18.56012762537952, gdynia - 54.51875312604973, 18.531799401608172 
opis: Tricity, or Tri-City (Polish: Trójmiasto is a metropolitan area in northern Poland (in Pomeranian Voivodeship), 
consisting of three cities: Gdańsk, Gdynia and Sopot, as well as minor towns in their vicinity. They are situated adjacent to one 
another, in a row on the coast of Gdańsk Bay, Baltic Sea, in Eastern or Gdansk Pomerania (often referred to as Pomerelia in English). 
The Tricity metropolitan area has a population of over 1 million people. */ 
