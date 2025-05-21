let edad = parseInt(prompt("Actividad 1 - Ingresa tu edad:"));
let categoria = "";

if (edad < 0) {
    categoria = "Edad no válida";
} else if (edad <= 12) {
    categoria = "Niño";
} else if (edad <= 17) {
    categoria = "Adolescente";
} else if (edad <= 59) {
    categoria = "Adulto";
} else {
    categoria = "Adulto mayor";
}

console.log("Actividad 1: Clasificación de Edad");
console.log(`Edad ingresada: ${edad} | Categoría: ${categoria}`);
