let palabras = ["casa", "perro", "gato", "pupo", "sol", "luz", "mar", "nube", "flor", "libro", "mesa",
    "auto", "piedra", "llave", "puerta", "pared", "techo", "bici", "cielo", "hoja",
    "calgile", "parque", "pasto", "gafas", "pluma", "roca", "zinco", "fuego", "agua", "tierra",
    "viento", "lago", "avion", "barco", "tren", "nieve", "salud", "piano", "reloj",
    "vino", "pan", "sal", "sol", "luna", "cine", "serie", "carta", "traje", "silla",
    "rosa", "radio", "lento", "fresa", "tiza", "lobo", "raton", "dado"];
let aux
let input;

function random() {
   aux = Math.floor(random(0,palabras.length))
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(200)

    random()
    console.log(palabras[aux])

    input = createInput()
    input.position(400,650)
    input.size(650,65)
    input.style('font-size', '50px')
}

function draw() {
    
    textSize(65);
    fill(255);
    text("Ahorcado", 600, 150)


} 


