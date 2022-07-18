Swal.fire({
    html: 'Por favor acepte nuestros <a href="#">terminos y condiciones</a>',
    confirmButtonText: 'Acepto',
    icon: 'info',
    padding: '1em',
    toast: true,
    position: 'bottom',
    allowEscapeKey: false,
    stopKeydownPropagation: false,
    showConfirmButton: true,
    showCancelButton: false,
    showCloseButton: false,
    closeButtonAriaLabel: 'cerrar esta alerta',
    customClass: {
        content: 'content-class'
    }
});


