// LIBRERIAS

const btnSwall = document.querySelector("#alert");

btnSwall.addEventListener('click', () => {
    Swal.fire({
        title: 'Seguro?',
        text: "Estas por vaciar el carrito!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, vaciar carrito',
        cancelButtonText: 'Me arrepenti'
    }).then((result) => {
        if (result.isConfirmed) {
            Toastify({
                text: 'Se vacio el carrito',
                duration: 2500
            }).showToast()
        }
    })
})

// TOASTIFY

const btnToast = document.querySelector('#toast');

btnToast.addEventListener('click', () => {
    Toastify({
        text: 'Producto agregado correctamente',
        duration: 2000,
        gravity: 'bottom',
        position: 'right',
        className: 'toast-producto-agregado'
    }).showToast();

})