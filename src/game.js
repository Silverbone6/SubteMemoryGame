var foundStations = {}
var inputStation = document.getElementById("input")
var lista_cont = 0

function jugar (event) {
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
        while (!found && station < estaciones.length) {
            if (estaciones[station].estacion === inputStation.toLocaleUpperCase()) {
                // --- SI LA ESTACIÓN EXISTE ---
                // --- BUSCAR SI YA SE ENCONTRÓ ---
                var yaExiste = false;
                for (var key in foundStations) {
                    if (estaciones[station].estacion === foundStations[key].estacion) {
                        yaExiste = true;
                        break;
                    }
                }   
                if (!yaExiste) {
                    found = true
                    icono = foundIconosPorLinea[estaciones[station].linea]
                    mapa.setView(estaciones[station].coordinates, 16)
                    L.marker(estaciones[station].coordinates, { icon: icono }).addTo(mapa)
                    foundStations[lista_cont] = {
                    "id": (lista_cont + 1),
                    "estacion": estaciones[station].estacion,
                    "linea": estaciones[station].linea,
                    "coordinates": estaciones[station].coordinates
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
        var progreso = Object.keys(foundStations).length / estaciones.length * 100
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
        if (foundStations.length === estaciones.length) {
            /// CRONOMETRO FINISH
            stopCronometro()
        }
    }
}