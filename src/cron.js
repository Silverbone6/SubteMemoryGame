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