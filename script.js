// --- PLOTEO DEL MAPA ---
var mapa = L.map('mapa').setView([-34.6037, -58.3816], 13);
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
    minZoom: 13,
    maxZoom: 18,
}).addTo(mapa);      

// --- PLOTEO DE LÍNEAS Y ESTACIONES ---
const lineas = [ 
    linea_a,
    linea_b, 
    linea_c, 
    linea_d, 
    linea_e, 
    linea_h, 
    linea_p 
]
const iconosPorLinea = {
    "A": icon_a,
    "B": icon_b,
    "C": icon_c,
    "D": icon_d,
    "E": icon_e,
    "H": icon_h,
    "P": icon_p
} 
const iconosUrlPorLinea = {
    "A": "src/linea_a.svg",
    "B": "src/linea_b.svg",
    "C": "src/linea_c.svg",
    "D": "src/linea_d.svg",
    "E": "src/linea_e.svg",
    "H": "src/linea_h.svg",
    "P": "src/linea_p.svg"
}
for (let line = 0; line < lineas.length; line++) {
    L.polyline(lineas[line][0], {
        color: lineas[line][1],
        weight: 5
    }).addTo(mapa);
}
for (let station = 0; station < stations.length; station++) {
    const icono = iconosPorLinea[stations[station].linea];
    if (icono) {
        L.marker(stations[station].coordinates, { icon: icono }).addTo(mapa);
    }
}

// --- ESTACIONES ENCONTRADAS ---
const foundIconosPorLinea = {
    "A": found_icon_a,
    "B": found_icon_b,
    "C": found_icon_c,
    "D": found_icon_d,
    "E": found_icon_e,
    "H": found_icon_h,
    "P": found_icon_p
}
var foundStations = {}
var inputStation = document.getElementById("input")
var lista_cont = 0
document.getElementById("input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        var inputStation = document.getElementById("input").value.trim()
        var found = false
        station = 0
        while (!found && station < stations.length) {
            if (stations[station].estacion === inputStation.toLocaleUpperCase()) {
                // --- SI LA ESTACIÓN EXISTE ---
                found = true
                icono = foundIconosPorLinea[stations[station].linea]
                mapa.setView(stations[station].coordinates, 16)
                L.marker(stations[station].coordinates, { icon: icono }).addTo(mapa)
                foundStations[lista_cont] = {
                    "id": (lista_cont + 1),
                    "estacion": stations[station].estacion,
                    "linea": stations[station].linea,
                    "coordinates": stations[station].coordinates
                }
                lista_cont += 1
            } else {
                // --- SI LA ESTACIÓN NO EXISTE ---
                station += 1
            }
        }
        if (!found) {
            console.log("Esa estación no existe");
        }
        // ---  ACTUALIZAR EL LISTADO DE ESTACIONES ---
        var progreso = Object.keys(foundStations).length / stations.length * 100
        document.getElementById("progressbar").innerHTML =
            (progreso.toFixed(2)) + '% de estaciones encontradas'
        document.getElementById("lista").innerHTML = ""
        for (var key in foundStations) {
            document.getElementById("lista").innerHTML +=
                '<div><img src="' + iconosUrlPorLinea[foundStations[key].linea] + '" alt="Icono Linea">'
                + foundStations[key].estacion + '</div>'
            key +=1
        }
    }
});

