import * as alias from './lines.js'

var mapa = L.map('mapa').setView([-34.6037, -58.3816], 13);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
    minZoom: 12,
    maxZoom: 16,
}).addTo(mapa);            
  
L.polyline(
    linea_a, {
        color: '#0ab4db',
        weight: 5
    }
).addTo(mapa);