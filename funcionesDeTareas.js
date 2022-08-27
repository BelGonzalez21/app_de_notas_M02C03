const fs = require('fs');//Sincroniza los cambios en json

const tareas = require('./tareas.json');//llama al json

//guardarJSON = escribirJSON
const guardarJSON = (tareas) => {
    fs.writeFileSync('./tareas.json', JSON.stringify(tareas, null, 3));
    return null
}

function mostrarTareas() {
    for (let i = 0; i < tareas.length; i++) {
        console.log(`-Tarea: ${tareas[i].titulo}\nEstado: ${tareas[i].estado}\n`);
    }
    return null;
}


module.exports = {

    listarTareas: () => {
        mostrarTareas(tareas)
        return null
    },

    agregarTarea: (tarea) => {
        if (tarea.titulo === undefined) {
            return console.log('Por favor ingrese el nombre de la tarea')
        } else {
            tareas.push(tarea);
            guardarJSON(tareas)
            return console.log('Tarea creada!')
        }
    },
    haciendoTarea: (id) => {
        let haciendo = tareas.filter(tarea => tarea.id === id);
        if (haciendo.length === 0) {
            return console.log('No ingreso un Id o no existe una tarea con ese Id, ingrese uno válido por favor.');
        }
        let tareasEnProceso = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.estado = 'Tarea en proceso';
                return tarea
            }
            return tarea
        })
        guardarJSON(tareasEnProceso)
        return console.log('Tarea actualizada')
    },
    terminarTarea: (id) => {
        let finalizada = tareas.filter(tarea => tarea.id === id);
        if (finalizada.length === 0) {
            return console.log('No ingreso un Id o no existe una tarea con ese Id, ingrese uno válido por favor.');
        }
        let tareasFinalizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.estado = 'Tarea completada';
                return tarea
            }
            return tarea
        })
        guardarJSON(tareasFinalizadas)
        return console.log('Tarea actualizada')
    },
    eliminarTarea: (id) => {
        let eliminar = tareas.filter(tarea => tarea.id === id);
        if (eliminar.length === 0) {
            return console.log('No ingreso un Id o no existe una tarea con ese Id, ingrese uno válido por favor.');
        }
        let tareasAEliminar = tareas.filter(tarea => {
            return tarea.id !== id
        })
        guardarJSON(tareasAEliminar)
        return console.log('Tarea eliminada')
    }
    
}
