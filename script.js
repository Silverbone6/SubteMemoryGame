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


const iconosPorLinea = {
    "A": icon_a,
    "B": icon_b,
    "C": icon_c,
    "D": icon_d,
    "E": icon_e,
    "H": icon_h,
    "P": icon_p
};

for (let station = 0; station < stations.length; station++) {
    const icono = iconosPorLinea[stations[station].linea];
    if (icono) {
        L.marker(stations[station].coordinates, { icon: icono }).addTo(mapa);
    }
}