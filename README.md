# Sistema de Gestión de Biblioteca - APE1

## Descripción del Proyecto
Este proyecto es el resultado de la Actividad Práctica Experimental 1 (APE1) orientada a la refactorización de un sistema de gestión de biblioteca aplicando principios de programación limpia (Clean Code), modularidad y buenas prácticas de ingeniería de software. A partir de un código base desestructurado, el sistema ha sido mejorado significativamente incrementando su legibilidad, mantenibilidad y escalabilidad, sin alterar su funcionamiento principal.

## Integrantes del Grupo
* Manolo Garcia
* Kevin Velasco
* Robert Montesdeoca

## Requisitos Previos
Para ejecutar el proyecto, es indispensable contar con el siguiente entorno:
* **Node.js** (Versión 14.0 o superior recomendada).
* Git (Para la clonación y control de versiones).

## Instrucciones de Instalación y Ejecución
1. Clonar este repositorio en el entorno local:
   ```bash
   git clone <url-del-repositorio>
   ```
2. Navegar al directorio raíz del proyecto:
   ```bash
   cd APE1
   ```
3. Ejecutar el script principal a través de Node.js:
   ```bash
   node biblioteca.js
   ```

## Estructura de Carpetas Propuesta (Refactorizada)
Tras la etapa de modularización y aplicación del principio de Separación de Responsabilidades (SRP), el proyecto ideal adopta el siguiente árbol de directorios:
```text
/
├── models/
│   └── Book.js           # Define la entidad Libro y sus constantes de estado
├── repositories/
│   └── bookRepository.js # Encargado del acceso y persistencia en memoria de los libros
├── services/
│   └── libraryService.js # Lógica de negocio (prestar, buscar, disponibilidad)
├── utils/
│   └── formatter.js      # Utilidades de presentación y logs por consola
├── biblioteca.js         # Archivo de orquestación y pruebas manuales (Entry point)
└── README.md             # Documentación principal del repositorio
```

## Funcionalidades Principales
El sistema es capaz de ejecutar satisfactoriamente las siguientes 5 operaciones obligatorias:
1. **Listar:** Imprime el inventario completo de libros registrados.
2. **Buscar:** Permite ubicar un libro mediante un término asociado a su título o a su autor.
3. **Disponibilidad:** Verifica el estado en tiempo real de un libro empleando su ID único.
4. **Prestar:** Asigna un libro disponible a un usuario e impide sobreescribir préstamos vigentes.
5. **Devolver:** Libera el estado de un libro prestado eliminando a su usuario asociado y tornándolo disponible.

## Resumen de Principios Aplicados
A lo largo de este proyecto se han implementado iterativamente los siguientes principios rectores:
* **Clean Code:** Sustitución de nombres genéricos por nombres significativos, reemplazo de "números y strings mágicos" por constantes declarativas y uso de sintaxis ES6+ (`const`, `let`, funciones flecha).
* **KISS (Keep It Simple, Stupid):** Simplificación radical de condicionales anidados (arrow anti-pattern) mediante el uso de "retornos tempranos" (cláusulas guarda).
* **DRY (Don't Repeat Yourself):** Centralización de la lógica iterativa de búsqueda (`for` repetidos) en una única función de alto orden basada en `.find()`.
* **YAGNI (You Aren't Gonna Need It):** Eliminación de booleanos de control de flujo superfluos y código muerto no funcional.
* **SRP (Single Responsibility Principle):** División del monolito en módulos discretos encargados de tareas unívocas (modelado, operaciones lógicas e interfaz de presentación).

## Conclusiones Técnicas
* La calidad del código base es un predictor fundamental del tiempo de mantenimiento; el código monolítico analizado escondía lógica de negocio valiosa bajo capas de verbosidad sintáctica y mal nombramiento.
* La refactorización no es simplemente cambiar la estructura, es comunicar la intención del software. Las mejoras en nombres de variables y la separación modular resultan en un sistema auto-documentado.
* Mediante la aplicación progresiva de DRY y KISS, logramos no solo reducir considerablemente la complejidad ciclomática del archivo principal, sino también robustecer la estabilidad del sistema aislando efectos colaterales.
