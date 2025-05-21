let tipo = prompt("Actividad 3 - ¿Quieres ver tablas 'pares' o 'impares'?").toLowerCase();
console.log("Actividad 3: Tablas Pares o Impares");

if (tipo === "pares" || tipo === "impares") {
    for (let i = 1; i <= 10; i++) {
        if ((tipo === "pares" && i % 2 === 0) || (tipo === "impares" && i % 2 !== 0)) {
            console.log(`Tabla del ${i}`);
            for (let j = 1; j <= 10; j++) {
                console.log(`${i} x ${j} = ${i * j}`);
            }
        }
    }
} else {
    console.log("Opción no válida. Escribe 'pares' o 'impares'.");
}
