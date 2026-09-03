const { ESTADO_PRESTADO, ESTADO_DISPONIBLE } = require("../models/Book");
const { buscarLibroPorId } = require("../repositories/bookRepository");

function prestarLibro(id, nombre) {
    const libro = buscarLibroPorId(id);

    if (!libro) {
        console.log("Libro no encontrado");
        return;
    }
    if (!nombre) {
        console.log("Debe ingresar el nombre del usuario");
        return;
    }
    if (libro.estado === ESTADO_PRESTADO) {
        console.log("No se puede prestar el libro porque ya está prestado");
        return;
    }

    libro.estado = ESTADO_PRESTADO;
    libro.usuario = nombre;
    console.log(`El libro ${libro.titulo} fue prestado correctamente a ${nombre}`);
}

function devolverLibro(id) {
    const libro = buscarLibroPorId(id);

    if (!libro) {
        console.log("Libro no encontrado");
        return;
    }
    if (libro.estado === ESTADO_DISPONIBLE) {
        console.log("El libro no puede devolverse porque ya está disponible");
        return;
    }

    console.log(`Devolución realizada. Libro: ${libro.titulo}. Usuario anterior: ${libro.usuario}`);
    libro.estado = ESTADO_DISPONIBLE;
    libro.usuario = "";
}

module.exports = {
    prestarLibro,
    devolverLibro
};
