// --- PLOTEO DEL MAPA ---
const mapa = L.map('mapa').setView([-34.6037, -58.3816], 13);
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
    minZoom: 12,
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
    "A": "./svgs/linea_a.svg",
    "B": "./svgs/linea_b.svg",
    "C": "./svgs/linea_c.svg",
    "D": "./svgs/linea_d.svg",
    "E": "./svgs/linea_e.svg",
    "H": "./svgs/linea_h.svg",
    "P": "./svgs/linea_p.svg"
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

for (let line = 0; line < lineas.length; line++) {
    L.polyline(lineas[line][0], {
        color: lineas[line][1],
        weight: 5
    }).addTo(mapa);
}
for (let station = 0; station < estaciones.length; station++) {
    const icono = iconosPorLinea[estaciones[station].linea];
    if (icono) {
        L.marker(estaciones[station].coordinates, { icon: icono }).addTo(mapa);
    }
}