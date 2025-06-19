import { stations } from './stations.js'
var input="rosas"
var found=false
var end=false
var i = 0
while (!found && !end) {
    if (stations[i].estacion.toLocaleUpperCase() === input.toLocaleUpperCase())
    {
        found = true
        console.log("Esa estación existe")
    }
    else if (i === 107) 
    {
        end = true
        console.log("Esa estación no existe")
    }
    else
        i += 1
}