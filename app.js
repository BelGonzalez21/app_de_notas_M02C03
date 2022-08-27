const process = require('process')
const { listarTareas, agregarTarea, haciendoTarea, terminarTarea, eliminarTarea } = require('./funcionesDeTareas')

const accion = process.argv[2];


switch (accion) {
    case 'listar':
        listarTareas();
        break;
    case 'agregar':
        let titulo = process.argv[3];
        let nuevaTarea = {
            id: new Date().getTime(),
            titulo,
            estado: 'pendiente'
        }
        agregarTarea(nuevaTarea)
        break;
    case 'hacer':
        haciendoTarea(+process.argv[3])
        break;
    case 'terminar':
        terminarTarea(+process.argv[3])
        break;
    case 'eliminar':
        eliminarTarea(+process.argv[3])
        break;
    case undefined:
        console.log(`Atencion - Tienes que pasar una acción. Ingresa algunas de las siguientes palabras:\n\n-listar: para ver tus tareas\n-agregar: para crear una nueva tarea\n-hacer + id: para cambiar estado de pendiente a en proceso\n-terminar + id: para cambiar estado de pendiente a finalizada\n-eliminar + id: para eliminar tarea según su id\nATENCIÓN: En las opciones que requieren número de id, debes dejar un espacio entre la acción y el número.`)
        break;
    default:
        console.log(`No se lo que quieres hacer. Por favor ingresa algunas de las siguiente opciones:\n-listar: para ver tus tareas\n-agregar: para crear una nueva tarea\n-hacer + id: para cambiar estado de pendiente a en proceso\n-terminar + id: para cambiar estado de pendiente a finalizada\n-eliminar + id: para eliminar tarea según su id por favor.\n\nATENCIÓN: En las opciones que requieren número de id, debes dejar un espacio entre la acción y el número.`)
        break;
}