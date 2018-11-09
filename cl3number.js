var  edad = 22

edad += 1
var peso = 75

peso -= 2
var sandwich = 1

peso += sandwich

var jugarAlFutbol = 3

peso -= jugarAlFutbol

var precioVino = 200.3
var totalMala = precioVino * 3 // 600.900001
var totalMedia = (precioVino * 100 * 3 ) / 100 // 600.9
var totalBuena = Math.round(totalMala) // 601
var totalExelente = Math.round(precioVino * 100 * 3) /100

var totalStr = totalExelente.toFixed(3)
var totalParce = parseFloat(totalStr)

var pizza = 8
var personas = 2
var Porciones = pizza / personas
