let alumnos = [
    { id: 1, nombre: "Juan Gomez", curso: "Javascript I", nota: 8 },
    { id: 2, nombre: "Maria Fernandez", curso: "Javascript II", nota: 2 },
    { id: 3, nombre: "Ines Perez", curso: "Base de Datos I", nota: 4 },
    { id: 4, nombre: "Marcos Landajo", curso: "Base de Datos II", nota: 9 },
    { id: 5, nombre: "Andrea Gomez", curso: "Javascript I", nota: 3 }
];


// Agregando evento change al formulario

const inputName = document.getElementById("name");
const inputCurso = document.getElementById("curso");
const inputNota = document.getElementById("nota");

inputName.addEventListener('change', () => {

    if (inputName.value.length <= 5) {
        alert("El nombre debe tener al menos 6 caracteres")
        inputName.classList.add('error-formulario')
        inputName.classList.remove('ok-formulario')
    } else {
        inputName.classList.add('ok-formulario')
        inputName.classList.remove('error-formulario')
    }

})

inputCurso.addEventListener('change', () => {

    if (inputCurso.value.length <= 3) {
        alert("El curso debe tener al menos 4 caracteres")
        inputCurso.classList.add('error-formulario')
        inputCurso.classList.remove('ok-formulario')
    } else {
        inputCurso.classList.add('ok-formulario')
        inputCurso.classList.remove('error-formulario')
    }

})

inputNota.addEventListener('change', () => {

    if (inputNota.value <= 0 || inputNota.value > 10) {
        alert("La nota debe estar entre 0 y 10")
        inputNota.classList.add('error-formulario')
        inputNota.classList.remove('ok-formulario')
    } else {
        inputNota.classList.add('ok-formulario')
        inputNota.classList.remove('error-formulario')
    }

})


let form = document.getElementById("form");
form.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    let form = e.target;
    alumnos.push(form.children)
    //console.log(form.children[0]);
    //console.log(form.children[1]);
    //console.log(form.children[2]);

}

//console.log(alumnos);


const alumnosContainer = document.querySelector("#contenedor-alumnos");

alumnos.forEach((alumno) => {
    const div = document.createElement('div');
    div.classList.add('alumno');

    div.innerHTML = `
                    <h3>Nombre Alumno: ${alumno.nombre}</h3>
                    <p>Curso: ${alumno.curso}</p>
                    <p>Nota: ${alumno.nota}</p>
    `
    alumnosContainer.append(div);
})

function obtenerDatos() {
    let nuevoAlumno = {
        id: alumnos.length++,
        nombre: document.getElementById('name').value,
        curso: document.getElementById('curso').value,
        nota: Number(document.getElementById('nota').value)
    };

    if (nuevoAlumno) {
        //DESESTRUCTURACION
        const { nombre, curso, nota } = nuevoAlumno;
        const div = document.createElement('div');
        div.classList.add('alumno');

        div.innerHTML = `
                        <h3>Nombre Alumno: ${nombre}</h3>
                        <p>Curso: ${curso}</p>
                        <p>Nota: ${nota}</p>
    `
        alumnosContainer.append(div);
        alumnos.push(nuevoAlumno);
        notasAlumnos.push(nota);
    }

    

}
console.log(alumnos);



function promedio(notasAlumnos) {
    let i = 0, summ = 0, ArrayLen = notasAlumnos.length;
    while (i < ArrayLen) {
        summ = summ + notasAlumnos[i++];
    }
    return summ / ArrayLen;
}

// CALCULADOR DE NOTA PROMEDIO
let notasAlumnos = [];

alumnos.forEach((num) => {
    notasAlumnos.push(num.nota)
})

console.log(notasAlumnos);
let a = promedio(notasAlumnos);
console.log(a)


// CALCULADOR NOTA PROMEDIO EN DOM
const notaPromedio = document.querySelector("#nota-promedio");

const div = document.createElement('div');
div.classList.add('nota');

div.innerHTML = `
                    <h3>La nota promedio es: ${a}</h3>           
    `
alumnosContainer.append(div);

// ALMACENAMIENTO DE ARRAY ALUMNOS EN LOCAL STORAGE

const alumnosEnJSON = JSON.stringify(alumnos);
console.log(alumnosEnJSON);
localStorage.setItem("alumnos", alumnosEnJSON);

