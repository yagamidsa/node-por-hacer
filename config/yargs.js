const opt = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'marca completado o pendiete la tareea'
    }


}


const argv = require('yargs')
    .command('crear', 'crear uina tarea', opt)
    .command('actualizar', 'actualizar el estado completado de una tarea', opt)
    .command('borrar', 'resgitro eliminado', opt)
    .help()
    .argv;


module.exports = {
    argv
}