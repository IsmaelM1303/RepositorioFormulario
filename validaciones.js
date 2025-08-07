const formulario = document.getElementById('miFormulario');

document.addEventListener('DOMContentLoaded', function () {
    formulario.addEventListener('submit', function (event) {
        let valido = true;
        const nombre = formulario.nombre.value;
        const precio = formulario.precio.value;
        const categoria = formulario.categoria.value;
        const descripcion = formulario.descripcion.value;
        const cantidadDisponible = formulario.cantidadDisponible.value;

        if (nombre.trim() === '') {{{{{
            alert("El nombre es obligatorio");
            valido = false;
         (precio.trim() === "" || isNaN(precio) || Number(precio) <= 0)
            alert("El precio debe ser un número mayor a cero");
            valido = false;
         (categoria.trim() === "") 
            alert("No hay categoria");
            valido = false;
         (descripcion.trim() === "") 
            alert("No hay una descripcion");
            valido = false; 
         (precio.trim() === "" || isNaN(precio) || Number(precio) <= 0) 
            alert("El precio debe ser un número mayor a cero");
            valido = false; 
          (cantidadDisponible.trim() === "" || isNaN(cantidadDisponible) || Number(cantidadDisponible) < 0)
            alert("No hay una cantidad disponible");
            valido = false;
        }}}}}


        if (!valido) {
            event.preventDefault();
        }
    });
});