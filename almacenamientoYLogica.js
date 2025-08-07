//Esto es lo que se importa de localStorage
let listaProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];

//Estas variables se cambian por los inputs
const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio")
const categoria = document.getElementById("categoria")
const descripcion = document.getElementById("descripcion")
const cantidad = document.getElementById("cantidad")
const botonEnviar = document.getElementById("botonEnviar")

botonEnviar.addEventListener("click", almacenarProducto)

export function almacenarProducto() {
    let nuevoProducto = {
        nombreProducto: nombre.value,
        precioProducto: precio.value,
        categoriaProducto: categoria.value,
        descripcionProducto: descripcion.value,
        cantidadProducto: cantidad.value
    }
    listaProductos.push(nuevoProducto);
    const listaProductosStr = JSON.stringify(listaProductos);
    localStorage.setItem("listaProductos", listaProductosStr);
}