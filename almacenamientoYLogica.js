//Esto es lo que se importa de localStorage
let listaProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];

export function almacenarProducto(nombre, precio, categoria, descripcion, cantidadProducto) {
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