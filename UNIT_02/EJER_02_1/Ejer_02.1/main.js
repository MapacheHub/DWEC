import { agregarEmpleados, buscarPorDepartamento, calcularSalarioPromedio, eliminarEmpleado, obtenerEmpleadosOrdenadosPorSalario } from "./empleados.js";

console.log("hola")
// agregarEmpleados(1,"Carlos Gonzalez","Marketing",3542)
agregarEmpleados({id: 1,Nombre: "Carlos Gonzalez",Departamento: "Marketing",Salario: 3542})
agregarEmpleados({id: 2,Nombre: "Maria Carmen",Departamento: "IT",Salario: 1268})
agregarEmpleados({id: 3,Nombre: "Emrique Cardo",Departamento: "Ventas",Salario: 2900})
agregarEmpleados({id: 4,Nombre: "Jonatan Ezequiel IV",Departamento: "CEO",Salario: 2000000})

eliminarEmpleado(4)

buscarPorDepartamento("Ventas")

calcularSalarioPromedio()

obtenerEmpleadosOrdenadosPorSalario()
