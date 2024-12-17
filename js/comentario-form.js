document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioComentarios');
    const nombreInput = document.getElementById('nombreUsuario');
    const comentarioInput = document.getElementById('textoComentario');
    const mensajeResultado = document.getElementById('mensajeResultado');
    const seccionComentarios = document.getElementById('seccionComentarios');

    formulario.addEventListener('submit', function(evento) {
       
        evento.preventDefault();

        // Para validar que los campos no estén vacíos
        if (nombreInput.value.trim() === '' || comentarioInput.value.trim() === '') {
            mostrarMensaje('Por favor, completa todos los campos', 'error');
            return;
        }

        // Para crear un nuevo elemento de comentario
        const nuevoComentario = document.createElement('div');
        nuevoComentario.classList.add('comentario');
        
        nuevoComentario.innerHTML = `
            <div class="comentario-autor">${nombreInput.value}</div>
            <div class="comentario-texto">${comentarioInput.value}</div>
        `;

        // Para añadir el nuevo comentario al inicio de la sección
        seccionComentarios.insertBefore(nuevoComentario, seccionComentarios.firstChild);

        // Limpiar campos del formulario
        nombreInput.value = '';
        comentarioInput.value = '';

        // Mostrar mensaje de éxito
        mostrarMensaje('¡Comentario enviado con éxito!', 'exito');
    });

    function mostrarMensaje(texto, tipo) {
        mensajeResultado.textContent = texto;
        mensajeResultado.className = `mensaje-${tipo}`;

        // Limpiar mensaje después de 3 segundos
        setTimeout(() => {
            mensajeResultado.textContent = '';
        }, 3000);
    }
});