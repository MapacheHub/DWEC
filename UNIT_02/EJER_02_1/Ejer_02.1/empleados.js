let Empleados = []

export function agregarEmpleados(currante){
    Empleados.push(currante)
}

export function eliminarEmpleado(num){
    let elim = Empleados.findIndex(empleado => empleado.id === num)

    if(elim !== -1) {
        Empleados.splice(elim, 1)
        return true
    }
    return false
}

export function buscarPorDepartamento(Dep){
    return console.log(Empleados.filter(empleado => empleado.Departamento === Dep))
}

export function calcularSalarioPromedio(){
    if (Empleados.length === 0) return 0;
    let total = Empleados.reduce((añadido, jornal) => añadido + jornal.Salario, 0)
    return console.log( total / Empleados.length)
}

export function obtenerEmpleadosOrdenadosPorSalario(){
    return console.log(Empleados.sort((a, b) => a.Salario - b.Salario))
}