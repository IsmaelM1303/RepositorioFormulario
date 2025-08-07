//Esto es lo que se importa de localStorage
let listaProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];

//Estas variables se cambian por los inputs
const nombre = document.getElementById("nombre");
const precio = 1300
const categoria = "limpieza"
const descripcion = "Descripcion Objeto"
const cantidad = 5
const botonEnviar = document.getElementById("botonEnviar")

botonEnviar.addEventListener("click", almacenarProducto)

export function almacenarProducto() {
    let nuevoProducto = {
        nombreProducto: nombre,
        precioProducto: precio,
        categoriaProducto: categoria,
        descripcionProducto: descripcion,
        cantidadProducto: cantidad
    }
    listaProductos.push(nuevoProducto);
    const listaProductosStr = JSON.stringify(listaProductos);
    localStorage.setItem("listaProductos", listaProductosStr);
}