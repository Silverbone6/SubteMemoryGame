var mapa = L.map('mapa').setView([-34.6037, -58.3816], 13);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
    minZoom: 13,
    maxZoom: 18,
}).addTo(mapa);            
  
var lineas = [ linea_a, linea_b, linea_c, linea_d, linea_e, linea_h, linea_p ];

for (let line = 0; line < lineas.length; line++) {
    L.polyline(lineas[line][0], {
        color: lineas[line][1],
        weight: 5
    }).addTo(mapa);
}


for (let station = 0; station < stations.length; station++) {
    if (stations[station].linea === "A") {
        L.marker(stations[station].coordinates, {
            icon: icon_a,
        }).addTo(mapa);
    } else if (stations[station].linea === "B") {
        L.marker(stations[station].coordinates, {
            icon: icon_b,
        }).addTo(mapa);
    } else if (stations[station].linea === "C") {
        L.marker(stations[station].coordinates, {
            icon: icon_c,
        }).addTo(mapa);
    } else if (stations[station].linea === "D") {
        L.marker(stations[station].coordinates, {
            icon: icon_d,
        }).addTo(mapa);
    } else if (stations[station].linea === "E") {
        L.marker(stations[station].coordinates, {
            icon: icon_e,
        }).addTo(mapa);
    } else if (stations[station].linea === "H") {
        L.marker(stations[station].coordinates, {
            icon: icon_h,
        }).addTo(mapa);
    } else if (stations[station].linea === "P") {
        L.marker(stations[station].coordinates, {
            icon: icon_p,
        }).addTo(mapa);
    }
}