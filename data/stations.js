const estaciones = [
  {
    "id": 1,
    "estacion": "CASEROS",
    "linea": "H",
    "coordinates": [-34.635750180343017, -58.39892758536007]
  },
  {
    "id": 2,
    "estacion": "INCLAN",
    "linea": "H",
    "coordinates": [-34.629375657572822, -58.400969556016499]
  },
  {
    "id": 3,
    "estacion": "HUMBERTO I",
    "linea": "H",
    "coordinates": [-34.623092320501897, -58.402322730424025]
  },
  {
    "id": 4,
    "estacion": "VENEZUELA",
    "linea": "H",
    "coordinates": [-34.615242152270575, -58.404731716490012]
  },
  {
    "id": 5,
    "estacion": "ONCE",
    "linea": "H",
    "coordinates": [-34.608935241621545, -58.406036381035165]
  },
  {
    "id": 6,
    "estacion": "9 DE JULIO",
    "linea": "D",
    "coordinates": [-34.604245202962929, -58.380574342889609]
  },
  {
    "id": 7,
    "estacion": "FACULTAD DE MEDICINA",
    "linea": "D",
    "coordinates": [-34.599757080763894, -58.397923755573373]
  },
  {
    "id": 8,
    "estacion": "TRIBUNALES",
    "linea": "D",
    "coordinates": [-34.601493, -58.384480]
  },
  {
    "id": 9,
    "estacion": "AGUERO",
    "linea": "D",
    "coordinates": [-34.591627843719891, -58.40716132018985]
  },
  {
    "id": 10,
    "estacion": "SCALABRINI ORTIZ",
    "linea": "D",
    "coordinates": [-34.585155944049347, -58.415955419006657]
  },
  {
    "id": 11,
    "estacion": "PLAZA ITALIA",
    "linea": "D",
    "coordinates": [-34.581411193604517, -58.42119601012643]
  },
  {
    "id": 12,
    "estacion": "PALERMO",
    "linea": "D",
    "coordinates": [-34.578422022790363, -58.425711441112341]
  },
  {
    "id": 13,
    "estacion": "RETIRO C",
    "linea": "C",
    "coordinates": [-34.591186, -58.374267]
  },
  {
    "id": 14,
    "estacion": "LAVALLE",
    "linea": "C",
    "coordinates": [-34.601769923011368, -58.378155782824365]
  },
  {
    "id": 15,
    "estacion": "DIAGONAL NORTE",
    "linea": "C",
    "coordinates": [-34.604843739914045, -58.379529980073869]
  },
  {
    "id": 16,
    "estacion": "AVENIDA DE MAYO",
    "linea": "C",
    "coordinates": [-34.608983314882707, -58.380610717957907]
  },
  {
    "id": 17,
    "estacion": "MORENO",
    "linea": "C",
    "coordinates": [-34.612617279803743, -58.380444469660048]
  },
  {
    "id": 18,
    "estacion": "INDEPENDENCIA C",
    "linea": "C",
    "coordinates": [-34.6181255992933, -58.380173610475246]
  },
  {
    "id": 19,
    "estacion": "CONSTITUCION",
    "linea": "C",
    "coordinates": [-34.627619452254756, -58.381434433934324]
  },
  {
    "id": 20,
    "estacion": "FLORIDA",
    "linea": "B",
    "coordinates": [-34.603297285577526, -58.37507151826356]
  },
  {
    "id": 21,
    "estacion": "CARLOS PELLEGRINI",
    "linea": "B",
    "coordinates": [-34.603637105181733, -58.380714847140887]
  },
  {
    "id": 22,
    "estacion": "URUGUAY",
    "linea": "B",
    "coordinates": [-34.604093553105677, -58.387296133540808]
  },
  {
    "id": 23,
    "estacion": "CALLAO B",
    "linea": "B",
    "coordinates": [-34.604419542860782, -58.392314235088747]
  },
  {
    "id": 24,
    "estacion": "PASTEUR",
    "linea": "B",
    "coordinates": [-34.60464296791929, -58.399474256679021]
  },
  {
    "id": 25,
    "estacion": "PUEYRREDON B",
    "linea": "B",
    "coordinates": [-34.604581055351218, -58.405399439843379]
  },
  {
    "id": 26,
    "estacion": "CARLOS GARDEL",
    "linea": "B",
    "coordinates": [-34.604079517347458, -58.411762599632141]
  },
  {
    "id": 27,
    "estacion": "MEDRANO",
    "linea": "B",
    "coordinates": [-34.603164901097252, -58.420962470270595]
  },
  {
    "id": 28,
    "estacion": "ANGEL GALLARDO",
    "linea": "B",
    "coordinates": [-34.602162229342731, -58.43127386032458]
  },
  {
    "id": 29,
    "estacion": "MALABIA",
    "linea": "B",
    "coordinates": [-34.59896736415876, -58.439771498415517]
  },
  {
    "id": 30,
    "estacion": "DORREGO",
    "linea": "B",
    "coordinates": [-34.591718153619773, -58.447573092531215]
  },
  {
    "id": 31,
    "estacion": "PERU",
    "linea": "A",
    "coordinates": [-34.608559073853243, -58.374267726430439]
  },
  {
    "id": 32,
    "estacion": "PIEDRAS",
    "linea": "A",
    "coordinates": [-34.608881721214985, -58.379085153090848]
  },
  {
    "id": 33,
    "estacion": "LIMA",
    "linea": "A",
    "coordinates": [-34.609099806551932, -58.382232401018143]
  },
  {
    "id": 34,
    "estacion": "SAENZ PEÑA",
    "linea": "A",
    "coordinates": [-34.609412586502664, -58.386777194087301]
  },
  {
    "id": 35,
    "estacion": "CONGRESO",
    "linea": "A",
    "coordinates": [-34.609225684317408, -58.392668824664838]
  },
  {
    "id": 36,
    "estacion": "PASCO",
    "linea": "A",
    "coordinates": [-34.609645961705247, -58.398426991812322]
  },
  {
    "id": 37,
    "estacion": "ALBERTI",
    "linea": "A",
    "coordinates": [-34.609833578439833, -58.401207534233009]
  },
  {
    "id": 38,
    "estacion": "PLAZA MISERERE",
    "linea": "A",
    "coordinates": [-34.609817245670584, -58.406707116508805]
  },
  {
    "id": 39,
    "estacion": "LORIA",
    "linea": "A",
    "coordinates": [-34.610781690450366, -58.415185708837562]
  },
  {
    "id": 40,
    "estacion": "CASTRO BARROS",
    "linea": "A",
    "coordinates": [-34.611770229125533, -58.421815671370581]
  },
  {
    "id": 41,
    "estacion": "RIO DE JANEIRO",
    "linea": "A",
    "coordinates": [-34.615205610331188, -58.429500323299706]
  },
  {
    "id": 42,
    "estacion": "ACOYTE",
    "linea": "A",
    "coordinates": [-34.618279967144559, -58.436428528849341]
  },
  {
    "id": 43,
    "estacion": "PRIMERA JUNTA",
    "linea": "A",
    "coordinates": [-34.620405212858898, -58.441177625110889]
  },
  {
    "id": 44,
    "estacion": "BOLIVAR",
    "linea": "E",
    "coordinates": [-34.609242428860796, -58.373684224168464]
  },
  {
    "id": 45,
    "estacion": "BELGRANO",
    "linea": "E",
    "coordinates": [-34.612849105818626, -58.377580886540613]
  },
  {
    "id": 46,
    "estacion": "INDEPENDENCIA E",
    "linea": "E",
    "coordinates": [-34.617937393977151, -58.381534941712232]
  },
  {
    "id": 47,
    "estacion": "SAN JOSE",
    "linea": "E",
    "coordinates": [-34.622339491936735, -58.38514854962375]
  },
  {
    "id": 48,
    "estacion": "ENTRE RIOS",
    "linea": "E",
    "coordinates": [-34.622719666127772, -58.391511699971502]
  },
  {
    "id": 49,
    "estacion": "PICHINCHA",
    "linea": "E",
    "coordinates": [-34.623109865779099, -58.397068074662556]
  },
  {
    "id": 50,
    "estacion": "JUJUY",
    "linea": "E",
    "coordinates": [-34.623865711583456, -58.40293658025606]
  },
  {
    "id": 51,
    "estacion": "GENERAL URQUIZA",
    "linea": "E",
    "coordinates": [-34.624653786466169, -58.409390783443627]
  },
  {
    "id": 52,
    "estacion": "JOSE MARIA MORENO",
    "linea": "E",
    "coordinates": [-34.628017548774217, -58.433816250239467]
  },
  {
    "id": 53,
    "estacion": "EMILIO MITRE",
    "linea": "E",
    "coordinates": [-34.631041842165459, -58.442170705965225]
  },
  {
    "id": 54,
    "estacion": "BULNES",
    "linea": "D",
    "coordinates": [-34.588237108418191, -58.411293901393577]
  },
  {
    "id": 55,
    "estacion": "PUEYRREDON D",
    "linea": "D",
    "coordinates": [-34.594425718628472, -58.402395342535065]
  },
  {
    "id": 56,
    "estacion": "CALLAO D",
    "linea": "D",
    "coordinates": [-34.599639552419006, -58.393125180972717]
  },
  {
    "id": 57,
    "estacion": "GENERAL SAN MARTIN",
    "linea": "C",
    "coordinates": [-34.595319, -58.377421]
  },
  {
    "id": 58,
    "estacion": "SAN JUAN",
    "linea": "C",
    "coordinates": [-34.621916732208142, -58.379921178865118]
  },
  {
    "id": 59,
    "estacion": "MEDALLA MILAGROSA",
    "linea": "E",
    "coordinates": [-34.636389189385831, -58.450278256370879]
  },
  {
    "id": 60,
    "estacion": "AVENIDA LA PLATA",
    "linea": "E",
    "coordinates": [-34.627015467001989, -58.426789022897211]
  },
  {
    "id": 61,
    "estacion": "BOEDO",
    "linea": "E",
    "coordinates": [-34.62536610589256, -58.415532818967826]
  },
  {
    "id": 62,
    "estacion": "MINISTRO CARRANZA",
    "linea": "D",
    "coordinates": [-34.575178364111288, -58.435013533733844]
  },
  {
    "id": 63,
    "estacion": "OLLEROS",
    "linea": "D",
    "coordinates": [-34.570012307825714, -58.444668148334863]
  },
  {
    "id": 64,
    "estacion": "JOSE HERNANDEZ",
    "linea": "D",
    "coordinates": [-34.566215242158897, -58.452125603388943]
  },
  {
    "id": 65,
    "estacion": "JURAMENTO",
    "linea": "D",
    "coordinates": [-34.562309086997445, -58.456489134589013]
  },
  {
    "id": 66,
    "estacion": "FEDERICO LACROZE",
    "linea": "B",
    "coordinates": [-34.587197852990386, -58.455029286280954]
  },
  {
    "id": 67,
    "estacion": "PLAZA DE LOS VIRREYES",
    "linea": "E",
    "coordinates": [-34.642949, -58.461551]
  },
  {
    "id": 68,
    "estacion": "VARELA",
    "linea": "E",
    "coordinates": [-34.640137352298026, -58.457891755773133]
  },
  {
    "id": 69,
    "estacion": "CATEDRAL",
    "linea": "D",
    "coordinates": [-34.607802336428939, -58.373955806951109]
  },
  {
    "id": 70,
    "estacion": "PLAZA DE MAYO",
    "linea": "A",
    "coordinates": [-34.608810309168888, -58.370968498967358]
  },
  {
    "id": 71,
    "estacion": "CONGRESO DE TUCUMAN",
    "linea": "D",
    "coordinates": [-34.555641766426099, -58.462378408224311]
  },
  {
    "id": 72,
    "estacion": "LEANDRO N. ALEM",
    "linea": "B",
    "coordinates": [-34.602989496633242, -58.369929850122439]
  },
  {
    "id": 73,
    "estacion": "TRONADOR",
    "linea": "B",
    "coordinates": [-34.58409462011609, -58.466227204692146]
  },
  {
    "id": 74,
    "estacion": "DE LOS INCAS",
    "linea": "B",
    "coordinates": [-34.581248845957909, -58.47424082617713]
  },
  {
    "id": 75,
    "estacion": "CARABOBO",
    "linea": "A",
    "coordinates": [-34.626666593180303, -58.456709797523757]
  },
  {
    "id": 76,
    "estacion": "PUAN",
    "linea": "A",
    "coordinates": [-34.623528952889345, -58.44864765402636]
  },
  {
    "id": 77,
    "estacion": "CORRIENTES",
    "linea": "H",
    "coordinates": [-34.604490201608144, -58.405450328484243]
  },
  {
    "id": 78,
    "estacion": "PARQUE PATRICIOS",
    "linea": "H",
    "coordinates": [-34.638405988285101, -58.405794825968556]
  },
  {
    "id": 79,
    "estacion": "HOSPITALES",
    "linea": "H",
    "coordinates": [-34.641268943390877, -58.412385151200489]
  },
  {
    "id": 80,
    "estacion": "ECHEVERRIA",
    "linea": "B",
    "coordinates": [-34.577797377542254, -58.481013503672052]
  },
  {
    "id": 81,
    "estacion": "JUAN MANUEL DE ROSAS",
    "linea": "B",
    "coordinates": [-34.574318914274834, -58.486385347889119]
  },
  {
    "id": 82,
    "estacion": "SAN JOSE DE FLORES",
    "linea": "A",
    "coordinates": [-34.629087226797033, -58.463540510628647]
  },
  {
    "id": 83,
    "estacion": "SAN PEDRITO",
    "linea": "A",
    "coordinates": [-34.630707087006002, -58.46963962922468]
  },
  {
    "id": 84,
    "estacion": "CORDOBA",
    "linea": "H",
    "coordinates": [-34.598455111773411, -58.403721496438735]
  },
  {
    "id": 85,
    "estacion": "LAS HERAS",
    "linea": "H",
    "coordinates": [-34.587461546426162, -58.397215575101853]
  },
  {
    "id": 86,
    "estacion": "SANTA FE",
    "linea": "H",
    "coordinates": [-34.595072, -58.402559]
  },
  {
    "id": 87,
    "estacion": "FACULTAD DE DERECHO",
    "linea": "H",
    "coordinates": [-34.582972, -58.391207]
  },
  {
    "id": 88,
    "estacion": "CORREO CENTRAL",
    "linea": "E",
    "coordinates": [-34.603013905923149, -58.3704125010713]
  },
  {
    "id": 89,
    "estacion": "CATALINAS",
    "linea": "E",
    "coordinates": [-34.596997, -58.371788]
  },
  {
    "id": 90,
    "estacion": "RETIRO E",
    "linea": "E",
    "coordinates": [-34.592431, -58.375683]
  },
  {
    "id": 91,
    "estacion": "INTENDENTE SAGUIER",
    "linea": "P",
    "coordinates": [-34.643211, -58.461623]
  },
  {
    "id": 92,
    "estacion": "BALBASTRO",
    "linea": "P",
    "coordinates": [-34.648832, -58.456256]
  },
  {
    "id": 93,
    "estacion": "ANA MARIA JANER",
    "linea": "P",
    "coordinates": [-34.659458, -58.450034]
  },
  {
    "id": 94,
    "estacion": "ESCALADA",
    "linea": "P",
    "coordinates": [-34.674300, -58.459851]
  },
  {
    "id": 95,
    "estacion": "GENERAL SAVIO",
    "linea": "P",
    "coordinates": [-34.688804, -58.460205]
  },
  {
    "id": 96,
    "estacion": "CECILIA GRIERSON",
    "linea": "P",
    "coordinates": [-34.672217, -58.457565]
  },
  {
    "id": 97,
    "estacion": "NICOLAS DESCALZI",
    "linea": "P",
    "coordinates": [-34.682726, -58.462447]
  },
  {
    "id": 98,
    "estacion": "LARRAZABAL",
    "linea": "P",
    "coordinates": [-34.680591, -58.465376]
  },
  {
    "id": 99,
    "estacion": "ANA DIAZ",
    "linea": "P",
    "coordinates": [-34.680529, -58.466738]
  },
  {
    "id": 100,
    "estacion": "SOMELLERA",
    "linea": "P",
    "coordinates": [-34.656581, -58.453767]
  },
  {
    "id": 101,
    "estacion": "POLA",
    "linea": "P",
    "coordinates": [-34.678050, -58.464410]
  },
  {
    "id": 102,
    "estacion": "FERNANDEZ DE LA CRUZ",
    "linea": "P",
    "coordinates": [-34.662229, -58.446665]
  },
  {
    "id": 103,
    "estacion": "PRESIDENTE ILLIA",
    "linea": "P",
    "coordinates": [-34.665299, -58.448596]
  },
  {
    "id": 104,
    "estacion": "PARQUE DE LA CIUDAD",
    "linea": "P",
    "coordinates": [-34.670223, -58.455505]
  },
  {
    "id": 105,
    "estacion": "GABINO EZEIZA",
    "linea": "P",
    "coordinates": [-34.685999, -58.458070]
  },
  {
    "id": 106,
    "estacion": "CENTRO CIVICO LUGANO",
    "linea": "P",
    "coordinates": [-34.683643, -58.465054]
  },
  {
    "id": 107,
    "estacion": "MARIANO ACOSTA",
    "linea": "P",
    "coordinates": [-34.654401, -58.456578]
  },
  {
    "id": 108,
    "estacion": "NUESTRA SEÑORA DE FATIMA",
    "linea": "P",
    "coordinates": [-34.660622, -58.448575]
  }
]
