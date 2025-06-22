// --- FUNCIONES ---
function capitalizeFirstLetter(str) {
    return str.split(' ').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}
function centerToStation(lat, lng) {
    mapa.setView([lat, lng], 16);
}

document.getElementById("input").addEventListener("keydown", (event) => jugar(event));

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
