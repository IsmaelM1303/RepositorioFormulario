const formulario = document.getElementById('miFormulario');

document.addEventListener('DOMContentLoaded', function () {
    formulario.addEventListener('submit', function (event) {
        let valido = true;
        const nombre = formulario.nombre.value;
        const precio = formulario.precio.value;
        const categoria = formulario.categoria.value;
        const descripcion = formulario.descripcion.value;
        const cantidadDisponible = formulario.cantidadDisponible.value;

        if (
            nombre.trim() === '' ||
            precio.trim() === "" || isNaN(precio) || Number(precio) <= 0 ||
            categoria.trim() === "" ||
            descripcion.trim() === "" ||
            cantidadDisponible.trim() === "" || isNaN(cantidadDisponible) || Number(cantidadDisponible) < 0
        ) {
            alert("Por favor, completa todos los campos correctamente.");
            valido = false;
        }

        if (!valido) {
            event.preventDefault();
        }
    });
});