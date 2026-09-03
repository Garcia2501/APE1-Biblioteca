const libros = [
    {
        id: 1,
        titulo: "Clean Code",
        autor: "Robert C. Martin",
        estado: "D",
        usuario: ""
    },
    {
        id: 2,
        titulo: "Design Patterns",
        autor: "Erich Gamma",
        estado: "D",
        usuario: ""
    },
    {
        id: 3,
        titulo: "Refactoring",
        autor: "Martin Fowler",
        estado: "P",
        usuario: "Juan"
    }
];

function buscarLibroPorId(id) {
    return libros.find(libro => libro.id === id) || null;
}

function buscarLibroPorTituloOAutor(texto) {
    const termino = texto.toLowerCase();
    return libros.filter(libro => 
        libro.titulo.toLowerCase().includes(termino) ||
        libro.autor.toLowerCase().includes(termino)
    );
}

function obtenerTodosLosLibros() {
    return libros;
}

module.exports = {
    buscarLibroPorId,
    buscarLibroPorTituloOAutor,
    obtenerTodosLosLibros
};
