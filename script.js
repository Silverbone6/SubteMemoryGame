// --- PLOTEO DEL MAPA ---
var mapa = L.map('mapa').setView([-34.6037, -58.3816], 13);
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

// --- FUNCIONES ---
function capitalizeFirstLetter(str) {
    return str.split(' ').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}
function centerToStation(lat, lng) {
    mapa.setView([lat, lng], 16);
}
let cronometroInterval
let segundos = 0
function startCronometro() {
    if (cronometroInterval) return
    cronometroInterval = setInterval(() => {
        segundos++
        document.getElementById("cronometro").innerText = 
            String(Math.floor(segundos / 60)).padStart(2, '0') + ":" +
            String(segundos % 60).padStart(2, '0')
    }, 1000)
}
function stopCronometro() {
    clearInterval(cronometroInterval)
    cronometroInterval = null
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
        startCronometro()
        var inputStation = document.getElementById("input").value.trim()
        var found = false
        station = 0
        var foundLineaA = 0
        var foundLineaB = 0
        var foundLineaC = 0
        var foundLineaD = 0
        var foundLineaE = 0
        var foundLineaH = 0
        var foundLineaP = 0
        while (!found && station < stations.length) {
            if (stations[station].estacion === inputStation.toLocaleUpperCase()) {
                // --- SI LA ESTACIÓN EXISTE ---
                // --- BUSCAR SI YA SE ENCONTRÓ ---
                var yaExiste = false;
                for (var key in foundStations) {
                    if (stations[station].estacion === foundStations[key].estacion) {
                        yaExiste = true;
                        break;
                    }
                }   
                if (!yaExiste) {
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
                }
                station += 1
            } else {
                // --- SI LA ESTACIÓN NO EXISTE ---
                station += 1
            }
        }
        if (!found) {
            console.log("Esa estación no existe");
        }
        // ---  ACTUALIZAR EL PORCENTAJE DE ESTACIONES ---
        var progreso = Object.keys(foundStations).length / stations.length * 100
        document.getElementById("progress").innerHTML = (progreso.toFixed(2)) + "%"
        // ---  ACTUALIZAR EL LISTADO DE ESTACIONES ---
        document.getElementById("lista").innerHTML = ""
        for (var key in foundStations) {
            const estacion = foundStations[key];
            switch (estacion.linea) {
                case "A": foundLineaA++; break;
                case "B": foundLineaB++; break;
                case "C": foundLineaC++; break;
                case "D": foundLineaD++; break;
                case "E": foundLineaE++; break;
                case "H": foundLineaH++; break;
                case "P": foundLineaP++; break;
            }

            document.getElementById("lista").innerHTML +=
                `<div style="cursor:pointer"
                    onclick="centerToStation(${estacion.coordinates[0]}, ${estacion.coordinates[1]})">
                    <img src="${iconosUrlPorLinea[estacion.linea]}" alt="Icono Linea">
                    ${capitalizeFirstLetter(estacion.estacion)}
                </div>`;
        }
        // ---  ACTUALIZAR EL PROGRESO DE LINEAS ---
        document.getElementById("progress-a").innerHTML = (foundLineaA) + " / 17"
        document.getElementById("progress-b").innerHTML = (foundLineaB) + " / 17"
        document.getElementById("progress-c").innerHTML = (foundLineaC) + " / 9"
        document.getElementById("progress-d").innerHTML = (foundLineaD) + " / 16"
        document.getElementById("progress-e").innerHTML = (foundLineaE) + " / 15"
        document.getElementById("progress-h").innerHTML = (foundLineaH) + " / 12"
        document.getElementById("progress-p").innerHTML = (foundLineaP) + " / 18"
        // --- SELECCIONAR INPUT ---
        document.getElementById("input").select()
        // --- CRONOMETRO ---
        if (Object.keys(foundStations).length === stations.length) {
            /// CRONOMETRO FINISH
            stopCronometro()
        }
    }
})

// --- BOTON: MOSTRAR/OCULTAR PROGRESO DE LAS LÍNEAS ---
document.getElementById('toggle-lineprogress').onclick = function() {
    var lp = document.getElementById('lineprogress')
    this.classList.toggle('active')
    lp.classList.toggle('show')
    var lista = document.getElementById('lista')
    lista.classList.toggle('short')
}

// --- POP-UP ---
document.getElementById('cerrar-popup').onclick = function() {
    document.getElementById('popup').style.display = 'none'
}

// --- BOTON MENU ---
document.getElementById('boton').onclick = function(e) {
    e.stopPropagation()
    var menu = document.getElementById('menu-opciones')
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none'
}
document.addEventListener('click', function() {
    document.getElementById('menu-opciones').style.display = 'none'
})
document.getElementById('abrir-popup').onclick = function() {
    document.getElementById('popup').style.display = 'block'
}
document.getElementById('abrir-github').onclick = function() {
    window.open('https://github.com/Silverbone6/SubteMemoryGame', '_blank')
}
document.getElementById('abrir-inspiracion').onclick = function() {
    window.open('https://london.metro-memory.com/', '_blank')
}
