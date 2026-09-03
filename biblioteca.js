const { ESTADO_DISPONIBLE } = require("./models/Book");
const { buscarLibroPorId, buscarLibroPorTituloOAutor, obtenerTodosLosLibros } = require("./repositories/bookRepository");
const { prestarLibro, devolverLibro } = require("./services/libraryService");
const { imprimirLibro, imprimirEstado } = require("./utils/formatter");

// FUNCIONES DE INTERFAZ Y ORQUESTACIÓN

function listar() {
    console.log("---------- BIBLIOTECA ----------");
    const libros = obtenerTodosLosLibros();
    libros.forEach(libro => {
        console.log(`${libro.id} | ${libro.titulo} | ${libro.autor} | ${libro.estado}`);
    });
    console.log("-------------------------------");
}

function buscar(texto) {
    const resultados = buscarLibroPorTituloOAutor(texto);
    if (resultados.length === 0) {
        console.log("No se encontraron libros");
        return;
    }
    
    resultados.forEach(libro => {
        console.log(imprimirLibro(libro));
        console.log(imprimirEstado(libro));
    });
}

function disponibilidad(id) {
    const libro = buscarLibroPorId(id);
    if (!libro) {
        console.log("Libro no encontrado");
        return;
    }
    
    if (libro.estado === ESTADO_DISPONIBLE) {
        console.log(`El libro ${libro.titulo} está disponible`);
    } else {
        console.log(`El libro ${libro.titulo} está prestado a ${libro.usuario}`);
    }
}


// PRUEBAS MANUALES (Como pide la Actividad 7)
listar();

console.log("\nBUSCAR:");
buscar("Clean");

console.log("\nDISPONIBILIDAD:");
disponibilidad(1);

console.log("\nPRESTAR:");
prestarLibro(1, "Carlos");

console.log("\nDISPONIBILIDAD DESPUÉS DEL PRÉSTAMO:");
disponibilidad(1);

console.log("\nDEVOLVER:");
devolverLibro(1);

console.log("\nESTADO FINAL:");
disponibilidad(1);