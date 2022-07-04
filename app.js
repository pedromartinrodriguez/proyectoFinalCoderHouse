
const productosContainer = document.querySelector("#contenedor-productos");
const carritoContenedor = document.querySelector("#carrito-contenedor");
const contadorCarrito = document.querySelector("#contadorCarrito");
const precioTotal = document.querySelector("#precioTotal");
const botonVaciarCarrito = document.querySelector("#vaciarCarrito");


// OPERADOR LOGICO OR (||)
const carrito = JSON.parse(localStorage.getItem('carrito')) || []

//GENERAR EL DOM DE TODOS LOS CURSOS
cursos.forEach((curso) => {
    const div = document.createElement('div');
    div.classList.add('curso');

    div.innerHTML = `
                <img src="${curso.img}" alt="">
                <h3>${curso.nombre}</h3>
                <p>${curso.tipo}</p>
                <p>${curso.turno}</p>
                <p>Talle: ${curso.desc}</p>
                <p class="precioProducto">Precio: $${curso.precio}</p>
                <button onclick="agregarAlCarrito(${curso.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
            `

    productosContainer.append(div);

});


// FUNCION QUE ITERA SOBRE EL ARRAY, COMPARANDO SI ES IGUAL EL ID DE UN CURSO DEL ARRAY CON EL ID POR PARAMETRO
const agregarAlCarrito = (id) => {
    let item = cursos.find((curso) => curso.id === id);
    carrito.push(item);

    localStorage.setItem('carrito', JSON.stringify(carrito));

    console.log(carrito);
    renderCarrito();
    renderCantidadCarrito();
    renderPrecioTotal();
};

const removerDelCarrito = (id) => {
    const itemABorrar = carrito.find((curso) => curso.id === id);
    const indice = carrito.indexOf(itemABorrar);
    carrito.splice(indice, 1);

    localStorage.setItem('carrito', JSON.stringify(carrito));

    renderCarrito();
    renderCantidadCarrito();
    renderPrecioTotal();
}

const vaciarCarrito = () => {
    carrito = []

    localStorage.setItem('carrito', JSON.stringify(carrito));

    renderCarrito();
    renderCantidadCarrito();
    renderPrecioTotal();
}

botonVaciarCarrito.addEventListener('click', vaciarCarrito)

const renderCarrito = () => {
    carritoContenedor.innerHTML = '';

    carrito.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');

        div.innerHTML = `
                        <p>${item.nombre}</p>
                        <p>Precio: $${item.precio}</p>
                        <button onclick="removerDelCarrito(${item.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        carritoContenedor.append(div);
    })
}

// ACTUALIZAR EL NUMERO DEL CARRITO
const renderCantidadCarrito = () => {
    contadorCarrito.innerText = carrito.length;
}

const renderPrecioTotal = () => {
    let total = 0;
    carrito.forEach((curso) => {
        total += curso.precio
    })

    precioTotal.innerText = total;
}


    renderCarrito()
    renderCantidadCarrito()
    renderPrecioTotal()















