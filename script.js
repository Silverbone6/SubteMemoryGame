var mapa = L.map('mapa').setView([-34.6037, -58.3816], 13);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
    minZoom: 13,
    maxZoom: 18,
}).addTo(mapa);            
  
L.polyline(
    linea_a[0], {
        color: linea_a[1],
        weight: 5
    }
).addTo(mapa);
L.polyline(
    linea_b, {
        color: '#b30000',
        weight: 5
    }
).addTo(mapa);
L.polyline(
    linea_c, {
        color: '#0d47a1',
        weight: 5
    }
).addTo(mapa);
L.polyline(
    linea_d, {
        color: '#4caf50',
        weight: 5
    }
).addTo(mapa);
L.polyline(
    linea_e, {
        color: '#663dd8',
        weight: 5
    }
).addTo(mapa);
L.polyline(
    linea_h, {
        color: '#ffeb3b',
        weight: 5
    }
).addTo(mapa);