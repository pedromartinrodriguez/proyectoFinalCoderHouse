// LIBRERIAS

const btnSwall = document.querySelector("#alert");

btnSwall.addEventListener('click', () => {
    Swal.fire({
        //   icon: 'success',
        // title: 'Bienvenidos',
        //text: 'Clase Js',
        //footer: '<a href="">Why do I have this issue?</a>',
        //confirmButtonText: 'Capo',
        //timer: 2000
        //});

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
        //    Swal.fire(
        //        'Vaciado',
        //        'Carrito sin productos',
        //        'success'
        //    )
        //} else {
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
        //LE AGREGAS UNA CLASE PARA CSS
        className: 'toas-producto-agregado'
    }).showToast();

})