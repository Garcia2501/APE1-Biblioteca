const { ESTADO_DISPONIBLE } = require("../models/Book");

function imprimirLibro(libro) {
    return `${libro.id} - ${libro.titulo} - ${libro.autor}`;
}

function imprimirEstado(libro) {
    return libro.estado === ESTADO_DISPONIBLE ? "Disponible" : "Prestado";
}

module.exports = {
    imprimirLibro,
    imprimirEstado
};
