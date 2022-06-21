//alert("Calculador de nota final de alumnos ingresados");

//Defino array de cursos
const cursos = [{id: 1, nombre: "React", turno: "Noche", precio: 15000}, 
    {id: 2, nombre: "Phyton", turno: "Tarde", precio: 12500},
    {id: 1, nombre: "Javascript", turno: "Noche", precio: 8000},
    {id: 1, nombre: "Base de datos", turno: "Tarde", precio: 25000}]; 

//Creando elemento p
let tituloCursos = document.createElement("h2");
tituloCursos.innerHTML = "<h2>Que cursos dictamos en Edu Code?</h2>";

//Creando elementos desde objetos
for (const curso of cursos) {
    let container = document.createElement("div");

    container.innerHTML = `
        <ul>
            <li>Curso: ${curso.nombre}</li>
            <li>Turno: ${curso.turno}</li>
            <li>Precio: ${curso.precio}</li>
        </ul>`;
    document.body.appendChild(container);
}

class Alumno {
    constructor(nombre, curso, nota) {
        this.nombre = nombre;
        this.curso = curso;
        this.nota = nota;
    }
}

const alumno1 = new Alumno(
    prompt("Ingrese el nombre del primer alumno"),
    prompt("Ingrese su curso"),
    Number(prompt("Ingrese su nota final"))
);
const alumno2 = new Alumno(
    prompt("Ingrese el nombre del segundo alumno"),
    prompt("Ingrese su curso"),
    Number(prompt("Ingrese su nota final"))
);
const alumno3 = new Alumno(
    prompt("Ingrese el nombre del tercer alumno"),
    prompt("Ingrese su curso"),
    Number(prompt("Ingrese su nota final"))
);
const alumno4 = new Alumno(
    prompt("Ingrese el nombre del cuarto alumno"),
    prompt("Ingrese su curso"),
    Number(prompt("Ingrese su nota final"))
);


const alumnos = [alumno1, alumno2, alumno3, alumno4];

console.log(alumnos);

const notasAlumnos = [alumno1.nota, alumno2.nota, alumno3.nota, alumno4.nota];

console.log(notasAlumnos);


if ((alumno1.nota < 0 || alumno2.nota < 0 || alumno3.nota < 0 || alumno4.nota < 0) || alumno1.nota > 10 || alumno2.nota > 10 || alumno3.nota > 10 || alumno4.nota > 10) {

    alert("Recuerde que las notas deben ser estar entre el 0 y el 10")

} else {

    alert("Usted ingreso las notas correctamente")

    function promedio(nota1, nota2, nota3, nota4) {

        let notasSumadas = alumno1.nota + alumno2.nota + alumno3.nota + alumno4.nota;
        let resultadoPromedio = notasSumadas / 4;
        return resultadoPromedio;

    }

}

for (let i = 0; i < notasAlumnos.length; i++) {
    
    alert("Las notas ingresadas son: " + notasAlumnos[i]);
    
}

//Metodo para buscar una nota
if (!notasAlumnos.includes(5) ) {

    alert("Buscando por el metodo includes la nota 5. No hay una nota 5");

} else {

    alert("Buscando por el metodo includes la nota 5. Hay alumnos con nota 5");

}

//Metodo para filtrar notas aprobadas (mayores o iguales a 4)
const notasAprobadas = notasAlumnos.filter(function(notas){

    return notas >= 4;

})

if (notasAprobadas) {

    alert("Las notas aprobadas son: " + notasAprobadas)

} else {

    alert("No hay alumnos aprobados")

}

//Arrojar la nota promedio del total
alert("La nota promedio es: " + promedio());