
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
const agregarAlCarrito = (cursoId) => {

    const itemInCart = carrito.find((curso) => curso.id === cursoId);

    if (itemInCart) {
        itemInCart.cantidad += 1
        //LLAMO A LA FUNCION QUE MUESTRA EL TOASTIFY
        mensajeProductoAgregado(itemInCart.nombre);
    } else {
        const { id, nombre, precio } = cursos.find((curso) => curso.id === cursoId)
        const itemToCart = {
            id, nombre, precio, cantidad: 1
        }
        carrito.push(itemToCart);
        //LLAMO A LA FUNCION QUE MUESTRA EL TOASTIFY
        mensajeProductoAgregado(nombre);
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));

    console.log(carrito);
    renderCarrito();
    renderCantidadCarrito();
    renderPrecioTotal();
};

const removerDelCarrito = (id) => {
    const itemABorrar = carrito.find((curso) => curso.id === id);
    
    itemABorrar.cantidad --
    
    if(itemABorrar.cantidad === 0){
        const indice = carrito.indexOf(itemABorrar);
        carrito.splice(indice, 1);
    }

    Toastify({
        text: `Se elimino 1 unidad del curso ${itemABorrar.nombre}`
    }).showToast()

    localStorage.setItem('carrito', JSON.stringify(carrito));

    renderCarrito();
    renderCantidadCarrito();
    renderPrecioTotal();
}

const vaciarCarrito = () => {
    carrito.length = []
    localStorage.setItem('carrito', JSON.stringify(carrito));

    renderCarrito();
    renderCantidadCarrito();
    renderPrecioTotal();
}


botonVaciarCarrito.addEventListener('click', () => {
    Swal.fire({
        title: 'Esta seguro?',
        text: "Estas por vaciar el carrito!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Vaciar!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            vaciarCarrito()
            botonCerrar.click()
            Toastify({
                text: 'Carrito sin productos'
            }).showToast()
        }
    })
})

const renderCarrito = () => {
    carritoContenedor.innerHTML = '';

    carrito.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');

        div.innerHTML = `
                        <p>${item.nombre}</p>
                        <p>Cantidad: ${item.cantidad}</p>
                        <p>Precio unitario: $${item.precio}</p>
                        <button onclick="removerDelCarrito(${item.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        carritoContenedor.append(div);
    })
}

// ACTUALIZAR EL NUMERO DEL CARRITO
const renderCantidadCarrito = () => {
    contadorCarrito.innerText = carrito.reduce((acumulador, curs) => acumulador += curs.cantidad, 0)
}

const renderPrecioTotal = () => {
    let total = 0;
    carrito.forEach((curso) => {
        total += curso.precio * curso.cantidad;
    })

    precioTotal.innerText = total;
}

//FUNCION CLICK AGREGAR PRODUCTO
const mensajeProductoAgregado = (curso) => {
    Toastify({
        text: `Se agrego 1 unidad del Curso ${curso} al carrito`,
        duration: 3000,
        gravity: 'bottom',
        position: 'left',
        onClick: () => {
          botonAbrir.click()
        },
        //LE AGREGAS UNA CLASE PARA CSS
        className: 'toas-producto-agregado'
    }).showToast();
}

renderCarrito()
renderCantidadCarrito()
renderPrecioTotal()


//EmailJS

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_9awc4l9';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});














