// --- FUNCIONES ---
function capitalizeFirstLetter(str) {
    return str.split(' ').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}
function centerToStation(lat, lng) {
    mapa.setView([lat, lng], 16);
}

<<<<<<< HEAD
document.getElementById("input").addEventListener("keydown", (event) => jugar(event));
=======
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
>>>>>>> 764c216acb7a69b2cae03b1de760812a780956c6

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
