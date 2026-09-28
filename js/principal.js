const mensajes = {
    success: { title: 'Guardado', message: 'Tus datos se guardaron con éxito.' },
    error:   { title: 'Sin conexión', message: 'No se pudo conectar. Inténtalo de nuevo.' },
    info:    { title: 'Mensajes nuevos', message: 'Tienes 3 mensajes sin leer.' },
    warning: { title: 'Sesión por vencer', message: 'Tu sesión termina en 5 minutos.' }
};

function mostrarToast(tipo) {
    Toast.show({
        ...mensajes[tipo],
        type: tipo,
        position: document.getElementById('posicion').value
    });
    }

function abrirModal() {
    Modal.open({
        title: '¿Eliminar tu cuenta?',
        content: 'Se borrarán tus datos y no podrás recuperarlos.',
        confirmText: 'Eliminar',
        cancelText: 'Conservar',
        onConfirm: () => Toast.success('Cuenta eliminada')
    });
}

function cambiarTema() {
    const tema = Theme.toggle();
    Toast.info('Tema ' + (tema === 'dark' ? 'oscuro' : 'claro') + ' activado', { duration: 2000 });
}