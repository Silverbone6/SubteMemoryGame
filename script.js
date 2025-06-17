var mapa = L.map('mapa').setView([-34.6037, -58.3816], 13);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
    minZoom: 13,
    maxZoom: 18,
}).addTo(mapa);            
  
var lineas = [ linea_a, linea_b, linea_c, linea_d, linea_e, linea_h, linea_p ];

for (let i = 0; i < lineas.length; i++) {
    L.polyline(lineas[i][0], {
        color: lineas[i][1],
        weight: 5
    }).addTo(mapa);
}