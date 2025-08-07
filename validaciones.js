import { almacenarProducto } from "./almacenamientoYLogica.js";
let listaProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];

const nombreProducto = document.getElementById("nombreProducto")
const precioProducto = document.getElementById("precioProducto")
const categoriaProducto = document.getElementById("categoriaProducto")
const descripcionProducto = document.getElementById("descripcionProducto")
const cantidadProducto = document.getElementById("cantidadProducto")


const botonEnviar = document.getElementById('botonEnviar');
const formulario = document.getElementById("formulario")

document.addEventListener('DOMContentLoaded', function () {
    let valido = true;
    botonEnviar.addEventListener("click", function (event) {
        event.preventDefault();
        const nombre = nombreProducto.value
        const precio = precioProducto.value;
        const categoria = categoriaProducto.value;
        const descripcion = descripcionProducto.value;
        const cantidadDisponible = cantidadProducto.value;

        if (
            nombre.trim() === '' ||
            precio.trim() === "" || isNaN(precio) || Number(precio) <= 0 ||
            categoria.trim() === "" ||
            descripcion.trim() === "" ||
            cantidadDisponible.trim() === "" || isNaN(cantidadDisponible) || Number(cantidadDisponible) < 0
        ) {
            alert("Por favor, completa todos los campos correctamente.");
            valido = false;
        } else

            if (!valido) {
                event.preventDefault();
            }

        ingreso(valido)
    });
});

export function ingreso(valido) {
    if (valido === true) {
        almacenarProducto(nombreProducto, precioProducto, categoriaProducto, descripcionProducto, cantidadProducto)
    }
}